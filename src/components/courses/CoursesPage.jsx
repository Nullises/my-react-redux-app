import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CoursesList";
import { Navigate } from "react-router-dom";


// In this case we will use class component instead functional component
class CoursePage extends React.Component {
  state = {
    redirectToAddCoursePage: false,
  };
  componentDidMount() {
    const { courses, authors, actions } = this.props;
    if (courses.length === 0) {
      actions.loadCourses().catch((error) => {
        console.log("error loading courses: ", error);
      });
    }
    if (authors.length === 0) {
      actions.loadAuthors().catch((error) => {
        console.log("error loading authors: ", error);
      });
    }
  }
  render() {
    return (
      <>
        {this.state.redirectToAddCoursePage && (
          <Navigate to="/course" replace />
        )}
        <h2>Courses</h2>
        <button
          style={{ marginBottom: 20 }}
          className="btn btn-primary add-course"
          onClick={() => this.setState({ redirectToAddCoursePage: true })}
        >
          Add Course
        </button>
        <CourseList courses={this.props.courses} />
      </>
    );
  }
}

CoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  // We will return an array of courses
  // The data that only we need in our component
  return {
    courses: state.courses.map((course) => {
      return {
        ...course,
        authorName: state.authors.find(
          (author) => author.id === course.authorId
        ).name,
      };
    }),
    authors: state.authors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
