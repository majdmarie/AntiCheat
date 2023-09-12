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
        <Navbar />
        <Routes>
          <Route path="/Login" element={<Login/>} />
          <Route path="/" element={<ReportStudent/>} />
          <Route path="/rooms" element={<EnrolledExams/>} />
          <Route path="/record" element={<CheatingRecord/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
