const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const airportSchema = new Schema({
    name: [{
        title: String,
        _id: {
            type: Schema.Types.ObjectId,
            ref: 'Flight'
        }
    }],
    location: String,
    });

const Airport = mongoose.model('Airport', airportSchema, 'Airports');
module.exports = Airport;


/*

const jfk = {
    name: 'JFK',
    location: 'New York'
};
new Airport(jfk);
*/
    
/*

const airportSchema = new Schema({
    name: String,
    location: String
    });

*/

