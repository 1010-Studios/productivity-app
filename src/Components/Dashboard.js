import React from 'react';
import '../Styles/Dashboard.css';

const Dashboard = () => {
	return (
		<div className='dashboard-container'>
			<ul className='dashboard-buttons'>
				<li>Due Today</li>
				<li>Due Tomorrow</li>
				<li>Due Date</li>
				<li>Completed</li>
				<li>Priority</li>
				<li>Filters!</li>
			</ul>
		</div>
	);
};

export default Dashboard;
