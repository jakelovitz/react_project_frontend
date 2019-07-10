import React from "react";
import FighterForm from "./fighter_form";
import FighterContainer from "./fighter_container"

class SelectionContainer extends React.Component {

    state = {
        damagePoints: 20,
        powerPoints: 20,
        fighterName: "",
        fighterImage: "",
        health: 100,
        moveOne: {
            name: "",
            image: "",
            damage: 0,
            power: 0,
        },
        moveTwo: {
            name: "",
            image: "",
            damage: 0,
            power: 0,
        },
        moveThree: {
            name: "",
            image: "",
            damage: 0,
            power: 0,
        },
        moveFour: {
            name: "",
            image: "",
            damage: 0,
            power: 0,
        }
    }

    handleDamageClick = (inc, moveKey, attribute, event) => {
        event.preventDefault()

        if (inc === '+' && this.state.damagePoints > 0) {
            this.setState({
                [moveKey]: {
                    ...this.state[moveKey],
                    [attribute]: this.state[moveKey][attribute] + 1
                },
                damagePoints: this.state.damagePoints - 1
            })
        } else if (inc === '-' && this.state.damagePoints <= 20 && this.state[moveKey][attribute] > 0) {
            this.setState({
                [moveKey]: {
                    ...this.state[moveKey],
                    [attribute]: this.state[moveKey][attribute] - 1
                },
                damagePoints: this.state.damagePoints + 1
            })
        }
    }

    handlePowerClick = (inc, moveKey, attribute, event) => {
        event.preventDefault()
        // console.log(inc, moveKey, attribute)
        if (inc === '+' && this.state.damagePoints > 0) {

            this.setState({
                [moveKey]: {
                    ...this.state[moveKey],
                    [attribute]: this.state[moveKey][attribute] + 1
                },
                powerPoints: this.state.powerPoints - 1
            })

        } else if (inc === '-' && this.state.powerPoints <= 20 && this.state[moveKey][attribute] > 0) {
            this.setState({
                [moveKey]: {
                    ...this.state[moveKey],
                    [attribute]: this.state[moveKey][attribute] - 1
                },
                powerPoints: this.state.powerPoints + 1
            })
        }
    }

    handleMoveChange = (moveKey, attribute, value) => {
        this.setState({
            [moveKey]: {
                ...this.state[moveKey],
                [attribute]: value
            }
        })
    }

    handleChange = (event) => {

        this.setState({
        [event.target.name]: event.target.value
        })
    }

   handlePatch = (id, event) => {
       event.preventDefault()
       console.log('here')
       fetch(`https://localhost:3000/fighters/${id}`, {
           method: "PATCH",
           headers: {
               "Content-Type": "application/json",
               "Accept": "application/json"
           }, 
           body: JSON.stringify({
            name: this.state.fighterName,
            image: this.state.fighterImage
           })
       })
        .then(rsp => rsp.json())
        .then(rsp => console.log(rsp))
   }




    handleSubmit = (event) => {
        
        // event.preventDefault()
        
        console.log('form submitted')
        // this.postFetch()
        this.props.handlePost(this.postFetch())
    }

    postFetch = () => {
        fetch('http://localhost:3000/fighters', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(results => results.json())
        .then(data => {
            console.log(data)
            return data
        })
    }

    render() {
        console.log(this.state.fighterImage)
        return (
            <div>
                < FighterForm handleMoveChange={this.handleMoveChange} handleChange={this.handleChange} handlePowerClick={this.handlePowerClick} handleDamageClick={this.handleDamageClick} handleSubmit={this.handleSubmit} state={this.state}/>
                <br></br>
                < FighterContainer handlePatch={this.handlePatch} state={this.state} handleChange={this.handleChange} fighters={this.props.fighters} selectFighter={this.props.selectFighter} handleDelete={this.props.handleDelete}/>
            </div>
        )
    }


}

export default SelectionContainer