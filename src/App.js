import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchB/SearchB";
import ShowCards from "./components/UserData/ShowCards";
import classes from "./App.module.css";

const App = () => {
  const [personState, setPersonState] = useState({
    persons: [],
  });

  const [searchState, setSearchState] = useState({
    search: "",
  });

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((res) => setPersonState({ persons: res.data.data }));
  }, []);

  const inputSearchHandler = (event) => {
    setSearchState({ search: event.target.value });
  };
  return (
    <div className={classes.App}>
      <header style={{color:'black'}}>User's Profile Cards</header> 
       <SearchBar changed={inputSearchHandler} />
     
      <ShowCards persons={personState.persons} input={searchState.search} />
    </div>
  );
};

export default App;
