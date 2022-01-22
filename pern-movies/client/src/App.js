import React, { Fragment } from "react";
import "./App.css";
//components

import InputMovies from "./components/InputMovies";
import ListMovies from "./components/ListMovies";
function App() {
  return (
   <Fragment>
     <div className ="container">
     <InputMovies/>
     <ListMovies/>
     </div>
   
   </Fragment>
  );
}

export default App;
