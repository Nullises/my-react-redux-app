import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>My React-Redux App</h1>
    <p>From Course: Building Applications with React 17 and Redux</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn More
    </Link>
  </div>
);

export default HomePage;
