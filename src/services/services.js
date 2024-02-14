export const fetchCocktail = async (cocktail) => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
    return fetch(url + cocktail)
    .then((response) => response.json())
    .then((drinks) => drinks.drinks)
    .then((drinks) => drinks[0]);
}