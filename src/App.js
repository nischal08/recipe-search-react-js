import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const APP_ID = "24d1e94e";
  const APP_KEY = "9842f3888594291412132d10c6e18a45	";

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-bar" />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <h1
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        {counter}
      </h1>
    </div>
  );
};
export default App;
