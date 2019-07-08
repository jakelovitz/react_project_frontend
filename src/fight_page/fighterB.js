import React from "react";
import FighterBMoves from './fighterBMoves'

class FighterB extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.bot.avatar_url}></img>
                <FighterBMoves />
            </div>
        )
    }
}

export default FighterB