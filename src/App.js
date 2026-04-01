import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import VideoSlider from './components/VideoSlider';
import TrendingDestinations from './components/TrendingDestinations';
import IndiaDestinations from './components/IndiaDestinations';
import Adventures from './components/Adventures';
import QueryBox from './components/QueryBox';
import FloatingButtons from './components/FloatingButtons';
import Footer from './components/Footer';

import Villa from "./Pages/Villa";
import Visa from "./Pages/Visa";
import Australia from "./Pages/Australia";
import Canada from "./Pages/Canada";
import USA from "./Pages/USA";
import Europe from './Pages/Europe';
import USALanding from "./Pages/USALanding";
import NYWashingtonLanding from "./Pages/NYWashingtonLanding";
import CaliforniaLanding from "./Pages/CaliforniaLanding";
import VegasGrandLanding from "./Pages/VegasGrandLanding";
import LuxuryUSALanding from "./Pages/LuxuryUSALanding";
import BestAustraliaLanding from "./Pages/BestAustraliaLanding";
import SydneyMelbourneLanding from "./Pages/SydneyMelbourneLanding";
import GoldCoastLanding from "./Pages/GoldCoastLanding";
import GreatOceanLanding from './Pages/GreatOceanLanding';
import LuxuryAustraliaLanding from './Pages/LuxuryAustraliaLanding';
import BestCanadaLanding from './Pages/BestCanadaLanding';
import TorontoNiagaraLanding from './Pages/TorontoNiagaraLanding';
import VancouverVictoriaLanding from './Pages/VancouverVictoriaLanding';
import RockyTourLanding from './Pages/RockyTourLanding';
import LuxuryCanadaLanding from './Pages/LuxuryCanadaLanding';
import EuropeLanding from "./Pages/EuropeLanding";
import FranceSwissLanding from "./Pages/FranceSwissLanding";
import ItalyLanding from "./Pages/ItalyLanding";
import EasternEuropeLanding from "./Pages/EasternEuropeLanding";
import LuxuryEuropeLanding from "./Pages/LuxuryEuropeLanding";
import NewZealand from "./Pages/NewZealand";
import NewZealandLanding from "./Pages/NewZealandLanding";
import Thailand from "./Pages/Thailand";
import Singapore from "./Pages/Singapore";


function App() {
  return (
    <Router>

      {/* HEADER */}
      <Header />

      {/* ROUTES */}
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <VideoSlider />
              <TrendingDestinations />
              <IndiaDestinations />
              <Adventures />
              <QueryBox />
              <FloatingButtons />
              <Footer />
            </>
          } 
        />
        <Route path="/villa" element={<Villa />} />
        <Route path="/visa" element={<Visa />} />
  <Route path="/Pages/europe" element={<Europe />} />
<Route path="/Pages/australia" element={<Australia />} />
<Route path="/Pages/canada" element={<Canada />} />
<Route path="/Pages/usa" element={<USA />} />
 <Route path="/usa-landing" element={<USALanding />} />
 <Route path="/ny-washington" element={<NYWashingtonLanding />} />
 <Route path="/california" element={<CaliforniaLanding />} />
 <Route path="/vegas-grand" element={<VegasGrandLanding />} />
<Route path="/luxury-usa" element={<LuxuryUSALanding />} />
<Route path="/aus-landing" element={<BestAustraliaLanding />} />
<Route path="/sydney-melbourne" element={<SydneyMelbourneLanding />} />
<Route path="/gold-coast" element={<GoldCoastLanding />} />
<Route path="/great-ocean" element={<GreatOceanLanding />} />
<Route path="/luxury-aus" element={<LuxuryAustraliaLanding />} />
<Route path="/canada-landing" element={<BestCanadaLanding />} />
<Route path="/toronto-niagara" element={<TorontoNiagaraLanding />} />
<Route path="/vancouver-victoria" element={<VancouverVictoriaLanding />} />
<Route path="/rocky-tour" element={<RockyTourLanding />} />
<Route path="/luxury-canada" element={<LuxuryCanadaLanding />} />
<Route path="/europe-landing" element={<EuropeLanding />} />
<Route path="/france-swiss" element={<FranceSwissLanding />} />
<Route path="/italy-tour" element={<ItalyLanding />} />
<Route path="/eastern-europe" element={<EasternEuropeLanding />} />
<Route path="/luxury-europe" element={<LuxuryEuropeLanding />} />
<Route path="/Pages/NewZealand" element={<NewZealand />} />
<Route path="/nz-landing" element={<NewZealandLanding />} />
<Route path="/Pages/Thailand" element={<Thailand />} />
<Route path="/Pages/Singapore" element={<Singapore />} />


      </Routes>

    </Router>
  );
}

export default App;