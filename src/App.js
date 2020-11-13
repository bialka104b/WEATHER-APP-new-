import React from 'react';
import Titles from './Components/titles.js';
import Form from './Components/form.js';
import Weather from './Components/weather.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//Mój klucz Api
const API_KEY = 'a2ea0612394be368851b14848509294b';

class App extends React.Component{
  state = {
    value: '',
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    error: false
  }
  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  handleCitySubmit = (e) => {
    e.preventDefault();
    const API = `//api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${API_KEY}&units=metric`;

    fetch(API)
    .then(response => {
      if(response.ok) {
        return response
      }
      throw Error('Nie udało się');
    })
    .then(response => response.json())
    .then(data => {
      const time = new Date().toLocaleString()
      
      this.setState(state => ({
        error: false,
        date: time,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        temp: data.main.temp,
        pressure: data.main.pressure,
        wind: data.wind.speed,
        city: state.value,
      }))
    })
    .catch(error => {
      console.log(error)
      this.setState(state =>({
        error:true,
        city: state.value
      }))
    })
  }

  render(){
    return(
      <div className="App">
        
        <Titles />
        <Form 
        value={this.state.value} 
        change={this.handleInputChange}//zmiana
        submit={this.handleCitySubmit}
        />
        
        <Weather
          weather={this.state}
        />
        <div id="button">Add!</div>
        <div className="items">
          <div className="list"></div> 
        </div>
      </div>
    )
  }
}
export default App;