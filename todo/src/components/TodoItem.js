import React from 'react'

class TodoItem extends React.Component {

    toggleHandler(event) {
    
    }

    render() {
        return (
            <li>
                <input
                    type="checkbox"
                    onChange={this.toggleHandler.bind(this)}
                    />
            </li>
        )
    }

}

export default TodoItem