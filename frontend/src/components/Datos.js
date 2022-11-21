import { Grid, Paper, Typography } from "@mui/material";
export default function Datos() {
  return (
    <Grid container>
      <Grid item lg={6}>
        <Typography align="center">Humedad Aire</Typography>
      </Grid>
      <Grid item lg={6}>
        <Typography align="center">Temperatura</Typography>
      </Grid>
      <Grid item lg={6}>
        <Typography align="center">Humedad Suelo</Typography>
      </Grid>
      <Grid item lg={6}>
        <Typography align="center">Luminosidad</Typography>
      </Grid>
    </Grid>
  );
}
