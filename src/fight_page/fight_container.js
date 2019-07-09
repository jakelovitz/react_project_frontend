import React from "react";
import FighterA from './fighterA'
import FighterB from './fighterB'
import Battleground from './battleground'
import '../styling.css'


class FightContainer extends React.Component {

 state = {
     Ahp: 100,
     Bhp: 100,
     Ampp1: this.props.fighterA.moves[0].pp1,
     Ampp2: this.props.fighterA.moves[0].pp2,
     Ampp3: this.props.fighterA.moves[0].pp3,
     Ampp4: this.props.fighterA.moves[0].pp4,
     Bmpp1: this.props.fighterB.moves[0].pp1,
     Bmpp2: this.props.fighterB.moves[0].pp2,
     Bmpp3: this.props.fighterB.moves[0].pp3,
     Bmpp4: this.props.fighterB.moves[0].pp4,
     turn: {}

    
 }

 handleClick= () => {
    

 }

 selectStart = () => {
    let Arr = [this.props.fighterB, this.props.fighterA]
     return Arr[Math.floor(Math.random() * Arr.length)];

 }


 componentDidMount(){
     let startingPlayer = this.selectStart()
     this.setState({
         turn: startingPlayer
     })
 }

//  componentDidUpdate(prevState) { //temporary for setting up the page
//     if(this.state.turn === prevState.turn)
     
    
//  }

 render() {
     console.log(this.state)
     return (
         <div class="wrapper">
         <FighterA Ahp={this.state.Ahp} fighterA={this.props.fighterA} class='one'/>
         <Battleground turn={this.state.turn} class='two'/>
         <FighterB Bhp={this.state.Bhp} fighterB={this.props.fighterB} class='three'/>
         </div>
     )
 }
}

export default FightContainer