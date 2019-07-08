import React from "react";
import FighterForm from "./fighter_form";

class SelectionContainer extends React.Component {

    state = {
        fighterName: "",
        fighterImage: "",
        moveOneName: "",
        moveOneImage: "",
        moveTwoName: "",
        moveTwoImage: "",
        moveThreeName: "",
        moveThreeImage: "",
        moveFourName: "",
        moveFourImage: "",
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



    handleSubmit = (event) => {
        event.preventDefault()
        console.log('hey tim')

        this.postFetch(event)
    }

    postFetch = (event) => {
        fetch('http://localhost:3000/fighters', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                "name": this.state.fighterName,
                "img_url": this.state.fighterImage,
                "moves": 
                    {
                        "name1": this.state.moveOneName,
                        "img_url1": this.state.moveOneImage,
                        "dp1": this.state.movePoints.moveOneDamage,
                        "pp1": this.state.movePoints.moveOnePower,
                        "name2": this.state.moveTwoName,
                        "img_url2": this.state.moveTwoImage,
                        "dp2": this.state.movePoints.moveTwoDamage,
                        "pp2": this.state.movePoints.moveTwoPower,
                        "name3": this.state.moveThreeName,
                        "img_url3": this.state.moveThreeImage,
                        "dp3": this.state.movePoints.moveThreeDamage,
                        "pp3": this.state.movePoints.moveThreePower,
                        "name4": this.state.moveFourName,
                        "img_url4": this.state.moveFourImage,
                        "dp4": this.state.movePoints.moveFourDamage,
                        "pp4": this.state.movePoints.moveFourPower 
                    }
            })
        })
        .then(results => results.json())
        .then(data => {
            console.log(data)
        })
    }

    render() {
        return (
            < FighterForm handleChange={this.handleChange} handlePowerClick={this.handlePowerClick} handleDamageClick={this.handleDamageClick} handleSubmit={this.handleSubmit} state={this.state}/>
        )
    }


}

export default SelectionContainer