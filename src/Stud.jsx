import React, { Component } from "react";

class Stud extends Component {
  render() {
    return (
      <div>
        <h2>Name: {this.props.name}</h2>
        <p>Age: {this.props.age}</p>

        {this.props.children}
      </div>
    );
  }
}

export default Stud;