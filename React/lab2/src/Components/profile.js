import { NavLink } from "react-router-dom";

let Profile = () => {
  return (
    <div class="card text-center w-50 ">
      <div class="card-body">
        <h5 class="card-title">Profile Page</h5>
        <p class="card-text">you are viewing profile route now!!</p>
        <NavLink to={"/home"}>
          <a href="#" class="btn btn-primary">
            Home
          </a>
        </NavLink>
      </div>
      <div class="card-footer text-body-secondary">3 Minutes ago</div>
    </div>
  );
};
export default Profile;
