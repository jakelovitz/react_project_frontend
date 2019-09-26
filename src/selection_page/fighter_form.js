import React from "react";
import styles from './form.module.css'

class FighterForm extends React.Component {
 
    render() {
        
        return (
            <React.Fragment>
            <h1 style={{textAlign: 'center'}}>Make a fighter!</h1>
            
            <form value={this.props.state} className={styles.container} onSubmit={(event) => this.props.handleSubmit(event)} >

                <div id="fighter" className={styles.basicDeets}>

                    <label>Fighter Name: </label>

                    <input onChange={this.props.handleChange} value={this.props.state.fighterName} name="fighterName" placeholder="Fighter Name" type="text" ></input>


                    <label>Fighter Image URL: </label>

                    <input onChange={this.props.handleChange} value={this.props.state.fighterImage} name="fighterImage" placeholder="Fighter Image URL!" type="text"></input>

                </div>
                
                <div className={styles.moveDeets}>
                <p>Damage Points Remaining: {this.props.state.damagePoints}</p>
                <p>Power Points Remaning: {this.props.state.powerPoints}</p>
                </div>

                <div className={styles.moveOne}>

                    <label>Move One</label>
                    
                    <div>
                        <input onChange={(event) => this.props.handleMoveChange("moveOne", "name", event.target.value)} value={this.props.state.moveOne.name} name="moveOneName" placeholder="Move One Name" type="text" />

                        <input onChange={(event) => this.props.handleMoveChange("moveOne", "image", event.target.value )} value={this.props.state.moveOne.image} name="moveOneImage" placeholder="Move One Image" type="text" />
                    </div>

                    <div>
                        <label>Damage Points</label>

                        <button id={this.props.state.moveOne} onClick={(event) => this.props.handleDamageClick("+", "moveOne", "damage", event)}>+</button>

                        <span id='moveOneDamageSpan' value={this.props.state.moveOne.damage}>{this.props.state.moveOne.damage}</span>

                        <button id={this.props.state.moveOne.damage} onClick={(event) => this.props.handleDamageClick("-", "moveOne", "damage", event)}>-</button>
                    </div>
                    
                    <div>
                        <label>Power Points</label>
                        <button id={this.props.state.moveOne} onClick={(event) => this.props.handlePowerClick('+','moveOne','power', event)}>+</button>

                        <span id='moveOnePowerSpan' value={this.props.state.moveOne.power}>{this.props.state.moveOne.power}</span>

                        <button  value={this.props.state.moveOne.power} name="moveOnePower" id={this.props.state.moveOne.power} onClick={(event) => this.props.handlePowerClick('-', 'moveOne', 'power', event)}>-</button>
                    </div>

                </div>

                <div className={styles.moveTwo}>

                    <label>Move Two</label>

                    <div>
                        <input onChange={(event) => this.props.handleMoveChange("moveTwo", "name", event.target.value)} value={this.props.state.moveTwo.name} placeholder="Move Two Name"type="text" name="moveTwoName" />
                        <input onChange={(event) => this.props.handleMoveChange("moveTwo", "image", event.target.value)} value={this.props.state.moveTwo.image} placeholder="Move Two Image"type="text" name="moveTwoImage" />
                    </div>
                    
                    <div>
                        <label>Damage Points </label>
                        <button id={this.props.state.moveTwo} onClick={(event) => this.props.handleDamageClick('+','moveTwo','damage', event)}>+</button>

                        <span id="moveTwoDamageSpan" value={this.props.state.moveTwo.damage}>{this.props.state.moveTwo.damage}</span>

                        <button id={this.props.state.moveTwo} onClick={(event) => this.props.handleDamageClick('-', 'moveTwo', 'damage', event)}>-</button>
                    </div>

                    <div>
                        <label>Power Points</label>
                        <button id={this.props.state.moveTwo} onClick={(event) => this.props.handlePowerClick('+','moveTwo','power', event)}>+</button>

                        <span id="moveTwoPowerSpan" value={this.props.state.moveTwo.power}>{this.props.state.moveTwo.power}</span>

                        <button id={this.props.state.moveTwo} onClick={(event) => this.props.handlePowerClick('-', 'moveTwo', 'power', event)}>-</button>
                    </div>
                </div>

                <div className={styles.moveThree}>

                    <label>Move Three</label>
                    
                    <div>
                        <input onChange={(event) => this.props.handleMoveChange("moveThree", "name", event.target.value)} value={this.props.state.moveThree.name} placeholder="Move Three Name"type="text" name="moveThreeName" />
                        <input onChange={(event) => this.props.handleMoveChange("moveThree", "image", event.target.value)} value={this.props.state.moveThree.image} placeholder="Move Three Image"type="text" name="moveThreeImage" />
                    </div>
                    
                    <div>
                        <label>Damage Points </label>
                        <button id={this.props.state.moveThree.damage} onClick={(event) => this.props.handleDamageClick('+','moveThree','damage', event)}>+</button>
                        <span id="moveThreeDamageSpan" value={this.props.state.moveThree.damage}>{this.props.state.moveThree.damage}</span>
                        <button id={this.props.state.moveThree.damage} onClick={(event) => this.props.handleDamageClick('-', 'moveThree', 'damage', event)}>-</button>
                    </div>
                    
                    
                    <div>
                        <label>Power Points </label>
                        <button id={this.props.state.moveThree.power} onClick={(event) => this.props.handlePowerClick('+', 'moveThree', 'power', event)}>+</button>
                        <span id="moveThreePowerSpan" value={this.props.state.moveThree.power}>{this.props.state.moveThree.power}</span>
                        <button id={this.props.state.moveThree.power} onClick={(event) => this.props.handlePowerClick('-', 'moveThree', 'power', event)}>-</button>
                    </div>

                </div>

               

                <div className={styles.moveFour}>

                    <label>Move Four</label>
                   
                    <div>
                        <input onChange={(event) => this.props.handleMoveChange("moveFour", "name", event.target.value)} value={this.props.state.moveFour.name} placeholder="Move Four Name"type="text" name="moveFourName" />
                        <input onChange={(event) => this.props.handleMoveChange("moveFour", "image", event.target.value)} value={this.props.state.moveFour.image} placeholder="Move Four Image"type="text" name="moveFourImage" />
                    </div>
                   
                    <div>
                        <label>Damage Points</label>
                        <button id={this.props.state.moveFour.damage} onClick={(event) => this.props.handleDamageClick('+', 'moveFour', 'damage', event)}>+</button>
                        <span id="moveFourDamageSpan" value={this.props.state.moveFour.damage}>{this.props.state.moveFour.damage}</span>
                        <button id={this.props.state.moveFour.damage} onClick={(event) => this.props.handleDamageClick('-', 'moveFour', 'damage', event)}>-</button>
                    </div>
                   
                    <div>
                        <label>Power Points </label>
                        <button id={this.props.state.moveFour.power} onClick={(event) => this.props.handlePowerClick('+', 'moveFour', 'power', event)}>+</button>
                        <span id="moveFourPowerSpan" value={this.props.state.moveFour.power}>{this.props.state.moveFour.power}</span>
                        <button id={this.props.state.moveFour.power} onClick={(event) => this.props.handlePowerClick('-', 'moveFour', 'power', event)}>-</button>
                    </div>

                </div>
                <input type="submit" value="Submit" className={styles.submit}/>
                

            </form>
            </React.Fragment>
        )
    }

}

export default FighterForm