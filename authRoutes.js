const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Register
router.post('/register', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ success: true, user });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
});

// Login
router.post('/login', async (req, res) => {
    // Implement login logic here
});

module.exports = router;
