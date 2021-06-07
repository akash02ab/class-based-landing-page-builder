import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Timer from "./Timer";

export class Countdown extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isOver: false,
            isAvail: false
        }
    }

    clickhandler = () => {
        this.setState({
            isOver: true
        });
    }

    avail = () => {
        this.setState({
            isAvail: true
        });
    }
    
    render() {
        const {
            image,
            offer,
            discount,
            limit,
            time,
            btntxt
        } = (this.props.location.state);

        return this.state.isOver ? (
            <div className="time-out">Promo Ended.</div>
        ) : (
            <div className="count-down">
                <img src={image} alt="bg" />
                <div className="count-down-card">
                    <h1>{offer}</h1>
                    <h3>{discount}</h3>
                    <h3>{limit}</h3>
                    <Timer time={time} setIsOver={this.clickhandler} />
                    <button onClick={this.avail}>{btntxt}</button>
                    {this.state.isAvail ? <p>You Claimed the Offer!</p> : null}
                </div>
            </div>
        );
    }
}

export default withRouter(Countdown);
