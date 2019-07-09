import React from "react";

class Battleground extends React.Component {
    render() {
        
        
        return (
            <h1>{this.props.turn.name}</h1>
        )
    }
}

export default Battleground