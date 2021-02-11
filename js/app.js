console.log("LOTERIA!!!!!");

const loteriaFullDeckOfCards = [
  "EL DIABLITO",
  "LA DAMA",
  "EL CATRIN",
  "EL PARAGUAS",
  "LA ESCALERA",
  "LA BOTELLA",
  "EL BARRIL",
  "EL ARBOL",
  "LA CHALUPA",
  "EL GORRITO",
  "LA MUERTE",
  "LA PERA",
  "EL BANDOLON",
  "EL VIOLONCELLO",
  "LA GARZA",
  "EL PAJARO",
  "EL ALACRAN",
  "LA LUNA",
  "EL CORAZON",
  "LA SANDIA",
  "EL CAMARON",
  "EL MUSICO",
  "EL SOLDADO",
  "LA ESTRELLA",
  "EL MUNDO",
  "EL NOPAL",
  "EL ARPA",
  "LA ROSA",
  "LA PALMA",
  "EL SOL",
  "LA CORONA",
  "EL GALLO",
  "LA BOTA"
];

const playerOneCardArray = [];
const fullDeckOfCardsCopy = loteriaFullDeckOfCards.map(cardName => cardName);
function getGameCardRowOne() {
  console.log("1: getGameCard");

  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * fullDeckOfCardsCopy.length);
    const randomElement = fullDeckOfCardsCopy[randomIndex];
    playerOneCardArray.push(randomElement);
    fullDeckOfCardsCopy.splice(randomIndex, 1);
    console.log("array copy length", fullDeckOfCardsCopy.length);
    console.log("player one card", playerOneCardArray);
  }
}
const playerOneCardArrayTwo = [];
function getGameCardRowTwo() {
  console.log("1: getGameCard");

  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * fullDeckOfCardsCopy.length);
    const randomElement = fullDeckOfCardsCopy[randomIndex];
    playerOneCardArrayTwo.push(randomElement);
    fullDeckOfCardsCopy.splice(randomIndex, 1);
    console.log("array copy length", fullDeckOfCardsCopy.length);
    console.log("player one card", playerOneCardArrayTwo);
  }
}
const playerOneCardArrayThree = [];
function getGameCardRowThree() {
  console.log("1: getGameCard");

  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * fullDeckOfCardsCopy.length);
    const randomElement = fullDeckOfCardsCopy[randomIndex];
    playerOneCardArrayThree.push(randomElement);
    fullDeckOfCardsCopy.splice(randomIndex, 1);
    console.log("array copy length", fullDeckOfCardsCopy.length);
    console.log("player one card", playerOneCardArrayThree);
  }
}
const randomDrawnCards = [];
let interval = undefined;
let index = 0;
function drawingLoteriaCards() {
  console.log("2: getRandomLoteriaCards");
  const randomIndex = Math.floor(Math.random() * loteriaFullDeckOfCards.length);
  const randomElement = loteriaFullDeckOfCards[randomIndex];
  randomDrawnCards.push(randomElement);
  loteriaFullDeckOfCards.splice(randomIndex, 1);
  console.log(randomDrawnCards);
  const img = document.createElement("img");
  img.id = randomElement;
  img.src = imageSources[randomElement];
  console.log(img);
  const divImages = document.getElementById("playing-cards");
  divImages.innerHTML = "";
  divImages.append(img);
  console.log("div images", divImages);

  if (index < 33) {
    index++;
    console.log("index", index);
  } else {
    clearInterval(interval);
    console.log("interval", interval);
  }
}

const imageSources = {};
function generateImageSourceObject() {
  // Step 1: Loop through the full card array
  for (let i = 0; i < loteriaFullDeckOfCards.length; i++) {
    // Assets/elmundo.jpg
    // EL MUNDO -> elmundo
    const cardName = loteriaFullDeckOfCards[i];
    imageSources[cardName] =
      "Assets/" +
      cardName
        .toLowerCase()
        .split(" ")
        .join("") +
      ".jpg";
  }
  return imageSources;
  // {"EL MUNDO": 'Assets/elmundo.jpg'}
  // Step 2: Add a key/value pair to the object for each element where the key is the element in the array and the value is the src string
  // after looping through everything, return the object
}

function createCardHtml() {
  // Step 1: Loop through the playerOneCardArray array
  for (let i = 0; i < playerOneCardArray.length; i++) {
    const elementPlayerOne = playerOneCardArray[i];
    console.log(elementPlayerOne);
    console.log(imageSources[elementPlayerOne]);
    const img = document.createElement("img");
    img.id = elementPlayerOne;
    img.src = imageSources[elementPlayerOne];
    console.log(img);
    const divImages = document.getElementById("images");
    divImages.append(img);
  }
  // Step 2: Use the elements to get the image sources
  // Step 3: Create html images
  // Step 4: Append to images div tag
}

function createCardHtmlTwo() {
  // Step 1: Loop through the playerOneCardArray array
  for (let i = 0; i < playerOneCardArrayTwo.length; i++) {
    const elementPlayerOne = playerOneCardArrayTwo[i];
    console.log(elementPlayerOne);
    console.log(imageSources[elementPlayerOne]);
    const img = document.createElement("img");
    img.id = elementPlayerOne;
    img.src = imageSources[elementPlayerOne];
    console.log(img);
    const divImages = document.getElementById("images-two");
    divImages.append(img);
  }
}

function createCardHtmlThree() {
  for (let i = 0; i < playerOneCardArrayThree.length; i++) {
    const elementPlayerOne = playerOneCardArrayThree[i];
    console.log(elementPlayerOne);
    console.log(imageSources[elementPlayerOne]);
    const img = document.createElement("img");
    img.id = elementPlayerOne;
    img.src = imageSources[elementPlayerOne];
    console.log(img);
    const divImages = document.getElementById("images-three");
    divImages.append(img);
  }
  interval = setInterval(drawingLoteriaCards, 5000);
  console.log("setting interval");
}
const coinsDiv = document.getElementById("coins");
function playerOneCoins() {
  for (let i = 0; i < 9; i++) {
    const coins = document.createElement("img");
    coins.src = "Assets/sierramadrechip.png";
    coins.height = 100;
    coinsDiv.appendChild(coins);
  }
}

function pageScroll() {
  window.scrollBy(0, 50); // horizontal and vertical scroll increments
  scrolldelay = setTimeout(pageScroll, 100); // scrolls every 100 milliseconds
  setTimeout(function() {
    clearTimeout(scrolldelay);
  }, 3000);
}

document
  .getElementById("playLoteria")
  .addEventListener("click", getGameCardRowOne);
document
  .getElementById("playLoteria")
  .addEventListener("click", getGameCardRowTwo);
document
  .getElementById("playLoteria")
  .addEventListener("click", getGameCardRowThree);
document
  .getElementById("playLoteria")
  .addEventListener("click", generateImageSourceObject);
document
  .getElementById("playLoteria")
  .addEventListener("click", createCardHtml);
document
  .getElementById("playLoteria")
  .addEventListener("click", createCardHtmlTwo);
document
  .getElementById("playLoteria")
  .addEventListener("click", createCardHtmlThree);
document.getElementById("playLoteria").addEventListener("click", pageScroll);
document
  .getElementById("playLoteria")
  .addEventListener("click", drawingLoteriaCards);
document
  .getElementById("playLoteria")
  .addEventListener("click", playerOneCoins);
