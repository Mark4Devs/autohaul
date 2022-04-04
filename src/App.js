import React from 'react';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Cats from './Pages/Cats';
import Price from './Pages/Price';
import Engine from './Components/Engine';
import Trans from './Components/Trans';
import Ignit from './Components/Ignit';
import Brake from './Components/Brake';
import Fuel from './Components/Fuel';
import Steer from './Components/Steer';
import Electro from './Components/Electro';
import Susp from './Components/Susp';
import Cool from './Components/Cool';
import Engpr from './Components/Engpr';
import Transpr from './Components/Transpr';
import Susppr from './Components/Susppr';
import Brakespr from './Components/Brakespr';
import Electropr from './Components/Electropr';
import Contacts from './Pages/Contacts';





function App() {
  const [ engine, setEngine ] = useState([[]]);
  const [ transmission, setTrans ] = useState([[]]);
  const [ suspension, setSusp ] = useState([[]]);
  const [ electronics, setElectro ] = useState([[]]);
  const [ steering, setSteer ] = useState([[]]);
  const [ fuel, setFuel ] = useState([[]]);
  const [ brake, setBrake ] = useState([[]]);
  const [ ignition, setIgnit ] = useState([[]]);
  const [ cooling, setCooler ] = useState([[]]);
  const [ prEngine, setPrEngine ] = useState([[]]);
  const [ prTrans, setPrTrans ] = useState([[]]);
  const [ prSusp, setPrSusp ] = useState([[]]);
  const [ prBrakes, setPrBrakes ] = useState([[]]);
  const [ prEl, setPrEl ] = useState([[]]);

  useEffect(() => {
      const url = "/data/categories-db.json";

      const fetchData = async () => {
      try {
          const response = await fetch(url);
          const result = await response.json();
          setEngine(result.engine);
          setTrans(result.transmission);
          setSusp(result.suspension);
          setElectro(result.electronics);
          setSteer(result.steering);
          setFuel(result.fuel);
          setBrake(result.brake);
          setIgnit(result.ignition);
          setCooler(result.cooling);
          setPrEngine(result.priceEngine);
          setPrTrans(result.priceTransmission);
          setPrSusp(result.priceSuspension);
          setPrBrakes(result.brakesPrice);
          setPrEl(result.priceElectronics);  
      } catch (error) {
          console.log("error", error);
      }
      };
      fetchData();
  }, []);
  return (
    <>
      <header>
        <Header />
      </header>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />    
        <Route path="services-categories/*" element={<Cats />} >
          <Route path="engine" element={<Engine data={engine}/>} />
          <Route path="transmission" element={<Trans data={transmission}/>} />
          <Route path="suspension" element={<Susp data={suspension}/>} />
          <Route path="electronics" element={<Electro data={electronics}/>} />
          <Route path="steering" element={<Steer data={steering}/>} />
          <Route path="fuel-system" element={<Fuel data={fuel}/>} />
          <Route path="brakes" element={<Brake data={brake}/>} />
          <Route path="ignition-system" element={<Ignit data={ignition}/>} />
          <Route path="cooling-system" element={<Cool data={cooling}/>} />
        </Route>
        <Route path="prices/*" element={<Price />} >
          <Route path="engine-pricelist" element={<Engpr data={prEngine}/>} />
          <Route path="suspension-pricelist" element={<Susppr data={prSusp}/>} />
          <Route path="transmission-pricelist" element={<Transpr data={prTrans}/>} />
          <Route path="brakes-pricelist" element={<Brakespr data={prBrakes}/>} />
          <Route path="electronics-pricelist" element={<Electropr data={prEl}/>} />
        </Route>
        <Route path='contacts' element={<Contacts />} />
      </Routes>
    </>
  )
}

export default App;
