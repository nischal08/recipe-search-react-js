import React from "react";
import style from "./recipe.module.css";
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h2>{title}</h2>
      <img className={style.image} src={image} alt={title} />
      <p>
        <strong>Calories: </strong> {Math.floor(calories)}
      </p>
      <h3>Ingredients:</h3>
      <ol className={style.ol}>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
