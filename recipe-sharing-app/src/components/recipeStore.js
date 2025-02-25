import { create } from 'zustand';

const useRecipeStore = create(set => ({
    recipes: [],
    addRecipe: (newRecipe) => set(state => ({recipes: [...state.recipes, newRecipe] })),
    deleteRecipe: (recipeName) => set(state => ({
        recipes: state.recipes.filter(recipe => recipe.name !== recipeName)
    })),
    updateRecipe: (updatedRecipe) => set(state => ({
        recipes: state.recipes.map(recipe => 
            recipe.name === updatedRecipe.name ? updatedRecipe : recipe
        )
    })),
    setRecipe: (recipes) => set({recipes})
}));

export default useRecipeStore;