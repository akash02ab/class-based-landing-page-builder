import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import Form from "./Form";

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offer: "",
            discount: "",
            limit: "",
            image: "",
            btntxt: "",
            time: "",
        };
    }

    handleChange = (event, key) => {
		event.persist();
		let target = {};
		Object.assign(target, this.state);
		target[key] = event.target.value;
		this.setState(target);
	};

    onSubmit = () => {
        for(let key in this.state) {
            if(this.state[key] === "") {
                alert('Input fields can\'t be empty.' )
                return;
            }
            if(key === 'time' && this.state[key] < new Date().toISOString()) {
                alert('Invalid Date.');
                return;
            }
        }

        this.props.history.push({
            pathname: '/promo',
            state: this.state
        })
    }

    render() {
        return (
            <Form 
                handleChange={this.handleChange} 
                onSubmit={this.onSubmit}
                url={this.state.image}
            />
        );
    }
}

export default withRouter(App);
