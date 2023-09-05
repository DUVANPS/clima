import React, { useState } from 'react'


const WeatherCard = ({ weather, temp }) => {
    const [isCelsius, setIsCelsius] = useState(true)
    

    const handleChangeTem = () => setIsCelsius(!isCelsius) 
return (
    
    <article>
        <div className='title'>
        <h1 >Weather App</h1>
        </div>
        <div className='arti'>
        

        <div className='tarjeta'>
            
        <h2>{weather?.name}, {weather?.sys.country}</h2>
        <div>
        <div className='nube'>

            <div className='img'>
        <img src={weather && `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt=""
        />
        </div>

        <section>
        <h3>{weather?.weather[0].description} </h3> 
        <ul>
            <li><span>Wind Speed</span><span> {weather?.wind.speed} m/s</span></li>
            <li><span>Clouds</span><span> {weather?.clouds.all} %</span></li>
            <li><span>Pressure </span>      <span>{  weather?.main.pressure}  hPa</span>   </li>
        </ul>
        </section>
        </div>
        </div>
        <h2>{isCelsius ?  `${temp?.celsius} °C` : `${temp?.farenheit} °F`}</h2>

        </div>
        
        </div>
        <div className='boton'>
        <button className='btn' onClick={ handleChangeTem} >change to °F</button>
        </div>
    </article>
)
}

export default WeatherCard