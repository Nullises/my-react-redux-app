import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import CoursePage from "./components/courses/CoursesPage";
import Header from "./components/common/Header";
import PageNotFound from "../PageNotFound";
import ManageCoursePage from "./components/courses/ManageCoursePage";
  import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

  function App() {
    return (
      <>
        <div className="container text-center">
          <div className="row justify-content-start">
            <div className="col-4">
              <Header className="mb-10" />
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <Routes>
            <Route exact path="/" Component={HomePage} />
            <Route path="/about" Component={AboutPage} />
            <Route path="/courses" Component={CoursePage} />
            <Route path="/course/:slug" Component={ManageCoursePage} />
            <Route path="/course" Component={ManageCoursePage} />
            <Route path="*" Component={PageNotFound} />
          </Routes>
          <ToastContainer autoClose={1000} />
        </div>
      </>
    );
  }

export default App;
