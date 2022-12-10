import * as React from "react";
import Grid from "@mui/material/Grid";
import {Typography} from "@mui/material";
import AppBar from "../components/Appbar";
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import imagenplanta from "../images/icono_planta.png";
import { useNavigate } from 'react-router';

export default function Home() {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
    navigate("/datos y control");
  }
  return (
    <div>
      <Typography variant="h2" align="center" sx={{mt:"5"}}>SELECCIONA EL INVERNADERO</Typography>
      <Grid container align="center">
        {/* Ultima foto del invernadero */}
        {/* Datos de los invernaderos */}
        <Grid item lg={12}> 
       <ImageList sx={{ width: 500, height: 573 }}>
          <ImageListItem key="Subheader" cols={2}>
              <ListSubheader component="div">INVERNADEROS</ListSubheader>
          </ImageListItem>
          {itemData.map((item) => (
         <ImageListItem key={item.img}>
            <img onSubmit={handleSubmit}  src={imagenplanta} alt={item.title} loading="lazy" />
          <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  type= "submit"
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
          ))}
         </ImageList>
        </Grid>
      </Grid>
    </div>
  );
}
const itemData = [
  
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Invernadero 1',
    author: '@sferns08',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
];
