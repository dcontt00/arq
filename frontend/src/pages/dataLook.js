import * as React from "react";
import AppBar from "../components/Appbar";
import Grid from "@mui/material/Grid";
import {Typography} from "@mui/material";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Bar} from 'react-chartjs-2';
import {lecturas} from "../components/lecturas";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Box } from "@mui/system";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function DataLook(){
  const hair = lecturas.hair;
  const hgnd = lecturas.hgnd;
  const temp = lecturas.temp;
  const lum = lecturas.lum;
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
      data: [hair, hgnd, temp, lum]
    }] 
  };

  return(
   <div>
      <AppBar/>
      <Typography fontSize="25" align="center" sx={{mt:1,mb:1}}>INFORMACIÓN BÁSICA</Typography>
      <Grid container justifyContent="center">
        {/* Grafica de los datos */}   
        <Grid item lg={5} component={Paper} sx={{mr:10, mt:7}}>
          <Box>
            <Bar data={data} />
          </Box>
        </Grid>
        {/* Datos */}
        <Grid item lg={5} component={Paper} sx={{mt:7,backgroundColor:"lightGrey"}}>
          <Stack spacing={2}  sx={{ml:2,mr:2}}>
            <Paper sx={{mt:1.5}}><Typography sx={{ml:5,mt:1.5,mb:1.5}}>Humedad del aire: {hair}</Typography></Paper>
            <Paper><Typography sx={{ml:5,mt:1.5,mb:1.5}}>Temperatura: {hgnd}</Typography></Paper>
            <Paper><Typography sx={{ml:5,mt:1.5,mb:1.5}}>Humedad del suelo: {temp}</Typography></Paper>
            <Paper><Typography sx={{ml:5,mt:1.5,mb:1.5}}>Luminosidad: {lum}</Typography></Paper>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}