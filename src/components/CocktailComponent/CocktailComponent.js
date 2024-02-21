export default function CocktailComponent({ cocktail }) {
  return (
    <div>
      <h2>{cocktail.name}</h2>
      <img src={cocktail.image + "/preview"} alt={cocktail.name} />
    </div>
  );
}
