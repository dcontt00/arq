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
import Data from "./pages/dataLook";
import Control from "./pages/control";
import Camera from "./pages/camera";
import "./App.css";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/web/" element={<Navigate to="/web/login" />}></Route>
          <Route path="/web/login" element={<Login />}></Route>
          <Route path="/web/dataLook" element={<Data />}></Route>
          <Route path="/web/control" element={<Control />}></Route>
          <Route path="/web/camera" element={<Camera />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
