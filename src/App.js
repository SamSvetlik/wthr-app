import './App.css';
import React from 'react'
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
  const [user, setUser] = useState({})
  const [token, setToken] = useState("")
 

  useEffect(()=> {
    fetch(`https://wthr-backend.vercel.app/weather/:${input}`)
      .then(res => {
        if (!res.ok) {
          throw Error(`Couldn't find any weather data for ${input}. Are you sure you spelled it correctly?`)
        }
        return res.json()})
      .then((data)=> {
        // console.log(data)
        setCurrent(data.current)
        setForecast(data.forecast)
        setLocation(data.location)
      })
      .catch(err => {
        alert(`${err}`)

      })
  }, [input])

  return (
    <div className="App">
      <Hamburger input={input} setInput={setInput} />
      {Object.entries(user).length === 0 
      ? <Login token={token} setUser={setUser} setToken={setToken}/>
      : <div>Welcome, {user.name}!</div>}
    {Object.entries(current).length === 0
      ? <h3>Loading...</h3>
      : <WeatherDisplay current={current} forecast={forecast} location={location} perfectTemp={user.perfectTemp || 70}/>
    }
    </div>
  );
}

export default App;
