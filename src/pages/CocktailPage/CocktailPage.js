import { useState, useEffect } from "react";
import { fetchCocktail } from "../../services/services";
import { Cocktail, CocktailService } from "../../services/cocktailService";

export default function CocktailPage({ cocktailName }) {
  const [cocktail, setCocktail] = useState();
  useEffect(() => {
    fetchCocktail(cocktailName).then((json) => setCocktail(json));
  }, []);
  return (
    <div>
      <h1>{cocktail?.strDrink}</h1>
      <img
        src={cocktail?.strDrinkThumb + "/preview"}
        alt={cocktail?.strDrink}
      />
      <p>{cocktail?.strInstructions}</p>
      {/* <Debug data={margarita} /> */}
    </div>
  );
}

// Débogage JSON
function Debug({ data }) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
