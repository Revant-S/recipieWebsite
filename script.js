import {
  handleLikeBtn,
  populateDisplay,
  populateSelectOptions,
  starEventListners,
} from "./src/domUtils.mjs";
import { renderTheProcedure } from "./src/procedure.mjs";
import {
  getThankYouMessage,
  getTheValues,
  recipieForm,
} from "./src/publishPageFunctions.mjs";
import { filterByIngridients } from "./utils/general.mjs";
import { getName } from "./utils/url.mjs";
import { addOrRemove, populateFav } from "./src/favourites.mjs";
import { getAllIngridients, getAllRecipies } from "./src/localStoragefns.mjs";
import { populateFilterDisplay } from "./src/filter.mjs";
import { login, signup } from "./src/signup.mjs";
export const select = document.getElementById("ingridentsSelect");
export const selectedItemsContainer = document.getElementById("selectedItems");
export const recipieDisplay =
  document.getElementsByClassName("recipiesDisplay")[0];
export const displaySpace = document.getElementById("displaySpace");
const navBar = document.getElementsByClassName("navBar")[0];
let selectedIngridients = [];

function createSelectedItemDiv(ingredient) {
  const itemDiv = document.createElement("div");
  itemDiv.className = "selected-item";
  itemDiv.innerHTML = `
        <span>${ingredient}</span>
        <button class="remove-btn">×</button>
    `;
  itemDiv.querySelector(".remove-btn").addEventListener("click", () => {
    itemDiv.remove();
    const option = document.createElement("option");
    option.value = ingredient;
    option.textContent = ingredient;
    select.appendChild(option);
    const elementIndex = selectedIngridients.indexOf(ingredient);
    selectedIngridients.splice(elementIndex, 1);
    let filteredArray = filterByIngridients(selectedIngridients);
    recipieDisplay.innerHTML = "";
    populateDisplay(filteredArray, recipieDisplay);
  });
  return itemDiv;
}

function createNavBar() {
  navBar.innerHTML = "";
  navBar.innerHTML = `<div class = "logo"><div class = "iconsvg"><image src = "./images/icons/logo.jpg"></image></div><div id = "pic"></div><div class = "divHead"><h2>Recipies</h3></div></div>
        <div class="navBarOptions">
        <div class="navElements" id = "Home"><div class = "iconsvg"><image src = "./images/icons/home.svg"></image></div>Home</div>
        <div class="navElements" id = "publish"><div class = "iconsvg"><image src = "./images/icons/publish.svg"></image></div>Publish</div>
        <div class="navElements" id = "favourite"><div class = "iconsvg"><image src = "./images/icons/fav.svg"></image></div>Favourite</div> 
        <div class="navElements" id = "filter"><div class = "iconsvg"><image src = "./images/icons/filter.svg"></image></div>Filter</div> 
        </div>`;
}

function navBarEventListners() {
  document.getElementById("Home").addEventListener("click", () => {
    window.location.href = "/index.html";
  });
  document.getElementById("publish").addEventListener("click", () => {
    window.location.href = "/publish.html";
  });
  document.getElementById("favourite").addEventListener("click", () => {
    window.location.href = "/favourites.html";
  });
  document.getElementById("filter").addEventListener("click", () => {
    window.location.href = "/filter.html";
  });
}

if (window.location.pathname.indexOf("/signup") != -1) {
  document.getElementById("signupBtn").addEventListener("click", (e) => {
    e.preventDefault();
    signup();
  });
} else if (window.location.pathname.indexOf("/login") != -1) {
  document.getElementById("loginBtn").addEventListener("click", (e) => {
    e.preventDefault();
    login();
  });
}

function checkLoggedInUser() {
  if (
    window.location.pathname === "/login.html" ||
    window.location.pathname === "/signup.html"
  ) {
    return;
  }
  if (!localStorage.getItem("LoggedInUser")) {
    alert("Please Login For Better Experience");
    window.location.href = "/login.html";
  }
}

checkLoggedInUser();
createNavBar();
navBarEventListners();

if (window.location.pathname == "/index.html") {
  select.addEventListener("change", (event) => {
    const selectedIngredient = event.target.value;
    if (selectedIngredient) {
      selectedItemsContainer.appendChild(
        createSelectedItemDiv(selectedIngredient)
      );
      select.remove(select.selectedIndex);
      select.value = "";
      selectedIngridients.push(selectedIngredient);
      let filteredArray = filterByIngridients(selectedIngridients);
      recipieDisplay.innerHTML = "";
      populateDisplay(filteredArray, recipieDisplay);
    }
  });
  let ingridents = getAllIngridients();
  populateSelectOptions(ingridents, select);
  let recipes = getAllRecipies();
  populateDisplay(recipes, recipieDisplay);
} else if (window.location.pathname.indexOf("/process") != -1) {
  const item = getName(window.location.search);
  let recipes = getAllRecipies();
  const obj = recipes.find((recipie) => recipie.name === item);
  renderTheProcedure(obj);
  document.querySelector(".favouriteBtn").addEventListener("click", (e) => {
    const id = e.target.id;
    addOrRemove(id.slice(3, id.length));
    handleLikeBtn(id.slice(3, id.length));
  });
  console.log("HELLO");
  starEventListners();
} else if (window.location.pathname.indexOf("/publish") != -1) {
  let requiredHtml = recipieForm();
  document.getElementsByClassName("masterDiv")[0].innerHTML = requiredHtml;
  document.getElementById("submitRecipie").addEventListener("click", () => {
    const p = getTheValues();
    if (p.ok) {
      document.getElementsByClassName("masterDiv")[0].innerHTML =
        getThankYouMessage();
    }
  });
} else if (window.location.pathname.indexOf("/favourites") != -1) {
  populateFav();
} else if (window.location.pathname.indexOf("/filter") != -1) {
  populateFilterDisplay();
}
