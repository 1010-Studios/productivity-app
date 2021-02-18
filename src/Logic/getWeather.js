async function getWeather() {
	const key = `?key=c71c1ba2dc2742deb58180612211002`;
	const city = 'calgary';
	const response = await fetch(
		`http://api.weatherapi.com/v1/forecast.json${key}&q=${city}&days=3`
	);
	if (!response.ok) throw new Error(`Error! ${response.status}`);
	else {
		const data = await response.json();
		const location = `${data.location.name}, ${data.location.region}`;
		const curTemp = data.current.temp_c;
		const feelsLike = data.current.feelslike_c;
		const icon = data.current.condition.icon;
		const text = data.current.condition.text;
		const lastUpdate = data.current.last_updated;
		console.log(data);
		return { location, curTemp, feelsLike, icon, text, lastUpdate };
	}
}

export default getWeather;
