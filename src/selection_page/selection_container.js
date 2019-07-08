import React from "react";
import FighterForm from "./fighter_form";

class SelectionContainer extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('hey tim')
        debugger
    }

    render() {
        return (
            < FighterForm handleSubmit={this.handleSubmit}/>
        )
    }


}

export default SelectionContainer