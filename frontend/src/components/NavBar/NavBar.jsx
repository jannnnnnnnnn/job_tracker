import React from "react";

const NavBar =(props) =>{
  return(
    <div>
      <div>I am in the NavBar</div>
      <input type="text" id="searchTerm" name="searchTerm" onChange={props.handleSearchInputChange}></input>
      <button type="button" onClick={props.handleSearchClick}>Search</button>
    </div>
  )
}

export default NavBar;