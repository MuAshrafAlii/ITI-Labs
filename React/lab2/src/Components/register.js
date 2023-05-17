import { Component } from "react";

class Register extends Component {
  add = (e) => {
    e.preventDefault();
    this.props.onSubmit(e.target);
  };

  render() {
    return (
      <div>
        <div class="fw-bold text-center text-info my-2">
          <p>Registration</p>
        </div>

        <div id="formContainer" class="">
          <form class="form" onSubmit={this.add}>
            <div class="mb-3">
              <label for="name" class="form-label">
                Enter Name
              </label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Name"
                name="name"
              />
            </div>

            <div class="mb-3">
              <label for="age" class="form-label">
                Enter Age
              </label>
              <input
                type="text"
                class="form-control"
                id="age"
                placeholder="Age"
                name="age"
              />
            </div>

            <button type="submit" class="btn btn-primary">
              ADD
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default Register;
