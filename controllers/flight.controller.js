const Flight = require('../models/flight.model');

// create flight
const createFlight = async ({flightNumber, departureDate, arrivalDate, departureTime, 
    arrivalTime, departureAirport, arrivalAirport, currentNumberOfPassenger,
    passengerLimit}) => {
    try {
        const flight = new Flight({
            flightNumber,
            departureDate,
            arrivalDate,
            departureTime, 
            arrivalTime,
            departureAirport,
            arrivalAirport,
            currentNumberOfPassenger,
            passengerLimit
        });
        await flight.save(); // Saves the newly created flight to the database

        return flight._id; // Return the id of the newly created. Could also return the entire object
    } 
    // This catch will occur if any of the values are not up to standard
    catch (err) {
        console.error(err);
        throw { status: 400, message: err };
    }
}


const getAllFlights = async () => {
    const flights = await Flight.find();
    return flights;
} 

const updateAFlight = async ({flightNumber, departureDate, arrivalDate, departureTime, 
    arrivalTime, departureAirport, arrivalAirport, currentNumberOfPassenger,
    passengerLimit}) => {
  try{
    const flight = await Flight.findOneAndUpdate({flightNumber:flightNumber}, 
        {
            flightNumber, departureDate, arrivalDate, departureTime, 
            arrivalTime, departureAirport, arrivalAirport, currentNumberOfPassenger,
            passengerLimit
        }
        );
    if (flight == null) {
        throw `no flight flight with a flight number ${flightNumber} exists`
    }
    return flight;
  }  catch (err) {
    console.error(err)
    throw { status: 400, message: err };
  }    
}

//const flight = await Flight.findById();
//flights.remove by id

const deleteAFlight = async (flightNum) => {
    try {
        const flights = await Flight.deleteOne({flightNumber:flightNum});
        return flights;
    }catch (err) {
        console.error(err)
        throw { status: 400, message: err };
    }
}

module.exports = { createFlight, getAllFlights, updateAFlight, deleteAFlight };

//at the top
//const { addAirportBecauseOfFlight } = require('./flight.controller.js');

// delete a flight




   //maybe it gets the flight id from react then deletes here
// find all flights
/*
const findAllFlights = async (limit=0) => {
    const flights = await Flight.find(); // GET all flights
    return flights;
}
*/

// edit flight, idk how to do that
//find flight by id
/*
const findFlightById = async id => {
    try {
        // Returns a null instead of a rejected promise if no flights are found
        const flight = await FLight.findById(id); // find by id
        if (flight == null) {
            throw `No flight with the id of ${id} found.`;
        }
        return flight; // flight was found
    } catch (err) {
        console.error(err);
        throw { status: 404, message: err }; // similar to rejecting a Promise
    }
}
*/





/*

// create flight
const createFLight = async ({flightNumber, departureDate, arrivalDate, departureTime, 
    arrivalTime, departureAirport, arrivalAirport, currentNumberOfPassenger,
    passengerLimit}) => {
    try {
    const flight = new Flight({
        flightNumber,
        departureDate,
        arrivalDate,
        departureTime, 
        arrivalTime,
        departureAirport,
        arrivalAirport,
        currentNumberOfPassenger,
        passengerLimit
    });
    await flight.save(); // Saves the newly created flight to the database


     // I want to update the airports to add more flight to their record using a transaction
       
     
     for (let airport of flight.departureAirport) {
            await addAirportBecauseOfFlight(airport._id, flight);
        }

        for (let airport of flight.arrivalAirport) {
            await addAirportBecauseOfFlight(airport._id, flight);
        }
      

        return flight._id; // Return the id of the newly created. Could also return the entire object
    } 
    // This catch will occur if any of the values are up to standard
    catch (err) {
        console.error(err);
        throw { status: 400, message: err };
    }
}
*/