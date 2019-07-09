import React from 'react';
import logo from './logo.svg';
import './App.css';
import FighterContainer from './fight_page/fight_container'
import SelectionContainer from './selection_page/selection_container'

class App extends React.Component {

  state = {
    selectedFighterA: {},
    selectedFighterB: {}
  }

  render() {
    return (
      <fragment>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />


      <div>
      < SelectionContainer fighterA={this.state.selectedFighterA} fighterB={this.state.selectedFighterB}/>
    {/* < FighterContainer /> */}
    </div>
      </fragment>
    );
  }
}
export default App;
