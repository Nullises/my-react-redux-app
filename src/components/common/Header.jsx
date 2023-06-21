import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/" exact="true" style={activeStyle}>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/about" style={activeStyle}>
        About
      </NavLink>
      {" | "}
      <NavLink to="/courses" style={activeStyle}>
        Courses
      </NavLink>
    </nav>
  );
};

export default Header;
