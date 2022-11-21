import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import { CardContent, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Home(){

    return (
        <div>
            {/*Barra del Menu*/}
            <AppBar position="static"><Typography color="white">
                <Toolbar>
                    {/*0CA712*/}
                    <Stack spacing={2} direction="row">
                        <Button variant="contained" sx={{fontSize:'22'}}>Inicio</Button>
                        <Button variant="contained" sx={{fontSize:'22'}}>Datos</Button>
                        <Button variant="contained" sx={{fontSize:'22'}}>Control</Button>
                        <Button variant="contained" sx={{fontSize:'22'}}>Cámara</Button>
                    </Stack>
                </Toolbar>
            </Typography></AppBar>

            {/*Parte de las Graficas*/}
            <Grid container sx={{paddingTop:"2%",backgroundColor:'red'}}>
                <Grid item lg={5.5}>
                    <Card><CardContent>Tarjeta de prueba</CardContent></Card>
                </Grid>
                <Grid item lg={5.5}>
                    <Card><CardContent>Tarjeta de prueba</CardContent></Card>
                </Grid>
            </Grid>
        </div>
    );
}
