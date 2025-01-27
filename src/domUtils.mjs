import { getAllRecipies, saveUpdatedRecipie } from "./localStoragefns.mjs";
import { renderTheProcedure } from "./procedure.mjs";

export function populateSelectOptions(array, domElement) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const option = document.createElement("option");
    option.value = element;
    option.innerText = element;
    domElement.appendChild(option);
  }
}

export function createFlipCard(
  frontTitle,
  backTitle,
  backContent,
  foodId
) {
  let recipes = getAllRecipies();
  // Create main container
  const mainContainer = document.createElement("div");
  mainContainer.className = "maincontainer";

  // Create card container
  const theCard = document.createElement("div");
  theCard.className = "thecard";

  // Create front of card
  const theFront = document.createElement("div");
  theFront.className = "thefront";

  const frontH1 = document.createElement("h1");
  frontH1.textContent = frontTitle;
  console.log(foodId);
  const image = document.createElement("img");
  image.src = `./images/food/${foodId}.jpg`
  image.classList.add("cardImage")
  const imageDiv = document.createElement("div")
  imageDiv.classList.add("imageDivClass")
  imageDiv.appendChild(image)
  theFront.appendChild(frontH1);
  theFront.appendChild(imageDiv);

  // Create back of card
  const theBack = document.createElement("div");
  theBack.className = "theback";

  const backH1 = document.createElement("h1");
  backH1.textContent = backTitle;

  const backP = document.createElement("p");
  backP.textContent = backContent;

  const btn = document.createElement("button");
  btn.textContent = "Show Process";
  btn.href = "./procedure.html";
  btn.id = frontTitle;
  btn.classList.add("cardBtn")
  btn.addEventListener("click", (event) => {
    const recipie = event.target.id;
    const recipieReq = recipes.filter((element) => {
      return element.name === recipie;
    });
    window.location.href = `process.html?${recipie}`;
    renderTheProcedure(recipieReq[0]);
  });
  theBack.appendChild(backH1);
  theBack.appendChild(backP);
  theBack.appendChild(btn);
  theCard.appendChild(theFront);
  theCard.appendChild(theBack);
  mainContainer.appendChild(theCard);

  return mainContainer;
}

export function populateDisplay(array, displayElement) {

  array.forEach((element) => {
    console.log(element.foodId);
    const card = createFlipCard(
      element.name,
      "Short Description",
      element.description,
      element.foodId
    );
    displayElement.appendChild(card);
  });
}

export function getUlList(array) {
  const ul = document.createElement("ul");
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const li = document.createElement("li");
    li.innerText = element;
    ul.appendChild(li);
  }
  return ul;
}

export function getStars(food) {
  let id = 1;
  let stars = []
  const starDiv = document.createElement("div");
  for (let index = 0; index < food.rating; index++) {
    const btn = document.createElement("button");
    btn.classList.add("star");
    btn.innerHTML = "&#9733";
    btn.id = id + "star" + food.foodId;
    id++;
    stars.push(btn)
  }
  for (let index = 0; index < 5 - food.rating; index++) {
    const btn = document.createElement("button");
    btn.classList.add("star");
    btn.innerHTML = "&#9734";
    btn.id = id + "star" + food.foodId;
    id++;
    stars.push(btn);
  }
  return stars;
}


export function buildStars(food) {
  let  stars = getStars(food);
  const starDiv = document.createElement("div")
  stars.forEach(star =>starDiv.appendChild(star))
  return starDiv
}
export function starEventListners() {
  const recipes = getAllRecipies()
  const stars = document.querySelectorAll(".star")
  for (let index = 0; index < stars.length; index++) {
    stars[index].addEventListener("click", (e) => {
      let starNumber = parseInt(e.target.id);
      const foodId = e.target.id.slice(5, e.target.id.length);
      const food = recipes.find((food) => food.foodId === foodId)
      recipes.find((food) => food.foodId === foodId).rating = starNumber;
      saveUpdatedRecipie({updatedRecipie : recipes})
      document.getElementById("reviews").innerHTML = buildStars(food).outerHTML
      starEventListners()
    });
  }
}

export function handleLikeBtn(foodId) {
  const recpies = getAllRecipies();
  let food = recpies.find(recipie =>recipie.foodId === foodId)
  if (food.addedToFav) {
    document.querySelector(".favouriteBtn").src = "./images/icons/removeFav.svg";
    return
  }
  document.querySelector(".favouriteBtn").src = "./images/icons/addFav.svg";
}