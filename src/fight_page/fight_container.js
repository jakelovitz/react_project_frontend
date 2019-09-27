import React from "react";
import FighterA from './fighterA'
import FighterB from './fighterB'
import Battleground from './battleground'
import styles from './container.module.css'


class FightContainer extends React.Component {
//working on dynamically setting state keys for power so we can easily update them
//need to figure out why the back end isn't passing up the hp data so we can set state to decrement it
//look into having nested state - could we just have the fighterA and fighterB objects as state, with their various keys?
 state = {
     activeFighter: {},
     passiveFighter: {},
     fighterA: this.props.fighterA,
     fighterB: this.props.fighterB,
     selectedMoveDamage: 0,
     selectedMovePower: 0,
     selectedMoveImage: "",
     fighterAHp: this.props.fighterA.hp,
     fighterBHp: this.props.fighterB.hp
 }

 handleClick = (move) => {

        if (parseInt(move.fighter_id) === this.state.activeFighter.id) {
            
            if (this.state.activeFighter.id === this.state.fighterA.id) {
                // this.state.fighterB.hp = this.state.fighterB.hp - move.damage
                this.setState({
                    selectedMoveDamage: move.damage,
                    selectedMovePower: move.power,
                    selectedMoveImage: move.image,
                    activeFighter: {...this.state.activeFighter},
                    fighterA: {...this.state.activeFighter},
                    fighterBHp: this.state.fighterBHp - move.damage,
                    activeFighter: {...this.state.fighterB}
                })
                console.log('fighterA hp:', this.state.fighterAHp)
                console.log('fighterB hp:', this.state.fighterBHp)
                
            } else if (this.state.activeFighter.id === this.state.fighterB.id) {
                // this.state.fighterA.hp = this.state.fighterA.hp - move.damage
                this.setState({
                    selectedMoveDamage: move.damage,
                    selectedMovePower: move.power,
                    selectedMoveImage: move.image,
                    activeFighter: {...this.state.activeFighter},
                    fighterB: {...this.state.activeFighter},
                    fighterAHp: this.state.fighterAHp - move.damage,
                    activeFighter: {...this.state.fighterA}
                })

                console.log('fighterA hp:', this.state.fighterAHp)
                console.log('fighterB hp:', this.state.fighterBHp)
            }
        }
        else {
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
         <div className={styles.wrapper}>

            <div className={styles.fighterA}>
                <FighterA handleClick={this.handleClick} fighterAHp={this.state.fighterAHp} fighterA={this.props.fighterA} />
            </div>

            <div className={styles.battleground}>
                <Battleground image={this.state.selectedMoveImage} moveDamage={this.state.selectedMoveDamage} activeFighter={this.state.activeFighter} />
            </div>

            <div className={styles.fighterB}>
                <FighterB handleClick={this.handleClick} fighterBHp={this.state.fighterBHp} fighterB={this.props.fighterB} />
            </div>

         </div>
     )
 }
}

export default FightContainer