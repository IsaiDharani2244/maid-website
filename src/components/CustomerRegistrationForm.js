import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomerRegistration = () => {
  const [customer, setCustomer] = useState({
    name: "",
    contactNumber: "",
    presentCity: "",
    presentArea: "",
    hoursOfService: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://localhost:44338/api/customers", customer)
      .then((response) => {
        toast.success("Customer registered successfully!", {
          position: "bottom-center",
        });
        setCustomer({
          name: "",
          contactNumber: "",
          presentCity: "",
          presentArea: "",
          hoursOfService: "",
        });
      })
      .catch((error) => {
        console.error("There was an error!", error);
        toast.error("There was an error registering the customer.");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <h2>Customer Registration</h2>
        <input
          name="name"
          value={customer.name}
          placeholder="Name"
          onChange={handleChange}
          className="input"
        />
        <input
          name="contactNumber"
          value={customer.contactNumber}
          placeholder="Contact Number"
          onChange={handleChange}
          className="input"
        />
        <input
          name="presentCity"
          value={customer.presentCity}
          placeholder="Present City"
          onChange={handleChange}
          className="input"
        />
        <input
          name="presentArea"
          value={customer.presentArea}
          placeholder="Present Area"
          onChange={handleChange}
          className="input"
        />
        <input
          name="hoursOfService"
          value={customer.hoursOfService}
          placeholder="Hours of Service"
          onChange={handleChange}
          className="input"
        />
        <button type="submit" className="button">
          Register
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CustomerRegistration;
