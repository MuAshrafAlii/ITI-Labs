const Student = require("../models/student");
const studentValidate = require("../utils/StudentsValidation");

const getAllStudents = (req, res) => {
  Student.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
};

const getStudentById = (req, res) => {
  const id = req.params.id;
  Student.findById(id)
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
};

const addStudent = (req, res) => {
  let formInput = req.body;
  let valid = studentValidate(formInput);

  if (valid) {
    const student = new Student({
      name: formInput.name,
      age: formInput.age,
      dept: formInput.dept,
    });

    student
      .save()
      .then((result) => res.send(result))
      .catch((err) => console.log(err));
  } else {
    console.log("added student does not match  schema");
  }
};

const updateStudentById = (req, res) => {
  let id = req.params.id;
  let formInput = req.body;

  Student.findByIdAndUpdate(id, {
    name: formInput.name,
    age: formInput.age,
    dept: formInput.dept,
  })
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
};

const deleteStudentById = (req, res) => {
  let id = req.params.id;

  Student.findByIdAndDelete(id)
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
};

module.exports = {
  getAllStudents,
  getStudentById,
  addStudent,
  updateStudentById,
  deleteStudentById,
};
