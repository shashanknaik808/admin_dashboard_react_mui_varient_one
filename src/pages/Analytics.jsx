import React from 'react'
import Sidenav from '../components/Sidenav.jsx'
import { Box, Card, CardContent, Stack, Typography } from '@mui/material'
import Navbar from '../components/Navbar.jsx';
import Grid from '@mui/material/Grid';
import '../Dash.css';
import GeoChart from '../charts/GeoChart.jsx';
import PiChart from '../charts/PiChart.jsx';
import HbarChart from '../charts/HbarChart.jsx';
import CountUp from 'react-countup';

export default function Analytics() {
    return (
        <>
            <div className='bgcolor'>
                <Navbar />
                <Box height={70} />
                <Box sx={{ display: "flex" }}>
                    <Sidenav />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={5}>
                                <Stack spacing={2} direction={"row"}>
                                    <Box sx={{ width: "50%" }}>
                                        <Card sx={{ height: 19 + "vh" }} className='gradient'>
                                            <CardContent>
                                                <Typography gutterBottom variant="p" component="div" sx={{ color: "#f0fcfc", padding: "4px 0px" }}>
                                                    Visitors
                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#f0fcfc" }}>
                                                    <CountUp delay={0.2} end={22000} duration={0.3} />
                                                </Typography>
                                                <Typography gutterBottom variant="body2" color="text.secondary" sx={{ color: "#ccd1d1" }}>
                                                    Since Last week
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                        <Card sx={{ height: 19 + "vh", marginTop: "16px" }} className='gradient'>
                                            <CardContent>
                                                <Typography gutterBottom variant="p" component="div" sx={{ color: "#f0fcfc", padding: "4px 0px" }}>
                                                    Visitors
                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#f0fcfc" }}>
                                                    <CountUp delay={0.4} end={32000} duration={0.6} />
                                                </Typography>
                                                <Typography gutterBottom variant="body2" color="text.secondary" sx={{ color: "#ccd1d1" }}>
                                                    Since Last week
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Box>
                                    <Box sx={{ width: "50%", height: "50%" }}>
                                        <Card sx={{ height: 19 + "vh" }} className='gradientlight'>
                                            <CardContent>
                                                <Typography gutterBottom variant="p" component="div" sx={{ color: "#f0fcfc", padding: "4px 0px" }}>
                                                    Visitors
                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#f0fcfc" }}>
                                                    <CountUp delay={0.4} end={12000} duration={0.6} />
                                                </Typography>
                                                <Typography gutterBottom variant="body2" color="text.secondary" sx={{ color: "#ccd1d1" }}>
                                                    Since Last week
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                        <Card sx={{ height: 19 + "vh", marginTop: "16px" }} className='gradientlight'>
                                            <CardContent>
                                                <Typography gutterBottom variant="p" component="div" sx={{ color: "#f0fcfc", padding: "4px 0px" }}>
                                                    Visitors
                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#f0fcfc" }}>
                                                    <CountUp delay={0.3} end={22500} duration={0.5} />
                                                </Typography>
                                                <Typography gutterBottom variant="body2" color="text.secondary" sx={{ color: "#ccd1d1" }}>
                                                    Since Last week
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Box>
                                </Stack>
                            </Grid>
                            <Grid item xs={7}>
                                <Card sx={{ height: 40 + "vh" }}>
                                    <CardContent><HbarChart /></CardContent>
                                </Card>
                            </Grid >
                        </Grid>
                        <Box height={16} />
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Card sx={{ height: 40 + "vh" }}>
                                    <CardContent>
                                        <GeoChart />
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card sx={{ height: 40 + "vh" }}>
                                    <CardContent>
                                        <PiChart />
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </div>
        </>
    );
}