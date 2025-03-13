// Import the Express.js framework
const express = require('express');
const path = require('path');
// Create an Express application
const app = express();
const PORT = 3000;

// Serve HTML files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// start
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
