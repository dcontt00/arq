import * as React from "react";
import AppBar from "../components/Appbar";
import Grid from "@mui/material/Grid";
import {Typography} from "@mui/material";

export default function Data(){
    return(
    <div>
      <AppBar/>
      <Typography align="center" sx={{mt:"5"}}>SELECCIONA EL INVERNADERO</Typography>
      <Grid container spacing={2} width={"99%"} sx={{mt:"5",ml:"5"}}>
        {/* Ultima foto del invernadero */}
        <Grid item lg={7}>
          <img src="planta.jpeg" width={"100%"} />
        </Grid>
        {/* Datos de los invernaderos */}
        <Grid item lg={5}>
        Los datos del invernadero se monitorizaran con grafana, para poder visualizarlos hay que incrustar grafana en un iframe.
        </Grid>
      </Grid>
    </div>
    );
}