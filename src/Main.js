import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';

import Weather from './Weather'

const Main = () => {
  return (
    <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/weather" exact element={<Weather/>}/>
    </Routes>
  );
}

export default Main;