import './App.css';
import React from 'react';
import Header from './header';
import List from './list';
import Choices from './Choices';
import Recipe from './Pick-recipe';
import Sheader from "./secondHeader"

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
      'bun',
      'fries',
    ],
    recipes: {
      bolognese: ['pasta', 'tomato', 'mince'],
      burger: ['mince', 'bun', 'fries'],
    },

    choices: [],
    message: '',
  };
  selectRecipe = (recipe) => {
    const ingredientList = this.state.recipes[recipe];
    this.setState((currState) => {
      const newState = { recipes: { [recipe]: ingredientList }};
      console.log(newState)
      return newState;
      
    });
  };

  addIngredient = (ingredient) => {
    if (this.state.choices.includes(ingredient)) return null;
    this.setState((currState) => {
      const newChoices = [...currState.choices];
      newChoices.push(ingredient);
      const newState = {
        choices: newChoices,
      };
      return newState;
    });
  };

  checkChoices = () => {
    const recipeKey = Object.keys(this.state.recipes)
    const chosenRecipe = recipeKey[0]
    if (
      JSON.stringify(this.state.choices) ===
      JSON.stringify(this.state.recipes[chosenRecipe]) 
    ) {
      this.setState((currState) => {
        const newMessage = 'Success';
        const newState = { message: newMessage };
        return newState;
      });
    } else {
      this.setState((currState) => {
        const newMessage = 'Try Again';
        const newState = { message: newMessage };
        return newState;
      });
    }
  };

  render() {
    return (
      <div className='App'>
        <Header />

        <Recipe recipes={this.state.recipes} selectRecipe={this.selectRecipe} />
        <Sheader />
        <List
          ingredients={this.state.ingredients}
          addIngredient={this.addIngredient}
        />
        <Choices
          choices={this.state.choices}
          checkChoices={this.checkChoices}
          message={this.state.message}
        />
      </div>
    );
  }
}

export default App;
