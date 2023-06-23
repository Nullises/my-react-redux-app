/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { loadCourses, saveCourse } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import CourseForm from "./CourseForm";

// In this case we will use functional compoent
function ManageCoursePage() {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { slug } = params;
  const courses = useSelector((state) => state.courses);
  const authors = useSelector((state) => state.authors);
  const [course, setCourse] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!courses?.length) {
      dispatch(loadCourses());
    }
    if (!authors?.length) {
      dispatch(loadAuthors());
    }
  }, [authors, courses, dispatch]);

  useEffect(() => {
    if (slug && courses.length) {
      const selectedCourse = getCourseBySlug(courses, slug);
      setCourse(selectedCourse);
    }
  }, [slug]);

  function handleChange(event) {
    const { name, value } = event.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value,
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    dispatch(saveCourse(course));
    navigate("/courses");
  }

  console.log("course", course);

  return (
    <CourseForm
      course={course}
      errors={errors}
      authors={authors}
      onChange={handleChange}
      onSave={handleSave}
    />
  );
}

// Manual selector by get courses by slug
// eslint-disable-next-line react-refresh/only-export-components
export function getCourseBySlug(courses, slug) {
  return courses.find((course) => course.slug === slug) || null;
}
export default ManageCoursePage;
