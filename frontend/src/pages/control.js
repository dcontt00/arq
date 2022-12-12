import * as React from "react";
import AppBar from "../components/Appbar";
import Grid from "@mui/material/Grid";
import {Typography} from "@mui/material";

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/AddOutlined';
import RemoveIcon from '@mui/icons-material/RemoveOutlined';

export default function Control() {
    return(
    <div>
      <AppBar/>
      <Typography fontSize="25" align="center" sx={{mt:"5"}}>SALA DE CONTROL</Typography>
      <Grid container sx={{ml:"7%", height: '80vh', width:"90%"}}>
        {/* Graficas de control*/}  
          <CssBaseline />
          <Grid item lg={6} xs={false} sm={4} md={7} component={Paper} elevation={6} square
            sx={{
              backgroundImage: 'url(https://media.admagazine.com/photos/61de539e089751617cd2fc74/3:4/w_1058,h_1411,c_limit/plantas.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          {/*Cuadro de control*/}
          <Grid lg={6} component={Paper} elevation={6} square>
            <Grid container>
              <Grid item lg={12} align="center" mt="10">
                <Typography component="h1" variant="h5">Panel de control</Typography>
              </Grid>
              {/*Humedad del aire*/}
              <Grid item lg={3} align="center" mt="10"><Button sx={{ mt: 3, mb: 2 }}><RemoveIcon/></Button></Grid>
              <Grid item lg={6} align="center" mt="10"><TextField margin="normal" fullWidth id="user" label="Humedad del aire"/></Grid>
              <Grid item lg={3} align="center" mt="10"><Button sx={{ mt: 3, mb: 2 }}><AddIcon/></Button></Grid>
              {/*Humedad del suelo*/}
              <Grid item lg={3} align="center" mt="10"><Button sx={{ mt: 3, mb: 2 }}><RemoveIcon/></Button></Grid>
              <Grid item lg={6} align="center" mt="10"><TextField margin="normal" fullWidth id="user" label="Humedad del suelo"/></Grid>
              <Grid item lg={3} align="center" mt="10"><Button sx={{ mt: 3, mb: 2 }}><AddIcon/></Button></Grid>    
              {/*Temperatura*/}
              <Grid item lg={3} align="center" mt="10"><Button sx={{ mt: 3, mb: 2 }}><RemoveIcon/></Button></Grid>
              <Grid item lg={6} align="center" mt="10"><TextField margin="normal" fullWidth id="user" label="Temperatura"/></Grid>
              <Grid item lg={3} align="center" mt="10"><Button sx={{ mt: 3, mb: 2 }}><AddIcon/></Button></Grid>    
              {/*Luminosidad*/}
              <Grid item lg={3} align="center" mt="10"><Button sx={{ mt: 3, mb: 2 }}><RemoveIcon/></Button></Grid>
              <Grid item lg={6} align="center" mt="10"><TextField margin="normal" fullWidth id="user" label="Luminosidad"/></Grid>
              <Grid item lg={3} align="center" mt="10"><Button sx={{ mt: 3, mb: 2 }}><AddIcon/></Button></Grid>        
                
            </Grid>
          </Grid>
        </Grid>
    </div>
    );
}