import React from "react";
import FighterA from './fighterA'
import FighterB from './fighterB'
import Battleground from './battleground'
import '../styling.css'


class FightContainer extends React.Component {

 state = { //temporary for setting up the page
    bots: [],
    botA: "",
    botB: ""
 }

 componentDidMount() { //temporary for setting up the page
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(response => response.json())
    .then(data => this.setState({ 
        bots: data,
        botA: data[0],
        botB: data[1]
    }));
 }

 render() {
     console.log(this.state)
     return (
         <div class="wrapper">
         <FighterA bot={this.state.botA} class='one'/>
         <Battleground class='two'/>
         <FighterB bot={this.state.botB} class='three'/>
         </div>
     )
 }
}

export default FightContainer