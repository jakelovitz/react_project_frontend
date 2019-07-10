import React from "react";
import Fighter from "./fighter"
import '../styling.css'
// import { Button, Card, Row, Col } from 'react-materialize';

class FighterForm extends React.Component {

    render() {
        
        return (
            
             <div>
                <h1 align="center">Or Add One!</h1>
                {this.props.fighters.map((fighter) => {
                    return <p>{fighter.name}</p>
                })}

                {/* {this.props.fighters.map ((fighter) => {
				  return <Fighter fighter={fighter} key={fighter.id} selectFighter={this.props.selectFighter} selectFighter={this.props.selectFighter}/>
              })} */}
            </div> 
        )
    }

}

export default FighterForm