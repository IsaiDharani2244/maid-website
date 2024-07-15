import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MaidRegistration = () => {
  const [maid, setMaid] = useState({
    name: "",
    contactNumber: "",
    presentCity: "",
    presentArea: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMaid({ ...maid, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://localhost:44338/api/maids", maid)
      .then((response) => {
        toast.success("Maid registered successfully!");
        setMaid({
          name: "",
          contactNumber: "",
          presentCity: "",
          presentArea: "",
        });
      })
      .catch((error) => {
        console.error("There was an error!", error);
        toast.error("There was an error registering the maid.");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <h2>Maid Registration</h2>
        <input
          name="name"
          value={maid.name}
          placeholder="Name"
          onChange={handleChange}
          className="input"
        />
        <input
          name="contactNumber"
          value={maid.contactNumber}
          placeholder="Contact Number"
          onChange={handleChange}
          className="input"
        />
        <input
          name="presentCity"
          value={maid.presentCity}
          placeholder="Present City"
          onChange={handleChange}
          className="input"
        />
        <input
          name="presentArea"
          value={maid.presentArea}
          placeholder="Present Area"
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

export default MaidRegistration;
