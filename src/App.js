import './App.css';
import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
import Hamburger from './components/Hamburger';
import Login from './components/Login';
import WeatherDisplay from './components/WeatherDisplay';

function App() {

  const [input, setInput] = useState("Lubbock")
  const [current, setCurrent] = useState({})
  // current turned out not to be useful, as it doesn't contain rain, snow, or dewpoint data.
  // I kept it here because it is one of the three objects returned in the fetch request.
  const [forecast, setForecast] = useState({})
  const [location, setLocation] = useState({})
  const [preference, setPreference] = useState(70)
  const [user, setUser] = useState({})
  
  useEffect(()=> {
    axios.get('https://wthr-backend.vercel.app/users')
    .then(response => console.log(response.data))
  }, [])

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
      : <WeatherDisplay current={current} forecast={forecast} location={location} perfectTemp={preference}/>
    }
    </div>
  );
}

export default App;
