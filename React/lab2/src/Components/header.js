import { NavLink } from "react-router-dom";
import "../style.css";

let Header = () => {
  return (
    <div className="navbarCont">
      <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div class="container-fluid gap-5 ">
          <NavLink
            class="mx-4"
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
            to={"/home"}
          >
            Home
          </NavLink>

          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink
                  class="mx-4"
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "blue",
                  })}
                  to={"/students/5"}
                >
                  Details
                </NavLink>
              </li>
              <li class="nav-item mx-4 ">
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "blue",
                  })}
                  to={"/profile"}
                >
                  Profile
                </NavLink>
              </li>
              <li class="nav-item mx-4">
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "blue",
                  })}
                  to={"/somethingWrong"}
                >
                  Error
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
