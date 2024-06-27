import { recipes } from "./recipies.mjs";

export function updateFavouriteArray({ recipie, id }) {
  const loggedInUser = localStorage.getItem("LoggedInUser");
  if (!loggedInUser) {
    console.error("User is not logged in.");
    return;
  }

  let favArrayStr = localStorage.getItem("favourites");
  let favArray;
  if (!favArrayStr) {
    favArray = [];
  } else {
    favArray = JSON.parse(favArrayStr);
  }

  let userFavourites = favArray.find((item) => item.userName === loggedInUser);
  if (!userFavourites) {
    userFavourites = { userName: loggedInUser, favouritesArray: [] };
    favArray.push(userFavourites);
  }

  if (recipie.addedToFav) {
    userFavourites.favouritesArray.push(recipie);
  } else {
    const index = userFavourites.favouritesArray.findIndex((fav) => fav.foodId === recipie.foodId);
    if (index !== -1) {
      userFavourites.favouritesArray.splice(index, 1);
    }
  }

  localStorage.setItem("favourites", JSON.stringify(favArray));

  let recipes = getAllRecipies();
  let index = recipes.findIndex((r) => r.foodId === id);
  if (index !== -1) {
    recipes[index] = recipie;
  } else {
    console.error(`Recipe with foodId ${id} not found.`);
  }
  saveUpdatedRecipie({ updatedRecipie: recipes });
}


export function getFavouriteArray() {
    const loggedInUser = localStorage.getItem("LoggedInUser");
    if (!loggedInUser) {
      console.error("User is not logged in.");
      return null;
    }
  
    const favArrayStr = localStorage.getItem("favourites");
    if (!favArrayStr) {
      return null;
    }
  
    const favArray = JSON.parse(favArrayStr);
    const userFavourites = favArray.find((item) => item.userName === loggedInUser);
    if (!userFavourites) {
      return null;
    }
  
    return userFavourites.favouritesArray;
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

export function getAllrating() {
    const recipies = getAllRecipies();
    let set = new Set();
    recipies.forEach(recipie => {
        set.add(recipie.rating);
   });
   let ratings = Array.from(set)
   return ratings;  
}
