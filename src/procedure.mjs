// Import necessary functions and constants
import { displaySpace } from "../script.js";
import { buildStars, getUlList } from "./domUtils.mjs";
import { getHeart } from "./favourites.mjs";

let synth = window.speechSynthesis;
let utterance = new SpeechSynthesisUtterance();
let isPaused = false; // Track if speech is paused
let isPlaying = false; // Track if speech is currently playing
let voiceList;
let textChunks = [];
let currentChunkIndex = 0;

function setupTextToSpeech() {
  const speechBtn = document.getElementById("voicePlay");
  // Initialize voice options
  initializeVoices();
  // Event listener for play/pause button
  speechBtn.addEventListener("click", toggleSpeech);
  // Event listener for voices changed
  synth.addEventListener("voiceschanged", initializeVoices);
  // Event listener for tab visibility change
  document.addEventListener("visibilitychange", handleVisibilityChange);
}

function initializeVoices() {
  voiceList = document.getElementById("voiceOption");
  voiceList.innerHTML = "";
  synth.getVoices().forEach((voice) => {
    let selected = voice.name === "Google US English" ? "selected" : "";
    let option = `<option value="${voice.name}" ${selected}>${voice.name} (${voice.lang})</option>`;
    voiceList.insertAdjacentHTML("beforeend", option);
  });
}

function pauseSpeech() {
  const speechBtn = document.getElementById("voicePlay");
  synth.pause();
  isPaused = true;
  isPlaying = false;
  speechBtn.innerText = "Resume";
}

function startSpeech() {
  const speechBtn = document.getElementById("voicePlay");
  const processText = document.getElementById("processToRead").innerText.trim();
  textChunks = processText.split('\n').filter(chunk => chunk.trim() !== '');
  currentChunkIndex = 0;
  speakNextChunk();
}

function speakNextChunk() {
  if (currentChunkIndex < textChunks.length) {
    const chunk = textChunks[currentChunkIndex];
    window.speechSynthesis.cancel();
    utterance = new SpeechSynthesisUtterance(chunk);
    utterance.voice = synth.getVoices().find((voice) => voice.name === voiceList.value);
    
    utterance.onend = () => {
      currentChunkIndex++;
      speakNextChunk();
    };

    synth.speak(utterance);
    isPlaying = true;
    const speechBtn = document.getElementById("voicePlay");
    speechBtn.innerText = "Pause";
  } else {
    isPlaying = false;
    const speechBtn = document.getElementById("voicePlay");
    speechBtn.innerText = "Play";
  }
}

function toggleSpeech() {
  const speechBtn = document.getElementById("voicePlay");
  if (!isPlaying) {
    startSpeech();
  } else {
    if (!isPaused) {
      pauseSpeech();
    } else {
      synth.resume();
      isPaused = false;
      isPlaying = true;
      speechBtn.innerText = "Pause";
    }
  }
}

function handleVisibilityChange() {
  if (document.hidden && isPlaying) {
    synth.cancel();
    isPlaying = false;
    isPaused = false;
    currentChunkIndex = 0;
    const speechBtn = document.getElementById("voicePlay");
    speechBtn.innerText = "Play";
  }
}

// Main function to render the recipe details including text-to-speech setup
export function renderTheProcedure(recipe) {
  displaySpace.innerHTML = `
    <div class="addFav"></div>
    <div class="recipieName">
      <h1 id="heading">${recipe.name}</h1>
      <img class="favouriteBtn" id="fav${recipe.foodId}" src="./images/icons/${getHeart(recipe.foodId)}.svg"></img>
    </div>
    <div id="cuisine">cuisine: ${recipe.cuisine}</div>
    <div id="prepTime">Preparation Time: ${recipe.preparationTime}</div>
    <div id="imageDiv"><img class="foodImg" src="./images/food/${recipe.foodId}.jpg"></img></div>
    <div id="ingredients">
      <h3>Ingredients</h3>
      ${getUlList(recipe.ingredients).outerHTML}
    </div>
    <div id="process">
      <div id="processHeading">
        <h3>Procedure</h3>
        <div id="voice">
          <select id="voiceOption"></select>
          <button id="voicePlay">Play</button>
        </div>
      </div>
      <div id="processToRead">${getUlList(recipe.processToPrepare).outerHTML}</div> <!-- Procedure text -->
    </div>
    <div id="dietaryRestrictions">
      <h3>Dietary Restrictions</h3>
      ${getUlList(recipe.dietaryRestrictions).outerHTML}
    </div>
    <div id="reviews">
      ${buildStars(recipe).outerHTML}
    </div>
  `;
  // Initialize voice options and text-to-speech functionality
  setupTextToSpeech();
}