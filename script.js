const searchMeals = () =>{
    const searchMeal = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchMeal}`
    //load data
    fetch(url)
    .then(res => res.json())
    .then(data => displayFoods(data.meals))
    .catch(error => console.log(error))
    
    }
    
    
    const displayFoods = foods =>{
    const foodContainer = document.getElementById('food-container')
    foodContainer.innerHTML = '';
    
    foods.forEach(meal =>{
    const foodDiv = document.createElement('div')
    foodDiv.className = 'single-result';
    foodDiv.innerHTML = `
    <div onclick="getFoodDetails('${meal.idMeal}')" class="col-md-12" data-id= "${meal.idMeal}">
    <div class="meal-img">
    <img class="img-fluid d-block" src="${meal.strMealThumb}" alt="food">
    </div>
    <div class="food-name pt-3 ps-2">
    <h2>${meal.strMeal}</h2>
    </div>
    </div>
    
    
    
    `;
    foodContainer.appendChild(foodDiv);
    
    });
    
    
    
    }
    
    function getFoodDetails (foodId){
        
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}
    `)
    .then(res => res.json())
    .then(data => displayFoodDetails(data.meals[0])
    )
    }
    
    function displayFoodDetails (foodRecipe) {
    
    const recipeDiv = document.getElementById('recipe')
    const mealContainer = document.getElementById('food-container')
    recipeDiv.innerHTML = `
    <h2 class="recipe-title">food Details</h2>
    <p class="recipe-list">${foodRecipe.strMeal}</p>
    <div class="instruction align-items-center">
        <h2>ingredients</h2>
        <p>${foodRecipe.strIngredient1} ${foodRecipe.strMeasure1}</p>
        <p>${foodRecipe.strIngredient2} ${foodRecipe.strMeasure2}</p>
        <p>${foodRecipe.strIngredient3} ${foodRecipe.strMeasure3}</p>
        <p>${foodRecipe.strIngredient4} ${foodRecipe.strMeasure4}</p>
        <p>${foodRecipe.strIngredient5} ${foodRecipe.strMeasure5}</p>
        <p>${foodRecipe.strIngredient6} ${foodRecipe.strMeasure6}</p>
        <p>${foodRecipe.strIngredient7} ${foodRecipe.strMeasure7}</p>
        <p>${foodRecipe.strIngredient8} ${foodRecipe.strMeasure8}</p>
        <p>${foodRecipe.strIngredient9} ${foodRecipe.strMeasure9}</p>
        
    
    </div>
    <div class="recipe-img w-75">
        <img class="img-fluid ms-5 ps-4 d-block img-size" src="${foodRecipe.strMealThumb}" alt="">
       
    </div>`;
    }