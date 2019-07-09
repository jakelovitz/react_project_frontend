import React from "react";
import Fighter from "./fighter"
import '../styling.css'
// import { Button, Card, Row, Col } from 'react-materialize';

class FighterForm extends React.Component {

    // state = {
    //     fighters: []
    // }


    // componentDidMount() {
    //     fetch('http://localhost:3000/fighters')
    //         .then(response => response.json())
    //         .then(data => this.setState({ fighters: data }));
        
    // }

    render() {
        console.log(this.state)
        return (
            <div>
                <h1 align="center">Or Add One!</h1>


                {this.props.fighters.map ((fighter) => {
				  return <Fighter fighter={fighter} key={fighter.id} selectFighter={this.props.selectFighter} selectFighter={this.props.selectFighter}/>
              })}
            </div>
        )
    }

}

export default FighterForm