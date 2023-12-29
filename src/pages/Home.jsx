import { Box } from '@mui/material';
import React from 'react';
import Sidenav from '../Sidenav';

export default function Home() {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Sidenav />
                <h1>Home</h1>
            </Box>
        </>
    )
}