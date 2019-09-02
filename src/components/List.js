import React from "react";

// class List extends React.Component {
//     constructor(props) {
//         super(props);
//     } //end constructor

//     render() {
//         return (
//             <div>{this.props.state.stuffToDo.map(event => <p key={event.id}>{event.task}</p>)}</div>
//         ); //end return
//     }//end render
//}

class List extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                {this.props.state.stuffToDo.map(item => <p key={item.id}>{item.task}</p>)}
            </div>
        );
    }
}

export default List;