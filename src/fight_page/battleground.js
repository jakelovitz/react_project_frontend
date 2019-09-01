import React from "react";
import styles from './container.module.css'

class Battleground extends React.Component {

    render() {
        
        return (
            
            <div>
                <h1>It's {this.props.activeFighter.name}'s turn</h1>
                
                {this.props.image ? <img src={this.props.image} className={styles.moveImage}></img> : null}

                {this.props.image ? <h1>Move did {this.props.moveDamage} damage!</h1> : null}

            </div>
             
        )
    }
}

export default Battleground