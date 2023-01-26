const express = require("express");



const router = express.Router();
const authController = require("../controllers/authController");

//route for register 
router.post("/register",authController.register )

//login route
router.post("/login",authController.login )




module.exports = router;