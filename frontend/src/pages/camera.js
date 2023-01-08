import * as React from "react";
import AppBar from "../components/Appbar";
import {Button, Typography} from "@mui/material";
import AddPhoto from '@mui/icons-material/AddPhotoAlternateTwoTone';
import Box from '@mui/material/Box';
import planta from "../images/planta.jpeg";
import Grid from "@mui/material/Grid";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { itemData } from "../components/itemData";

export default function Camera() {
    return(
    <div>
      <AppBar/>
      <Typography fontSize="25" align="center" sx={{mt:"10",mb:"10"}}>CONTROL VISUAL</Typography>
      <Grid container>
        <Grid item lg={6} sx={{ml:5, mt:3}}>
          <Box align="center">
            <img src={planta} alt="img" width="550px"/>
          </Box>
          <Box align="center" sx={{mt:1}}>
            <Button sx={{backgroundColor:"green"}}>
              <AddPhoto sx={{fontSize: 25}}/>
            </Button>
          </Box>
        </Grid>
        <Grid item lg={5} sx={{mt:4}}>
          <ImageList sx={{ width: 500, height: 340 }} cols={3} rowHeight={164}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
              ))}
              </ImageList>
        </Grid>  
      </Grid>
    </div>
    );
}