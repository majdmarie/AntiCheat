import React, { useState } from "react";

import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";

import Dropdown from "react-bootstrap/Dropdown"

export default function ReportStudent() {

  const [reportedSeatNumber, setReportedSeatNumber] = useState("");

  const [examRoom, setExamRoom] = useState("");

  const [description, setDescription] = useState("");

  function validateForm() {

    return reportedSeatNumber.length > 0 && examRoom.length > 0 && description.length > 0;

  }

  function handleSubmit(event) {

    event.preventDefault();

  }

  return (

    <div className="Login">

      <Form onSubmit={handleSubmit}>

        <Form.Group size="lg" controlId="email">

          <Form.Label>Reported Seat Number</Form.Label>

          <Form.Control

            autoFocus

            value={reportedSeatNumber}

            onChange={(e) => setReportedSeatNumber(e.target.value)}

          />

        </Form.Group>

        <div>
            
            <label>Exam Room</label>

            <select>

                <option value="a">a</option>

                <option value="b">b</option>

                <option value="c">c</option>

            </select>

        </div>

        <Form.Group size="lg" controlId="examRoom">

          <Form.Label>description</Form.Label>

          <Form.Control

            value={description}

            onChange={(e) => setDescription(e.target.value)}

          />

        </Form.Group>

        <Button block size="lg" type="submit" disabled={!validateForm()}>

          submit

        </Button>

      </Form>

    </div>

  );

}