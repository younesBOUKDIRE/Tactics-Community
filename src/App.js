import React from 'react';
import './App.css';
import MainLogin from './login/main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage/MainPage'


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainLogin />}  />
        <Route path="/Main" element={<MainPage />}  />
      </Routes>
    </Router>
  );
}

export default App;
