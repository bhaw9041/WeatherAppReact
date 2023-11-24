import React from 'react';
import { Card } from 'semantic-ui-react'
import '../style.css'
import moment from 'moment';

const CardExampleCard = ({weatherData}) => (

    <div className="main">
      <p className="header">{weatherData.name}</p>
      <div className="flex">
        <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
        <p className="desc">Weather Description: {weatherData.weather[0].main}</p>
      </div>

      <div className="flex">
        <p className="maxtemp">Max. Temperature: {Math.round(weatherData.main.temp_max)} &deg;C</p>
        <p className="mintemp">Min. Temperature: {Math.round(weatherData.main.temp_min)} &deg;C</p>
      </div>    
  </div>

//     <div className="main">
//       <p className="header">{weatherData.name}</p>
//       <div>
//         <p className="day">Day: {moment().format('dddd')}</p>
//       </div>

//       <div>
//         <p className="mintemp">Max. Temperature: {Math.round(weatherData.main.temp_max)} &deg;C</p>
//       </div>
//       <div>
//         <p className="maxtemp">Min. Temperature: {Math.round(weatherData.main.temp_min)} &deg;C</p>
//       </div>
//       <div>
//         <p className="desc">Description: {weatherData.weather[0].description}</p>
//       </div>
      
//   </div>

//   <Card>
//     <Card.Content>
//         <div className="main">
//             <Card.Header className="header">{weatherData.name}</Card.Header>
        
//         <div>
//             <p className="day">Day: {moment().format('dddd')}</p>
//        </div>

//        <div>
//             <p className="temp">Max. Temperature: {Math.round(weatherData.main.temp_max)} &deg;C</p>
//        </div>
//        <div>
//             <p className="temp">Min. Temperature: {Math.round(weatherData.main.temp_min)} &deg;C</p>
//        </div>
//        <div>
//             <p className="temp">Description: {weatherData.weather[0].description}</p>
//        </div>
//        </div>

//         {/* <p>Max. Temperature(°C): {Math.round(weatherData.main.temp_max)}</p> */}
//         {/* <p>Min. Temperature(°C): {Math.round(weatherData.main.temp_min)}</p> */}

//         {/* <p>Description: {weatherData.weather[0].description}</p> */}
//         {/* <p>Icon: {weatherData.weather[0].icon}</p>  */}
//         {/* <p>Day: {moment().format('dddd')}</p> */}

//     </Card.Content>
//   </Card>
)

export default CardExampleCard;
