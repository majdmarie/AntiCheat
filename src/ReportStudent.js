import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./ReportStudent.css"; // Import the CSS file

export default function ReportStudent() {
  const [reportedSeatNumber, setReportedSeatNumber] = useState("");
  const [examRoom, setExamRoom] = useState("a"); // Initialize with a default value
  const [description, setDescription] = useState("");

  function validateForm() {
    return reportedSeatNumber.length > 0 && description.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Handle form submission here
  }

  return (
    <div className="ReportStudent">
        <div className="container">
            {/* <div className="left-part">
                <h2>Welcome to the Color Palette</h2>
                <div className="color-box"></div>
            </div> */}
            <div className="right-part">
                <div className="form-container">
                    <Form onSubmit={handleSubmit}>
                    <h2 className="form-title">Report Student</h2>
                    <Form.Group size="lg" controlId="reportedSeatNumber" className="formGroup">
                        <Form.Label className="form-label">
                        Reported Seat Number
                        </Form.Label>
                        <Form.Control
                        className="form-input"
                        autoFocus
                        value={reportedSeatNumber}
                        onChange={(e) => setReportedSeatNumber(e.target.value)}
                        placeholder="Enter the seat number you want to report"

                        />

                    </Form.Group>
                    <Form.Group size="lg" controlId="examRoom" className="formGroup">
                        <Form.Label className="form-label">Exam Room</Form.Label>
                        <select
                        className="form-select"
                        value={examRoom}
                        onChange={(e) => setExamRoom(e.target.value)}
                        >
                        <option value="a">a</option>
                        <option value="b">b</option>
                        <option value="c">c</option>
                        </select>
                    </Form.Group>
                    <Form.Group size="lg" controlId="description" className="formGroup">
                        <Form.Label className="form-label">Description</Form.Label>
                        <Form.Control
                        as="textarea"
                        rows={4}
                        className="form-input"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Add your notes"

                        />
                    </Form.Group>
                    <Button
                        variant="primary"
                        size="lg"
                        type="submit"
                        disabled={!validateForm()}
                        className="form-button"
                    >
                        Submit
                    </Button>
                    </Form>
                </div>
                </div>
            </div>
    </div>
  );
}