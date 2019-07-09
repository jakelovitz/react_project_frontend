import React from 'react';
import logo from './logo.svg';
import './App.css';
import FighterContainer from './fight_page/fight_container'
import SelectionContainer from './selection_page/selection_container'
import { thisExpression } from '@babel/types';
import Fighter from './selection_page/fighter';

class App extends React.Component {

  state = {
    fighters: [],
    selectedFighterA: null,
    selectedFighterB: null
  }

 fightersSelected = () => {
    if(this.state.selectedFighterA && this.state.selectedFighterB){
      return <FighterContainer fighterA={this.state.selectedFighterA} fighterB={this.state.selectedFighterB} />
    } else {
      return < SelectionContainer fighters={this.state.fighters} fighterA={this.state.selectedFighterA} fighterB={this.state.selectedFighterB} selectFighter={this.selectFighter} />
    }
  }




  componentDidMount() {
      fetch('http://localhost:3000/fighters')
          .then(response => response.json())
          .then(data => this.setState({ fighters: data }));
      
  }

  selectFighter = (event) => {
    
    let fighter = this.locateFighter(event.target.id)
    if (event.target.innerText === 'Player 1 - Select'){
      this.setState({
        selectedFighterA: fighter 
      })
    } else if (event.target.innerText === 'Player 2 - Select'){
      this.setState({
        selectedFighterB: fighter
      })
    }

    
  }

  locateFighter = (id) => {

    let selectedFighter = this.state.fighters.filter((fighter) => {
      
      return fighter.id === parseInt(id)

    })
    return selectedFighter[0]
  }

  render() {
    console.log(this.state.selectedFighterA)
    console.log(this.state.selectedFighterB)

    return (
      <fragment>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />


      <div>
      
      {this.fightersSelected()}

    </div>
      </fragment>
    );
  }
}
export default App;
