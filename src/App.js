import React from 'react';
import './App.css';
import FightContainer from './fight_page/fight_container'
import SelectionContainer from './selection_page/selection_container'

class App extends React.Component {

  state = {
    fighters: [],
    selectedFighterA: null,
    selectedFighterB: null,
    
  }

 fightersSelected = () => {
    if(this.state.selectedFighterA && this.state.selectedFighterB){
      
      return <FightContainer fighterA={this.state.selectedFighterA} fighterB={this.state.selectedFighterB} />
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
    console.log(this.state)
    return (
      <div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />


      <div>
      
      {this.fightersSelected()}

    </div>
      </div>
    );
  }
}
export default App;
