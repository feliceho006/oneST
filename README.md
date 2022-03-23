# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Main.js
In main.js it contains the routes to the home page and the main page.

### Home.js
In home.js it checks the user's input for the valid UEN format and users can only go to the weathers page when they have successfully logged in with a valid UEN.

### Weather.js
In weather.js, it checks if the user input a valid location and output the weather forecast for that location.
It also obtains the user type in the windows session storage and display it on the UI.
