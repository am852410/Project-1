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
function getGameCard() {
  console.log("1: getGameCard");

  const fullDeckOfCardsCopy = loteriaFullDeckOfCards.map(cardName => cardName);
  for (let i = 0; i < 9; i++) {
    const randomIndex = Math.floor(Math.random() * fullDeckOfCardsCopy.length);
    const randomElement = fullDeckOfCardsCopy[randomIndex];
    playerOneCardArray.push(randomElement);
    fullDeckOfCardsCopy.splice(randomIndex, 1);
    console.log("array copy length", fullDeckOfCardsCopy.length);
    console.log("player one card", playerOneCardArray);
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
document.getElementById("playLoteria").addEventListener("click", getGameCard);
document
  .getElementById("playLoteria")
  .addEventListener("click", generateImageSourceObject);
document
  .getElementById("playLoteria")
  .addEventListener("click", createCardHtml);
