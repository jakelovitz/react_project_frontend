import React from "react";
import { thisTypeAnnotation } from "@babel/types";
// import { thisTypeAnnotation } from "@babel/types";

class FighterForm extends React.Component {

    state = {
        damagePoints: 20,
        powerPoints: 20,
        movePoints: {
            moveOneDamage: 0,
            moveOnePower: 0,
            moveTwoDamage: 0,
            moveTwoPower: 0,
            moveThreeDamage: 0,
            moveThreePower: 0,
            moveFourDamage: 0,
            moveFourPower: 0,
        }
    }

    handleDamageClick = (event) => {
        event.preventDefault()
        if (event.target.innerText === '+' && this.state.damagePoints > 0) {
            
            this.setState({
                [event.target.id]: ++this.state.movePoints[event.target.id],
                damagePoints: --this.state.damagePoints
            })
        } else if (event.target.innerText === '-' && this.state.damagePoints <= 20 && this.state.movePoints[event.target.id] > 0) {
            this.setState({
            [event.target.id]: --this.state.movePoints[event.target.id],
                damagePoints: ++this.state.damagePoints
            })
        }
    }

    handlePowerClick = (event) => {
        event.preventDefault()
        if (event.target.innerText === '+' && this.state.powerPoints > 0) {
            
            this.setState({
                [event.target.id]: ++this.state.movePoints[event.target.id],
                powerPoints: --this.state.powerPoints
            })
        } else if (event.target.innerText === '-' && this.state.powerPoints <= 20 && this.state.movePoints[event.target.id] > 0) {
            this.setState({
            [event.target.id]: --this.state.movePoints[event.target.id],
                powerPoints: ++this.state.powerPoints
            })
        }
    }

    handleChange = (event) => {

        this.setState({
          [event.target.name]: event.target.value
        })
    }
 
    render() {
        console.log(this.state.moveOneDamage)
        return (
            <form value={this.state} align="center" className="moveForm" onSubmit={(event) => this.props.handleSubmit(event)} >
            <h1>Make a fighter!</h1>

                <div id="fighter">
                    <label>Fighter Name: </label>
                    <input handleChange={this.handleChange} value={this.state.fighter} name="fighter" placeholder="Fighter Name" type="text" ></input>
                    <br></br>
                    <label>Fighter Image URL: </label>
                    <input handleChange={this.handleChange} value={this.state.fighterImage} name="fighterImage" placeholder="Place your image URL here!" type="text"></input>
                </div>
                <br></br>
                <p>Damage Points Remaining: {this.state.damagePoints}</p>
                <p>Power Points Remaning: {this.state.powerPoints}</p>

                <div id="Move1">
                    <label>Move One</label>
                    <br></br>
                    <input handleChange={this.handleChange} value={this.state.moveOneName} name="moveOneName" placeholder="Move 1 Name" type="text" name="move1Name" />
                    <input handleChange={this.handleChange} value={this.state.moveOneImage} name="moveOneImage" placeholder="Move 1 Name" placeholder="Move 1 Image"type="text" name="move1Img" />
                    <br></br>

                    <label>Damage Points</label>

                    <button id="moveOneDamage" onClick={this.handleDamageClick}>+</button>
                    <span id='moveOneDamageSpan' value={this.state.movePoints.moveOneDamage}>{this.state.movePoints.moveOneDamage}</span>
                    <button id="moveOneDamage" onClick={this.handleDamageClick}>-</button>

                    <br></br>
                    <label>Power Points</label>
                    <button id="moveOnePower" onClick={this.handlePowerClick}>+</button>
                    <span id='moveOnePowerSpan' value={this.state.movePoints.moveOnePower}>{this.state.movePoints.moveOnePower}</span>
                    <button handleChange={this.handleChange} value={this.state.movePoints.moveOneDamage} name="moveOnePower" id="moveOnePower" onClick={this.handlePowerClick}>-</button>
                </div>

                <br></br>

                <div>
                    <label>Move Two</label>
                    <br></br>
                    <input placeholder="Move 2 Name"type="text" name="move2Name" />
                    <input placeholder="Move w Image"type="text" name="move2Img" />
                    <br></br>
                    <label>Damage Points </label>
                    <button id="moveTwoDamage" onClick={this.handleDamageClick}>+</button>
                    <span id="moveTwoDamageSpan" value={this.state.movePoints.moveTwoDamage}>{this.state.movePoints.moveTwoDamage}</span>
                    <button id="moveTwoDamage" onClick={this.handleDamageClick}>-</button>
                    <br></br>
                    <label>Power Points</label>
                    <button id="moveTwoPower" onClick={this.handlePowerClick}>+</button>
                    <span id="moveTwoPowerSpan" value={this.state.movePoints.moveTwoPower}>{this.state.movePoints.moveTwoPower}</span>
                    <button id="moveTwoPower" onClick={this.handlePowerClick}>-</button>
                </div>

                <br></br>

                <div>
                    <label>Move Three</label>
                    <br></br>
                    <input placeholder="Move 3 Name"type="text" name="move1Name" />
                    <input placeholder="Move 3 Image"type="text" name="move1Img" />
                    <br></br>
                    <label>Damage Points </label>
                    <button id="moveThreeDamage" onClick={this.handleDamageClick}>+</button>
                    <span id="moveThreeDamageSpan" value={this.state.movePoints.moveThreeDamage}>{this.state.movePoints.moveThreeDamage}</span>
                    <button id="moveThreeDamage" onClick={this.handleDamageClick}>-</button>
                    
                    <br></br>
                    <label>Power Points </label>
                    <button id="moveThreePower" onClick={this.handlePowerClick}>+</button>
                    <span id="moveThreePowerSpan" value={this.state.movePoints.moveThreePower}>{this.state.movePoints.moveThreePower}</span>
                    <button id="moveThreePower" onClick={this.handlePowerClick}>-</button>
                </div>

                <br></br>

                <div>
                    <label>Move Four</label>
                    <br></br>
                    <input placeholder="Move 4 Name"type="text" name="move1Name" />
                    <input placeholder="Move 4 Image"type="text" name="move1Img" />
                    <br></br>
                    <label>Damage Points</label>
                    <button id="moveFourDamage" onClick={this.handleDamageClick}>+</button>
                    <span id="moveFourDamageSpan" value={this.state.movePoints.moveFourDamage}>{this.state.movePoints.moveFourDamage}</span>
                    <button id="moveFourDamage" onClick={this.handleDamageClick}>-</button>
                    <br></br>
                    <label>Power Points </label>
                    <button id="moveFourPower" onClick={this.handlePowerClick}>+</button>
                    <span id="moveFourPowerSpan" value={this.state.movePoints.moveFourPower}>{this.state.movePoints.moveFourPower}</span>
                    <button id="moveFourPower" onClick={this.handlePowerClick}>-</button>
                </div>
                <input type="submit" value=
                "Submit"/>
                

            </form>
        )
    }

}

export default FighterForm