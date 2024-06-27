import { recipieDisplay } from "../script.js";
import { populateDisplay } from "./domUtils.mjs";
import {
  getAllCuisines,
  getAllPrepTimes,
  getAllRecipies,
  getAlldietaryRestrictions,
} from "./localStoragefns.mjs";

function createCheckboxOrRadio(
  labelText,
  inputType,
  inputName,
  inputId,
  inputClass,
  inputValue
) {
  const label = document.createElement("label");
  label.innerText = labelText;
  label.setAttribute("for", inputId);

  const input = document.createElement("input");
  input.type = inputType;
  input.name = inputName;
  input.id = inputId;
  input.classList.add("filtercriteria");
  input.classList.add(inputClass);
  input.value = inputValue;
  return { label, input };
}

function populateCuisineFilters(filterDisplay) {
  const cuisinesDiv = document.createElement("div");
  cuisinesDiv.classList.add("filterDiv");
  const cuiHeading = document.createElement("h2");
  cuiHeading.innerText = "Cuisine :";
  cuiHeading.classList.add("filterNames");
  filterDisplay.appendChild(cuiHeading);

  let allCuisines = getAllCuisines();
  allCuisines.forEach((cuisine) => {
    const { label, input } = createCheckboxOrRadio(
      cuisine,
      "checkbox",
      "Cuisine",
      cuisine,
      "filterInput",
      cuisine
    );
    cuisinesDiv.appendChild(label);
    cuisinesDiv.appendChild(input);
  });

  filterDisplay.appendChild(cuisinesDiv);
}

function populateDietaryRestrictionsFilters(filterDisplay) {
  const dietaryRestrictionsDiv = document.createElement("div");
  dietaryRestrictionsDiv.classList.add("filterDiv");
  const dRHeading = document.createElement("h2");
  dRHeading.innerText = "Dietary Restrictions :";
  dRHeading.classList.add("filterNames");
  filterDisplay.appendChild(dRHeading);

  let allDietaryRestrictions = getAlldietaryRestrictions();
  allDietaryRestrictions.forEach((dietaryRestriction) => {
    const { label, input } = createCheckboxOrRadio(
      dietaryRestriction,
      "checkbox",
      "dietaryRestrictions",
      dietaryRestriction,
      "filterInput",
      dietaryRestriction
    );
    dietaryRestrictionsDiv.appendChild(label);
    dietaryRestrictionsDiv.appendChild(input);
  });

  filterDisplay.appendChild(dietaryRestrictionsDiv);
}

function populateRatingFilters(filterDisplay) {
  const ratingDiv = document.createElement("div");
  ratingDiv.classList.add("filterDiv");
  const ratingHead = document.createElement("h2");
  ratingHead.innerText = "Rating :";
  ratingHead.classList.add("filterNames");
  filterDisplay.appendChild(ratingHead);

  for (let index = 0; index <= 5; index++) {
    const { label, input } = createCheckboxOrRadio(
      `${index}       🌟`,
      "checkbox",
      "rating",
      `rating${index}`,
      "filterInput",
      index
    );
    ratingDiv.appendChild(label);
    ratingDiv.appendChild(input);
  }

  filterDisplay.appendChild(ratingDiv);
}

function populatePreparationTimeFilters(filterDisplay) {
  const timediv = document.createElement("div");
  timediv.classList.add("filterDiv");
  const timeHead = document.createElement("h2");
  timeHead.innerText = "Preparation Time :";
  timeHead.classList.add("filterNames");
  filterDisplay.appendChild(timeHead);

  let allPrepTimes = getAllPrepTimes();
  allPrepTimes.forEach((prepTime) => {
    const { label, input } = createCheckboxOrRadio(
      prepTime,
      "checkbox",
      "preparationTime",
      prepTime,
      "filterInput",
      prepTime
    );
    timediv.appendChild(label);
    timediv.appendChild(input);
  });

  filterDisplay.appendChild(timediv);
}

export function populateFilterDisplay() {
  const filterDisplay = document.getElementById("filterDisplay");

  populateCuisineFilters(filterDisplay);
  populateDietaryRestrictionsFilters(filterDisplay);
  populateRatingFilters(filterDisplay);
  populatePreparationTimeFilters(filterDisplay);

  const submitBtnDiv = document.createElement("div");
  submitBtnDiv.classList.add("filterNames");
  const submitBtn = document.createElement("button");
  submitBtn.classList.add("submitBtn");
  submitBtn.innerText = "Find Recipe";
  submitBtn.addEventListener("click", () => {
    filterDisplay.classList.add("hidden")
    populateDisplayOnFilter();
  });
  submitBtnDiv.appendChild(submitBtn);
  filterDisplay.appendChild(submitBtnDiv);
}

function getFilterDetails() {
  const list = document.querySelectorAll(".filtercriteria");
  let filterObject = {
    Cuisine: [],
    DietaryRestrictions: [],
    Rating: [],
    Preparation_Time: [],
  };

  list.forEach((element) => {
    if (element.checked) {
      switch (element.name) {
        case "Cuisine":
          filterObject.Cuisine.push(element.value);
          break;
        case "dietaryRestrictions":
          filterObject.DietaryRestrictions.push(element.value);
          break;
        case "rating":
          filterObject.Rating.push(parseInt(element.value));
          break;
        case "preparationTime":
          filterObject.Preparation_Time.push(element.value);
          break;
        default:
          break;
      }
    }
  });

  return filterObject;
}

export function getfilterRecipes() {
  const filters = getFilterDetails();
  const recipes = getAllRecipies();
  const filteredRecipes = recipes.filter((recipe) => {
    return (
      (filters.Cuisine.length === 0 ||
        filters.Cuisine.includes(recipe.cuisine)) &&
      (filters.DietaryRestrictions.length === 0 ||
        filters.DietaryRestrictions.some((restriction) =>
          recipe.dietaryRestrictions.includes(restriction)
        )) &&
      (filters.Rating.length === 0 || filters.Rating.includes(recipe.rating)) &&
      (filters.Preparation_Time.length === 0 ||
        filters.Preparation_Time.includes(recipe.preparationTime))
    );
  });
  return filteredRecipes
}


export function populateDisplayOnFilter() {
    const recipiesReq = getfilterRecipes()
    console.log(recipiesReq);
    recipieDisplay.innerHTML = ""
    populateDisplay(recipiesReq , recipieDisplay);
}