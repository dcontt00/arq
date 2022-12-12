import { CardContent, Grid, Typography } from "@mui/material";
import Card from '@mui/material/Card';
export default function Datos() {
  return (
    <Card><CardContent>
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
      </CardContent></Card>
  );
}
