import * as React from 'react';
import { BrowserRouter as Router, Navigate, Routes, Route} from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';

export default function App(){
  return(
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Navigate to='/login' />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
