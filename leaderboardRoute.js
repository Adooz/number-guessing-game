const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Get leaderboard
router.get('/', async (req, res) => {
    try {
        const leaderboard = await User.find().sort({ score: -1 }).limit(10); // Get top 10 players
        res.json({ success: true, leaderboard });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

module.exports = router;
