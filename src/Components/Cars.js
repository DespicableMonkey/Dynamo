import { Grade } from '@mui/icons-material';
import React, { useState } from 'react';
import {GradButton} from './Util/GradButton';
const Cars = [
	{
		"title": "2022 Kia E-tron",
		"price": 50000,
		"mileage": 10000,
		"battery": 71,
		"id": 1000,
		"urlslug": "1000",
		"year": 2022,
		"make": "Kia",
		"model": "E-tron",
		"imagesInterior":["https://img2.carmax.com/img/vehicles/23143022/10.jpg?width=400&ratio=4/3", "https://img2.carmax.com/img/vehicles/23143022/11.jpg?width=400&ratio=4/3", "https://img2.carmax.com/img/vehicles/23143022/12.jpg?width=400&ratio=4/3", "https://img2.carmax.com/img/vehicles/23143022/14.jpg?width=400&ratio=4/3", "https://img2.carmax.com/img/vehicles/23143022/15.jpg?width=400&ratio=4/3", "https://img2.carmax.com/img/vehicles/23143022/20.jpg?width=400&ratio=4/3", "https://img2.carmax.com/img/vehicles/23143022/16.jpg?width=400&ratio=4/3", "https://img2.carmax.com/img/vehicles/23143022/21.jpg?width=400&ratio=4/3", "https://img2.carmax.com/img/vehicles/23143022/13.jpg?width=400&ratio=4/3"],
		"imagesExterior":["https://img2.carmax.com/img/vehicles/23143022/5.jpg?width=400&ratio=4/3", "https://img2.carmax.com/img/vehicles/23143022/3.jpg?width=400&ratio=4/3", "https://img2.carmax.com/img/vehicles/23143022/6.jpg?width=400&ratio=4/3", "https://img2.carmax.com/img/vehicles/23143022/7.jpg?width=400&ratio=4/3", "https://img2.carmax.com/img/vehicles/23143022/1.jpg?width=400&ratio=4/3", "https://img2.carmax.com/img/vehicles/23143022/4.jpg?width=400&ratio=4/3", "https://img2.carmax.com/img/vehicles/23143022/2.jpg?width=400&ratio=4/3", "https://img2.carmax.com/img/vehicles/23143022/8.jpg?width=400&ratio=4/3"	],
		"imagePan": "",
		"imageMain": "https://assets.stickpng.com/images/61fc15f880bcb6000427cd01.png",
		"keys": 2,
		"drivetype": "AWD",
		"colorInterior": "Black",
		"colorInterior": "White",
		"features": {
			"Comfort": ["Air Conditioning", "Memory Seats", "Front Seat Heater", "Reat Seat Heater", "Skylight", "Heated Steering Wheel"],
			"Entertainment": ["Surround Sound Speakers", "AM/FM Radio"],
			"Tech": ["Full Self Driving", "Navigation", "Bluetooth", "USB", "Apple CarPlay", "Android Auto", "Automated Cruise Control", "Lane Keep Assist", "Rear View Camera", "Parking Sensors", "Remote Start"],
			"Interior": ["Power Locks", "Power Windows", "Power Seats", 'Power Mirrors'],
			"Exterior": ["Alloy Wheels", "Tinted Windows", "Spoiler", "Roof Rack", "Running Boards", "Tow Package", "Fog Lights", "Heated Mirrors"],
			"Mechanical": ["Automatic Transmission"]
		},
		"History": {
			"Age": 1,
			"Country": "USA",
			"License": "CPW1021",
			"Ownership": 1,
			"Usage": "Personal - Light",
			"Accidents": 0,
				"Front": false,
				"Rear": false,
				"Left": false,
				"Right": false,
				"Interior": false,
				"Fire": false,
				"Water": false,
				"Mechanical": false,
				"Other": false
			},
			"comments": "Lighly used tesla. No accidents. No damage. Clean title. Selling to buy larger car for our family."
		}
	]

export const getCar = (id) => {
	let ret = Cars[Cars.length - 1];
	Cars.forEach(article => {
		if(article.urlslug && article.id === id) {
			ret = article;
			return;
		}
	})
	return ret;
}

export const getRecentCars = () => {
	return [
		1000,
		1001,
		1002
	]
}