import './App.css';

import Navbar from "./Navbar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from './Login.js'
import ReportStudent from './ReportStudent.js';
import EnrolledExams from './EnrolledExams.js';
import CheatingRecord from './CheatingRecord.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Login" element={<div><Login/></div>} />
          <Route path="/" element={<div><Navbar/><ReportStudent/></div>} />
          <Route path="/rooms" element={<div><Navbar/><EnrolledExams/></div>} />
          <Route path="/record" element={<div><Navbar/><CheatingRecord/></div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
