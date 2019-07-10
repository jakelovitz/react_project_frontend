import React from "react";

class Battleground extends React.Component {
    render() {
        
        
        return (
            <h1>It's {this.props.activeFighter.name}'s turn</h1>
        )
    }
}

export default Battleground