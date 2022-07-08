require('dotenv').config(); // One and done so I don't need the value from require
const express = require('express');
const mongoose = require('mongoose');
const logger = require('./middleware/logger');

const cors = require('cors'); // Cross Origin Resource Sharing
console.log(process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 8080; // Default to 8080 if not in .env
app.use(express.json()); // This is middleware that auto parses JSON into JS objects between each HTTP request and the endpoint
app.use(cors()); // Allow all traffic
app.use(logger);

// router connections
app.use('/flights', require('./routes/flight.route'));

app.all('*', (req, res) => {
    res.status(404).send('We don\'t have the resource you\'re looking for.');
});

// database connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Successfully connected to MongoDB!');
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
});