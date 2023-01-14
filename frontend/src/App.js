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
import Appbar from "./components/Appbar";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Appbar />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/data" element={<Data />}></Route>
          <Route path="/control" element={<Control />}></Route>
          <Route path="/camera" element={<Camera />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
