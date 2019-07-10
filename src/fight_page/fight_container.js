import React from "react";
import FighterA from './fighterA'
import FighterB from './fighterB'
import Battleground from './battleground'
import '../styling.css'


class FightContainer extends React.Component {
//working on dynamically setting state keys for power so we can easily update them
//need to figure out why the back end isn't passing up the hp data so we can set state to decrement it
//look into having nested state - could we just have the fighterA and fighterB objects as state, with their various keys?
 state = {
     Ahp: 100,
     Bhp: 100,
     this.props.FighterA.moves[0]: this.props.fighterA.moves[0].power,
     Ampp2: this.props.fighterA.moves[1].power,
     Ampp3: this.props.fighterA.moves[2].power,
     Ampp4: this.props.fighterA.moves[3].power,
     Bmpp1: this.props.fighterB.moves[0].power,
     Bmpp2: this.props.fighterB.moves[1].power,
     Bmpp3: this.props.fighterB.moves[2].power,
     Bmpp4: this.props.fighterB.moves[3].power,
     turn: {},
     activeFighter: {},
     passiveFighter: {}
 }

 handleClick = (move, event) => {
        if (parseInt(move.fighter_id) === this.state.activeFighter.id && this.state.Ampp1 > 0) {
            console.log(`fuckety fuck yeah ${this.state.activeFighter}`)
            console.log(event.target.id)

            this.setState({
                Ampp1: this.state.Ampp1 - 1
            })
            console.log(move.power)
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