import React, {useState } from 'react';
import AppBar from "../components/Appbar";
import Grid from "@mui/material/Grid";
import {Typography} from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/AddOutlined';
import RemoveIcon from '@mui/icons-material/RemoveOutlined';
import planta from "../images/planta.jpeg";
import Checkbox from '@mui/material/Checkbox';
import LightbulbBorder from '@mui/icons-material/LightbulbSharp';
import Lightbulb from '@mui/icons-material/LightbulbOutlined';
import Box from '@mui/material/Box';
import { lecturas } from '../components/lecturas';

export default function Control() {
    const [HAir, setAir] = useState(lecturas.hair);
    const [HGnd, setGnd] = useState(lecturas.hgnd);
    const [Temp, setTemp] = useState(lecturas.lum);
    function handlerLight(){
    }

    return(
    <div>
      <AppBar/>
      <Typography fontSize="25" align="center" sx={{mt:1,mb:1}}>SALA DE CONTROL</Typography>
      <Grid container justifyContent="center" sx={{mt:7}}> 
          <Grid item lg={5} component={Paper} bgcolor="#2E2E2E" align="center" >
            <Box  
              sx={{
                mt:1,
                width:510,
                height: 370,
                borderRadius:"4px",
                border:2,
                borderColor:"white",
                backgroundImage: `url(${planta})`
              }}/>
          </Grid>
          {/*Cuadro de control*/}
          <Grid lg={5} component={Paper} square>
            <Grid container>
              <Grid item lg={12} align="center" mt="10">
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
              <Grid item lg={12} marginBottom={2} align="center" mt="10"><Checkbox onChange={handlerLight} icon={<Lightbulb fontSize="large"/>} checkedIcon={<LightbulbBorder fontSize="large"/>} /></Grid>     
            </Grid>
          </Grid>
        </Grid>
    </div>
    );
}