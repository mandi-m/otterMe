// Main application

// Required libraries
const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');

// Required files

// App creation
const app = express();
const PORT = 1337;

// Middleware

//   Logging 
app.use(volleyball);

//   Parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routers
app.use('/', (req, res, next) => {
  res.send('HELLO!');
})

// Error logging middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).send(err.message || 'Internal server error');
});

// Start the server
app.listen(PORT, () => {
  console.log(`We're listening online on port ${PORT}`);
});
