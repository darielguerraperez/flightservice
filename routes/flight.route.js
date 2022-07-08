const router = require('express').Router();
const {createFlight, getAllFlights, updateAFlight, deleteAFlight} = require('../controllers/flight.controller');


// create flight
router.post('/', async (req, res) => {
    try {
        const flightId = await createFlight(req.body);
        res.status(201).json({_id: flightId});
    } catch (err) {
        res.status(err?.status || 500).json(err);
    }
});

// get all flights
router.get('/', async (req, res) => {
    const flights = await getAllFlights();
    res.json(flights);
});

//.put for updating
router.put('/:id', async (req, res) =>{
    try{
        const flight = await updateAFlight(req.body);
        res.status(201).json({_id: flight});
    } catch (err) {
        console.log(err);
        res.status(err?.status || 400).json(err);
    }
});

//deleting
router.delete('/:id', async (req, res) =>{    
    try{
        const flight = await deleteAFlight(req.params.id);
        res.status(201).json({_id: flight});
    } catch (err) {
        console.log(err);
        res.status(err?.status || 400).json(err);
    } 
});

module.exports = router;


/*
// get flight by ID
router.get('/:id', async (req, res) => {
    try {
        const flight = await findFlightById(req.params.id);
        res.json(flight);
    } catch (err) {
        res.status(err?.status || 400).json(err);
    }
});
*/