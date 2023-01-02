import * as React from "react";
import AppBar from "../components/Appbar";
import Grid from "@mui/material/Grid";
import {Typography} from "@mui/material";
import Datos from "../components/Datos";
import {Bar} from "react-chartjs-2"

export default function Data(){
  const data={
    labels:['Humedad del aire','Humedad del suelo','Temperatura','Luminosidad'],
    datasets:[{
      label:'Humedad del aire',
      backgroundColor:'rgba(0,255,0,1)',
      borderColor:'black',
      borderWidth: 1,
      hoverBackgroundColor:'rgba(0,255,0,0.2)',
      hoverBorderColor:'#FF0000',
      data: [100, 75, 20, 40]
    }]
  };
  const opciones ={
    maintainAspectRatio: false,
    responsive: true
  }
  return(
   <div>
      <AppBar/>
      <Typography fontSize="25" align="center" sx={{mt:"10",mb:"10"}}>INFORMACIÓN BÁSICA</Typography>
      <Grid container spacing={2} width={"99%"} sx={{mt:"5",ml:"5"}}>
        {/* Ultima foto del invernadero */}
        <Grid item lg={7}>
          <Bar data={data} options={opciones}/>
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