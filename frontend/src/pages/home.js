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
    <Grid container sx={{ backgroundColor: "red" }}>
      <Grid item lg={6}>
        <Card>
          <CardContent>Tarjeta de prueba</CardContent>
        </Card>
      </Grid>
      <Grid item lg={6}>
        <Card>
          <CardContent>Tarjeta de prueba</CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
