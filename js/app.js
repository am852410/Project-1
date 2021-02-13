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

  if (index < 32) {
    index++;
    console.log("index", index);
  } else {
    clearInterval(interval);
    console.log("interval", interval);
  }
  if (playerOneCardArray.find(card => card === randomElement)) {
    const coin = document.getElementById("coins").firstChild;
    console.log("coin", coin);
    coin.className = "coin-match";
    const imageMatch = document.getElementById(randomElement);
    imageMatch.append(coin);
    determineTheWinner();
  }
  if (playerOneCardArrayTwo.find(card => card === randomElement)) {
    const coin = document.getElementById("coins").firstChild;
    coin.className = "coin-match";
    const imageMatch = document.getElementById(randomElement);
    imageMatch.append(coin);
    determineTheWinner();
  }
  if (playerOneCardArrayThree.find(card => card === randomElement)) {
    const coin = document.getElementById("coins").firstChild;
    coin.className = "coin-match";
    const imageMatch = document.getElementById(randomElement);
    imageMatch.append(coin);
    determineTheWinner();
  }
}

function determineTheWinner() {
  const coinsArray = document.getElementsByClassName("coin-match");
  console.log("COINS ARRAY", coinsArray);
  if (coinsArray.length === 9) {
    setTimeout(function() {
      alert("LOTERIA!!! PLAYER 1 WINS!!");
    }, 1000);
    clearInterval(interval);
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
    const imageWrapper = document.createElement("div");
    imageWrapper.id = elementPlayerOne;
    img.src = imageSources[elementPlayerOne];
    img.style.position = "relative";
    img.style.top = 0;
    img.style.left = 0;
    imageWrapper.append(img);
    imageWrapper.style.position = "relative";
    imageWrapper.style.top = 0;
    imageWrapper.style.left = 0;
    console.log(img);
    const divImages = document.getElementById("images");
    divImages.append(imageWrapper);
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
    const imageWrapper = document.createElement("div");
    imageWrapper.id = elementPlayerOne;
    img.src = imageSources[elementPlayerOne];
    img.style.position = "relative";
    img.style.top = 0;
    img.style.left = 0;
    imageWrapper.append(img);
    imageWrapper.style.position = "relative";
    imageWrapper.style.top = 0;
    imageWrapper.style.left = 0;
    console.log(img);
    const divImages = document.getElementById("images-two");
    divImages.append(imageWrapper);
  }
}

function createCardHtmlThree() {
  for (let i = 0; i < playerOneCardArrayThree.length; i++) {
    const elementPlayerOne = playerOneCardArrayThree[i];
    console.log(elementPlayerOne);
    console.log(imageSources[elementPlayerOne]);
    const img = document.createElement("img");
    const imageWrapper = document.createElement("div");
    imageWrapper.id = elementPlayerOne;
    img.src = imageSources[elementPlayerOne];
    img.style.position = "relative";
    img.style.top = 0;
    img.style.left = 0;
    imageWrapper.append(img);
    imageWrapper.style.position = "relative";
    imageWrapper.style.top = 0;
    imageWrapper.style.left = 0;
    console.log(img);
    const divImages = document.getElementById("images-three");
    divImages.append(imageWrapper);
  }
  interval = setInterval(drawingLoteriaCards, 1000);
  console.log("setting interval");
}

const coinsDiv = document.getElementById("coins");
function makeCoinBank() {
  for (let i = 0; i < 9; i++) {
    const coin = document.createElement("img");
    coin.src = "Assets/sierramadrechip.png";
    coin.height = 100;
    coinsDiv.append(coin);
  }
}

function pageScroll() {
  window.scrollBy(0, 100); // horizontal and vertical scroll increments
  scrolldelay = setTimeout(pageScroll, 100); // scrolls every 100 milliseconds
  setTimeout(function() {
    clearTimeout(scrolldelay);
  }, 3000);
}

function onClick() {
  generateImageSourceObject();
  makeCoinBank();
  getGameCardRowOne();
  getGameCardRowTwo();
  getGameCardRowThree();
  createCardHtml();
  createCardHtmlTwo();
  createCardHtmlThree();
  pageScroll();
  drawingLoteriaCards();
}

document.getElementById("playLoteria").addEventListener("click", onClick);
