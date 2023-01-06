import * as React from "react";
import AppBar from "../components/Appbar";
import Grid from "@mui/material/Grid";
import {Typography} from "@mui/material";
import Datos from "../components/Datos";
import { Bar } from 'react-chartjs-2';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';

export default function DataLook(){
  const data={
    labels: ['Red', 'Orange', 'Blue'],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [{
      label: 'Popularity of colours',
      data: [55, 23, 96],// you can set indiviual colors for each bar
      backgroundColor: [
        'rgba(255, 255, 255, 0.6)',
        'rgba(255, 255, 255, 0.6)',
        'rgba(255, 255, 255, 0.6)'
      ],
      borderWidth: 1,
    }]
  };
  const opciones ={
    maintainAspectRatio: false,
    responsive: true
  }

  return(
   <div>
      <AppBar/>
      <Typography fontSize="25" align="center" sx={{mt:"10",mb:"10"}}>INFORMACIÓN BÁSICA</Typography>
      <CssBaseline />
      <Grid container sx={{ml:"7%", height: '80vh', width:"90%"}}>
        {/* Grafica de los datos */}   
        <Grid item lg={6} xs={false} sm={4} md={7} component={Paper} square>
          {/*<Bar data={data} options={opciones}/>*/}
        </Grid>
        {/* Tomar una foto */}
        <Grid item lg={6} xs={6} component={Paper} square>
          <Datos/>
        </Grid>
      </Grid>
    </div>
  );
}

{/*labels:['Humedad del aire','Humedad del suelo','Temperatura','Luminosidad'],
    datasets:[{
      label:'Humedad del aire',
      backgroundColor:'rgba(0,255,0,1)',
      borderColor:'black',
      borderWidth: 1,
      hoverBackgroundColor:'rgba(0,255,0,0.2)',
      hoverBorderColor:'#FF0000',
      data: [100, 75, 20, 40]
    }] */}