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
import axios from "axios";
import Container from '@mui/material/Container';
import { CircularProgress } from '@mui/material';


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
    }]
  });

  const [temp, setTemp] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [light, setLight] = useState(0);
  const [soil_moisture, setSoil_moisture] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [showGraph, setShowGraph] = useState(false);


  async function getData() {
    console.log("Getting data...")
    const response = await axios.get("/api/data");
    const data = await response.data;
    console.log(data);
    setTemp(data.temperature);
    setHumidity(data.humidity);
    setSoil_moisture((data.soil_moisture1 + data.soil_moisture2) / 2);

    const response2 = await axios.get("/api/data/historical");
    var data2 = await response2.data;
    console.log(data2);
    data2 = data2.data;
    console.log(data2);

    var temps = []
    var hums = []
    var soil_moistures = []
    var dates = []
    var light = []
    if (data2.length > 0) {

      data2.forEach(element => {
        temps.push(element.temperature)
        hums.push(element.humidity)
        soil_moistures.push(element.soil_moisture)
        dates.push(element.date)
        light.push(element.light)
      }
      );
    } else {
      temps.push(0, 10, 20, 30, 40)
      hums.push(0, 10, 20, 30, 40)
      soil_moistures.push(0, 10, 20, 30, 40)
      dates.push("1/10", "2/10", "3/10", "4/10", "5/10")
      light.push(0, 1, 0, 1, 0)
    }
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
      }
      ]
    };
    setDatos(dat);
    setShowGraph(true);
  }

  // Run every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      getData();
      setSeconds(seconds => seconds + 1);
    }, 30000);// 30 segundos
    return () => clearInterval(interval);
  });


  // Run just once
  useEffect(() => {
    getData();
  }, []);


  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item lg={12} >
          <Typography variant="h3">INFORMACIÓN BÁSICA</Typography>
        </Grid>
        {/* Grafica de los datos */}
        <Grid item lg={9} >
          <Paper>
            {showGraph ? <Line data={datos} /> : <CircularProgress />}
          </Paper>
        </Grid>
        {/* Datos */}
        <Grid item lg={3}  >
          <Paper>
            <Stack spacing={2} >
              <Paper><Typography sx={{ ml: 5, mt: 1.5, mb: 1.5 }}>Humedad del aire: {humidity}</Typography></Paper>
              <Paper><Typography sx={{ ml: 5, mt: 1.5, mb: 1.5 }}>Temperatura: {temp}</Typography></Paper>
              <Paper><Typography sx={{ ml: 5, mt: 1.5, mb: 1.5 }}>Humedad del suelo: {soil_moisture}</Typography></Paper>
              <Paper><Typography sx={{ ml: 5, mt: 1.5, mb: 1.5 }}>Luminosidad: {light}</Typography></Paper>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}