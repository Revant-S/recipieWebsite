import { getAllRecipies } from "../src/localStoragefns.mjs";

export function filterByIngridients(selectedIngredients) {
    let recipes = getAllRecipies()
    let arrayToReturn = recipes.filter((recipie)=>{
        for (let index = 0; index < selectedIngredients.length; index++) {
            const ingridient = selectedIngredients[index];
            if (!recipie.ingredients.includes(ingridient)) {
                return false
            }
        }
        return true
    })
    return arrayToReturn;
} 

export function getFoodId() {
    const recipes = getAllRecipies();
    return `food${recipes.length+1}`
}