import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import { CardContent, Typography } from '@mui/material';
import Card from '@mui/material/Card';

export default function Home(){

    return (
        <Box sx={{display:'flex'}}>
            {/*Barra del Menu*/}
            <AppBar><Typography color="white">
                <Toolbar>
                <Grid container spacing={4}>
                    <Grid item xs={1.5}><Box sx={{backgroundColor:'#0A640D', textAlign:'center',fontSize:'26'}}>Inicio</Box></Grid>
                    <Grid item xs={1.5}><Box sx={{backgroundColor:'#0A640D', textAlign:'center',fontSize:'26'}}>Datos</Box></Grid>
                    <Grid item xs={1.5}><Box sx={{backgroundColor:'#0A640D', textAlign:'center',fontSize:'26'}}>Control</Box></Grid>
                    <Grid item xs={1.5}><Box sx={{backgroundColor:'#0A640D', textAlign:'center',fontSize:'26'}}>Cámara</Box></Grid>
                </Grid>  
                </Toolbar>
            </Typography></AppBar>

            {/*Parte de las Graficas*/}
            <Box sx={{p:3, width:'100%', backgroundColor:'red'}}><Typography>
                <Toolbar/>
                <Card><CardContent>Tarjeta de prueba</CardContent></Card>
            </Typography></Box>

        </Box>
    );
}
