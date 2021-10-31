//global variables
var sides = [
"Miso Glazed Carrots",
"Coleslaw",
"Garden Salad",
"Crispy Potatoes",
"Sweet Potato Tots",
"Coconut Rice",
"Caeser Salad",
"Shrimp Summer Rolls",
"Garlic Butter Mushrooms",
"Hush Puppies",
];

var mains = [
  "Spaghetti and Meatballs",
  "Pineapple Chicken",
  "Shakshuka",
  "Thai Yellow Curry",
  "Bibimbap",
  "Chicken Parmesean",
  "Butternut Squash Soup",
  "BBQ Chicken Burgers",
  "Ramen",
  "Empanadas",
  "Chicken Fried Rice",
  "Sheet Pan Fajitas",
  "Margarita Pizza"
];

var desserts = [
  "Apple Pie",
  "Lemon Meringue Pie",
  "Black Forest Cake",
  "Banana Bread",
  "Peach Cobbler",
  "Cheesecake",
  "Funfetti Cake",
  "Baklava",
  "Flan",
  "Macarons",
  "Chocolate Cupcakes",
  "Pavlova",
  "Pumpkin Pie",
  "Key Lime Pie",
  "Tart Tatin",
  "Croissants",
  "Eclairs"
];

var meals = [sides, mains, desserts];

// str8 to tha dom

//sections and elements
var dishSelections = document.querySelector(".dish-input-section");
var cookPotImg = document.querySelector(".cook-pot-img");
var dishOutputTitle = document.querySelector(".dish-output-title");
var titleOutputBox = document.querySelector(".title-output-box");

//buttons
var letsCookButton = document.querySelector(".lets-cook-button");
var clearButton = document.querySelector(".clear-button");

// radio buttons
var sideRadioButton = document.querySelector("#sides");
var mainRadioButton = document.querySelector("#main");
var dessertsRadioButton = document.querySelector("#desserts");
var mealRadioButton = document.querySelector("#meal");

//event listeners
letsCookButton.addEventListener('click', createDish);


function getRandomDish (array){
 return Math.floor(Math.random() * array.length);
}

function hideElement(variable) {
  variable.classList.add("hidden");
}

function showElement(variable){
  variable.classList.remove("hidden");
}


function checkButtonInput(radioButton, dishArray) {
  if (radioButton.checked) {
  hideElement(cookPotImg);
  showElement(clearButton);
  showElement(titleOutputBox)
  dishOutputTitle.innerText = dishArray[getRandomDish(dishArray)];
  }
}

function createEntireMeal(side, main, dessert) {
if (mealRadioButton.checked) {
  hideElement(cookPotImg);
  showElement(clearButton);
  showElement(titleOutputBox);
   return dishOutputTitle.innerText = `${main[getRandomDish(main)]} with a side of  ${side[getRandomDish(side)]} and ${dessert[getRandomDish(dessert)]} for dessert.`
  }
}

function createDish() {
  checkButtonInput(sideRadioButton, sides);
  checkButtonInput(mainRadioButton, mains);
  checkButtonInput(dessertsRadioButton, desserts);
  createEntireMeal(sides, mains, desserts);
}
