import * as React from "react";
import AppBar from "../components/Appbar";
import Grid from "@mui/material/Grid";
import {Button, Typography} from "@mui/material";
import AddPhoto from '@mui/icons-material/AddPhotoAlternateTwoTone';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';

export default function Camera() {
    return(
    <div>
      <AppBar/>
      <Typography fontSize="25" align="center" sx={{mt:"10",mb:"10"}}>CONTROL VISUAL</Typography>
      <Grid container sx={{ml:"7%", height: '80vh', width:"90%"}}>
        {/* Ultima foto del invernadero */}  
          <CssBaseline />
          <Grid item lg={6} xs={false} sm={4} md={7} component={Paper} square
            sx={{
              backgroundImage: 'url(/images/planta.jpeg)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          {/* Tomar una foto */}
          <Grid item lg={6} xs={6} component={Paper}>
            <Box height="100%" align="center">
              <Button sx={{ mt: "30%" }}><AddPhoto sx={{ fontSize: 80 }}/></Button>
            </Box>
          </Grid>
        </Grid>
    </div>
    );
}