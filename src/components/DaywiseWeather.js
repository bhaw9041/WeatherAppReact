import React, { useState } from 'react';
import '../style.css'
import moment from 'moment';
import { useParams } from "react-router-dom";

const DayWiseWeather = ({dayWise}) => { 
//   const parsedDateTime = moment(weatherData[0].dt_txt, 'YYYY-MM-DD HH:mm:ss');
const {day} = useParams()
console.log({dayWise, day})
const lowerDay = day.toLowerCase();
let dayData = [];
if(dayWise[lowerDay]){
    dayData = dayWise[lowerDay]
}
  return (
    <div className='cardWrapper'>
        <table>
          <tr>
            <th>Time</th>
            <th>Min Temp</th>
            <th>Max Temp</th>
            <th>Weather Description</th>
          </tr>
          {dayData && dayData.map(it => {
            return (
              <tr key={it.dt_txt}>
                <td>{moment(it.dt_txt, 'YYYY-MM-DD HH:mm:ss').format('LT')}</td>
                <td>{it.main.temp_min}</td>
                <td>{it.main.temp_max}</td>
                <td>{it.weather[0].main}</td>
              </tr>
            )
          })}
        </table>
  </div>
)}

export default DayWiseWeather;
