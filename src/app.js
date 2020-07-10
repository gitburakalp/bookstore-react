import React from "react";
import ReactDOM from "react-dom";

class HelloWorld extends React.Component {
  render() {
    return <div>Hello {this.props.name} </div>;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloWorld name="World !" />, mountNode);
