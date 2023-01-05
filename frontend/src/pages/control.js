import React, {useState } from 'react';
import AppBar from "../components/Appbar";
import Grid from "@mui/material/Grid";
import {Typography} from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/AddOutlined';
import RemoveIcon from '@mui/icons-material/RemoveOutlined';

import Checkbox from '@mui/material/Checkbox';
import LightbulbBorder from '@mui/icons-material/LightbulbSharp';
import Lightbulb from '@mui/icons-material/LightbulbOutlined';

export default function Control() {
    const [HAir, setAir] = useState(3);
    const [HGnd, setGnd] = useState(19);
    const [Temp, setTemp] = useState(20);
    function handlerLight(){
    }

    return(
    <div>
      <AppBar/>
      <Typography fontSize="25" align="center" sx={{mt:"10",mb:"10"}}>SALA DE CONTROL</Typography>
      <Grid container sx={{ml:"7%", height: '80vh', width:"90%"}}>
        {/* Graficas de control*/}  
          <CssBaseline />
          <Grid item lg={6} xs={false} sm={4} md={7} component={Paper} square
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
          <Grid lg={6} xs={6} component={Paper}>
            <Grid container>
              <Grid item lg={12} xs={12} align="center" mt="10">
                <Typography component="h1" variant="h5">Panel de control</Typography>
              </Grid>
              {/*Humedad del aire*/}
              <Grid item lg={3} xs={3} align="center" mt="10"><Button sx={{ mt: 3, mb: 2 }} onClick={HAir>0 ? ()=>setAir(HAir-1): undefined}><RemoveIcon/></Button></Grid>
              <Grid item lg={6} xs={6} align="center" mt="10"><TextField margin="normal" value={HAir} fullWidth  label="Humedad del aire" 
                InputProps={{startAdornment: <InputAdornment position="start">%</InputAdornment>}}/></Grid>
              <Grid item lg={3} xs={3} align="center" mt="10"><Button sx={{ mt: 3, mb: 2 }} onClick={HAir<100 ? ()=>setAir(HAir+1): undefined}><AddIcon/></Button></Grid>
              {/*Humedad del suelo*/}
              <Grid item lg={3} xs={3} align="center" mt="10"><Button sx={{ mt: 3, mb: 2 }} onClick={HGnd>0 ? ()=>setGnd(HGnd-1): undefined}><RemoveIcon/></Button></Grid>
              <Grid item lg={6} xs={6} align="center" mt="10"><TextField margin="normal" value={HGnd} fullWidth label="Humedad del suelo"
                InputProps={{startAdornment: <InputAdornment position="start">%</InputAdornment>}}/></Grid>
              <Grid item lg={3} xs={3} align="center" mt="10"><Button sx={{ mt: 3, mb: 2 }} onClick={HGnd<100 ? ()=>setGnd(HGnd+1): undefined}><AddIcon/></Button></Grid>    
              {/*Temperatura*/}
              <Grid item lg={3} xs={3} align="center" mt="10"><Button sx={{ mt: 3, mb: 2 }} onClick={Temp>0 ? ()=>setTemp(Temp-1): undefined}><RemoveIcon/></Button></Grid>
              <Grid item lg={6} xs={6} align="center" mt="10"><TextField margin="normal" value={Temp} fullWidth label="Temperatura"
                InputProps={{startAdornment: <InputAdornment position="start">ºC</InputAdornment>}}/></Grid>
              <Grid item lg={3} xs={3} align="center" mt="10"><Button sx={{ mt: 3, mb: 2 }} onClick={Temp<100 ? ()=>setTemp(Temp+1): undefined}><AddIcon/></Button></Grid>    
              {/*Iluminación*/}
              <Grid item lg={12} xs={12} align="center" mt="10"><Checkbox onChange={handlerLight} icon={<Lightbulb fontSize="large"/>} checkedIcon={<LightbulbBorder fontSize="large"/>} /></Grid>     
            </Grid>
          </Grid>
        </Grid>
    </div>
    );
}