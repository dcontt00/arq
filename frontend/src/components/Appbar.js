import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";

export default function ResponsiveAppBar() {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/*Ir al login*/}
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6" noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGIN
          </Typography>
          {/*Ir a Datos*/}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button href={"/data"} sx={{ my: 2, color: "white", display: "block" }}>Datos</Button>
            <Button href={"/control"} sx={{ my: 2, color: "white", display: "block" }}>Control</Button>
            <Button href={"/camera"} sx={{ my: 2, color: "white", display: "block" }}>Camara</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
