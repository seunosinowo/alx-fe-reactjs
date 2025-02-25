import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import DeleteRecipeButton from "./components/DeleteRecipeButton";
import RecommendationsList from "./components/RecommendationsList";
import FavoritesList from './components/FavoritesList';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<><AddRecipeForm /><RecipeList /><RecommendationsList /> <FavoritesList/></>} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/recipes/:id/delete" element={<DeleteRecipeButton />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;