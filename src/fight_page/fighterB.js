import React from "react";
import FighterBMoves from './fighterBMoves'

class FighterB extends React.Component {
    render() {
        
        return (
            <div>
                <img src={this.props.fighterB.img_url} alt={'no pic'} width={400} height={500} mode='fit'></img>
                <h1>HP:{this.props.Bhp}</h1>
                <FighterBMoves moves={this.props.fighterB.moves} />
            </div>
        )
    }
}

export default FighterB