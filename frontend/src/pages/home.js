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
import Button from '@mui/material/Button';


export default function Home() {
  const navigate = useNavigate();
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      navigate("/datos y control");
  }
  return (
    <div>
      <Grid container>
        <Grid item lg={6} align="right" sx={{mt:"30", ml:"240"}}><Typography variant="h2"sx={{mt:"5"}}>SELECCIONA EL INVERNADERO</Typography></Grid>
        <Grid item lg={3.7} align="right" sx={{mt:"30"}}><Typography variant="h6"sx={{mt:"1"}}>⬅BACK</Typography></Grid>
      </Grid>
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
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <Button type="submit" variant="contained">Entrar</Button>
              </Box>
            <img   src={imagenplanta} alt={item.title} loading="lazy" />
            
          <ImageListItemBar
              title={item.title}
              subtitle={item.author}
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
    title: 'Invernadero 2',
    author: '@dflorr00',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Invernadero 3',
    author: '@dcontt00',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Invernadero 4',
    author: '@rreisr00',
  },
];
