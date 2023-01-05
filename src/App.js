import './App.css';
import React from 'react'
import { useState, useEffect } from 'react'
import Menu from './components/Menu';
import Login from './components/Login';
import WeatherDisplay from './components/WeatherDisplay';

function App() {

  const [current, setCurrent] = useState({})
  const [forecast, setForecast] = useState({})
  const [location, setLocation] = useState({name: "Lubbock"})
  

  useEffect(()=> {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${location.name}`)
      .then(res => res.json())
      .then((data)=> {
        console.log(data)
        setCurrent(data.current)
        setForecast(data.forecast)
        setLocation(data.location)
      })
      .catch(err => console.log(`Error: ${err}`))
  }, [])

  return (
    <div className="App">
      <Menu />
      <Login />
      <WeatherDisplay current={current} forecast={forecast} location={location}/>
    </div>
  );
}

export default App;
