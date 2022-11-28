import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Data from "./pages/data";
import Control from "./pages/control";
import Camera from "./pages/camera";
import "./App.css";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/inicio" element={<Home />}></Route>
          <Route path="/datos" element={<Data />}></Route>
          <Route path="/control" element={<Control />}></Route>
          <Route path="/cámara" element={<Camera />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
