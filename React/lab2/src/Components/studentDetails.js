import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
let StudentDetails = (props) => {
  let { id } = useParams();
  return (
    <div class="card text-center w-50 ">
      <div class="card-body">
        <h5 class="card-title">Student Details</h5>
        <p class="card-text">ID: {id}</p>
        <NavLink to={"/home"}>
          <a href="#" class="btn btn-primary">
            Home
          </a>
        </NavLink>
      </div>
      <div class="card-footer text-body-secondary">3 minutes ago</div>
    </div>
  );
};
export default StudentDetails;
