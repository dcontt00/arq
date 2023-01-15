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
import { CircularProgress } from '@mui/material';
import { useEffect } from 'react';

export default function Control() {
  const [temp, setTemp] = useState(0);
  const [objTemp, setObjTemp] = useState(20);

  const [humidity, setHumidity] = useState(0);
  const [objHumidity, setObjHumidity] = useState(40);

  const [soil_moisture, setSoil_moisture] = useState(0);
  const [objSoil_moisture, setObjSoil_moisture] = useState(40);

  const [seconds, setSeconds] = useState(0);

  async function getData() {
    const response = await axios.get("/api/data");
    const data = await response.data;
    setTemp(data.temperature);
    setHumidity(data.humidity);
    setSoil_moisture((data.soil_moisture1 + data.soil_moisture2) / 2);
  }

  async function getControlData() {
    const response = await axios.get("/api/control/data");
    const data = await response.data;
    setObjTemp(data.temperature);
    setObjHumidity(data.humidity);
    setObjSoil_moisture(data.soil_moisture);
  }

  async function handleSubmit(event) {
    axios.post("/api/control", { "temperature": objTemp, "humidity": objHumidity, "soil_moisture": objSoil_moisture })
  }

  useEffect(()=>{
    getData()
    getControlData();
  }, [])

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
            <Button sx={{ mt: 3, mb: 2 }} onClick={objHumidity > 0 ? () => setObjHumidity(objHumidity - 1) : undefined}><RemoveIcon />
            </Button>
            <TextField
              sx={{ mt: 1.5 }}
              label="Humedad del aire"
              type="number"
              value={objHumidity}
              InputProps={{ startAdornment: <InputAdornment position="start">%</InputAdornment> }}
              defaultValue={objHumidity}
            />
            <Button sx={{ mt: 3, mb: 2 }} onClick={objHumidity < 100 ? () => setObjHumidity(objHumidity + 1) : undefined}><AddIcon />
            </Button>
          </Stack>

          <Stack direction="row">
            <Button sx={{ mt: 3, mb: 2 }} onClick={objSoil_moisture > 0 ? () => setObjSoil_moisture(objSoil_moisture - 1) : undefined}><RemoveIcon />
            </Button>
            <TextField
              sx={{ mt: 1.5 }}
              label="Humedad del suelo"
              type="number"
              value={objSoil_moisture}
              InputProps={{ startAdornment: <InputAdornment position="start">%</InputAdornment> }}
              defaultValue={objSoil_moisture}
            />
            <Button sx={{ mt: 3, mb: 2 }} onClick={objSoil_moisture < 100 ? () => setObjSoil_moisture(objSoil_moisture + 1) : undefined}><AddIcon />
            </Button>
          </Stack>
          <Stack direction="row">
            <Button sx={{ mt: 3, mb: 2 }} onClick={objTemp > 0 ? () => setObjTemp(objTemp - 1) : undefined}><RemoveIcon />
            </Button>
            <TextField
              sx={{ mt: 1.5 }}
              label="Temperatura"
              type="number"
              value={objTemp}
              InputProps={{ startAdornment: <InputAdornment position="start">ºC</InputAdornment> }}
              defaultValue={objTemp}
            />
            <Button sx={{ mt: 3, mb: 2 }} onClick={objTemp < 100 ? () => setObjTemp(objTemp + 1) : undefined}><AddIcon />
            </Button>
          </Stack>
          <Button sx={{ mt: 3, mb: 2 }} variant="contained" onClick={(e) => handleSubmit(e)}>Submit</Button>
        </Grid>
        <Grid item lg={6} >
          <Typography variant="h4">Valor actual</Typography>
          <Paper>
            <Stack direction="column">
              <Typography >Humedad del aire</Typography>
              {humidity !== 0 ? <Typography >{humidity}%</Typography> : <CircularProgress />}
              <Typography >Humedad del suelo</Typography>
              {soil_moisture !== 0 ? <Typography >{soil_moisture}%</Typography> : <CircularProgress />}
              <Typography >Temperatura</Typography>
              {temp !== 0 ? <Typography >{temp}ºC</Typography> : <CircularProgress />}
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}