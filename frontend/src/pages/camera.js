import * as React from "react";
import AppBar from "../components/Appbar";
import Grid from "@mui/material/Grid";
import {Button, Typography} from "@mui/material";
import AddPhoto from '@mui/icons-material/AddPhotoAlternateTwoTone';
import Box from '@mui/material/Box';

export default function Camera() {
    return(
    <div>
      <AppBar/>
      <Typography fontSize="25" align="center" sx={{mt:"10",mb:"10"}}>CONTROL VISUAL</Typography>
      <Grid container spacing={2} width={"99%"} sx={{mt:"5",ml:"5"}}>
        {/* Ultima foto del invernadero */}
        <Grid item lg={7}>
          <img src="planta.jpeg" width={"100%"} alt="imagen" />
        </Grid>
        {/* Tomar una foto */}
        <Grid item lg={5} >
          <Box height="100%" align="center">
            <Button sx={{ mt: "30%" }}><AddPhoto sx={{ fontSize: 80 }}/></Button>
          </Box>
        </Grid>
      </Grid>
    </div>
    );
}