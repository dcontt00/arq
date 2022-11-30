import { Grid, Paper, Typography } from "@mui/material";
export default function Datos() {
  return (
    <Grid container>
      <Grid item lg={12}>
        <Typography>Humedad del aire:</Typography>
      </Grid>
      <Grid item lg={12}>
        <Typography>Temperatura:</Typography>
      </Grid>
      <Grid item lg={12}>
        <Typography>Humedad del suelo:</Typography>
      </Grid>
      <Grid item lg={12}>
        <Typography>Luminosidad:</Typography>
      </Grid>
    </Grid>
  );
}
