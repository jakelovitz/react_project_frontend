import React from "react";

class Battleground extends React.Component {

    render() {
        console.log(this.props)
        
        return (
            
            <div>
            <h1>It's {this.props.activeFighter.name}'s turn</h1>
            
            {this.props.image ? <img src={this.props.image}></img> : null}
            </div>
            
        )
    }
}

export default Battleground