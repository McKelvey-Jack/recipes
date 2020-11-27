import './App.css';
import React from 'react';
import Header from './header';
import List from './list';

class App extends React.Component {
  state = {
    ingredients: [
      'pasta',
      'tomato',
      'mince',
      'rice',
      'beans',
      'potato',
      'sugar',
    ],
    recipies: { bolognese: ['pasta', 'tomato', 'mince'] },
    choices: [],
  };

  addIngredient = (ingredient) => {
    this.setState((currState) => {
      const newChoices = [...currState.choices];
      newChoices.push(ingredient);
      console.log(newChoices);
      const newState = {
        choices: newChoices,
      };
      console.log(newState);
      return newState;
    });
  };

  render() {
    console.log(this.state.choices);
    return (
      <div className="App">
        <Header />
        <List
          ingredients={this.state.ingredients}
          addIngredient={this.addIngredient}
        />
      </div>
    );
  }
}

export default App;
