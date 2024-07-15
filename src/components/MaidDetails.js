import React, { useEffect, useState } from "react";
import axios from "axios";

const MaidList = () => {
  const [maids, setMaids] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:44338/api/Maids/RegisterMaid")
      .then((response) => setMaids(response.data))
      .catch((error) => console.error("There was an error!", error));
  }, []);

  return (
    <div className="list-container">
      <h2>Latest Maid Details</h2>
      <ul className="list">
        {maids.map((maid) => (
          <li key={maid.Id} className="list-item">
            {maid.Name} - {maid.ContactNumber} - {maid.PresentCity} -{" "}
            {maid.PresentArea}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MaidList;
