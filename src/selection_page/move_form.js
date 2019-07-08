import React from "react";

class MoveForm extends React.Component {

    state = {
        damagePoints: 20,
        powerPoints: 20,
        
        moveOneDamage: 0,
        moveOnePower: 0,
        moveTwoDamage: 0,
        moveTwoPower: 0,
        moveThreeDamage: 0,
        moveThreePower: 0,
        moveFourDamage: 0,
        moveFourPower: 0,
    }

    handleDamageClick = (event) => {
        event.preventDefault()
        if (event.target.innerText === '+' && this.state.damagePoints > 0) {
            
            this.setState({
                // console.log({this.state[event.target.id]})
                [event.target.id]: ++this.state[event.target.id],
                damagePoints: --this.state.damagePoints
            })
        } else if (event.target.innerText === '-') {
            this.setState({
            [event.target.id]: --this.state[event.target.id],
                damagePoints: ++this.state.damagePoints
            })
        }
    }

    handlePowerClick = () => {

    }
 
    render() {
        console.log(this.state.moveOneDamage)
        console.log(this.state.moveTwoDamage)
        console.log(this.state.moveThreeDamage)
        console.log(this.state.moveFourDamage)

        return (
            <form align="center" className="moveForm" onSubmit={this.handleFormSubmit} >
                <p>Damage Points Remaining: {this.state.damagePoints}</p>
                <p>Power Points Remaning: {this.state.powerPoints}</p>

                <div id="Move1">
                    <label>Move One</label>
                    <br></br>
                    <input placeholder="Move 1 Name"type="text" name="move1Name" />
                    <input placeholder="Move 1 Image"type="text" name="move1Img" />
                    <br></br>
                    <label>Move Damage Points: {}</label>
                    <button id="moveOneDamage" onClick={this.handleDamageClick}>+</button>
                    <button id="moveOneDamage" onClick={this.handleDamageClick}>-</button>
                    <br></br>
                    <label>Move Power Points: {}</label>
                    <button>+</button>
                    <button>-</button>
                </div>

                <br></br>

                <div>
                    <label>Move Two</label>
                    <br></br>
                    <input placeholder="Move 2 Name"type="text" name="move2Name" />
                    <input placeholder="Move w Image"type="text" name="move2Img" />
                    <br></br>
                    <label>Move Damage Points: {}</label>
                    <button id="moveTwoDamage" onClick={this.handleDamageClick}>+</button>
                    <button id="moveTwoDamage" onClick={this.handleDamageClick}>-</button>
                    <br></br>
                    <label>Move Power Points: {}</label>
                    <button>+</button>
                    <button>-</button>
                </div>

                <br></br>

                <div>
                    <label>Move Three</label>
                    <br></br>
                    <input placeholder="Move 3 Name"type="text" name="move1Name" />
                    <input placeholder="Move 3 Image"type="text" name="move1Img" />
                    <br></br>
                    <label>Move Damage Points: {}</label>
                    <button id="moveThreeDamage" onClick={this.handleDamageClick}>+</button>
                    <button id="moveThreeDamage" onClick={this.handleDamageClick}>-</button>
                    <br></br>
                    <label>Move Power Points: {}</label>
                    <button>+</button>
                    <button>-</button>
                </div>

                <br></br>

                <div>
                    <label>Move Four</label>
                    <br></br>
                    <input placeholder="Move 4 Name"type="text" name="move1Name" />
                    <input placeholder="Move 4 Image"type="text" name="move1Img" />
                    <br></br>
                    <label>Move Damage Points: {}</label>
                    <button id="moveFourDamage" onClick={this.handleDamageClick}>+</button>
                    <button id="moveFourDamage" onClick={this.handleDamageClick}>-</button>
                    <br></br>
                    <label>Move Power Points: {}</label>
                    <button>+</button>
                    <button>-</button>
                </div>
                <input type="submit" value=
                "Submit" />
                

            </form>
        )
    }

}

export default MoveForm