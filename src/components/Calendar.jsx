import React from "react";

const Calendar = ({ location, review, imageUrl }) => {
  return (
    <div className="Calendar">
      <img src={imageUrl} width={100} height={100}/>
      <h1>{location}</h1>
      <p>My Review:{review}</p>
    </div>
  );
};

export default Calendar;
