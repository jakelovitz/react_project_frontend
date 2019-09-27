import React from "react";
import styled from 'styled-components'
import '../styling.css'


const FighterBorder = styled('div')`
   
    text-align: center;

    margin-top: 10%;
    margin-right: 10%;
    margin-left: 10%;
    
    padding: 2%;

    align-items: center;
    justify-items: center;
    grid-column-gap: 1%;
    
    height: auto; padding-right: 2%;
    padding-left: 2%;
    padding-top: 2%;

    align-items: center;
    justify-items: center;
    
    border-radius: 15%;
    background: white;
    height: auto;
    color: black;
`

class FightingestFighter extends React.Component {

    state = {
        toggle: false
    }

    toggleState = () => {
        this.setState({
            toggle: !this.state.toggle
        })
       
    }

    renderEditForm(){
        console.log(this.props.fighter)
            return ( 
            <div>
                <h1>Edit Fighter</h1>
                <form onSubmit={(event) => this.props.handlePatch(this.props.fighter.id, event)}>
                        <input onChange={(event) => this.props.handleChange(event)} value={this.props.state.fighterName}  name="fighterName" type="text" placeholder={this.props.fighter.name}/>
                        {/* <input onChange={(event) => this.props.handleChange(event)} value={this.props.state.fighterImage} name="fighterImage" type="text" placeholder={this.props.fighter.img_url}/>  */}
                        <input type="submit" value="Submit" />
                </form>
            </div>
            )

        }

    render() {
        let returnDiv //declare variable for the edit form 

        if (this.state.toggle) {
            returnDiv = this.renderEditForm()
            
        } else {
            returnDiv = null
        }
        return (

            <FighterBorder>
                {this.props.fighter.name}

                <br></br>
                <br></br>


                <img src={this.props.fighter.img_url} alt={this.props.fighter.name} width={250} height={300} mode='fit'/>

                <br></br>
                
                
                <ul >{this.props.fighter.moves[0].name}</ul>
                <ul>{this.props.fighter.moves[1].name}</ul>
                <ul>{this.props.fighter.moves[2].name}</ul>
                <ul>{this.props.fighter.moves[3].name}</ul>

                <button id={this.props.fighter.id} size="small" color="primary" align="center" onClick={(event) => this.props.selectFighter(event)}>
                Player 1 - Select
                </button>

                <button id={this.props.fighter.id} size="small" color="primary" align="center" onClick={(event) => this.props.selectFighter(event)}>
                Player 2 - Select
                </button>

                <br></br>

                <button id={this.props.fighter.id} onClick={(event) => this.props.handleDelete(this.props.fighter.id)}>Delete Fighter</button>
                {/* <button onClick={(e) => this.toggleState()} id={this.props.fighter.id}>Edit Fighter</button> */}
                
                <div>{returnDiv}</div>
                
         </FighterBorder>
        )
    }

}

export default FightingestFighter