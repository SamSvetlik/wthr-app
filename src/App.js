import './App.css';
import React from 'react'
import { useState, useEffect } from 'react'
import Hamburger from './components/Hamburger';
import Login from './components/Login';
import WeatherDisplay from './components/WeatherDisplay';

function App() {

  const [input, setInput] = useState("Lubbock")
  const [current, setCurrent] = useState({})
  const [forecast, setForecast] = useState({})
  const [location, setLocation] = useState({})
  

  useEffect(()=> {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${input}&days=2`)
      .then(res => {
        if (!res.ok) {
          throw Error(`Couldn't find any weather data for ${input}. Are you sure you spelled it correctly?`)
        }
        return res.json()})
      .then((data)=> {
        console.log(data)
        setCurrent(data.current)
        setForecast(data.forecast)
        setLocation(data.location)
      })
      .catch(err => {
        alert(`Couldn't find any weather data for ${input}. Are you sure you spelled it correctly?`)

      })
  }, [input])

  return (
    <div className="App">
      <Hamburger input={input} setInput={setInput} />
      <Login />
    {Object.entries(current).length === 0
      ? <h3>Loading...</h3>
      : <WeatherDisplay current={current} forecast={forecast} location={location}/>
    }
    </div>
  );
}

export default App;
