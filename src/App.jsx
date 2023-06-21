import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import CoursePage from "./components/courses/CoursesPage";
import Header from "./components/common/Header";
import PageNotFound from "../PageNotFound";

function App() {
  return (
    <>
      <div className="container-fluid">
        <Header className="mb-10" />
        <Routes>
          <Route exact="true" path="/" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
          <Route path="/courses" Component={CoursePage} />
          <Route path="*" Component={PageNotFound} />
        </Routes>
      </div>
    </>
  );
}

export default App;
