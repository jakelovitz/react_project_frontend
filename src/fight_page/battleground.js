import React from "react";

class Battleground extends React.Component {

    render() {
        
        return (
            
            <div>
            <h1>It's {this.props.activeFighter.name}'s turn</h1>
            
            {this.props.image ? <img src={this.props.image} width={400} height={400}></img> : null}
            </div>
             
        )
    }
}

export default Battleground