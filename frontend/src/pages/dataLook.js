import * as React from "react";
import AppBar from "../components/Appbar";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Line } from 'react-chartjs-2';
import { lecturas } from "../components/lecturas";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import Axios from "axios";
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

export default function DataLook() {
  const [datos, setDatos] = useState({
    labels: ['0', '0'],
    datasets: [{
      label: 'Humedad del aire',
      borderColor: 'rgb(0, 0, 255)',
      backgroundColor: 'rgba(100, 100, 235)',
      data: [0, 0]
    }, {
      label: 'Humedad del suelo',
      borderColor: 'rgb(0, 255, 0)',
      backgroundColor: 'rgba(100, 255, 100)',
      data: [0, 0]
    }, {
      label: 'Temperatura',
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      data: [0, 0]
    }, {
      label: 'Iluminación',
      borderColor: 'rgb(255, 255, 0)',
      backgroundColor: 'rgba(255, 255, 100)',
      data: [0, 0]
    }]
  });

  const [temp, setTemp] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [light, setLight] = useState(0);
  const [soil_moisture, setSoil_moisture] = useState(0);


  useEffect(() => {
    Axios({
      url: "/api/historical",
    })
      .then((response) => {
        console.log(response.data)

        // Get an array of temperatures from an array of JSON objects
        var temps = []
        var hums = []
        var soil_moistures = []
        var dates = []
        response.data.forEach(element => {
          temps.push(element.temp)
          hums.push(element.humidity)
          soil_moistures.push(element.soil_moisture)
          dates.push(element.date)
        });

        var dat = {
          labels: dates,
          datasets: [{
            label: 'Humedad del aire',
            borderColor: 'rgb(0, 0, 255)',
            backgroundColor: 'rgba(100, 100, 235)',
            data: hums
          }, {
            label: 'Humedad del suelo',
            borderColor: 'rgb(0, 255, 0)',
            backgroundColor: 'rgba(100, 255, 100)',
            data: soil_moistures
          }, {
            label: 'Temperatura',
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            data: temps
          }, {
            label: 'Iluminación',
            borderColor: 'rgb(255, 255, 0)',
            backgroundColor: 'rgba(255, 255, 100)',
            data: [0, 1, 0, 0, 1]
          }]
        };
        setDatos(dat);
      })
      .catch((error) => {
        console.log(error);
      });

    Axios({
      url: "/api/data",
    })
      .then((response) => {
        setTemp(response.data.temperature)
        setHumidity(response.data.humidity)
        setLight(response.data.light)
        setSoil_moisture((response.data.soil_moisture1 + response.data.soil_moisture2) / 2)
      }, [setDatos, setTemp, setHumidity, setLight, setSoil_moisture]);
  });


  return (
    <div>
      <AppBar />
      <Typography fontSize="25" align="center" sx={{ mt: 1, mb: 1 }}>INFORMACIÓN BÁSICA</Typography>
      <Grid container justifyContent="center">
        {/* Grafica de los datos */}
        <Grid item lg={5} component={Paper} sx={{ mr: 10, mt: 7 }}>
          <Box>
            <Line data={datos} />
          </Box>
        </Grid>
        {/* Datos */}
        <Grid item lg={5} component={Paper} sx={{ mt: 7, backgroundColor: "lightGrey" }}>
          <Stack spacing={2} sx={{ ml: 2, mr: 2 }}>
            <Paper sx={{ mt: 1.5 }}><Typography sx={{ ml: 5, mt: 1.5, mb: 1.5 }}>Humedad del aire: {humidity}</Typography></Paper>
            <Paper><Typography sx={{ ml: 5, mt: 1.5, mb: 1.5 }}>Temperatura: {temp}</Typography></Paper>
            <Paper><Typography sx={{ ml: 5, mt: 1.5, mb: 1.5 }}>Humedad del suelo: {soil_moisture}</Typography></Paper>
            <Paper><Typography sx={{ ml: 5, mt: 1.5, mb: 1.5 }}>Luminosidad: {light}</Typography></Paper>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}