import React, { useState } from "react";
import './App.css';
import Header from "./Header";
import Nav from "./Nav";
import Result from "./Result";
import request from "./request"
function App() {
  const[selectoption,fetselected]=useState(request.fetchComedyMovies);
  return (
    <div className="App">
       <Header/>
       <Nav fetselected={fetselected}/>
       <Result selectedoption={selectoption}/>
    </div>
  );
}

export default App;
