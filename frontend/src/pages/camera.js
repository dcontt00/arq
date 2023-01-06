import * as React from "react";
import AppBar from "../components/Appbar";
import {Button, Typography} from "@mui/material";
import AddPhoto from '@mui/icons-material/AddPhotoAlternateTwoTone';
import Box from '@mui/material/Box';
import planta from "../images/planta.jpeg";

export default function Camera() {
    return(
    <div>
      <AppBar/>
      <Typography fontSize="25" align="center" sx={{mt:"10",mb:"10"}}>CONTROL VISUAL</Typography>
      <Box align="center"><img src={planta} alt="img" width="700px"/></Box>
      <Box align="center" sx={{mt:1}}><Button sx={{backgroundColor:"green"}}><AddPhoto sx={{fontSize: 25}}/></Button></Box>
    </div>
    );
}