const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    flightNumber: {
        type: String,
        unique: true
    },
    departureDate: String,
    arrivalDate: String,
    departureTime: String,
    arrivalTime: String,
    departureAirport: String,
    arrivalAirport: String,
    currentNumberOfPassengers: Number,
    passengerLimit: Number
});

const Flight = mongoose.model('Flight', flightSchema, 'Flights');
module.exports = Flight;



/*
const flightSchema = new Schema({
    flightNumber: String,
    departureDate: Date,
    arrivalDate: Date,
    departureTime: { 
        type: Number, 
        default: (new Date()).getTime() 
    },
    arrivalTime: { 
        type: Number, 
        default: (new Date()).getTime() 
    },
    departureAirport: [{
    name: String,
        _id: {
           type: Schema.Types.ObjectId,
           ref: 'Airport'
        }
    }],
    arrivalAirport: [{
        name: String,
        _id: {
            type: Schema.Types.ObjectId,
            ref: 'Airport'
        }
    }],
    currentNumberOfPassengers: Number,
    passengerLimit: {
        type: Number,
        // 1-160 passenger requirenmenet
        min: [1, 'Need at least 1 Passenger'],
        max: [160, '160 is max capacity']
    }
});
*/