import React, { useState } from 'react';
import '../style.css'
import moment from 'moment';

const CardExampleCard = ({ weatherData }) => {
  const [click, setClicked] = useState(false)
  const parsedDateTime = moment(weatherData[0].dt_txt, 'YYYY-MM-DD HH:mm:ss');
  return (
    <div className='cardWrapper'>
      <div className="main" onClick={() => setClicked(!click)}>
        <p className="header">{weatherData[0].name}</p>
        <div className="flex">
          <p className="day">{parsedDateTime.format('dddd')}, <span>{parsedDateTime.format('LL')}</span></p>
          <p className="desc">Weather Description: {weatherData[0].weather[0].main} <img src={`${process.env.REACT_APP_ICON_URL}/${weatherData[0].weather[0].icon}@2x.png`} width={30} height={30} /></p>

        </div>

        <div className="flex">
          <p className="maxtemp">Max. Temperature: {Math.round(weatherData[0].main.temp_max)} &deg;C</p>
          <p className="mintemp">Min. Temperature: {Math.round(weatherData[0].main.temp_min)} &deg;C</p>
        </div>
      </div>
      <div>
        {click && <table>
          <tr>
            <th>Time</th>
            <th>Min Temp</th>
            <th>Max Temp</th>
            <th>Weather Description</th>
          </tr>
          {weatherData.map(it => {
            return (
              <tr key={it.dt_txt}>
                <td>{moment(it.dt_txt, 'YYYY-MM-DD HH:mm:ss').format('LT')}</td>
                <td>{it.main.temp_min}</td>
                <td>{it.main.temp_max}</td>
                <td>{it.weather[0].main} </td>
              </tr>
            )
          })}
        </table>}
      </div>
    </div>
  )
}

export default CardExampleCard;
