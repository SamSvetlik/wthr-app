import './App.css';
import Menu from './components/Menu';
import Login from './components/Login';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  return (
    <div className="App">
      <Menu />
      <Login />
      <WeatherDisplay />
    </div>
  );
}

export default App;
