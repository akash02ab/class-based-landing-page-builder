import React, { Component } from "react";

const backgroundImages = [
    "https://images.unsplash.com/photo-1607893351349-0cfa621476ed?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&w=1920&q=80",
];

export class Form extends Component {
    render() {
        return (
            <div className="container">
                <div className="form">
                    <h1>Build Your Loading Page</h1>
                    <label htmlFor="offer">Main Headline</label>
                    <input
                        type="text"
                        onChange={(event) => this.props.handleChange(event, "offer")}
                    />
                    <label htmlFor="discount">Secondary Headline</label>
                    <input
                        type="text"
                        onChange={(event) => this.props.handleChange(event, "discount")}
                    />
                    <label htmlFor="limit">Subtext</label>
                    <input
                        type="text"
                        onChange={(event) => this.props.handleChange(event, "limit")}
                    />
                    <label htmlFor="btnText">Button Text</label>
                    <input
                        type="text"
                        onChange={(event) => this.props.handleChange(event, "btntxt")}
                    />
                    <label htmlFor="promoEnd">When will the promo end ?</label>
                    <input
                        type="datetime-local"
                        onChange={(event) => this.props.handleChange(event, "time")}
                    />
                    <div className="radio">
                        <input
                            type="radio"
                            value={backgroundImages[0]}
                            checked={this.props.url === backgroundImages[0]}
                            onChange={(event) => this.props.handleChange(event, "image")}
                        />
                        <div className="backg">
                            <img src={backgroundImages[0]} alt="0" />
                        </div>
                        <input
                            type="radio"
                            value={backgroundImages[1]}
                            checked={this.props.url === backgroundImages[1]}
                            onChange={(event) => this.props.handleChange(event, "image")}
                        />
                        <div className="backg">
                            <img src={backgroundImages[1]} alt="1" />
                        </div>
                    </div>
                    <button onClick={this.props.onSubmit}>Start Timer</button>
                </div>
            </div>
        );
    }
}

export default Form;
