import React from 'react';

/*
getWeather = async (e) => {
  e.preventDefault ();
  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;
  const API_KEY = 'a2ea0612394be368851b14848509294b';
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=${city}`);
  const response = await api_call.json();
  console.log(response);
this.setState({
  temperature: response.main.temp,
  city: response.name,
  country: response.sys.country,
  humidity: response.main.humidity,
  description: response.weather[0].description,
  error: ""
})
}*/

const Weather = (props) => {
  const {date, sunrise, sunset, temp, pressure, wind, error, city} = props.weather;
  let content = '';
  if (!error && city) {
    const sunriseWschod = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetZachod = new Date(sunset * 1000).toLocaleTimeString();
    content = (
      <div className="row">
        <div className="col-12">Wyniki wyszukiwania dla miasta <em>{city}</em></div>
        <div className='col-md-3'>Dane dla dnia i godziny {date}</div>
        <div className='col-md-3'>Temperatura {temp} &#176;C</div>
        <div className='col-md-3'>Wschód słońca: {sunriseWschod}</div>
        <div className='col-md-3'>Zachód słońca: {sunsetZachod}</div>
        <div className='col-md-3'>Siła wiatru: {wind} m/s</div>
        <div className='col-md-3'>Ciśnienie : {pressure}hPa</div>
      </div>
    );
  }
  return (  
    <div className="result">
        {error ? `Nie ma miasta ${city}` : content}
    </div>
  );
}
export default Weather;