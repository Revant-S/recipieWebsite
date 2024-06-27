import { displaySpace } from "../script.js";
import { buildStars, getUlList } from "./domUtils.mjs";
import { getHeart } from "./favourites.mjs";

export function renderTheProcedure(recipe) {

  displaySpace.innerHTML = "";
  displaySpace.innerHTML = `
     <div class = "addFav"></div><div class="recipieName"><h1 id="heading">${
       recipe.name
     }</h1><img class = "favouriteBtn"  id = ${
    "fav" + recipe.foodId
  }  src =  "./images/icons/${getHeart(recipe.foodId)}.svg"></img></div>
            <div id="cuisine">cuisine : ${recipe.cuisine}</div>
            <div id="prepTime">Preparation Time : ${
              recipe.preparationTime
            }</div>
            <div id = "imageDiv"><img id = "foodImg" src = "./images/food/hamburgur.jpg"></img></div>
            <div id="ingridients">
                <h3>Ingridients</h3>
                ${getUlList(recipe.ingredients).outerHTML}
            </div>
            <div id="process">
                <h3>Procedure</h3>
                ${getUlList(recipe.processToPrepare).outerHTML}
            </div>
            <div id="dietaryRestrictions">
                <h3>Dietary Restrictions</h3>
                ${getUlList(recipe.dietaryRestrictions).outerHTML}
            </div>
            <div id="reviews">
            ${buildStars(recipe).outerHTML}
            </div>
        </div>
  `;
}
