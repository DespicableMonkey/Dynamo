
import React, { useState } from 'react';

import '../css/shop.css';
import '../css/Common.css';
import PageHeader from './Util/PageHeader';
import GradButton from './Util/GradButton';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import CarCard from './CarCard'

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import Button from 'react-bootstrap/Button';

// import Sonnet from '../../components/Sonnet';

const Name = (props) => {
	const [value, setValue] = useState(null);
  return (
	
    <div className="shop dashboard">
		<div className="sec1">
			<div className="regwrapper">
				<div className="text shMed">My Dashboard</div>

				<div className="text  shSmall boldtext mtop20">Book an Appointment</div>

				<div className="">

				<Tab.Container id="left-tabs-example" defaultActiveKey="first">
				<Row>
					<Col sm={3}>
					<Nav variant="pills" className="flex-column">
						<Nav.Item><Nav.Link eventKey="3">Appointment - General</Nav.Link></Nav.Item>
						<Nav.Item><Nav.Link eventKey="2">Appointment - Sell a Car</Nav.Link></Nav.Item>
						<Nav.Item><Nav.Link eventKey="1">Appointment - Test Drive</Nav.Link></Nav.Item>
						<Nav.Item><Nav.Link eventKey="0">Reserve a Car</Nav.Link></Nav.Item>
					</Nav>
					</Col>
					<Col sm={9}>
					<Tab.Content>
						<Tab.Pane eventKey="0">
							<FloatingLabel controlId="" label="Email address" className="mb-3 mtop10">
								<Form.Control type="email" placeholder="name@example.com" />
							</FloatingLabel>
							<FloatingLabel controlId="" label="Password">
								<Form.Control type="password" placeholder="Password" />
							</FloatingLabel>
						</Tab.Pane>
						<Tab.Pane eventKey="1">
						
						</Tab.Pane>
						<Tab.Pane eventKey="3">
							<div className="text text125">
								Book a general appointment to browse our collecton of cars and get answers to your questions. You will recieve an email confirmation, as well as a reminder email 24 hours before your appointment.
							
							</div>
							<div className="row">
								<div className="col-md-12 mtop20" style={{backgroundColor: "white", padding: "5px", width: "100%"}}>
									<div className="timepick">
										<LocalizationProvider dateAdapter={AdapterDayjs} style={{color: "white", width: "100%", margin: "auto"}}>
											<DateTimePicker
												renderInput={(props) => <TextField {...props} />}
												label="Appointment Time"
												value={value}
												placeholder={"Hi"}
												sx={{ width: "1000%" }}
												onChange={(newValue) => {
												setValue(newValue);
												
												}}
											/>
										</LocalizationProvider>
									</div>
								</div>
								<div className="col-md-12" style={{backgroundColor: "white", padding: "5px", width: "100%"}}>
									<FloatingLabel controlId="floatingTextarea2" label="Comments" style={{marginLeft: "20px", marginRight: "20px"}}>
											<Form.Control
											as="textarea"
											placeholder="Leave a comment here"
											style={{ height: '100px' }}
											/>
									</FloatingLabel>
								</div>
								<div className="col-md-12" style={{backgroundColor: "white", padding: "5px", width: "100%"}}>
									<Button variant="primary" type="submit" className="btn btn-primary btn-block" style={{marginBottom: "20px"}}>Book Appointment</Button>
								</div>

							</div>
						</Tab.Pane>
						<Tab.Pane eventKey="4">
						
						</Tab.Pane>
					</Tab.Content>
					</Col>
				</Row>
				</Tab.Container>

				<div className="text text125 mtop75">You have no upcoming appointments. </div>


				{/* <FloatingLabel controlId="" label="Email address" className="mb-3 mtop10"> */}
        			{/* <Form.Control type="email" placeholder="name@example.com" />
      			</FloatingLabel>
      			<FloatingLabel controlId="" label="Password">
        			<Form.Control type="password" placeholder="Password" />
      			</FloatingLabel>
				<div className="row">
					<div className="col-6">
						<FloatingLabel controlId="floatingSelect" label="Works with selects">
							<Form.Select aria-label="Floating label select example">
								<option>Open this select menu</option>
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
							</Form.Select>
						</FloatingLabel>
					</div>
					<div className="col-md-auto" style={{backgroundColor: "white"}}>
						<LocalizationProvider dateAdapter={AdapterDayjs} style={{color: "white"}}>
						<DateTimePicker
							renderInput={(props) => <TextField {...props} />}
							label="DateTimePicker"
							value={value}
							style={{color: "white"}}
							onChange={(newValue) => {
							setValue(newValue);
							
							}}
						/>
						</LocalizationProvider>
					</div>
				</div> */}
				</div>
			</div>	
		</div>
		<div className="sec2">
			<div className="regwrapper">
				<div className="text shSmall boldtext">Saved Cars</div>
				<div className="row mtop20">
					<CarCard />
				</div>
			</div>
		</div>
		<div className="sec1">
			<div className="regwrapper">

				<div className="text  shSmall boldtext">Sell a Car</div>
			</div>	
		</div>

		<div className="sec2">
			<div className="regwrapper">
				<div className="text shSmall boldtext">Account Settings</div>
			</div>	
		</div>

    </div>
  );
}


export default Name ;