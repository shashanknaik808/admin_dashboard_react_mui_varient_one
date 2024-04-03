import React from 'react';
import Sidenav from '../components/Sidenav.jsx';
import Navbar from '../components/Navbar.jsx';
import { Box } from '@mui/material';


export default function Home() {
    return (
        <>
            <Navbar />
            <Box height={30} />
            <Box sx={{ display: 'flex' }}>
                <Sidenav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1>Home</h1>
                </Box>
            </Box>
        </>
    );
}