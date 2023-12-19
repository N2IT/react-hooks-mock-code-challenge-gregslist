import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then((res) => res.json())
      .then((items) => setItems(items))
  }, [])

  function onItemDelete(deletedItem){
    // console.log('clicked again')
    const updatedItemsList = items.filter((item => item.id !== deletedItem.id))
    setItems(updatedItemsList)
  }


  return (
    <main>
      <ul className="cards">
        {items.map((listedItem => (
          <ListingCard key={listedItem.id} item={listedItem} itemToDelete={onItemDelete} />
        )))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
