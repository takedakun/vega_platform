import React, { Component } from 'react';

export default class NoMatch extends Component {
    render() {
        console.log(this.props.match)
        return (
            <div>
                Cannot access {this.props.match}
            </div>
        );
    }
}