import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Weather from './Weather'

function Home(){

  // /youregexp/.test(yourString)

    const [uen, setUEN] = useState('');
    let navigate = useNavigate(); 
    // (check, out) = (false, None);

    const getuen = () => {
        // console.log(uen);
        let check = checkUEN();
        // console.log(check.value);
        if (check.check){
          console.log("lets goo")
          console.log(check.value);
          let path = `weather`; 
          window.sessionStorage.setItem('UEN', check.value);
          navigate(path);

        }
    }

    function checkUEN (){

      //check if uen 9 or 10 digits
      let uen_up = uen.toUpperCase();

      if (uen_up.length < 9 || uen_up.length > 10) {
          console.log('UEN is not 9 or 10 digits');
        return {"check":false, "value":null};
      }
      
      //check A
      if (uen_up.length === 9){
        // console.log('checking A');
        var checkA = new RegExp("^[0-9]{8}[A-Z]$");
        return {"check":checkA.test(uen_up),"value":"A"};
      }
      else{

        const entityTypeIndicator = [
          'LP', 'LL', 'FC', 'PF', 'RF', 'MQ', 'MM', 'NB', 'CC', 'CS', 'MB', 'FM', 'GS', 'GA',
          'GB', 'DP', 'CP', 'NR', 'CM', 'CD', 'MD', 'HS', 'VH', 'CH', 'MH', 'CL', 'XL', 'CX',
          'RP', 'TU', 'TC', 'FB', 'FN', 'PA', 'PB', 'SS', 'MC', 'SM'
        ];

        var checkB = new RegExp("^(19|20)\\d{2}[0-9]{5}[A-Z]$");
        var checkC = new RegExp("^[T][0-9]{2}[A-Z]{2}[0-9]{4}[A-Z]$");
        

        if (checkB.test(uen_up)){
          // console.log('checking B');
          return {"check":checkB.test(uen_up), "value":"B"};
        }
        if (checkC.test(uen_up)){
          // console.log('checking C');
          let entity = uen_up.slice(3,5);
          console.log(entity)
          if (entityTypeIndicator.includes(entity)){
            return {"check":checkC.test(uen_up), "value":"C"};
          }
        }
      }
      return {"check":false, "value":null};

    }

  return (
    <div className='App'>
        <header className="App-header">
            Enter your UEN here:
            <div className='input'>
            <TextField required id="outlined-required" label="Required" sx={{ input: { color: 'black' } }} value={uen} onChange={(event) => {setUEN(event.target.value)}}/>
            </div>
            <div className='button'>
            <Button variant="contained" onClick={getuen}>Submit</Button>
            </div>
        </header>
        
    </div>
  )
}

export default Home