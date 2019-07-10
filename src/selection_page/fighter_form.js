import React from "react";

class FighterForm extends React.Component {
 
    render() {
        
        return (
            <form value={this.props.state} align="center" className="moveForm" onSubmit={(event) => this.props.handleSubmit(event)} >
            <h1>Make a fighter!</h1>

                <div id="fighter">
                    <label>Fighter Name: </label>
                    <input onChange={this.props.handleChange} value={this.props.state.fighterName} name="fighterName" placeholder="Fighter Name" type="text" ></input>
                    <br></br>
                    <label>Fighter Image URL: </label>
                    <input onChange={this.props.handleChange} value={this.props.state.fighterImage} name="fighterImage" placeholder="Place your image URL here!" type="text"></input>
                </div>
                <br></br>
                <p>Damage Points Remaining: {this.props.state.damagePoints}</p>
                <p>Power Points Remaning: {this.props.state.powerPoints}</p>

                <div id="Move1">
                    <label>Move One</label>
                    <br></br>
                    <input onChange={(event) => this.props.handleMoveChange("moveOne", "name", event.target.value)} value={this.props.state.moveOne.name} name="moveOneName" placeholder="Move One Name" type="text" />

                    <input onChange={(event) => this.props.handleMoveChange("moveOne", "image", event.target.value )} value={this.props.state.moveOne.image} name="moveOneImage" placeholder="Move One image" type="text" />
                    <br></br>

                    <label>Damage Points</label>

                    <button id={this.props.state.moveOne} onClick={(event) => this.props.handleDamageClick("+", "moveOne", "damage", event)}>+</button>

                    <span id='moveOneDamageSpan' value={this.props.state.moveOne.damage}>{this.props.state.moveOne.damage}</span>

                    <button id={this.props.state.moveOne.damage} onClick={(event) => this.props.handleDamageClick("-", "moveOne", "damage", event)}>-</button>

                    <br></br>
                    <label>Power Points</label>
                    <button id={this.props.state.moveOne} onClick={(event) => this.props.handlePowerClick('+','moveOne','power', event)}>+</button>

                    <span id='moveOnePowerSpan' value={this.props.state.moveOne.power}>{this.props.state.moveOne.power}</span>

                    <button  value={this.props.state.moveOne.power} name="moveOnePower" id={this.props.state.moveOne.power} onClick={(event) => this.props.handlePowerClick('-', 'moveOne', 'power', event)}>-</button>
                </div>

                <br></br>

                <div>
                    <label>Move Two</label>
                    <br></br>
                    <input onChange={(event) => this.props.handleMoveChange("moveTwo", "name", event.target.value)} value={this.props.state.moveTwo.name} placeholder="Move Two Name"type="text" name="moveTwoName" />
                    <input onChange={(event) => this.props.handleMoveChange("moveTwo", "image", event.target.value)} value={this.props.state.moveTwo.image} placeholder="Move Two Image"type="text" name="moveTwoImage" />
                    <br></br>
                    <label>Damage Points </label>
                    <button id={this.props.state.moveTwo} onClick={(event) => this.props.handleDamageClick('+','moveTwo','damage', event)}>+</button>

                    <span id="moveTwoDamageSpan" value={this.props.state.moveTwo.damage}>{this.props.state.moveTwo.damage}</span>

                    <button id={this.props.state.moveTwo} onClick={(event) => this.props.handleDamageClick('-', 'moveTwo', 'damage', event)}>-</button>
                    <br></br>
                    <label>Power Points</label>
                    <button id={this.props.state.moveTwo} onClick={(event) => this.props.handlePowerClick('+','moveTwo','power', event)}>+</button>

                    <span id="moveTwoPowerSpan" value={this.props.state.moveTwo.power}>{this.props.state.moveTwo.power}</span>

                    <button id={this.props.state.moveTwo} onClick={(event) => this.props.handlePowerClick('-', 'moveTwo', 'power', event)}>-</button>
                </div>

                <br></br>

                <div>
                    <label>Move Three</label>
                    <br></br>
                    <input onChange={(event) => this.props.handleMoveChange("moveThree", "name", event.target.value)} value={this.props.state.moveThree.name} placeholder="Move Three Name"type="text" name="moveThreeName" />
                    <input onChange={(event) => this.props.handleMoveChange("moveThree", "image", event.target.value)} value={this.props.state.moveThree.image} placeholder="Move Three Image"type="text" name="moveThreeImage" />
                    <br></br>
                    <label>Damage Points </label>
                    <button id={this.props.state.moveThree.damage} onClick={(event) => this.props.handleDamageClick('+','moveThree','damage', event)}>+</button>
                    <span id="moveThreeDamageSpan" value={this.props.state.moveThree.damage}>{this.props.state.moveThree.damage}</span>
                    <button id={this.props.state.moveThree.damage} onClick={(event) => this.props.handleDamageClick('-', 'moveThree', 'damage', event)}>-</button>
                    
                    <br></br>
                    <label>Power Points </label>
                    <button id={this.props.state.moveThree.power} onClick={(event) => this.props.handlePowerClick('+', 'moveThree', 'power', event)}>+</button>
                    <span id="moveThreePowerSpan" value={this.props.state.moveThree.power}>{this.props.state.moveThree.power}</span>
                    <button id={this.props.state.moveThree.power} onClick={(event) => this.props.handlePowerClick('-', 'moveThree', 'power', event)}>-</button>
                </div>

                <br></br>

                <div>
                    <label>Move Four</label>
                    <br></br>
                    <input onChange={(event) => this.props.handleMoveChange("moveFour", "name", event.target.value)} value={this.props.state.moveFour.name} placeholder="Move Four Name"type="text" name="moveFourName" />
                    <input onChange={(event) => this.props.handleMoveChange("moveFour", "image", event.target.value)} value={this.props.state.moveFour.image} placeholder="Move Four Image"type="text" name="moveFourImage" />
                    <br></br>
                    <label>Damage Points</label>
                    <button id={this.props.state.moveFour.damage} onClick={(event) => this.props.handleDamageClick('+', 'moveFour', 'damage', event)}>+</button>

                    <span id="moveFourDamageSpan" value={this.props.state.moveFour.damage}>{this.props.state.moveFour.damage}</span>

                    <button id={this.props.state.moveFour.damage} onClick={(event) => this.props.handleDamageClick('-', 'moveFour', 'damage', event)}>-</button>
                    <br></br>
                    <label>Power Points </label>
                    <button id={this.props.state.moveFour.power} onClick={(event) => this.props.handlePowerClick('+', 'moveFour', 'power', event)}>+</button>
                    <span id="moveFourPowerSpan" value={this.props.state.moveFour.power}>{this.props.state.moveFour.power}</span>
                    <button id={this.props.state.moveFour.power} onClick={(event) => this.props.handlePowerClick('-', 'moveFour', 'power', event)}>-</button>
                </div>
                <input type="submit" value=
                "Submit"/>
                

            </form>
        )
    }

}

export default FighterForm