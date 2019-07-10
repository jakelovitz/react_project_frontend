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
     Ampp1: this.props.fighterA.moves[0].power,
     Ampp2: this.props.fighterA.moves[1].power,
     Ampp3: this.props.fighterA.moves[2].power,
     Ampp4: this.props.fighterA.moves[3].power,
     Bmpp1: this.props.fighterB.moves[0].power,
     Bmpp2: this.props.fighterB.moves[1].power,
     Bmpp3: this.props.fighterB.moves[2].power,
     Bmpp4: this.props.fighterB.moves[3].power,
     turn: {},
     activeFighter: {},
     passiveFighter: {},
     fighterA: this.props.fighterA,
     fighterB: this.props.fighterB,
     selectedMoveDamage: 0,
     selectedMovePower: 0,
     selectedMoveImage: ""
 }

 handleClick = (move, event) => {

        if (parseInt(move.fighter_id) === this.state.activeFighter.id) {
            console.log(`current fighter is: ${this.state.activeFighter}`)
            console.log(event.target.id)

            this.setState({
                selectedMoveDamage: move.damage,
                selectedMovePower: move.power,
                selectedMoveImage: move.image


            })
            // this.enactMove(move)
        }
        else {
            alert("not yo turn dip")
        }
        console.log(this.state) //
 }

 enactMove = (move) => {
    // this.setState({
    //     selectedMoveDamage: move.damage,
    //     selectedMovePower: move.power,
    //     selectedMoveImage: move.image
    // })
    console.log(this.state)
     
 }

 componentDidUpdate(prevProps, prevState) {
    //  this.enactMove() // cannot set state in function calls within componentDidUpdate
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
         <Battleground image={this.state.selectedMoveImage} activeFighter={this.state.activeFighter} class='two'/>
         <FighterB handleClick={this.handleClick} Bhp={this.state.Bhp} fighterB={this.props.fighterB} class='three'/>
         </div>
     )
 }
}

export default FightContainer