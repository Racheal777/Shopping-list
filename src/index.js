import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Signup from './components/Signup';
import Login from './components/Login';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path='/login' element= { <Login />}></Route>
      <Route path='/' element= { <Signup />}></Route>
      <Route path='/list' element= { <App />}></Route>
        
      </Routes>
    </Router>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
