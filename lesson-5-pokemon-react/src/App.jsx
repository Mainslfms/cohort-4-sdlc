import React, { useState } from "react";
import "./App.css";
import Example from "./ComponentExamples/Example";

// Comment out the Example component by pressing command + /
// Move header to a separate component
// Write a function to call the pokemon API called getPokemon
// display the pokemon name and image
// display loading while the API is being called


function App() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  const getPokemon = async () => {
    // add logic to call the pokemon API
    // set the response to the pokemon state
    // set loading to false
  };

  return (
    <div>
      <header> Hello World </header>
      <Example />
      <div className="App">
        <h1>Pokemon API</h1>
        <button onClick={getPokemon}>Get Pokemon</button>
      </div>
    </div>
  );
}

export default App;
