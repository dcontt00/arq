import * as React from "react";
import AppBar from "../components/Appbar";
import Grid from "@mui/material/Grid";
import {Typography} from "@mui/material";
import Datos from "../components/Datos";
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar} from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export default function DataLook(){
  const data = {
    labels:['Humedad del aire','Humedad del suelo','Temperatura','Luminosidad'],
    datasets:[{
      label:'Humedad del aire',
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderColor: 'black',
      borderWidth: 1,
      hoverBackgroundColor:'rgba(0,255,0,0.2)',
      hoverBorderColor:'#FF0000',
      data: [100, 75, 20, 40]
    }] 
  };

  return(
   <div>
      <AppBar/>
      <Typography fontSize="25" align="center" sx={{mt:"10",mb:"10"}}>INFORMACIÓN BÁSICA</Typography>
      <CssBaseline />
      <Grid container >
        {/* Grafica de los datos */}   
        <Grid item lg={6} xs={false} sm={4} md={7} component={Paper} square>
          <Bar data={data} />
        </Grid>
        {/* Tomar una foto */}
        <Grid item lg={6} xs={6} component={Paper} square>
          <Datos/>
        </Grid>
      </Grid>
    </div>
  );
}