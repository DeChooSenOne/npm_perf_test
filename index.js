const express = require('express');
const fs = require('fs').promises;
const app = express();

// Fibonacci's calculation for the CPU-bound task
const fib = (n) => (n < 2 ? n : fib(n - 1) + fib(n - 2));

// CPU-bound route
app.get('/cpu-intensive', (req, res) => {
    const result = fib(40); // Adjust this number based on the test needs
    res.send(`CPU-intensive Result: ${result}`);
});

// I/O-bound route
app.get('/io-intensive', async (req, res) => {
    const filePath = './data.txt';
    await fs.writeFile(filePath, 'This is a test file.');
    const content = await fs.readFile(filePath, 'utf8');
    res.send(`I/O-intensive File content: ${content}`);
});

// Start the server
app.listen(3000, () => console.log('Server running on port 3000'));