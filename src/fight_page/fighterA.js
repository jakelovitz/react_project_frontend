import React from "react";
import FighterAMoves from './fighterAMoves'

class FighterA extends React.Component {
    render() {
        return (
            <div>
            <img src={this.props.bot.avatar_url}></img>
            <FighterAMoves />
            </div>
        )
    }
}

export default FighterA