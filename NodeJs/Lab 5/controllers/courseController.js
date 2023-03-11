const Course = require("../models/course");
const courseValidate = require("../utils/CoursesValidation");

const getAllCourses = (req, res) => {
  Course.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
};

const getCourseById = (req, res) => {
  const id = req.params.id;
  Course.findById(id)
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
};

const addCourse = (req, res) => {
  let formInput = req.body;
  let valid = courseValidate(req.body);

  if (valid) {
    const course = new Course({
      name: formInput.name,
      teacher: formInput.teacher,
      duration: formInput.duration,
    });

    course
      .save()
      .then((result) => res.send(result))
      .catch((err) => console.log(err));
  } else {
    console.log("Added course does not match schema");
  }
};

const updateCourseById = (req, res) => {
  let id = req.params.id;
  let formInput = req.body;

  Course.findByIdAndUpdate(id, {
    name: formInput.name,
    teacher: formInput.teacher,
    duration: formInput.duration,
  })
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
};

const deleteCourseById = (req, res) => {
  let id = req.params.id;

  Course.findByIdAndDelete(id)
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
};

module.exports = {
  getAllCourses,
  getCourseById,
  addCourse,
  updateCourseById,
  deleteCourseById,
};
