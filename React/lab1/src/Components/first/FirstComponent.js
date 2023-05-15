import { Component } from "react";
import "./FirstComponent.css";

class FirstComponent extends Component {
  name = "";
  getData = (e) => {
    this.setState({ name: e.target.value });
  };

  resetName = (e) => {
    this.setState({ name: "" });
  };

  constructor() {
    super();
    this.state = {
      name: "",
    };
  }
  render() {
    return (
      <div class="container">
        <input
          type="text"
          placeholder="Enter Your name"
          value={this.state.name}
          onChange={this.getData}
        />
        <p>
          <span>Your Name is: </span> {this.state.name}
        </p>
        <button onClick={this.resetName}>Reset</button>
      </div>
    );
  }
}

export default FirstComponent;
