const Choices = (props) => {
    return (
    <ul>
      {props.choices.map((choice) => {
        return <li className="itemsList" key={choice}>{choice}</li>;
      })}
      <button className="submit" onClick={() => props.checkChoices()}>Submit Ingredients</button>
      <p className="msg">{props.message}</p>
    </ul>
  );
};

export default Choices;
