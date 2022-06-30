import React, { Component } from "react";
import Child from "./child";
import ChildOne from "./childOne";

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Nalini", //1
    };
  }

  componentDidMount() {
    console.log("componentDIDMount");
    setInterval(() => {
      this.setState({
        name: "website", //name: this.state.name
      });
    }, 2000);
  }

  render() {
    console.log("Parent component Render");
    return (
      <>
        <h1>Parent Component Name : {this.state.name} </h1>
        <Child name={this.state.name} />
        <ChildOne />
      </>
    );
  }
}
export default Parent;
