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
     turn: {},
     activeFighter: {},
     passiveFighter: {}
 }

 handleClick = (event, fighterId) => {
        if (parseInt(fighterId) === this.state.activeFighter.id) {
            console.log(`fuckety fuck yeah ${this.state.activeFighter}`)
        } else {
            alert("not yo turn dip")
        }
 }

 componentDidMount(){
     const fighters = [this.props.fighterA, this.props.fighterB]
     let activeFighter = this.selectStart()
     let passiveFighter = {}

    fighters.forEach(function(fighter) {
        if (fighter !== activeFighter) {
            passiveFighter = fighter
        }
    })


     this.setState({
         activeFighter: activeFighter,
         passiveFighter: passiveFighter
     })
 }



 selectStart = () => {
    let Arr = [this.props.fighterB, this.props.fighterA]
     return Arr[Math.floor(Math.random() * Arr.length)];

 }



 render() {
     console.log(this.state)
     return (
         <div className="wrapper">
         <FighterA handleClick={this.handleClick} Ahp={this.state.Ahp} fighterA={this.props.fighterA} class='one'/>
         <Battleground activeFighter={this.state.activeFighter} class='two'/>
         <FighterB handleClick={this.handleClick} Bhp={this.state.Bhp} fighterB={this.props.fighterB} class='three'/>
         </div>
     )
 }
}

export default FightContainer