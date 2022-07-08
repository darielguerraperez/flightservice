//import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home, CreateAFlight, EditAFlight, UpdateAFlight, Error} from './pages';
import { AppNav } from './features';

function App() {
  return (
    <BrowserRouter>
                <AppNav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/createaflight" element={<CreateAFlight />} />
                    <Route path="/editaflight" element={<EditAFlight />} />
                    <Route path="/updateaflight/:flightnumber" element={<UpdateAFlight />} /> 
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
  );
}

export default App;
