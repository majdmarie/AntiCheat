// EnrolledExams.js
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "./EnrolledExams.css";

export default function EnrolledExams() {
  const [studentSeats, setStudentSeats] = useState([
    { id: 1, examRoom: "Exam Room A", seatNumber: "Seat 101" },
    { id: 2, examRoom: "Exam Room B", seatNumber: "Seat 102" },
    { id: 3, examRoom: "Exam Room C", seatNumber: "Seat 103" },
    { id: 4, examRoom: "TEST ADD ONE", seatNumber: "Seat 10232"},
    { id: 5, examRoom: "TEST ADD TWO", seatNumber: "Seat 4325"},
    { id: 6, examRoom: "TEST ADD Three", seatNumber: "Seat 4325"},
    // Add more data as needed
  ]);

  return (
    <div className="EnrolledExams">
        <div className="container">
            <div className="icon-container">
                <div className="icon">
                {/* You can use an icon library or an image here */}
                Icon
                </div>
            </div>
            <div className="card-list-container">
                {studentSeats.map((studentSeat) => (
                <Card key={studentSeat.id} className="custom-card">
                    <Card.Body>
                    <Card.Title className="exam-room">{studentSeat.examRoom}</Card.Title>
                    <Card.Text className="seat-number">{studentSeat.seatNumber}</Card.Text>
                    </Card.Body>
                </Card>
                ))}
            </div>
        </div>
    </div>
  );
}
