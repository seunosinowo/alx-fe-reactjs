import React from 'react';
import useRecipeStore from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  const handleDelete = (event) => { 
    event.preventDefault();
    deleteRecipe(recipeId);
  };

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteRecipeButton;