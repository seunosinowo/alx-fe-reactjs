import React from 'react';
import { useParams } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeDetails = () => {
  const { name } = useParams();
  const recipe = useRecipeStore(state => state.recipes.find(r => r.name === name));

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <h1>{recipe.id}</h1>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeDetails;