import { Link } from "react-router-dom";
import home from "../assets/home-icon.png";

function Navbar() {
  return (
    <>
      <nav style={{ backgroundColor: "blue" }}>
        <Link to="/">
          <img
            style={{ display: "flex", marginLeft: "auto", marginRight: "auto" }}
            src={home}
            alt=""
          />
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
