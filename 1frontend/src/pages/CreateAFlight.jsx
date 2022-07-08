import { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CreateAFlight.css';

export const CreateAFlight = () => {

    const flightNumberRef = useRef(); 
    const departureDateRef = useRef();
    const arrivalDateRef = useRef();
    const departureTimeRef = useRef();
    const arrivalTimeRef = useRef();
    const departureAirportRef = useRef();
    const arrivalAirportRef = useRef();
    const currentNumberOfPassengerRef = useRef();
    const passengerLimitRef = useRef();
    const navigate = useNavigate();

    //connects to the back end when submitted
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:8085/flights', 
                            { flightNumber: flightNumberRef.current.value,
                                departureDate: departureDateRef.current.value,
                                arrivalDate: arrivalDateRef.current.value,
                                departureTime: departureTimeRef.current.value,
                                arrivalTime: arrivalTimeRef.current.value,
                                departureAirport: departureAirportRef.current.value,
                                arrivalAirport: arrivalAirportRef.current.value,
                                currentNumberOfPassenger: currentNumberOfPassengerRef.current.value,
                                passengerLimit: passengerLimitRef.current.value     
                            });
            navigate('../', {replace: true});
        } catch (error) {
            console.log('Something Went Wrong');
        }
    }

    return (
        <>
        <html>
        <div class="background">
        <div class="title"><h1>Create A Flight</h1></div>

        <form className="MyForm" onSubmit={handleSubmit} >
            <div class="grid-container">
            
                <div class="item">
                    <label class="flightnumber-label" htmlFor="flightnumber">Flight Number</label>
                    <input id="flightnumber" type="text" placeholder="Flight Number" ref={flightNumberRef} />
                </div>

                <div class="item">
                    <label class="departuredate-label" htmlFor="departureDate">Departure Date</label>
                    <input id="departureDate" type="Date" placeholder="Departure Date" ref={departureDateRef} />
                </div>
             
                <div class="item">
                <div classNamme ="col-lg-2">
                    <label htmlFor="arrivalDate">Arrival Date</label>
                    <input id="arrivalDate" type="Date" placeholder="Arrival Date" ref={arrivalDateRef} />
                </div>
                </div>
                
                <div class="item">
                <div class ="col-lg-4">
                    <label htmlFor="departureTime">Departure Time</label>
                    <input id="departureTime" type="time" placeholder="Departure Time" ref={departureTimeRef} />
                </div> 
                </div>
                
                <div class="item">             
                <div class ="col-lg-4">
                    <label htmlFor="arrivalTime">Arrival Time</label>
                    <input id="arrivalTime" type="time" placeholder="Arrival Time" ref={arrivalTimeRef} />
                </div>
                </div>
                             
                <div class="item">
                <div class ="col-lg-3">
                    <label htmlFor="departureAirport">Departure Airport</label>
                    <input id="departureAirport" type="text" placeholder="Departure Airport" ref={departureAirportRef} />
                </div>
                </div>

                <div class="item">
                <div class ="col-lg-3">
                    <label htmlFor="arrivalAirport">Arrival Airport</label>
                    <input id="arrivalAirport" type="text" placeholder="Arrival Airport" ref={arrivalAirportRef} />
                </div>
                </div>

                <div class="item"> 
                <div class ="col-lg-3">
                <label htmlFor="currentNumberOfPassenger">Current Number Of Passengers</label>
                <input id="currentNumberOfPassenger" type="number" placeholder="Current Number Of Passengers" ref={currentNumberOfPassengerRef} />
                </div>
                </div>

                <div class="item">
                <div class ="col-lg-3">
                    <label htmlFor="passengerLimit">Passenger Limit</label>
                    <input id="passengerLimit" type="number" placeholder="Passenger Limit" ref={passengerLimitRef} />
                </div>
                </div>

                <input class="add" type="submit" value="ADD" />
               
                </div>
            </form>
            </div>
            </html>
        </>
    );
}