
import React, { useState } from 'react';
import '../../css/Common.css';
import PageHeader from '../Util/PageHeader';
import GradButton from './../Util/GradButton';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Name = (props) => {

	let FAQS = [];

	let questions = [
		"How do I pick up a car I booked online?",
		"How long can I reserve a car for?",
		"Will Dynamo fix damages to my car?",
		"Can I purchase an extended warranty?",
		"Do I buy a car from Dynamo or directly from the seller?",
		"How do I sell a car on Dynamo?",
		"Can I see cars in person before buying?",
		"How do I buy chargers and other accessories?",
		"Does Dynamo deliver accessories that I buy from The Plug?"
	]
	let answers = [
		"After reserving your car on our website, you can make your way to the in-person location of your choosing, where our salespeople will help you close the deal and go home with the car.",
		"Once you reserve a car, you have 30 days to come to our location and officially buy it, or else the car will become available to buyers.",
		"Dynamo offers a warranty for either 60 days or 1000 miles, during which it will repair certain damages as well as any defects that may have been present at the time of the sale.",
		"Dynamo does not offer any additional warranties beyond 60 days or 1000 miles.",
		"Dynamo owns all cars on sale, which have already been bought from the seller. Buying from Dynamo is just like buying from any other dealership.",
		"When you come to Dynamo looking to sell a vehicle, we will inspect it for any damages, give an official value, and take pictures of the vehicle. After quoting the car, we will pay you on the spot and the transaction will be complete.",
		"After reserving a car, you will be able to see the car in person at our dealerships before deciding on whether or not to complete the purchase.",
		"You can visit The Plug either online or at our physical stores to see the assortment of accessories that Dynamo offers and choose which ones to buy.",
		"Dynamo does not offer any delivery services, but you can buy accessories online at The Plug and then pick them up at our stores."
	]

	for (var i = 0; i < questions.length; ++i) {
		FAQS.push(
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography>Q: {questions[i]}</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>A: {answers[i]}</Typography>
				</AccordionDetails>
			</Accordion>
		);
	}


  return (
	
    <div className="">
			<div className="sec1">
				<div className='regwrapper'>
					<h2 className="headinggrad"></h2>
					<h2 className="text shMed">Contact Us</h2>
					<br />
					<p className="text text2">
						Talk with our chatbot to get started with any questions you may have.
						<br />
						<GradButton text="Email Us: paruchuri@pulkith.com" link="mailto:paruchuri@pulkith.com" />
					</p>
					<p className="text text2">
						We make it a priority to respond to all messages within 12 hours. 
						<br />
					</p>
						<FloatingLabel controlId="floatingTextarea" label="Full Name" className="mb-3">
							<Form.Control as="textarea" placeholder="Full Name" />
						</FloatingLabel>
						<FloatingLabel controlId="floatingTextarea" label="Email" className="mb-3">
							<Form.Control as="textarea" placeholder="Full Name" />
						</FloatingLabel>
						<FloatingLabel controlId="floatingTextarea" label="Phone Number" className="mb-3">
							<Form.Control as="textarea" placeholder="Phone Number" />
						</FloatingLabel>
						<FloatingLabel controlId="floatingTextarea2" label="Questions or Comments" color="black">
							<Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }}/>
						</FloatingLabel>
						<Button type="submit" className="mtop10">Submit form</Button>
					<br />

					<div className="text text2 mtop75">
						You can also contact us by phone, email, or social media
						<div className="row " style={{marginTop: "26px"}}>
							<div className="col-md-3"><div className="text text125 text-center"><i className="fa fa-phone"></i> +1 (347) 855-4840</div></div>
							<div className="col-md-3"><div className="text text125 text-center"><i className="fa fa-envelope"></i> contact@dynamo.pulkith.com</div></div>
							<div className="col-md-3"><div className="text text125 text-center"><i className="fa fa-twitter-square"></i> @dynamocars</div></div>
							<div className="col-md-3"><div className="text text125 text-center"><i className="fa fa-instagram"></i> @dynamocars</div></div>
							
						</div>
					</div>
					
					{/* <GradButton text="Send a Message" /> */}
				</div>
			</div>
			<div className="sec2">
				<div className="regwrapper">
					<div className="text shMed" style={{marginBottom: "10px"}}>Frequently Asked Questions</div>
					
					{FAQS}
				</div>
			</div>
			<div className="sec1">
				<div className="regwrapper">
					<div className="text shMed">Our Location</div>
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13678297.1131418!2d-114.68353271484375!3d33.17664043594348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3e04802e6757%3A0x5bb75dc1d9552b04!2sHeritage%20High%20School!5e0!3m2!1sen!2sus!4v1671589312530!5m2!1sen!2sus" width="100%" height="600px" frameBorder="0" style={{border: "0px"}} className="mtop10" allowfullscreen s></iframe>
				</div>
			</div>
			<div className="sec2">
				<div className="sec2inneractionwrapper">
					<div className="text shMed text-center">BPA Information</div>
					{/* <div className="text shMed text-center">BPA Information</div>
					<div className="divider" style={{width: "85%", height: "1px", backgroundColor: "gray", margin: "auto", marginTop: "7px", marginBottom: "7px"}}></div>
					<div className="text text125 text-center">Pirtle Chapter</div>
					<div className="divider" style={{width: "10%", height: "1px", backgroundColor: "gray", margin: "auto", marginTop: "7px", marginBottom: "7px"}}></div>
					<div className="text text125 text-center">Pulkith Paruchuri, Surya Ani, Arin Shrivasta</div>
					<div className="divider" style={{width: "10%", height: "1px", backgroundColor: "gray", margin: "auto", marginTop: "7px", marginBottom: "7px"}}></div>
					<div className="text text125 text-center">Website Design Team 2022-2023</div>
					<div className="divider" style={{width: "10%", height: "1px", backgroundColor: "gray", margin: "auto", marginTop: "7px", marginBottom: "7px"}}></div>
					<div className="text text125 text-center">Used Car Sale Website</div>
					<div className="divider" style={{width: "10%", height: "1px", backgroundColor: "gray", margin: "auto", marginTop: "7px", marginBottom: "7px"}}></div>
					<div className="text text125 text-center">Frisco, Texas</div> */}
					<img src={require('../../assets/card.png')} style={{width: "100%"}} className="mtop10"></img>

				</div>
			</div>
    </div>
  );
}


export default Name ;