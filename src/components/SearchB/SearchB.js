import React from "react";
import classes from "./SearchB.module.css";

const SearchBar = (props) => {
  return (
    <div className={classes.SearchB}>
      <input onChange={props.changed} type="email" placeholder="Search Email..." />
    </div>
  );
};
export default SearchBar;
