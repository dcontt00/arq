import * as React from "react";
import AppBar from "../components/Appbar";
import Grid from "@mui/material/Grid";
import {Typography} from "@mui/material";
import Datos from "../components/Datos";

export default function Data(){
    return(
    <div>
      <AppBar/>
      <Typography fontSize="25" align="center" sx={{mt:"5"}}>INFORMACIÓN BÁSICA</Typography>
      <Grid container spacing={2} width={"99%"} sx={{mt:"5",ml:"5"}}>
        {/* Ultima foto del invernadero */}
        <Grid item lg={7}>
          <img src="planta.jpeg" alt="imagen" width={"100%"} />
        </Grid>
        {/* Datos de los invernaderos */}
        <Grid item lg={5}>
         <Datos/>
        </Grid>
      </Grid>
    </div>
    );
}