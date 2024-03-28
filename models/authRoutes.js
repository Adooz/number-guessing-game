// authRoutes.js (Authentication Routes)
const express = require('express');
const router = express.Router();
const User = require('./user');
const { requireLogin } = require('./authMiddleware');

router.post('/register', async (req, res) => {
    // Handle user registration
});

router.post('/login', async (req, res) => {
    // Handle user login
});

router.get('/profile', requireLogin, async (req, res) => {
    // Display user profile
});

module.exports = router;
