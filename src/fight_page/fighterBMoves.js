import React from "react";

class FighterBMoves extends React.Component {
    render() {
        return (
            <div>
                <button id={this.props.moves[0].id} data-id={this.props.moves[0].fighter_id} onClick={(event) => this.props.handleClick(event, this.props.moves[0].fighter_id)}>{this.props.moves[0].name}</button>
             <br></br>
                <button id={this.props.moves[1].id} fighter_id={this.props.moves[1].fighter_id} onClick={(event) => this.props.handleClick(event, this.props.moves[1].fighter_id)}>{this.props.moves[1].name}</button>
            <br></br>
                <button id={this.props.moves[2].id} fighter_id={this.props.moves[2].fighter_id} onClick={(event) => this.props.handleClick(event, this.props.moves[2].fighter_id)}>{this.props.moves[2].name}</button>
            <br></br>
                <button id={this.props.moves[3].id} fighter_id={this.props.moves[3].fighter_id} onClick={(event) => this.props.handleClick(event, this.props.moves[3].fighter_id)}>{this.props.moves[3].name}</button>
            <br></br>`
            </div>
        )
    }
}

export default FighterBMoves