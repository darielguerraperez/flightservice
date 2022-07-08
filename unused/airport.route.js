const router = require('express').Router();
const { createAirport, findAllAirports, findAirportByID } = require('./airport.controller');

// create airport
router.post('/', async (req, res) => {
    try {
        const airportId = await createAirport(req.body);
        res.status(201).json({_id: airportId});
    } catch (err) {
        res.status(505).json(err);
        //res.status(err?.status || 505).json(err);
    }
});

// get all airports
router.get('/', async (req, res) => {
    const airports = await findAllAirports();
    res.json(airports);});


// get airport by ID
router.get('/:id', async (req, res) => {
    try {
        const airport = await findAirportById(req.params.id);
        res.json(airport);
    } catch (err) {
        res.status(err?.status || 400).json(err);
    }
});

module.exports = router;