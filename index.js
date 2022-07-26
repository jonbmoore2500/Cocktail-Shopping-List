// index.js for Cocktail Shopping List App


const searchForm = document.getElementById('searchForCocktail')
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();   
    handleSearchGet(e);
})
function handleSearchGet(e) {
    let searchInput = e.target.querySelector('#cocktailSearch').value
    fetch(`http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}&key=1`, {
        method: 'GET', 
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
    })
    //searchInput.reset();
    // 'http://universities.hipolabs.com/search?country=United+States'
    // `http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`
}

const randForm = document.getElementById('randomCocktail')
randForm.addEventListener('submit', (e) => {
    e.preventDefault()
    handleRandGet(e)
})
function handleRandGet(e) {
    fetch(`http://www.thecocktaildb.com/api/json/v1/1/random.php`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
    })
}