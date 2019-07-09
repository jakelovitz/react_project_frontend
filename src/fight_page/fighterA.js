import React from "react";
import FighterAMoves from './fighterAMoves'

class FighterA extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.fighterA.img_url} alt={'no pic'} width={400} height={500} mode='fit'></img>
                <h1>HP: {this.props.Ahp}</h1>
            <FighterAMoves moves={this.props.fighterA.moves} />
            </div>
        )
    }
}

export default FighterA