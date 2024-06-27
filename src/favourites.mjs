import { recipieDisplay } from "../script.js";
import { populateDisplay } from "./domUtils.mjs";
import { getAllRecipies, getFavouriteArray, updateFavouriteArray } from "./localStoragefns.mjs";


export function populateFav() {
   const recipiesArray =  getFavouriteArray()
   populateDisplay(recipiesArray , recipieDisplay);
}

export function addOrRemove(id) {
   let recipes = getAllRecipies()
   let recipie = recipes.find(recipie => recipie.foodId === id)
   recipie.addedToFav = (!recipie.addedToFav)
   updateFavouriteArray({recipie : recipie , id : id})
}

export function getHeart(foodId) {
   let favArray = getFavouriteArray()
   if (!favArray) {
      return "addFav"
   }
   const index = favArray.findIndex(f => f.foodId == foodId);
   console.log(index);
   if (index === -1) {
      return "addFav";
   }
   return "removeFav";
}