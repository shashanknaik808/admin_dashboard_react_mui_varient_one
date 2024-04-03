import React from 'react';
import Sidenav from '../components/Sidenav.jsx';
import Navbar from '../components/Navbar.jsx';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';


export default function Home() {
    return (
        <>
            <Navbar />
            <Box height={70} />
            <Box sx={{ display: 'flex' }}>
                <Sidenav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                        </Grid>
                    </Grid>
                    <Box height={20} />
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                        </Grid>
                        <Grid item xs={4}>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
}