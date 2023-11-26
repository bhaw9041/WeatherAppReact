import './App.css';
import React, { useEffect, useState } from "react";
import Weather from './components/weather';
import './style.css'
import moment from 'moment';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DayWiseWeather from './components/DaywiseWeather';


export default function App(){
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [data, setData] = useState({});
  

  useEffect(() => {

    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    fetchData();
  }, [lat,long])

  const fetchData = () => {
    if(lat && long){
      fetch(`${process.env.REACT_APP_API_URL}/forecast?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    }

  const dayWise = {};
  const dateWise = {};
  (data.list || []).forEach(element => {
    const date = moment(element.dt_txt, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD')
    const day = moment(element.dt_txt, 'YYYY-MM-DD HH:mm:ss').format('dddd').toLowerCase()

    if(!dateWise[date]){
      dateWise[date] = [element]
      dayWise[day] = [element]
    }else {
      dateWise[date].push(element)
      dayWise[day].push(element)
    }
  });

  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<div >{(Object.keys(dateWise) || []).map(it => <Weather key={dateWise[it][0].dt_txt} weatherData={dateWise[it]}/>)}</div>} />
          <Route path="/:day" element={<DayWiseWeather dayWise={dayWise}/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
  
}


