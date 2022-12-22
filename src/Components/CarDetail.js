
import React, { useState } from 'react';

import '../css/Common.css';
import '../css/carousel.css';
import PageHeader from './Util/PageHeader';
import GradButton from './Util/GradButton';
import '../css/shop.css'
import { useParams } from "react-router-dom";

import {getCar} from './Cars.js'

import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import Carousel from './Carousel.js';


const CarDetail = (props) => {
	let { id } = useParams(); 

	const data = getCar(id);
	console.log(data)

	const setting = {
		dragSpeed: 1.25,
		itemWidth: 300,
		itemHeight: 180,
		itemSideOffsets: 15,
	  }
  
	  const itemStyle = {
		width: `${setting.itemWidth}px`,
		height: `${setting.itemHeight}px`,
		margin: `0px ${setting.itemSideOffsets}px`
	  }
  

	let items = []
	for(var i  = 0; i < data.imagesExterior.length; ++i) {
		items.push(
			<div>
				<img src={data.imagesExterior[i]} />
			</div>
		)
	}

  return (
	
    <div className="cardetail">
		<div className="regwrapper">
			<div className="sec2">
				<div className="row">
					<div className="text shMed"> {data.title}</div>
				</div>
				<div className="row mtop10" >
					<div className="col-md-auto text text2">${data.price} </div>
					<div className="col-md-auto text text2" style={{color: "lightgrey"}}> |</div>
					<div className="col-md-auto text text2">{data.mileage} miles </div>
					<div className="col-md-auto text text2" style={{color: "lightgrey"}}> |</div>
					<div className="col-md-auto text text2">{data.battery} %</div>
				</div>
				<div className="row mtop75">
					<div className="col-md-6">
						<div className="maxsizeimgwrapper">
							<img src={data.imageMain} className="maxsizeimg"></img>
						</div>
					</div>
					<div className='col-md-6'>
						<div className="col-md-12">
							<div className="text shSmall bold">Exterior</div>
							<Carousel _data={items} {...setting}>{
								items.map((i, _i) => (
								<div
									key={_i}
									className='item'
									style={{ ...itemStyle }}>
									<p>{i}</p>
								</div>
								))
								}
							</Carousel>
						</div>
						<div className="col-md-12">
							<div className="text shSmall bold">Interior</div>
							<Carousel _data={items} {...setting}>{
								items.map((i, _i) => (
								<div
									key={_i}
									className='item'
									style={{ ...itemStyle }}>
									<p>{i}</p>
								</div>
								))
								}
							</Carousel>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
  );
}



export default CarDetail ;


