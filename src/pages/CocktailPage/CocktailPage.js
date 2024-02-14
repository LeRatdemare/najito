import { useState, useEffect } from "react";
import { fetchCocktail } from "../../services/services";

export default function CocktailPage() {
    const [margarita, setMargarita] = useState();
    useEffect(() => {
        fetchCocktail("margarita").then((json) => setMargarita(json));
    }, []);
    return (
        <div>
            <h1>{margarita?.strDrink}</h1>
            <img
                src={margarita?.strDrinkThumb + "/preview"}
                alt={margarita?.strDrink}
                />
            <p>{margarita?.strInstructions}</p>
            <Debug data={margarita} />
        </div>
    );
}

// Débogage JSON
function Debug({ data }) {
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
}