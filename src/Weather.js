import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState} from 'react';


function Weather(){

    const [location, setLocation] = useState('');
    const weatherForecast = document.getElementById("forecast");
    const uen = document.getElementById("uen");

    function capFirstLetter(words) {
        var separateWord = words.toLowerCase().split(' ');
        for (var i = 0; i < separateWord.length; i++) {
           separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
           separateWord[i].substring(1);
        }   
        return separateWord.join(' ');
     }

     function getLoc(weatherJson, inputLoc){
         if(inputLoc == null){
            return "Input a valid location";
         }
         for (var i = 0; i < weatherJson.length; i++){
             if (weatherJson[i]["area"] === inputLoc){
                 return weatherJson[i]["forecast"]
             }
         }
         return "Input a valid location";
     }

    function returnStatement(){
        console.log("Hello user " + window.sessionStorage.getItem("UEN"));
        return "Hello user " + window.sessionStorage.getItem("UEN")
    }

    const fetchData = () => {
        var capLoc = capFirstLetter(location);
        console.log(capLoc);
        console.log(window.sessionStorage.getItem("UEN"));
        

        return fetch("https://api.data.gov.sg/v1/environment/2-hour-weather-forecast")
               .then((response) => response.json())
               //   .then((data) => console.log(getLoc(data.items["0"].forecasts, capLoc)))
               .then((forecast) => weatherForecast.textContent = getLoc(forecast.items["0"].forecasts, capLoc))
               .then((uenSet) => uen.textContent = returnStatement())
               .catch((forecast) => "Input a valid location");}

  return (
    <div className='App'>
        <header className="App-header">
            <h1>
                Weather
            </h1>
            <h3>
                <div id = "uen">
                    Hello user
                </div>

                <div id = "forecast">
                    The forecast of the day
                </div>
                <img src=""></img>
            </h3>
            <div className='input'>
                <TextField required id="outlined-required" label="Required" sx={{ input: { color: 'black' } }} value={location} onChange={(event) => {setLocation(event.target.value)}}/>
            </div>
            <Button variant="contained" onClick={fetchData}>Get Weather</Button>
        </header>
    </div>
  )
}

export default Weather