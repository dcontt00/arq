import * as React from "react";
import AppBar from "../components/Appbar";
import Grid from "@mui/material/Grid";
import {Typography} from "@mui/material";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Line} from 'react-chartjs-2';
import {lecturas} from "../components/lecturas";
import { Box } from "@mui/system";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
    labels:['T1','T2','T3','T4'],
    datasets:[{
      label:'Humedad del aire',
      borderColor: 'rgb(0, 0, 255)',
      backgroundColor: 'rgba(100, 100, 235)',
      data: hair
    },{
      label:'Humedad del suelo',
      borderColor: 'rgb(0, 255, 0)',
      backgroundColor: 'rgba(100, 255, 100)',
      data: hgnd
    },{
      label:'Temperatura',
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      data: temp
    },{
      label:'Iluminación',
      borderColor: 'rgb(255, 255, 0)',
      backgroundColor: 'rgba(255, 255, 100)',
      data: lum
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
            <Line data={data} />
          </Box>
        </Grid>
        {/* Datos */}
        <Grid item lg={5} component={Paper} sx={{mt:7,backgroundColor:"lightGrey"}}>
          <Stack spacing={2}  sx={{ml:2,mr:2}}>
            <Paper sx={{mt:1.5}}><Typography sx={{ml:5,mt:1.5,mb:1.5}}>Humedad del aire: {hair[hair.length-1]}</Typography></Paper>
            <Paper><Typography sx={{ml:5,mt:1.5,mb:1.5}}>Temperatura: {hgnd[hgnd.length-1]}</Typography></Paper>
            <Paper><Typography sx={{ml:5,mt:1.5,mb:1.5}}>Humedad del suelo: {temp[temp.length-1]}</Typography></Paper>
            <Paper><Typography sx={{ml:5,mt:1.5,mb:1.5}}>Luminosidad: {lum[lum.length-1]}</Typography></Paper>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}