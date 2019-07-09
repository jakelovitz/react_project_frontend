import React from "react";
import FighterA from './fighterA'
import FighterB from './fighterB'
import Battleground from './battleground'
import '../styling.css'


class FightContainer extends React.Component {

 state = {
     Ahp: 100,
     Bhp: 100
    
 }

 componentDidMount() { //temporary for setting up the page
    
    
 }

 render() {
     
     return (
         <div class="wrapper">
         <FighterA Ahp={this.state.Ahp} fighterA={this.props.fighterA} class='one'/>
         <Battleground class='two'/>
         <FighterB Bhp={this.state.Bhp} fighterB={this.props.fighterB} class='three'/>
         </div>
     )
 }
}

export default FightContainer