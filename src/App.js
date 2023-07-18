import React, {useState} from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=f15aa2735ef18205e13328a37fb7d0c3`;

  const searchLocation = (event) => {
    if(event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response);
      })
      setLocation('');
    }
  }
  
  return (
    <div className="app">
      <div className='search'>
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Insira a localização'
          type='text'
        />
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>

          <div className='temp'>
            {data.main ? <h1>{data.main.temp.toFixed()}ºC</h1> : null }
          </div>

          <div className='description'>
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>

        </div>
        <div className='bottom'>
          <div className='feels'>
            {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}ºC</p> : null}
            <p>Sensação térmica</p>
          </div>

          <div className='humidity'>
          {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
            <p>Humidade</p>
          </div>

          <div className='wind'>
          {data.wind ? <p className='bold'>{data.wind.speed} KM/H</p> : null}
            <p>Velocidade do vento</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
