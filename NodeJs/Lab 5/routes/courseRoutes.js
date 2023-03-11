const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

// Get All Courses
router.get("/courses", courseController.getAllCourses);

// Get one Course
router.get("/course/:id", courseController.getCourseById);

// Add Course
router.post("/course", courseController.addCourse);

// Update Course
router.put("/course/:id", courseController.updateCourseById);

// Delete Course
router.delete("/course/:id", courseController.deleteCourseById);

module.exports = router;
