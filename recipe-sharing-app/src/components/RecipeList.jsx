import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import useRecipeStore from './recipeStore';
import FavoriteButton from './FavoriteButton'; // Added import

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes);
  const searchTerm = useRecipeStore(state => state.searchTerm);
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search recipes..."
      />
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipes/${recipe.id}`}>View Recipe</Link>
          <FavoriteButton recipeId={recipe.id} /> {/* Added FavoriteButton */}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;