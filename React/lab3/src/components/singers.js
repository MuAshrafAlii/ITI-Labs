import { Component } from "react";
import Singer from "./singer";
class Singers extends Component {
  constructor() {
    super();
    this.state = {
      AllSingers: [],
    };
  }
  RenderSingers = () => {
    return this.state.AllSingers.map((singer) => {
      return <Singer oneSinger={singer} key={singer.id} />;
    });
  };
  render() {
    return <div>{this.RenderSingers()}</div>;
  }
  componentDidMount() {
    fetch("http://localhost:3003/artists")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ AllSingers: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
export default Singers;
