import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./singerDetails.css";
import { NavLink } from "react-router-dom";

function SingerDetails() {
  let { id } = useParams();
  let [singer, setSinger] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3003/artists/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSinger(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <p className="home">
        <NavLink to={"/home"} className="link">
          <span>Home</span>
        </NavLink>
      </p>
      <img
        src={`../covers/${singer.cover}.jpg`}
        className="img"
        alt="Singer Cover"
        style={{ height: "200px", width: "200px" }}
      />
      <h5 className="name">{singer.name}</h5>
      <h5 className="bio">{singer.bio}</h5>
      <div className="image-container">
        {singer.albums &&
          singer.albums.map((album) => (
            <img
              className="albums"
              key={album.albumId}
              src={`../albums/${album.cover}${
                album.cover.endsWith(".png") ? ".png" : ".jpg"
              }`}
              alt="Album Cover"
            />
          ))}
      </div>
    </div>
  );
}
export default SingerDetails;
