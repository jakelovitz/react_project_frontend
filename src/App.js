import React from 'react';
import logo from './logo.svg';
import './App.css';
import FighterContainer from './fight_page/fight_container'
import SelectionContainer from './selection_page/selection_container'
import { thisExpression } from '@babel/types';

class App extends React.Component {

  state = {
    fighters: [],
    selectedFighterA: {},
    selectedFighterB: {}
  }




  componentDidMount() {
      fetch('http://localhost:3000/fighters')
          .then(response => response.json())
          .then(data => this.setState({ fighters: data }));
      
  }

  selectFighter = (event) => {
    console.log('the id here is', event.target.id)

    let fighter = this.locateFighter(event.target.id)

    console.log(fighter)
  }

  locateFighter = (id) => {

    let selectedFighter = this.state.fighters.filter((fighter) => {
      
      return fighter.id === parseInt(id)

    })
    return selectedFighter[0]
  }

  render() {
    return (
      <fragment>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />


      <div>
      < SelectionContainer fighters={this.state.fighters} fighterA={this.state.selectedFighterA} fighterB={this.state.selectedFighterB} selectFighter={this.selectFighter}/>
      {/* <  FightContainer /> */}
    </div>
      </fragment>
    );
  }
}
export default App;
