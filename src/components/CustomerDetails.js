import React, { useEffect, useState } from "react";
import axios from "axios";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:44338/api/customers")
      .then((response) => setCustomers(response.data))
      .catch((error) => console.error("There was an error!", error));
  }, []);

  return (
    <div className="list-container">
      <h2>Latest Customer Requirement Details</h2>
      <ul className="list">
        {customers.map((customer) => (
          <li key={customer.id} className="list-item">
            {customer.Name} - {customer.ContactNumber} - {customer.PresentCity}{" "}
            - {customer.PresentArea} - {customer.HoursOfService} hours
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;
