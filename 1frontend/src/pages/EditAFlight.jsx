import axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './EditAFlight.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const EditAFlight = () => {  

    const [flights, setFlights] = useState([]);

    //connects to the back end  
    useEffect(() => {
        axios.get('http://localhost:8085/flights')
            .then(res => setFlights(res.data));
    }, []);

    const handleDelete = (key) => {
        axios.delete(`http://localhost:8085/flights/${key}`)
        .then (res => {
            if ( res.status === "201") {
                alert("deleted");
                this.loadData();
            } else {               
            }
        });
    }
 
    return (
        <div className="dark">
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
                            <Link to={"/updateaflight/"+flight.flightNumber} className="link btn">Update</Link>
                            <a href="http://localhost:3000/editaflight"><button onClick={() => handleDelete(flight.flightNumber)} className="btn">Delete</button>
                            </a>                        
                        </div>
                        </div>
            );
            })}
        </div>
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