// server.js
const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

// Connect to SQLite database
const db = new sqlite3.Database('users.db');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Endpoint to handle user signup
app.post('/signup', (req, res) => {
  const { fullName, companyName, email, password } = req.body;

  // Insert user data into the 'users' table
  const insertQuery = `INSERT INTO users (full_name, company_name, email, password) VALUES (?, ?, ?, ?)`;
  db.run(insertQuery, [fullName, companyName, email, password], (err) => {
    if (err) {
      res.status(500).send('Error creating user');
    } else {
      res.status(200).send('User created successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
