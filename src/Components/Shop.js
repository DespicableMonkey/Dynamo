
import React, { useState } from 'react';

import '../css/Common.css';
import PageHeader from './Util/PageHeader';
import GradButton from './Util/GradButton';
import CarCard from './CarCard'
import '../css/shop.css'
const Shop = (props) => {
  return (
	
    <div className="shop">
		<div className="search">
			<input type="text" className="searchbar" placeholder="Search by Make, Model, or Keyword"></input>
			{/* <i className="fas fa-search"></i> */}
		</div>

		<div className="row" >
			<div className="col-md-3" style={{paddingLeft: "0px"}}>
				<div className="filterwrapper">
					<div className="text text175 text-center">Filter</div>

					<div className="row">
						<div className="col-md-auto filtercircle">2021-2023 &nbsp; <i className="fa fa-times"></i></div>
						<div className="col-md-auto filtercircle">Sedan &nbsp; <i className="fa fa-times"></i></div>
						<div className="col-md-auto filtercircle">Tesla &nbsp; <i className="fa fa-times"></i></div>
						<div className="col-md-auto filtercircle">0-30K Miles &nbsp; <i className="fa fa-times"></i></div>
					</div>

					<hr></hr>
					<div className="row">
						<span className="text text125"><i className="fa fa-bars"></i>&nbsp; &nbsp; Sort By</span>
						
					</div>
					<hr></hr>
					<FilterItem name="Make" options={["Honda","Tesla","Rivian"]} />
					<FilterItem name="Prince" options={["Honda","Tesla","Rivian"]} />
					<FilterItem name="Mileage" options={["Honda","Tesla","Rivian"]} />
					<FilterItem name="Features" options={["Honda","Tesla","Rivian"]} />
					<FilterItem name="Interior Color" options={["Honda","Tesla","Rivian"]} />
					<FilterItem name="Exterior Color" options={["Honda","Tesla","Rivian"]} />
					<FilterItem name="Body Type" options={["Honda","Tesla","Rivian"]} />
					<FilterItem name="Battery Health" options={["Honda","Tesla","Rivian"]} />
					<hr></hr>

					<div className="viewdetailbutton" style={{marginLeft: "10px", marginRight: "10px"}}>Compare Cars</div>
				</div>
			</div>
			<div className="col-md-9">
				<div className="row" style={{paddingTop: "0px"}}>
					<CarCard />
					<CarCard />
					<CarCard />
					<CarCard />
					<CarCard />
					<CarCard />
					<CarCard />

				</div>
			</div>
		</div>
    </div>
  );
}

const FilterItem = (props) => { 
	const [open, setOpen] = useState(false);

	let options = [];
	for(let i = 0; i < props.options.length; i++){ 
		options.push(
			<div className="offset-md-1 col-md-11">
				<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style={{color: "white"}}></input> &nbsp; <span className="text text125"> {props.options[i]} </span>
			</div>
		)
	}

	return (
		<div className="shop">
				<div className="filterrow" onClick={() => setOpen(!open)}>
					{!open && <div className="text text15"> {props.name} <i className="fa fa-chevron-right righticon"></i></div>}
					{open && <div className="text text15"> {props.name} <i className="fa fa-chevron-down righticon"></i></div>}
				</div>

				{ open && 
				<div className="row">
					{options}
				</div>
				}

			<div className="dividerRw"></div>
		</div>
	)
	
}


export default Shop ;


