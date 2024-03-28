const sqlite3 = require('sqlite3').verbose();

// Connect to SQLite database
const db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
        console.error('Error connecting to SQLite database:', err.message);
    } else {
        console.log('Connected to SQLite database');
    }
});

// Create leaderboard table
db.run(`CREATE TABLE leaderboard (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    score INTEGER NOT NULL
)`);

module.exports = db;
