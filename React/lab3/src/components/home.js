import "./home.css";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <div className="container">
      <NavLink to={"/singers"} className="center">
        MUSIC
      </NavLink>
      <img src="cover.png" className="img" alt="..." />
    </div>
  );
}
export default Home;
