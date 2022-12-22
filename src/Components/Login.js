import React, { useState } from "react";

import "../css/Common.css";
import "../css/Account.css";
import PageHeader from "./Util/PageHeader";
import GradButton from "./Util/GradButton";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import $ from "jquery";
import bcrypt from "bcryptjs";

const Login = (props) => {

	const [login, changeLogin] = useState(true);
	const [error, setError] = useState("");

	const validateSalt = () => {
		setError("")
		let email = $("#email").val();
		let pass = $("#password").val();
		$.ajax({ url: 'http://dynamo.pulkith.com/server/account.php',
			data: {
				"email": email,
				"request": "email_to_salt"
			},
			type: 'post',
			async: true,
			success: function(output) {
				output = JSON.parse(output);
				if(output.result == "Success") {
					validatePass(output.salt, pass, email);
				} else {
					setError("Invalid Email or Password")
				}
			}
		});
	}
	
	const validatePass = (salt, pass, email) => {
		let hash = hashpassValidate(salt, pass);
		$.ajax({
		  url: "http://dynamo.pulkith.com/server/account.php",
		  data: {
			email: email,
			hash: hash,
			request: "password_validation",
		  },
		  type: "post",
		  async: true,
		  success: function (output) {
			output = JSON.parse(output);
			if (output.result == "Valid") {
			  window.location.href = "/dashboard";
			} else {
				setError("Invalid Email or Password")
			}
		  },
		});
	  };
	  

	const makeAccount = () => {
		setError("")
		let email = $("#emailSign").val();
		let pass = $("#passSign").val();
		let fName = $("#fNameSign").val();
		let lName = $("#lNameSign").val();
	
		let hPass = hashPassword(pass);
	
		$.ajax({ url: 'http://dynamo.pulkith.com/server/account.php',
			data: {
				"email": email,
				"password": hPass[1],
				"salt": hPass[0],
				"fName": fName,
				"lName": lName,
				"request": "sign_up"
			},
			type: 'post',
			async: true,
			success: function(output) {
				// console.log(output);
				// if(output === 'true'){
				// }
				// else if(output === 'Not Logged In'){
				// 	setLogin()
				// }
				// else {}
			}
		});
	}
	
	const hashPassword = (password) => {
		var salt = bcrypt.genSaltSync(10);
		var hash = bcrypt.hashSync(password, salt);
		return [salt, hash]
	}
	
	const hashpassValidate = (salt, password) => {
		var hash = bcrypt.hashSync(password, salt);
		return hash
	}

  return (
    <div className="account">
      <div
        className="backimg background-tint"
        style={{ width: "100vw", height: "88vh" }}
      >
        <div className="loginwrapper">
          <div className="imgwrapper">
            <img
              className="logo center"
              src={require("../assets/logo/blocklogo.png")}
              alt="logo"
            />
          </div>

          <div className="text shSmall center-text init">Nice to see you.</div>
          {error.length > 0 && (
            <div className="text text125 text-center mtop10 errortext boldtext">
              {error}
            </div>
          )}
          {login && (
            <div>
              <FloatingLabel
                controlId="email"
                label="Email address"
                className="mb-3 mtop20"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel controlId="password" label="Password">
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>

              <div
                className="loginbtn gradborder"
                onClick={() => validateSalt()}
              >
                <div className="text text2 text-center boldtext">
                  Login &#8594;
                </div>
              </div>

              <div className="text text125 center-text mtop20 text-center">
                <a href="/signup" className="link">
                  Forgot your password?
                </a>
              </div>
              <div className="divider"></div>
              <div className="text text125 center-text mtop20 text-center">
                Don't have an account?{" "}
                <a
                  className="link"
                  onClick={() => {
                    changeLogin(false);
                    return false;
                  }}
                >
                  Sign up
                </a>
              </div>
            </div>
          )}

          {!login && (
            <div>
              <div className="row">
                <div
                  className="col-6"
                  style={{ padding: "0px", paddingRight: "10px" }}
                >
                  <FloatingLabel
                    controlId="fNameSign"
                    label="First Name"
                    className="mb-3 mtop20"
                  >
                    <Form.Control type="text" placeholder="name@example.com" />
                  </FloatingLabel>
                </div>
                <div
                  className="col-6"
                  style={{ padding: "0px", paddingLeft: "10px" }}
                >
                  <FloatingLabel
                    controlId="lNameSign"
                    label="Last Name"
                    className="mb-3 mtop20"
                  >
                    <Form.Control type="text" placeholder="name@example.com" />
                  </FloatingLabel>
                </div>
              </div>

              <FloatingLabel
                controlId="emailSign"
                label="Email address"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel
                controlId="passSign"
                label="Password"
                className="mb-3"
              >
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>
              <FloatingLabel
                controlId="confPassSign"
                label="Confirm Password"
                className="mb-3"
              >
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>

              <Form.Check
                type={"checkbox"}
                label={
                  <div>
                    I agree to the
                    <a
                      href={require("../assets/policies/tus.pdf")}
                      without
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Terms of Use
                    </a>{" "}
                    and{" "}
                    <a
                      href={require("../assets/policies/pp.pdf")}
                      without
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Privacy Policy
                    </a>
                  </div>
                }
                id={`1`}
                style={{ color: "white" }}
              />

              <Form.Check
                type={"checkbox"}
                label={`I would like to subscribe to the newsletter`}
                id={`3`}
                style={{ color: "white" }}
              />

              <div
                className="loginbtn gradborder"
                onClick={() => {
                  makeAccount();
                }}
              >
                <div className="text text2 text-center boldtext">
                  Sign Up &#8594;
                </div>
              </div>
              <div className="divider" style={{ marginTop: "20px" }}></div>
              <div className="text text125 center-text mtop20 text-center">
                Already have an account?{" "}
                <a
                  className="link"
                  onClick={() => {
                    changeLogin(true);
                    return false;
                  }}
                >
                  {" "}
                  Login in
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
