import { Component } from "react";
import Register from "./register";
import Students from "./students";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      AllStudents: [],
    };
  }

  ReceiveKeyWord = (data) => {
    const { name, age } = data;
    let student = { name: name.value, age: age.value };
    this.setState((prevState) => ({
      AllStudents: [...prevState.AllStudents, student],
    }));
  };
  render() {
    return (
      <div>
        <Register onSubmit={this.ReceiveKeyWord} />
        <Students list={this.state.AllStudents} />
      </div>
    );
  }
}

export default Home;
