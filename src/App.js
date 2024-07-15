import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MaidRegistration from "./components/MaidRegistrationForm";
import CustomerRegistration from "./components/CustomerRegistrationForm";
import MaidList from "./components/MaidDetails";
import CustomerList from "./components/CustomerDetails";
import "./App.css";

const App = () => (
  <Router>
    <div className="app">
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <Link to="/register-maid" className="nav-link">
              Register Maid
            </Link>
          </li>
          <li>
            <Link to="/register-customer" className="nav-link">
              Register Customer
            </Link>
          </li>
          <li>
            <Link to="/maids" className="nav-link">
              Maid List
            </Link>
          </li>
          <li>
            <Link to="/customers" className="nav-link">
              Customer List
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/register-maid" element={<MaidRegistration />} />
        <Route path="/register-customer" element={<CustomerRegistration />} />
        <Route path="/maids" element={<MaidList />} />
        <Route path="/customers" element={<CustomerList />} />
      </Routes>
    </div>
  </Router>
);

export default App;
