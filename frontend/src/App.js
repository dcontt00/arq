import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { BrowserRouter as Router, Navigate, Routes, Route} from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';

export default function App(){
  return(
    <ThemeProvider theme={theme}>
      <Router>
          <Routes>
            <Route path='/' element={<Navigate to='/login' />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/home' element={<Home />}></Route>
          </Routes>
      </Router>
    </ThemeProvider>
  );
}
