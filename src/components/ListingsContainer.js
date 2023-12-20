import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ items, onItemDelete }) {

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
