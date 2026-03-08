const express = require("express");
const router = express.Router();

// Course Controllers
const {
  createCourse,
  getAllCourses,
  getCourseDetails,
} = require("../controllers/Course");

// Categories Controllers
const {
  showAllCategories,
  createCategory,
  categoryPageDetails,
} = require("../controllers/category");

// Sections Controllers
const {
  createSection,
  updateSection,
  deleteSection,
} = require("../controllers/section");

// Sub-Sections Controllers
const {
  createSubSection,
  updateSubSection,
  deleteSubSection,
} = require("../controllers/Subsection");

// Rating Controllers
const {
  createRating,
  getAverageRating,
  getAllRating,
} = require("../controllers/RatingAndReview");

// Middlewares
const { auth, isInstructor, isStudent, isAdmin } = require("../middlewares/Auth");

// Course routes
router.post("/createCourse", auth, isInstructor, createCourse);
router.post("/addSection", auth, isInstructor, createSection);
router.post("/updateSection", auth, isInstructor, updateSection);
router.post("/deleteSection", auth, isInstructor, deleteSection);
router.post("/updateSubSection", auth, isInstructor, updateSubSection);
router.post("/deleteSubSection", auth, isInstructor, deleteSubSection);
router.post("/addSubSection", auth, isInstructor, createSubSection);
router.get("/getAllCourses", getAllCourses);
router.post("/getCourseDetails", getCourseDetails);

// Category routes
router.post("/createCategory", auth, isAdmin, createCategory);
router.get("/showAllCategories", showAllCategories);
router.post("/getCategoryPageDetails", categoryPageDetails);

// Rating and Review routes
router.post("/createRating", auth, isStudent, createRating);
router.get("/getAverageRating", getAverageRating);
router.get("/getReviews", getAllRating);

module.exports = router;