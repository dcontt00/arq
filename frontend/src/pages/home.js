import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import { CardContent, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <Grid container spacing={2}>
      <Grid item lg={7}>
        {/** Ultima foto del invernadero */}
        <img src="planta.jpeg" width={"100%"} />
      </Grid>
      <Grid item lg={5}>
        {/** Datos del invernadero */}
        <Card>
          <CardContent>Tarjeta de prueba</CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
