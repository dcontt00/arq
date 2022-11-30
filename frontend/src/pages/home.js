import * as React from "react";
import Grid from "@mui/material/Grid";
import { CardContent, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Datos from "../components/Datos";
import AppBar from "../components/Appbar";

import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList, ListChildComponentProps } from 'react-window';

function renderRow(props: ListChildComponentProps) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}


export default function Home() {
  return (
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
          <Box sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}>
            <FixedSizeList
              height={500}
              width={600}
              itemSize={46}
              itemCount={200}
              overscanCount={5}
            >
            {renderRow}
            </FixedSizeList>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
