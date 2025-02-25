import React, { useState } from 'react';
import useRecipeStore from '../store/useRecipeStore';

const EditRecipeForm = ({ recipeId }) => {
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  const [title, setTitle] = useState(recipe ? recipe.title : '');
  const [description, setDescription] = useState(recipe ? recipe.description : '');

  const handleUpdate = () => {
    updateRecipe({ id: recipeId, title, description });
  };

  const handleDelete = () => {
    deleteRecipe(recipeId);
  };

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <h1>Edit Recipe</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Save</button>
      </form>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default EditRecipeForm;