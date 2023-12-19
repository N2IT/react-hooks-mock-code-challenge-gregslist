import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ url }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((items) => setItems(items))
  }, [])


  return (
    <main>
      <ul className="cards">
        {items.map((listedItem => (
          <ListingCard url={url} key={listedItem.id} item={listedItem} />
        )))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
