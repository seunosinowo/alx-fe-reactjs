import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import DeleteRecipeButton from "./components/DeleteRecipeButton"; // Added import

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<><AddRecipeForm /><RecipeList /></>} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/recipes/:id/delete" element={<DeleteRecipeButton />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;