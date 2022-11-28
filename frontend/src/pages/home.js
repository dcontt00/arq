import * as React from "react";
import Grid from "@mui/material/Grid";
import { CardContent, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Datos from "../components/Datos";
import AppBar from "../components/Appbar";

export default function Home() {
  return (
    <Grid container spacing={2}>
      <AppBar/>
      <Grid item lg={7}>
        {/* Ultima foto del invernadero */}
        <img src="planta.jpeg" width={"100%"} />
      </Grid>
      <Grid item lg={5}>
        {/* Datos del invernadero */}
        <Datos />
        <Card>
          <CardContent>Tarjeta de prueba</CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
