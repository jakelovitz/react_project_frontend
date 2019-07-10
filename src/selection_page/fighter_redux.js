import React from "react";
import '../styling.css'

class FightingestFighter extends React.Component {

    render() {
    //   console.log(this.props.fighter)
        return (

            <div align="center" className="grid-item">
                {this.props.fighter.name}

                <br></br>
                <br></br>


                <img src={this.props.fighter.img_url} alt={this.props.fighter.name} width={250} height={300} mode='fit'/>

                <br></br>

                <ul>{this.props.fighter.moves[0].name}</ul>
                <ul>{this.props.fighter.moves[1].name}</ul>
                <ul>{this.props.fighter.moves[2].name}</ul>
                <ul>{this.props.fighter.moves[3].name}</ul>

                <button id={this.props.fighter.id} size="small" color="primary" align="center" onClick={(event) => this.props.selectFighter(event)}>
                Player 1 - Select
                </button>

                <button id={this.props.fighter.id} size="small" color="primary" align="center" onClick={(event) => this.props.selectFighter(event)}>
                Player 2 - Select
                </button>

                <br></br>

                <button id={this.props.fighter.id} onClick={(event) => this.props.handleDelete(this.props.fighter.id)}>Delete Fighter</button>
                <button id={this.props.fighter.id}>Edit Fighter</button>
                
            </div>
        )
    }

}

export default FightingestFighter