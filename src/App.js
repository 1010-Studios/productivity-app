import './App.css';
import Logo from './Components/Logo';
import WeatherCard from './Components/WeatherCard';
import Dashboard from './Components/Dashboard';
import Sidebar from './Components/Sidebar';
import Content from './Components/Content';

function App() {
	return (
		<div className='App'>
			<Logo />
			<WeatherCard />
			<Dashboard />
			<Sidebar />
			<Content />
		</div>
	);
}

export default App;
