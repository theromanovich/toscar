import React from 'react';
import ReactDOM from 'react-dom';
import ClockOld from "./Clock-old";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hello: "World!"};
    }

    componentWillMount() {
        console.log("componentWillMount()");
    }

    componentDidMount() {
        console.log("componentDidMount()");
    }

    changeState() {
        this.setState({hello: "Geek!"});
    }

    render() {
        return (
            <div>
                <h1>GeeksForGeeks.org, Hello{this.state.hello}</h1>
                <h2>
                    <a onClick={this.changeState.bind(this)}>Press Here!</a>
                </h2>
            </div>);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate()");
        return true;
    }

    componentWillUpdate() {
        console.log("componentWillUpdate()");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate()");
    }
}

export default Clock;