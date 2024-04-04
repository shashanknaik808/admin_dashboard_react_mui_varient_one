import { Box, Button, Grid, IconButton, InputAdornment, MenuItem, Typography } from '@mui/material'
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { AccountCircle } from '@mui/icons-material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { db } from "../../firebase-config.jsx";
import Swal from 'sweetalert2';
import { useAppStore } from '../../appStore.jsx';

export default function AddProduct({ closeEvent }) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");
    // const [rows, setRows] = useState([]);
    const setRows = useAppStore((state) => state.setRows)
    const empCollectionRef = collection(db, "products");

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handlePriceChange = (event) => {
        setPrice(event.target.value)
    }
    const handleCategoryChange = (event) => {
        setCategory(event.target.value)
    }

    const createUser = async () => {
        await addDoc(empCollectionRef, {
            name: name,
            price: Number(price),
            category: category,
            date: String(new Date())
        });
        getUsers();
        closeEvent();
        Swal.fire("Submitted!", "Your file has been submitted.", "success")
    }

    const getUsers = async () => {
        const data = await getDocs(empCollectionRef);
        setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const currencies = [
        {
            value: 'Mobile',
            label: 'Mobile',
        },
        {
            value: 'Laptop',
            label: 'Laptop',
        },
        {
            value: 'Electronics',
            label: 'Electronics',
        },
        {
            value: 'Food',
            label: 'Food',
        },
    ];

    return (
        <>
            <Box sx={{ m: 2 }} />
            <Typography variant='h5' align='center'>Add Product</Typography>
            <IconButton style={{ position: "absolute", top: "0", right: "0" }}
                onClick={closeEvent}>
                <CloseIcon />
            </IconButton>
            <Box height={20} />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Name" variant="outlined" size='small' onChange={handleNameChange} value={name} sx={{ minWidth: "100%" }} />
                </Grid>
                <Grid item xs={6}>
                    <TextField id="outlined-basic" label="Price" variant="outlined" type='number'
                        InputProps={{
                            startAdornment: (
                                < InputAdornment position="start" >
                                    <CurrencyRupeeIcon />
                                </InputAdornment>
                            )
                        }}
                        size='small' onChange={handlePriceChange} value={price} sx={{ minWidth: "100%" }} />
                </Grid>
                <Grid item xs={6}>
                    <TextField id="outlined-basic" label="Category" select variant="outlined" size='small' onChange={handleCategoryChange} value={category} sx={{ minWidth: "100%" }} >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h5' align='center'>
                        <Button variant='contained' onClick={createUser}>Submit</Button>
                    </Typography>
                </Grid>
            </Grid >
        </>
    )
}