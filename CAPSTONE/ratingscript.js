// Access all span elements (such as the star) in a variable
let stars = document.querySelectorAll(".rating span");

// Access all div elements that have the class of ratings.

let foods = document.querySelectorAll(".rating");

// creating an empty array ratings

let ratings = [];

// loop through the stars
for(let star of stars){
  star.addEventListener("click", function(){

    

    //store all elements that involve the rating 
    let children = star.parentElement.children;

    // for every star clicked it turns false to prevent double rating
    for(let child of children){
      if(child.getAttribute("data-clicked")){
        return false;
      }
    }

    // Redirect to the feedback page with the rating value
    // Replace 'feedback_page_url' with the actual URL of your feedback page
    window.location.href = `foodFeedback.html`;

    // Everytime we click on a star we make a data set and make it true when its clicked on. 
    this.setAttribute("data-clicked", "true");

    // get the data rating value

    let rating = this.dataset.rating;

    // fetch the food id

    let foodId = this.parentElement.dataset.foodid;

    // fetch food name 
    let foodName = this.parentElement.dataset.foodname;

    console.log(rating, foodName, foodId);


    // create a data table that will hold the rating number and the FoodItem Id
    let data = {
      "stars": rating,
      "food-Id": foodId,
      "food-Name": foodName
    }

    // inserting the data object within the empty array
    ratings.push(data);

    // storing it within local storage
    localStorage.setItem("ratings", JSON.stringify(rating, foodName))
  });
}

// Fetch the ratings of the Food items
if(localStorage.getItem("rating")){
  ratings = JSON.parse(localStorage.getItem("rating"));
  foodName = JSON.parse(localStorage.getItem("foodName"));

  // loop throught the ratings array
  for (let rating of ratings){
    // loop through every food id in the page
    for (let food of foods){
      if(ratings["food-Id"] == food.dataset.foodId){
        let reversedStars = Array.from(food.children).reverse();
        // fetch the number of stars given to the food item
        let index = parseInt(rating["stars"]) - 1;
        reversedStars[index].setAttribute("data-clicked", "true");
      }
    }
  }
  
}