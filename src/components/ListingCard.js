import React, { useState } from "react";

function ListingCard({ item, url }) {
  const { id, description, image, location } = item
  // console.log(item)

  function handleChange(event) {
    event.target.classList.toggle('active')
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {true ? (
          <button onClick={handleChange} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleChange} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
