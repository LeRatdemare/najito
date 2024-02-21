import { useState, useEffect } from "react";
import cocktailService from "../../services/cocktailService";
import CocktailComponent from "../../components/CocktailComponent/CocktailComponent";

export default function SearchPage() {
  const [cocktailName, setCocktailName] = useState("margarita");
  const [cocktails, setCocktails] = useState();
  useEffect(() => {
    cocktailService
      .searchCocktailsByName(cocktailName)
      .then((cocktailsList) => setCocktails(cocktailsList));
  }, [cocktailName]);

  function handleSearchTermChange(e) {
    // Callback
    setCocktailName(e.target.value);
  }

  // function onClickSearch() {
  //   <CocktailPage cocktailName={searchTerm} />;
  // }

  return (
    <>
      <form>
        <label for="drink_select">Type drink name :</label>
        <br />
        <textarea value={cocktailName} onChange={handleSearchTermChange} />
        <br />
        {/* <input type="button" onClick={onClickSearch} value="Search cocktail" /> */}
      </form>
      {cocktails.map((cocktail) => (
        <div>
          <CocktailComponent cocktail={cocktail} />
          <br />
        </div>
      ))}
    </>
  );
}
