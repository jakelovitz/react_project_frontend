import React from "react";
import styles from './container.module.css'

class Battleground extends React.Component {

    render() {
        
        return (
            

            <div style={{alignContent: 'center'}}>
            <h1>It's {this.props.activeFighter.name}'s turn</h1>
            
            {this.props.image ? <img src={this.props.image} width={400} height={400}></img> : null}
            </div>
             
        )
    }
}

export default Battleground