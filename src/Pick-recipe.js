const Recipe = (props) => {
  const recipeNames = Object.keys(props.recipes);
  return recipeNames.map((recipe) => {
    return (
      <button key={recipe} onClick={() => props.selectRecipe(recipe)}>
        {recipe}
      </button>
    );
  });
};

export default Recipe;
