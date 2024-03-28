// authMiddleware.js (Authentication Middleware)
const User = require('./user');

function requireLogin(req, res, next) {
    // Check if user is authenticated, redirect to login page if not
}

module.exports = { requireLogin };
