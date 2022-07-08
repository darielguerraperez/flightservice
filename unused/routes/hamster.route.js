const router = require('express').Router();
const {createHampster} = require('../controllers/hampster.controller');

router.post('/', async (req, res) => {
    try {
        const hampsterId = await createHampster(req.body);
        res.status(201).json({_id: hampsterId});
    } catch (err) {
        res.status(err?.status || 500).json(err);
    }
});