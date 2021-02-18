import React from 'react';
import getWeather from '../Logic/getWeather';
import '../Styles/WeatherCard.css';

class WeatherCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			location: '',
			maxTemp: '',
			lowTemp: '',
			icon: '',
			text: '',
			curTemp: '',
			feelsLike: '',
			lastUpdate: '',
		};
	}

	componentDidMount() {
		getWeather().then((data) => {
			this.setState({
				location: data.location,
				text: data.text,
				icon: data.icon,
				curTemp: data.curTemp,
				feelsLike: data.feelsLike,
				lastUpdate: data.lastUpdate,
			});
		});
	}

	render() {
		return (
			<div className='container-weather'>
				<h4>{this.state.location}</h4>
				<div className='weather-content'>
					<div className='weather-condition'>
						<img src={this.state.icon} alt={this.state.text} />
						<p>{this.state.text}</p>
						<p>Last update: {this.state.lastUpdate}</p>
					</div>
					<div className='weather-temperature'>
						<p>Temperature:{this.state.curTemp}</p>
						<p>Feels Like:{this.state.feelsLike}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default WeatherCard;
