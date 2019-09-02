import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ""
        }
    }//end constructor


    //--manageSubmit
    manageSubmit = event => {
        event.preventDefault();
        this.props.addToDo(this.state.task);
        this.setState({task:""});
    }
    //--handleChange
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }


    render() {
        return (
            <form onSubmit = {event => this.manageSubmit(event)}>
                <input type="text" name="task" placeholder="to do" onChange={this.handleChange} value={this.state.task}/>
                <button type="submit">Submit it!</button>
                <button>Clear finished</button>
            </form>
        );
    }//end render
} //end class

export default Form;