import React from "react";
import Search from "./Search";

function Header({ search, setSearch, handleSearchChange}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search search={search} setSearch={setSearch} onSearchChange={handleSearchChange}/>
    </header>
  );
}

export default Header;
