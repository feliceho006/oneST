import './App.css';

import React, { useState} from 'react';

import Main from './Main';
import { useNavigate } from "react-router-dom";

function App() {

  return (
    <div className="App">
      {/* <Home/> */}
      <Main/>
      
    </div>
    
  );
}

export default App;
