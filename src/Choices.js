const Choices = (props) => {
    return (
    <ul>
      {props.choices.map((choice) => {
        return <li key={choice}>{choice}</li>;
      })}
      <button onClick={() => props.checkChoices()}>Submit Ingredients</button>
      <p>{props.message}</p>
    </ul>
  );
};

export default Choices;
