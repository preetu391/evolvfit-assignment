import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Workout from './components/Workout';
import Nutrition from './components/Nutrition'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Dashboard/>} />
       <Route path="/user/:userId/workout" element={<Workout/>} />
       <Route path="/user/:userId/nutrition" element={<Nutrition/>} />
     </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
