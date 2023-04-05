import './App.css';
import Light from './components/Light';
import React, { useState, useEffect } from 'react';
import TrafficLight from './components/TrafficLight';
function App() {
	return (
		<div className="container">
			<div className="centerclass">
				<TrafficLight initialPosition={0}/>
				<TrafficLight initialPosition={1}/>
				
			</div>
		</div>
	);
}

export default App;
