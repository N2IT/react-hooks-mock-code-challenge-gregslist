import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [items, setItems] = useState([])
  const [search, setSearch] = useState("")

  const searchedItems = items.filter((item) => {
    if (search === "") {
      return item
    }
    else {
      return item.description.toLowerCase().startsWith(search.toLowerCase())
    }
  })

  function handleSearchChange(value) {
    setSearch(value)
  }

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then((res) => res.json())
      .then((items) => setItems(items))
  }, [])

  function onItemDelete(deletedItem) {
    // console.log('clicked again')
    const updatedItemsList = items.filter((item => item.id !== deletedItem.id))
    setItems(updatedItemsList)
  }

  return (
    <div className="app">
      <Header search={search} setSearch={setSearch} handleSearchChange={handleSearchChange} />
      <ListingsContainer items={searchedItems} setItems={onItemDelete} onItemDelete={onItemDelete} />
    </div>
  );
}

export default App;
