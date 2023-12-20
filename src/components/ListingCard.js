import React from "react";

function ListingCard({ item, itemToDelete }) {
  const { id, description, image, location } = item
  // console.log(item)

  function handleChange(event) {
    event.target.classList.toggle('active')
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE',
    })
      .then((r) => r.json())
      .then(() => itemToDelete(item))
  }

  return (
    <li key={id} className="card">
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
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
