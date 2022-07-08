import axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './EditAFlight.css';


export const EditAFlight = () => {  

    const [flights, setFlights] = useState([]);

    //connects to the back end  
    useEffect(() => {
        axios.get('http://localhost:8085/flights')
            .then(res => setFlights(res.data));
    }, []);

    function updateAFlight(flightNumber, departureDate, arrivalDate, departureTime, 
        arrivalTime, departureAirport, arrivalAirport, currentNumberOfPassenger,
        passengerLimit) {
        axios.put('http://localhost:8085/flights/' + flightNumber, {flightNumber, departureDate, arrivalDate, departureTime, 
        arrivalTime, departureAirport, arrivalAirport, currentNumberOfPassenger,
        passengerLimit});
        alert("Flight updated");
        console.log(`flight number with id ${flightNumber} updated`);
    }


    const handleDelete = (key) => {
        axios.delete(`http://localhost:8085/flights/${key}`)
        .then (res => {
            if ( res.status === "201") {
                alert("deleted");
                this.loadData();
            } else {
                alert("Deletes upon refresh");
            }
        });
    }
 

    return (
        <div className="grid">
            {flights.map((flight, index) => {
                return (
                    <div key={flight._id} className="tile">
                        <div className="flightnumber"><strong>Flight#  </strong>{flight.flightNumber}</div>
                        <div><strong>Departure Date:  </strong>{flight.departureDate}</div>
                        <div><strong>Arrival Date:  </strong>{flight.arrivalDate}</div>
                        <div><strong>Departure Time: </strong>{flight.departureTime}</div>                        
                        <div><strong>Arrival Time:  </strong>{flight.arrivalTime}</div>
                        <div><strong>Departure Airport:  </strong>{flight.departureAirport}</div>
                        <div><strong>Arrival Airport:  </strong>{flight.arrivalAirport}</div>
                        <div><strong>Current Number Of Passengers:  </strong>{flight.currentNumberOfPassengers}</div>
                        <div><strong>Passenger Limit:  </strong>{flight.passengerLimit}</div>
                        <div className="buttons">
                        <Link to="/insert/your/path/here" className="btn btn-primary">hello</Link>
                            <button onClick={() => 
                            updateAFlight(flight.flightNumber, flight.departureDate, flight.arrivalDate, 
                            flight.departureTime, flight.arrivalTime, flight.departureAirport, flight.arrivalAirport, 
                            flight.currentNumberOfPassenger, flight.passengerLimit )}>Update</button>
                            <button onClick={() => handleDelete(flight.flightNumber)}>Delete</button>
                        </div>
                    </div>
            );
            })}
        </div>
    );
}


      //"flights.filter(flight => flight = flight.flightNumber.map(flight => ("    
      

     /* 
    const [flight, setFlight] = useState([]);

    //connects to the back end when submitted   
   //1
    const results = async (event) => {
        event.preventDefault();
        try {
            await axios.get('http://localhost:8085/flights')
            .then(res => {
                setFlight(res.data);
                console.log(res.data);
            }); 
        } catch (error) {
            console.log('Something Went Wrong');
        }
    
    }


       <div className="input">        
            <h3>Enter a Flight Number</h3>
                <input className="flightnumber" type="text" value={flight.flightNumber} placeholder="Flight Number"  /> 
                <button onClick={event => setFlight(flight.flightNumber)}>Search</button>
        </div>


    */