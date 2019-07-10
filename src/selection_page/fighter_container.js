import React from "react";
import FightingestFighter from "./fighter_redux"
import '../styling.css'
// import { Button, Card, Row, Col } from 'react-materialize';

class FighterForm extends React.Component {

    render() {
        console.log(this.props.fighters)
        return (
            
            <div>
                <h2 align="center">Or choose one!</h2>
                
                <div className="grid-container" align="center"> 

                    {this.props.fighters.map ((fighter) => {
                    return <FightingestFighter fighter={fighter} key={fighter.id} selectFighter={this.props.selectFighter} handleDelete={this.props.handleDelete}/>
                    })}
                    
                </div> 
            </div>
        )
    }

}

export default FighterForm