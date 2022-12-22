import React from 'react';
import VisitBtn from './Util/GradButton'
import '../css/Landing.css';
import '../css/Common.css';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

import {getArticle, getRecentArticles} from './News/Articles/articles.js'

const Landing = () => {

	let news = []
	let newsnumbers = getRecentArticles()
	let newslist = []


	newsnumbers.forEach((number) => {
		newslist.push(getArticle(number))
		console.log(getArticle(number))
	});


	for(var i = 0; i < newslist.length; ++i) {

		let tags = []

		for(var j = 0; j < newslist[i].tags.length; ++j) {
			tags.push(
				<span className="tag">{newslist[i].tags[j]}</span>
			)
		}

		news.push(
			<div className="newspreview col-12">
				<a href={'/News/' + newslist[i].urlslug} className="newslink">
				<div className="row newswrapper">
					<div className="col-sm-12 col-md-8 textwrapper">
						{tags}
						<div className="newsheading"> {newslist[i].title} </div>
						<div className="newsdescriptors">
							<span className="newsdescriptor"> {newslist[i].date} </span>
						</div>
					</div>
					<div className="col-sm-12 col-md-3 hideonsmall">
						<div className="imgwrappercenter imgwrapper hideonsmall">
							<div className="maxsizeimgwrapper newsborderrad">
								<img src={require(`../assets/news/${newslist[i].image}`)} className="maxsizeimg newsborderrad"></img>
							</div>
						</div>
					</div>
				</div>
				</a>
			</div>
				
		)
	}


  return (
	<div className="landing">
		<div className="initialLanding background-tint">
			<div className="text hMed header">
				Bold electric vehicles, elegant and affordable
			</div>

			<div className="initbrowse" onClick={() => window.location.href = "/Shop"}>
				Browse Cars &#8594;
			</div>
		</div>

		<div className="sec1">
			<div className="regwrapper">
				<div className="row">
					<div className="col-md-5">
						<div className="text shMed">
							We are the leaders in the used electric vehicle industry
						</div>
						
					</div>
					<div className="col-md-6 offset-md-1">
						<div className="text text125 grey">
							At Dynamo we strive to excel in every service we provide, adding value to our customers wherever possible, and thereby attaining national leadership in the automative industry
						</div>

						<div className="text text2 LearnMore" style={{marginTop: "30px"}} >
							Learn More &#x2197;
						</div>
					</div>
				</div>

				<div style={{height: "15vh", marginTop: "80px"}}>
					<div className="maxsizeimgwrapper">
						<img src="https://robbreport.com/wp-content/uploads/2022/04/avinya06.jpg?w=1000" alt="car" className="maxsizeimg"/>
					</div>
				</div>

				<div className="text hSmall text-center" style={{marginTop: "150px"}}>
					Best-in-class Features
				</div>
				<div className="text text125 grey text-center" style={{marginTop: "20px"}}>
					Dynamo is your one-stop shop to sell and buy electric vehicles
				</div>


			
				<div className="row mtop75">
					<div className="col-md-4">

						<div className="text shLarge thinfont grey">01 </div>
						<div className="text text2 boldtext mtop10">Quality Choces</div>
						<div className="text text125 grey mtop10">Dynamo features thousands of inspected cars that can be easily bought in just a few hours</div>
						<LearnMore />
					</div>
					<div className="col-md-4">

						<div className="text shLarge thinfont grey">01 </div>
						<div className="text text2 boldtext mtop10">Quality Choces</div>
						<div className="text text125 grey mtop10">Dynamo features thousands of inspected cars that can be easily bought in just a few hours</div>
						<LearnMore />
					</div>
					<div className="col-md-4">

						<div className="text shLarge thinfont grey">01 </div>
						<div className="text text2 boldtext mtop10">Quality Choces</div>
						<div className="text text125 grey mtop10">Dynamo features thousands of inspected cars that can be easily bought in just a few hours</div>
						<LearnMore />
					</div>
				</div>

				<div className="text hSmall text-center" style={{marginTop: "150px"}}>
					Featured Car
				</div>
				<div className="text text125 grey text-center" style={{marginTop: "20px"}}>
					View our featured car of the day
				</div>

				<div className="sec1inneractionwrapper " style={{marginTop: "75px"}}>
					<div className="text text2  text-center boldtext">
						Kia EV6
					</div>

					<div style={{marginLeft: "0px !important", marginTop: "50px"}}>
						<div className="maxsizeimgwrapper">
							<img src="https://www.westsidekia.com/static/brand-kia/vehicle/2022/EV6/2022-ev6-glacier-white.png" alt="car" className="maxsizeimg"/>
						</div>
					</div>

					<div className="row mtop75">
						<div className="col-sm-4">
							<div className="text text2 text-center">$32,400</div>
							<div className="text grey text123 text-center">Cost</div>
						</div>
						<div className="col-sm-4">
							<div className="text text2 text-center">118K</div>
							<div className="text grey text123 text-center">Miles</div>
						</div>
						<div className="col-sm-4">
							<div className="text text2 text-center">72%</div>
							<div className="text grey text123 text-center">Battery</div>
						</div>
					</div>

					<div className="text text2 viewdetailbutton">
						View Details &#8594;
					</div>
				</div>


				<div className="text hSmall text-center" style={{marginTop: "150px"}}>
					All Cars
				</div>
				<div className="text text125 grey text-center" style={{marginTop: "20px"}}>
					View all our cars for sale, and search on specific criteria
				</div>

				<div className="row justify-content-center" style={{marginTop: "40px"}}>

				<ButtonToolbar aria-label="Toolbar with button groups" style={{"padding": "10px"}} className="justify-content-center">
					<ButtonGroup><Button variant="dark">SUVs</Button></ButtonGroup>
					<ButtonGroup><Button variant="dark">Trucks</Button></ButtonGroup>
					<ButtonGroup><Button variant="dark">Sedans</Button></ButtonGroup>
					<ButtonGroup><Button variant="dark">Luxury</Button></ButtonGroup>
					<ButtonGroup><Button variant="dark">Sports</Button></ButtonGroup>
					<ButtonGroup><Button variant="dark">Coupes</Button></ButtonGroup>
					<ButtonGroup><Button variant="dark">Convertibles</Button></ButtonGroup>
				</ButtonToolbar>

				</div>

				<div className="row" style={{marginTop: "25px"}}>
					<CarCard />
					<CarCard />
					<CarCard />
				</div>

				<div className="squarebutton">
					View All Cars &#8594;
				</div>



				<div className="text hSmall text-center" style={{marginTop: "150px"}}>
					Sell a Car
				</div>
				<div className="text text125 grey text-center" style={{marginTop: "20px"}}>
					No hassles, no fees, no middlemen
				</div>

				<div className="row mtop75">
					<div className="col-md-6">
						
					</div>
					<div className="col-md-6">
						<div classNAme="maxsizeimgwrapper">
							<img src="https://media.cnn.com/api/v1/images/stellar/prod/210816093306-tesla-autopilot-software-file-restricted.jpg?q=w_2000,h_1334,x_0,y_0,c_fill" alt="car" className="maxsizeimg"/>
						</div>
					</div>
				</div>"


				<div className="text hSmall text-center" style={{marginTop: "150px"}}>
					Blog
				</div>
				<div className="text text125 grey text-center" style={{marginTop: "20px"}}>
					Learn more about recent news, car tips, and more
				</div>
				
				<div className="row justify-content-center mtop75" style={{marginBottom: "20px"}}>
					{news}
				</div>	


			</div>
		</div>
	</div> 
  );
}

export default Landing;

const LearnMore = () => {
	return(
		<div className="text text125 LearnMore" style={{marginTop: "30px"}}>
			Learn More &#x2197;
		</div>
	)
}

const CarCard = () => {
	return(
		<div className="col-md-4 carcard" style={{borderRadius: "1.5rem"}}>
			<div className="" style={{backgroundColor: "black", padding: "2rem"}}>
				<div className="text text2 boldtext">Kia</div>
				<div className="text text125 grey">E-tron</div>

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