const express = require("express");
const router = express.Router();
const StudentController = require("../controllers/studentController");

// Get All Students
router.get("/students", StudentController.getAllStudents);

// Get one student
router.get("/student/:id", StudentController.getStudentById);

// Add student
router.post("/student", StudentController.addStudent);

// Update student
router.put("/student/:id", StudentController.updateStudentById);

// Delete Students
router.delete("/student/:id", StudentController.deleteStudentById);

module.exports = router;
