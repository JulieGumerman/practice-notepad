import React from "react";

class List extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                {this.props.state.stuffToDo.map(item => <p className={item.completed?"completed": ""}key={item.id} onClick={() => this.props.toggleCompletion(item.id)}>{item.task}</p>)}
            </div>
        );
    }
}

export default List;