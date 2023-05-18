import { NavLink } from "react-router-dom";
import "./singer.css";
let Singer = (props) => {
  let { oneSinger } = props;
  return (
    <div>
      <div className="w-50 m-auto cont" key={oneSinger.id}>
        <div className="container">
          <img
            src={`covers/${oneSinger.cover}.jpg`}
            alt="Singer Cover"
            className="w-100 image"
            style={{ height: "400px" }}
          />
          <p className="bottomleft">
            <NavLink className="link" to={`/singers/${oneSinger.id}`}>
              {oneSinger.name}
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Singer;
