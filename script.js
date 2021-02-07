
const searchBtn = document.getElementById('search');
const mealItem = document.getElementById('meal');
const recipeDetails = document.querySelector('.recipe-details')


searchBtn.addEventListener('click', foodList);
mealItem.addEventListener('click', getRecipe);
function foodList() {
    let searchInput = document.getElementById('search-box').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
        .then(res => res.json())
        .then(data => {
            let food = '';
            if (data.meals) {
                data.meals.forEach(meal => {
                    food += `
    <div class="meal-item shadow-none bg-light w-25 col-md-3" data-id= "${meal.idMeal}">
    <div class="row food-size ">
    <div class="meal-img">
    <img class="img-fluid" src="${meal.strMealThumb}" alt="food">
 </div>
 <div class="food-name">
    <h2><a href="" class="get-recipe fs-3">${meal.strMeal}</a></h2>
 </div>
 
 
    </div>
</div>
    `;
 }); 
 }
else {
  food = "Sorry The Meal didn't have in our list"

 }
   mealItem.innerHTML = food;
 });


}
function getRecipe(event) {
    event.preventDefault();
    if (event.target.classList.contains('get-recipe')) {
        let mealItem = event.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem}`)
            .then(res => res.json())
            .then(data => mealRecipeList(data.meals[0])

            );
    }

}

function mealRecipeList(meal) {
    console.log(meal);
    let recipe = `
<h2 class="recipe-title">${meal.strMeal}</h2>
                <p class="recipe-list">${meal.strCategory}</p>
                <div class="instruction">
                    <h2>instruction</h2>
                    <p>${meal.strInstructions}</p>

                </div>
                <div class="recipe-img w-50 ms-5">
                    <img class="img-fluid ms-5 ps-4 d-block" src="${meal.strMealThumb}" alt="">
                </div>

`;
    recipeDetails.innerHTML = recipe;
    recipeDetails.parentElement.classList.add('showRecipe')

}





























