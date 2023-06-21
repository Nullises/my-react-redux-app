import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

// In this case we will use class component instead functional component
class CoursePage extends React.Component {
  state = {
    course: {
      title: "",
    },
  };

  handleChange = (event) => {
    // We will create a copy of course, since state is Immutable
    const course = { ...this.state.course, title: event.target.value };
    // Add the course copy to the state
    this.setState({ course });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Here we dispatch the createCourse of courseActions to the props with new state
    this.props.actions.createCourse(this.state.course);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Courses</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

CoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  // We will return an array of courses
  // The data that only we need in our component
  return {
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
