import React from "react";
import "./Calendar.css"

const Calendar = ({ location, review, imageUrl }) => {
  return (
    <div className="Calendar">
      <img src={imageUrl} width={300} height={200}/>
      <h2>{location}</h2>
      <p>My Review:{review}</p>
    </div>
  );
};

export default Calendar;
