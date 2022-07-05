const express = require('express');
const authController = require('../controllers/AuthController');

const router = express.Router();

router.get('/signup', authController.SignUp);
router.get('/signin', authController.SignIn);
router.get('/verify', authController.Verify);

module.exports = router;