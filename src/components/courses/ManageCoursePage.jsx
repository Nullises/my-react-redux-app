/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { loadCourses, saveCourse } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import CourseForm from "./CourseForm";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

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
  const [saving, setSaving] = useState(false);

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

  // FORM VALIDATION
  function formIsValid() {
    const { title, authorId, category } = course;
    const errors = {};

    if (!title) errors.title = "Title is required.";
    if (!authorId) errors.author = "Author is required";
    if (!category) errors.category = "Category is required";

    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault();
    // If form is invalid doesn't save
    if (!formIsValid()) return;
    setSaving(true);
    dispatch(saveCourse(course))
      .then(() => {
        toast.success("Course Saved!");
        navigate("/courses");
      })
      .catch((error) => {
        setSaving(false);
        setErrors({
          onSave: error.message,
        });
      });
  }

  return authors.length === 0 || courses.length === 0 ? (
    <Spinner />
  ) : (
    <CourseForm
      course={course}
      errors={errors}
      authors={authors}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
    />
  );
}

// Manual selector by get courses by slug
// eslint-disable-next-line react-refresh/only-export-components
export function getCourseBySlug(courses, slug) {
  return courses.find((course) => course.slug === slug) || null;
}
export default ManageCoursePage;
