import { getFoodId } from "../utils/general.mjs";
import { addARecipie } from "./localStoragefns.mjs";
export function recipieForm() {
  return ` <h2>Publish Your Recipie</h2>
        <label for="FoodName"> Food Name</label>
        <input type="text" id="FoodName" name="FoodName">

        <label for="cuisine"> Cuisine Name</label>
        <input type="text" id="cuisine" name="cuisine">

        <label for="prepTime"> Preparation Time</label>
        <input type="text" id="prepTime" name="prepTime">

        <label for="Ingridients"> Ingridients</label>
        <textarea name="Ingridients" id="Ingridients" placeholder = "Enter Here Separated With commas"></textarea>

        <label for="Process"> Process</label>
        <textarea name="Process" id="Process" placeholder="Enter Here Separated With commas"></textarea>

        <label for="DietRestrictions"> Dietray Restrictions</label>
        <textarea name=" DietRestrictions" id="DietRestrictions" placeholder = "Enter Here Separated With commas"></textarea>

        <label for="description"> Short Description </label>
        <textarea name="description" id="description" placeholder = "Please Enter a short description Of the Dish"></textarea>
        

        <input type="submit" id = "submitRecipie">`;
}

export function getThankYouMessage() {
  return `<div id="thankYou">
            <h2>Thank You</h2>
            <p>
                Thanks a bunch for sharing your awesome recipe with us! 🌟 We can't wait to try it out!
            </p>
        </div>`;
}

export function getTheValues() {
  console.log("called");
  const name = document.getElementById("FoodName").value;
  const cuisine = document.getElementById("cuisine").value;
  const ingredients = document.getElementById("Ingridients").value.split(",");
  const preparationTime = document.getElementById("prepTime").value;
  const dietaryRestrictions = document
    .getElementById("DietRestrictions")
    .value.split(",");
  const processToPrepare = document.getElementById("Process").value.split(",");
  const description = document.getElementById("description").value;

  addARecipie({
    recipieToBeAdded: {
      name,
      cuisine,
      ingredients,
      preparationTime,
      dietaryRestrictions,
      processToPrepare,
      description,
      rating: 0,
      addedToFav: false,
      foodId: getFoodId(),
    },
  });
  return { ok: true };
}


