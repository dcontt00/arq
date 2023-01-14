import React, { useState } from 'react';
import AppBar from "../components/Appbar";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
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
import { Stack } from '@mui/system';
import Container from '@mui/material/Container';
import axios from "axios";


export default function Control() {
  const [temp, setTemp] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [light, setLight] = useState(0);
  const [soil_moisture, setSoil_moisture] = useState(0);
  const [lightState, setLightState] = useState(false);
  const [seconds, setSeconds] = useState(0);

  async function getData() {
    const response = await axios.get("/api/data");
    const data = await response.data;
    setTemp(data.temperature);
    setHumidity(data.humidity);
    setLight(data.light);
    setSoil_moisture((data.soil_moisture1 + data.soil_moisture2) / 2);
    setLightState(data.light);
  }


  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item lg={12}>
          <Typography variant="h3" align="center" >Panel de Control</Typography>
        </Grid>
        {/*Cuadro de control*/}
        <Grid item lg={6}>
          <Typography variant="h4">Valor objetivo</Typography>
          <Stack direction="row">
            <Button sx={{ mt: 3, mb: 2 }} onClick={humidity > 0 ? () => setHumidity(humidity - 1) : undefined}><RemoveIcon />
            </Button>
            <TextField
              sx={{ mt: 1.5 }}
              label="Humedad del aire"
              type="number"
              value={humidity}
              InputProps={{ startAdornment: <InputAdornment position="start">%</InputAdornment> }}
              defaultValue={humidity}
            />
            <Button sx={{ mt: 3, mb: 2 }} onClick={humidity < 100 ? () => setHumidity(humidity + 1) : undefined}><AddIcon />
            </Button>
          </Stack>

          <Stack direction="row">
            <Button sx={{ mt: 3, mb: 2 }} onClick={soil_moisture > 0 ? () => setSoil_moisture(soil_moisture - 1) : undefined}><RemoveIcon />
            </Button>
            <TextField
              sx={{ mt: 1.5 }}
              label="Humedad del suelo"
              type="number"
              value={soil_moisture}
              InputProps={{ startAdornment: <InputAdornment position="start">%</InputAdornment> }}
              defaultValue={soil_moisture}
            />
            <Button sx={{ mt: 3, mb: 2 }} onClick={soil_moisture < 100 ? () => setSoil_moisture(soil_moisture + 1) : undefined}><AddIcon />
            </Button>
          </Stack>
          <Stack direction="row">
            <Button sx={{ mt: 3, mb: 2 }} onClick={temp > 0 ? () => setTemp(temp - 1) : undefined}><RemoveIcon />
            </Button>
            <TextField
              sx={{ mt: 1.5 }}
              label="Temperatura"
              type="number"
              value={temp}
              InputProps={{ startAdornment: <InputAdornment position="start">ºC</InputAdornment> }}
              defaultValue={temp}
            />
            <Button sx={{ mt: 3, mb: 2 }} onClick={temp < 100 ? () => setTemp(temp + 1) : undefined}><AddIcon />
            </Button>
          </Stack>

        </Grid>
        <Grid item lg={6} >
          <Typography variant="h4">Valor actual</Typography>
          <Paper>
            <Stack direction="column">
              <Typography >Humedad del aire</Typography>
              <Typography >{humidity}%</Typography>
              <Typography >Humedad del suelo</Typography>
              <Typography >{soil_moisture}%</Typography>
              <Typography >Temperatura</Typography>
              <Typography >{temp}ºC</Typography>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}