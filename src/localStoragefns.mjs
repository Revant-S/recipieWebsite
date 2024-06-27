import { recipes } from "./recipies.mjs";

export function updateFavouriteArray({recipie, id}) {
    let favArraystr = localStorage.getItem("favourites");
    let recipes = getAllRecipies(); 
    let favArray
    if (!favArraystr) {
        favArray = [];
    }
    else{
        favArray = JSON.parse(favArraystr)
    }
    if (recipie.addedToFav) {
        favArray.push(recipie);
    }else {
        const index = favArray.indexOf(recipie)
        favArray.splice(index , 1)
    }
    localStorage.setItem("favourites" , JSON.stringify(favArray));
    let index = recipes.findIndex(r => r.foodId === id);
    if (index !== -1) {
        recipes[index] = recipie;
    } else {
        console.error(`Recipe with foodId ${id} not found.`);
    }
    saveUpdatedRecipie({updatedRecipie : recipes})
}

export function getFavouriteArray() {
    const arrayStr = localStorage.getItem("favourites")
    if (!arrayStr) {return null}
    return JSON.parse(arrayStr)
}

export function getAllRecipies() {
    let Allrecipies  = localStorage.getItem("Allrecipies")
    if (!Allrecipies) {
        let saveItem = JSON.stringify(recipes);
        localStorage.setItem("Allrecipies",saveItem);
        return recipes
    }
    return JSON.parse(Allrecipies)
}

export function addARecipie({recipieToBeAdded}) {
    let Allrecipies  = getAllRecipies();
    Allrecipies.push(recipieToBeAdded);
    saveUpdatedRecipie({updatedRecipie : Allrecipies})
}

export function saveUpdatedRecipie({updatedRecipie}) {
    localStorage.setItem("Allrecipies", JSON.stringify(updatedRecipie));
}

export function updateReviews({foodId , newReview}) {
    let AllRecipies = getAllRecipies();
    let recipieToUpdate = AllRecipies.find(f=> f.foodId === foodId);
    recipieToUpdate.rating = newReview;
    saveUpdatedRecipie({updatedRecipie : AllRecipies})
}

export function getAllIngridients() {
    const recipies = getAllRecipies();
    let set = new Set();
    recipies.forEach(recipie => {
        const array = recipie.ingredients
        array.forEach(element => set.add(element))
   });
   let ingredients = Array.from(set)
   return ingredients
}

export function getAllCuisines() {
    const recipies = getAllRecipies();
    let set = new Set();
    recipies.forEach(recipie => {
        set.add(recipie.cuisine);
   });
   let cuisines = Array.from(set)
   return cuisines;
}

export function getAllPrepTimes(params) {
    const recipies = getAllRecipies();
    let set = new Set();
    recipies.forEach(recipie => {
        set.add(recipie.preparationTime);
   });
   let preparationTimes = Array.from(set)
   return preparationTimes;  
}

export function getAlldietaryRestrictions(params) {
    const recipies = getAllRecipies();
    let set = new Set();
    recipies.forEach(recipie => {
        const array = recipie.dietaryRestrictions
        array.forEach(element => set.add(element))
   });
   let dietaryRestrictionss = Array.from(set)
   return dietaryRestrictionss;  
}

export function getAllrating(params) {
    const recipies = getAllRecipies();
    let set = new Set();
    recipies.forEach(recipie => {
        set.add(recipie.rating);
   });
   let ratings = Array.from(set)
   return ratings;  
}