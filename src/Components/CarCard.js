import React, { useState } from 'react';

import '../css/Common.css';

const CarCard = () => {
	return(
		<div className="col-md-4 carcard">
			<div className="innercarddetails">
				<div className="text text2 boldtext">Kia</div>
				<div className="text text125 grey">2022 E-tron</div>

				<div className="maxsizeimgwrapper" style={{marginTop: "20px", marginBottom: "20px"}}>
					<img src="https://www.westsidekia.com/static/brand-kia/vehicle/2022/EV6/2022-ev6-glacier-white.png" alt="car" className="maxsizeimg"/>	
				</div>
				<div className="tag" style={{marginBottom: "20px"}}>New</div>
				<div className="row">
					<div className="text text175 col-12 text-center">$32,400</div>
				</div>
				<div className="row justify-content-center" style={{marginTop: "20px"}}>
					<div className="col-sm-3 centervert centerverthor">
						<i className="fa fa-car" style={{color: "white", marginBottom: "5px"}}></i>
						<span className="text text125 grey">312K</span>
					</div>
					<div className="col-sm-3 centervert centerverthor">
						<i className="fa fa-calendar" style={{color: "white", marginBottom: "5px"}}></i>
						<span className="text text125 grey">2022</span>
					</div>
					<div className="col-sm-3 centervert centerverthor">
						<i className="fa fa-battery-half" style={{color: "white", marginBottom: "5px"}}></i>
						<span className="text text125 grey">71%</span>
					</div>
				</div>
				<div className="text text125 viewdetailbutton">
						View Details &#8594;
					</div>
			</div>
		</div>
	)
}

export default CarCard;