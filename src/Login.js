import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {FaUnlockAlt} from 'react-icons/fa'
import {SiSololearn} from 'react-icons/si'
import "./Login.css";

export default function Login() {
  const [studentID, setStudentID] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return studentID.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login-container">
      <div className="Left-section">
        {/* <div className="Icon">🔒</div> */}
        <SiSololearn className="Logo"/>
        
      </div>
      <div className="Right-section">
        <div className="Form-container">
          <div className="titleDiv">
            <FaUnlockAlt className="SignIcon"/>
  
        {/* <div className="Icon">🔒</div> */}
        <span className="Title">Sign In</span>
        </div>
          <Form onSubmit={handleSubmit} className="form">
            <Form.Group size="lg" controlId="studentID" className="FormGroup">
              <Form.Label className="FormLabel">Student ID</Form.Label>
              <Form.Control
                autoFocus
                type="text"
                value={studentID}
                onChange={(e) => setStudentID(e.target.value)}
                className="FormControl"
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password" className="FormGroup">
              <Form.Label className="FormLabel">Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="FormControl"
              />
            </Form.Group>
            <div className="forgetDiv">
            <span className="forget">Forget password ? </span>
            </div>
            <Button
              block
              size="lg"
              type="submit"
              disabled={!validateForm()}
              className="Button"
            >
              Login
            </Button>
            {/* <div className="ForgotPassword">Forgot Password?</div> */}
          </Form>
        </div>
      </div>
    </div>
  );
}
