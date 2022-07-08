const Airport = require('./Airport.model');


// create airport
const createAirport = async ({name, location}) => {
    try {
        const airport = new Airport({
            name,
            location 
        });
        await airport.save();
        console.log('Saving');
        return airport._id;
    } catch (err) {         
        console.error(err);
        throw { status: 400, message: err };
    }
}

// find all airports
const findAllAirports = async (limit=0) => {
    const airports = await Airport.find();
    return airports;
}

// find airport by id
const findAirportByID = async id => {
    try {
        const airport = await Airport.findBy(id);
        if (airport == null) {
            throw 'No Airport with the id of ${id}.';
        }
        return airport;
    } catch (err) {
        console.error(err);
        throw { status: 404, message: err }; // Akin to rejecting a Promise
    }
}
