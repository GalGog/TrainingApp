import React, { Component } from 'react';


class ShowAlert extends Component {
    showAlert() {
        alert("Im an alert");
    }

    render() {
        return <button onClick={this.showAlert}>show alert</button>;
    }
}

export default ShowAlert;