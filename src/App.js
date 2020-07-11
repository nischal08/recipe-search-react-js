import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

const App = () => {
  const APP_ID = "24d1e94e";
  const APP_KEY = "9842f3888594291412132d10c6e18a45	";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  /* const [counter, setCounter] = useState(0); */

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <h1
        style={{
          textAlign: "center",
          padding: "20px 0 30px 0",
          margin:0,
          textTransform: "uppercase",
          fontFamily: "Remachine Script Personal Use",
          fontWeight:"bolder",
          fontSize:'50px'
        }}
      >
        Recipe Search
      </h1>
      <form className="search-form" onSubmit={getSearch}>
        <input
        placeholder="Enter a ingredients to search a recipe "
          value={search}
          type="text"
          className="search-bar"
          onChange={updateSearch}
        />
        <button type="submit"  className="search-button">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            key={recipe.recipe.label}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};
export default App;
