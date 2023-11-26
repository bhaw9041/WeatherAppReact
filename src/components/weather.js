import React, { useState } from 'react';
import '../style.css'
import moment, { min } from 'moment';

const CardExampleCard = ({ weatherData }) => {
  const [click, setClicked] = useState(false)
  const parsedDateTime = moment(weatherData[0].dt_txt, 'YYYY-MM-DD HH:mm:ss');
  let minTemp = 100;
  let maxTemp = -100;

  for(let i = 0; i < weatherData.length; i++){
    if(weatherData[i].main.temp_min < minTemp){
      minTemp = weatherData[i].main.temp_min
    }
    if(weatherData[i].main.temp_max > maxTemp){
      maxTemp = weatherData[i].main.temp_max
    }
  }

  return (
    <div className='cardWrapper'>
      <div className="main" onClick={() => setClicked(!click)}>
        <p className="header">{weatherData[0].name}</p>
        <div className="flex">
          <p className="day">{parsedDateTime.format('dddd')}, <span>{parsedDateTime.format('LL')}</span></p>
          <p className="desc">Weather Description: {weatherData[0].weather[0].main} <img src={`${process.env.REACT_APP_ICON_URL}/${weatherData[0].weather[0].icon}@2x.png`} width={30} height={30} /></p>

        </div>

        <div className="flex">
          <p className="maxtemp">Max. Temperature: {maxTemp} &deg;C</p>
          <p className="mintemp">Min. Temperature: {minTemp} &deg;C</p>
        </div>
      </div>
      <div>
        {click && <table>
          <tr>
            <th>Time</th>
            <th>Temp</th>
            <th>Weather Description</th>
          </tr>
          {weatherData.map(it => {
            return (
              <tr key={it.dt_txt}>
                <td>{moment(it.dt_txt, 'YYYY-MM-DD HH:mm:ss').format('LT')}</td>
                <td>{it.main.temp}</td>
                <td>{it.weather[0].main}</td>
              </tr>
            )
          })}
        </table>}
      </div>
    </div>
  )
}

export default CardExampleCard;