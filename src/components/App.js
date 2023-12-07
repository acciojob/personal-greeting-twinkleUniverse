
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name,setName]=useState("");

  const handelEvent=(e)=>{
    let name2="Hello "+e.target.value+"!";
    setName(name2);
  
  }

  return (
    <div>
      <h2>Enter your name:</h2>
      <input type="text" onChange={handelEvent}/>
      <p>{name}</p>
    </div>
  )
}

export default App
