document.addEventListener('DOMContentLoaded', function() {
    // Function to add a new recipe
    function addRecipe() {
        const form = document.getElementById('addRecipeForm');
        const title = form.elements.recipeTitle.value;
        const ingredients = form.elements.recipeIngredients.value;
        const instructions = form.elements.recipeInstructions.value;
        const imageUrl = form.elements.recipeImage.value || 'https://via.placeholder.com/150'; // Default image if none provided

        // Create a new recipe element
        const recipeElement = document.createElement('article');
        recipeElement.innerHTML = `
            <h3>${title}</h3>
            <p><strong>Ingredients:</strong> ${ingredients}</p>
            <p><strong>Instructions:</strong> ${instructions}</p>
            <img src="${imageUrl}" alt="${title} Recipe">
        `;

        // Append the new recipe to the recipe list
        const recipeList = document.getElementById('recipe-list');
        recipeList.appendChild(recipeElement);

        // Clear the form fields
        form.reset();
    }

    // Attach the addRecipe function to the button click event
    const addButton = document.querySelector('#recipe-form button');
    addButton.addEventListener('click', addRecipe);
});
