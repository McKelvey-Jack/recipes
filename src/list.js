const List = (props) => {
  
  return <div className="recipe-list">
    {props.ingredients.map((ingredient) => {
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
  })
}
</div>
};

export default List;
