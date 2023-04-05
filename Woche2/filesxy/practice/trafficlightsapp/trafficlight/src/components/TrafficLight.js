import Light from './Light';
// import hooks
import React, { useState, useEffect } from 'react';
const lightDurations = [ 1000, 1200, 1500 ];

const TrafficLight = ({ initialPosition }) => {
	// init light position
	const [ lightPosition, setLightPosition ] = useState(initialPosition);
    const lightDurations = [1000, 1200, 1500];
	// use useEffect hook to update the color index
	useEffect(() => {
		// use a timer to update the color index every few seconds
		const timer = setTimeout(() => {
			// set light position
			setLightPosition((lightPosition + 1) % 3);
		}, lightDurations[lightPosition]);

		// return a cleanup function to stop the timer
		return () => {
			clearTimeout(timer);
		};
	});

	return (
		<div className="lightsContainer">
			<Light color={'red'} active={lightPosition == 0} />
			<Light color={'yellow'} active={lightPosition == 2} />
			<Light color={'green'} active={lightPosition == 1} />
		</div>
	);
};

export default TrafficLight;

/*	const switchToRed = (isRightLight) => {
		var lightstate = isRightLight
			? { first: rightLight.first, second: rightLight.second, third: rightLight.third }
			: { first: leftLight.first, second: leftLight.second, third: leftLight.third };
		setTimeout(() => {
			console.log('in 1.st timeout');

			lightstate.third = false;
			lightstate.second = true;
			isRightLight ? setRightLight(lightstate) : setLeftLight(lightstate);
			dunno(isRightLight, lightstate);
		}, 1000); 
		
		
	};

	const dunno = (isRightLight,lightstate) =>{
		setTimeout(() => {
			console.log("in 2. timeout");
			lightstate.second = false;
			lightstate.first = true;
			isRightLight ? setRightLight(lightstate) : setLeftLight(lightstate);
		}, 3000);
	}

	const switchToGreen = (isRightLight) => {
		var lightstate = isRightLight
			? { first: rightLight.first, second: rightLight.second, third: rightLight.third }
			: { first: leftLight.first, second: leftLight.second, third: leftLight.third };
		setTimeout(() => {
			console.log('in 1.st timeout');

			lightstate.first = false;
			lightstate.second = true;
			isRightLight ? setRightLight(lightstate) : setLeftLight(lightstate);
		}, 1000);
		
		setTimeout(() => {
			console.log("in 2. timeout");
			lightstate.second = false;
			lightstate.third = true;
			isRightLight ? setRightLight(lightstate) : setLeftLight(lightstate);
		}, 3000);
	};*/
