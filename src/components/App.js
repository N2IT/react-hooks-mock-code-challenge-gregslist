import React from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const apiUrl = "http://localhost:6001/listings"
  
  return (
    <div className="app">
      <Header />
      <ListingsContainer url={apiUrl}/>
    </div>
  );
}

export default App;
