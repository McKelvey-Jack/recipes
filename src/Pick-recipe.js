const Recipe = (props) => {
  const recipeNames = Object.keys(props.recipes);
    return <div className="chosenRecipe">
    {
        recipeNames.map((recipe) => {
            return (
                <button className="recipe" key={recipe} onClick={() => props.selectRecipe(recipe)}>
                    {recipe}
                </button>
            );
        })
    }
</div>
};

export default Recipe;
