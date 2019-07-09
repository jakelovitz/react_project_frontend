import React from "react";

class FighterForm extends React.Component {
 
    render() {
        console.log(this.props.state.moveOneDamage)
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
                    <input onChange={(event) => this.props.handleChange(event)} value={this.props.state.moveOneName} name="moveOneName" placeholder="Move One Name" type="text" />

                    <input onChange={this.props.handleChange} value={this.props.state.moveOneImage} name="moveOneImage" placeholder="Move One image" type="text" />
                    <br></br>

                    <label>Damage Points</label>

                    <button id="moveOneDamage" onClick={this.props.handleDamageClick}>+</button>
                    <span id='moveOneDamageSpan' value={this.props.state.movePoints.moveOneDamage}>{this.props.state.movePoints.moveOneDamage}</span>
                    <button id="moveOneDamage" onClick={this.props.handleDamageClick}>-</button>

                    <br></br>
                    <label>Power Points</label>
                    <button id="moveOnePower" onClick={this.props.handlePowerClick}>+</button>
                    <span id='moveOnePowerSpan' value={this.props.state.movePoints.moveOnePower}>{this.props.state.movePoints.moveOnePower}</span>
                    <button handleChange={this.props.handleChange} value={this.props.state.movePoints.moveOneDamage} name="moveOnePower" id="moveOnePower" onClick={this.props.handlePowerClick}>-</button>
                </div>

                <br></br>

                <div>
                    <label>Move Two</label>
                    <br></br>
                    <input onChange={this.props.handleChange} value={this.props.state.moveTwoName} placeholder="Move Two Name"type="text" name="moveTwoName" />
                    <input onChange={this.props.handleChange} value={this.props.state.moveTwoImage} placeholder="Move Two Image"type="text" name="moveTwoImage" />
                    <br></br>
                    <label>Damage Points </label>
                    <button id="moveTwoDamage" onClick={this.props.handleDamageClick}>+</button>
                    <span id="moveTwoDamageSpan" value={this.props.state.movePoints.moveTwoDamage}>{this.props.state.movePoints.moveTwoDamage}</span>
                    <button id="moveTwoDamage" onClick={this.props.handleDamageClick}>-</button>
                    <br></br>
                    <label>Power Points</label>
                    <button id="moveTwoPower" onClick={this.props.handlePowerClick}>+</button>
                    <span id="moveTwoPowerSpan" value={this.props.state.movePoints.moveTwoPower}>{this.props.state.movePoints.moveTwoPower}</span>
                    <button id="moveTwoPower" onClick={this.props.handlePowerClick}>-</button>
                </div>

                <br></br>

                <div>
                    <label>Move Three</label>
                    <br></br>
                    <input onChange={this.props.handleChange} value={this.props.state.moveThreeName} placeholder="Move Three Name"type="text" name="moveThreeName" />
                    <input onChange={this.props.handleChange} value={this.props.state.moveThreeImage} placeholder="Move Three Image"type="text" name="moveThreeImage" />
                    <br></br>
                    <label>Damage Points </label>
                    <button id="moveThreeDamage" onClick={this.props.handleDamageClick}>+</button>
                    <span id="moveThreeDamageSpan" value={this.props.state.movePoints.moveThreeDamage}>{this.props.state.movePoints.moveThreeDamage}</span>
                    <button id="moveThreeDamage" onClick={this.props.handleDamageClick}>-</button>
                    
                    <br></br>
                    <label>Power Points </label>
                    <button id="moveThreePower" onClick={this.props.handlePowerClick}>+</button>
                    <span id="moveThreePowerSpan" value={this.props.state.movePoints.moveThreePower}>{this.props.state.movePoints.moveThreePower}</span>
                    <button id="moveThreePower" onClick={this.props.handlePowerClick}>-</button>
                </div>

                <br></br>

                <div>
                    <label>Move Four</label>
                    <br></br>
                    <input onChange={this.props.handleChange} value={this.props.state.moveFourName} placeholder="Move Four Name"type="text" name="moveFourName" />
                    <input onChange={this.props.handleChange} value={this.props.state.moveFourImage} placeholder="Move Four Image"type="text" name="moveFourImage" />
                    <br></br>
                    <label>Damage Points</label>
                    <button id="moveFourDamage" onClick={this.props.handleDamageClick}>+</button>
                    <span id="moveFourDamageSpan" value={this.props.state.movePoints.moveFourDamage}>{this.props.state.movePoints.moveFourDamage}</span>
                    <button id="moveFourDamage" onClick={this.props.handleDamageClick}>-</button>
                    <br></br>
                    <label>Power Points </label>
                    <button id="moveFourPower" onClick={this.props.handlePowerClick}>+</button>
                    <span id="moveFourPowerSpan" value={this.props.state.movePoints.moveFourPower}>{this.props.state.movePoints.moveFourPower}</span>
                    <button id="moveFourPower" onClick={this.props.handlePowerClick}>-</button>
                </div>
                <input type="submit" value=
                "Submit"/>
                

            </form>
        )
    }

}

export default FighterForm