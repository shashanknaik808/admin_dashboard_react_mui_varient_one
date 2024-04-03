import React from 'react';
import Sidenav from '../components/Sidenav.jsx';
import Navbar from '../components/Navbar.jsx';
import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import "../Dash.css";
import StorefrontIcon from '@mui/icons-material/Storefront';


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
                            <Stack spacing={2} direction="row">
                                <Card sx={{ maxWidth: 49 + "%", height: 140 }}>
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
                                <Card sx={{ maxWidth: 49 + "%", height: 140 }}>
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
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <Stack spacing={2} >
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardContent>
                                        <Stack spacing={2} direction="row">
                                            <div className='iconstyle'>
                                                <StorefrontIcon />
                                            </div>
                                            <div className='paddingall'>
                                                <span className='pricetitle'>$203k</span>
                                                <br />
                                                <span className='pricesubtitle'>Total Income</span>
                                            </div>
                                        </Stack>
                                    </CardContent>
                                </Card>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardContent>
                                    </CardContent>
                                </Card>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Box height={20} />
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Card sx={{ height: 60 + "vh" }}>
                                <CardContent>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card sx={{ height: 60 + "vh" }}>
                                <CardContent>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
}