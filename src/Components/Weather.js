import React from 'react';

import '../Styles/Weather.css';
import WeatherCard from './WeatherCard';
import getWeather from '../Logic/getWeather';

const Weather = () => {
	return (
		<div className='container-weather'>
			<WeatherCard />
		</div>
	);
};

export default Weather;
