import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

const darkTheme = createTheme({ palette: { mode: 'dark' } });

export default function ResponsiveAppBar() {
  const navigate = useNavigate();


  return (
    <ThemeProvider theme={darkTheme}>
      <Paper sx={{ bgcolor: 'primary' }} square>
        <Grid container spacing={1} sx={{ width: "30%", ml: "10" }}>
          <Grid item lg={3}>
            <Button href={"/"} sx={{ color: "white", display: "block" }}>
              <Typography variant="h7" fontWeight="700"><AdbIcon />LOGIN</Typography>
            </Button>
          </Grid>
          <Grid item lg={3}><Button onClick={() => navigate("/data")} sx={{ my: 1, color: "white", display: "block" }}>Datos</Button></Grid>
          <Grid item lg={3}><Button onClick={() => navigate("/control")} sx={{ my: 1, color: "white", display: "block" }}>Control</Button></Grid>
          <Grid item lg={3}><Button onClick={() => navigate("/camera")} sx={{ my: 1, color: "white", display: "block" }}>Camara</Button></Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}
