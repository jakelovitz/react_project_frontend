import React from "react";

class FighterBMoves extends React.Component {
    render() {
        return (
            <div>
                <button>{this.props.moves[0].name1}</button>
                <br></br>
                <button>{this.props.moves[0].name2}</button>
                <br></br>
                <button>{this.props.moves[0].name3}</button>
                <br></br>
                <button>{this.props.moves[0].name4}</button>
                <br></br>
            </div>
        )
    }
}

export default FighterBMoves