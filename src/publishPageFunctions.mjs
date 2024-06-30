import { getFoodId } from "../utils/general.mjs";
import { addARecipie } from "./localStoragefns.mjs";

export function recipieForm() {
  return `
    <form id="recipeForm">
      <h2>Publish Your Recipe</h2>
      <label for="FoodName">Food Name</label>
      <input type="text" id="FoodName" name="FoodName" required>
      
      <label for="cuisine">Cuisine Name</label>
      <input type="text" id="cuisine" name="cuisine" required>
      
      <label for="prepTime">Preparation Time</label>
      <input type="text" id="prepTime" name="prepTime" required>
      
      <label for="Ingredients">Ingredients</label>
      <textarea name="Ingredients" id="Ingredients" placeholder="Enter Here Separated With commas" required></textarea>
      
      <label for="Process">Process</label>
      <textarea name="Process" id="Process" placeholder="Enter Here Separated With commas" required></textarea>
      
      <label for="DietRestrictions">Dietary Restrictions</label>
      <textarea name="DietRestrictions" id="DietRestrictions" placeholder="Enter Here Separated With commas" required></textarea>
      
      <label for="description">Short Description</label>
      <textarea name="description" id="description" placeholder="Please Enter a short description Of the Dish" required></textarea>
      
      <input type="submit" id="submitRecipe" value="Submit Recipe">
    </form>`;
}

export function getThankYouMessage() {
  return `
    <div id="thankYou">
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
  const ingredients = document.getElementById("Ingredients").value.split(",");
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

// Add this function to set up the form submission handler
export function setupFormHandler() {
  document.getElementById('recipeForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default submission

    // Perform custom validation
    const inputs = this.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.classList.add('error');
      } else {
        input.classList.remove('error');
      }

      // Additional length checks for textareas
      if (input.tagName === 'TEXTAREA') {
        const minLength = input.id === 'Ingredients' || input.id === 'DietRestrictions' ? 10 : 40;
        if (input.value.trim().length < minLength) {
          isValid = false;
          input.classList.add('error');
          alert(`${input.name} must be at least ${minLength} characters long.`);
        }
      }
    });

    if (isValid) {
      const result = getTheValues();
      if (result.ok) {

        document.body.innerHTML = getThankYouMessage();
      }
    }
  });
}