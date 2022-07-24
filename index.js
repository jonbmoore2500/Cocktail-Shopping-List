// index.js for Cocktail Shopping List App


const searchForm = document.getElementById('searchForCocktail')

searchForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    console.log(e.target)
})