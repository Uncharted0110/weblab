let title = prompt("Enter the recipe title:");
let servings = prompt("How many servings?");
let ingredients = [];

let moreIngredients = true;
while (moreIngredients) {
    let ingredient = prompt("Enter an ingredient (or leave empty to finish):");
    if (ingredient) {
        ingredients.push(ingredient);
    } else {
        moreIngredients = false;
    }
}

let recipe = {
    title: title,
    servings: parseInt(servings),
    ingredients: ingredients
};

console.log(recipe.title);
console.log("Serves: " + recipe.servings);
console.log("Ingredients:");
recipe.ingredients.forEach(ingredient => {
    console.log(ingredient);
});
