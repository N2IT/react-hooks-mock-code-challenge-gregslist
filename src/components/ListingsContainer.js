import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((res) => res.json())
      .then((items) => setItems(items))
  }, [])
  
  console.log(items)

  return (
    <main>
      <ul className="cards">
        <li>
        {items.map((listedItem => (
          <ListingCard key={listedItem.id} item={listedItem} />
        )))}
        </li>
      </ul>
    </main>
  );
}

export default ListingsContainer;
