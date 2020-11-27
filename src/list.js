const List = (props) => {
  console.log(props.ingredients);
  return props.ingredients.map((ingredient) => {
    return (
      <button
        key={ingredient}
        className="ingredient"
        onClick={() => {
          props.addIngredient(ingredient);
        }}
      >
        {ingredient}
      </button>
    );
  });
};

export default List;
