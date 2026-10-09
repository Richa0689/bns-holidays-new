import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async"; 
import SEO from "./components/SEO";

import Header from './components/Header';
import VideoSlider from './components/VideoSlider';
import TrendingDestinations from './components/TrendingDestinations';
import IndiaDestinations from './components/IndiaDestinations';
import Adventures from './components/Adventures';
import Fixeddepartures from './components/Fixeddepartures';
import Reviews from './components/Reviews';
import QueryBox from './components/QueryBox';
import FloatingButtons from './components/FloatingButtons';
import Footer from './components/Footer';
import PublishedItinerary from "./Pages/PublishedItinerary";
import Villa from "./Pages/Villa";
import Visa from "./Pages/Visa";
import Packages from "./Pages/Packages";
import Hotels from "./Pages/Hotels";
import HotelResultsPage from "./Pages/HotelResultsPage";
import Flights from "./Pages/Flights";
import FlightResultsPage from "./Pages/FlightResultsPage";
import Australia from "./Pages/Australia";
import Canada from "./Pages/Canada";
import USA from "./Pages/USA";
import Europe from './Pages/Europe';
import USA1 from "./Pages/USA-1";
import USA2 from "./Pages/USA-2";
import USA3 from "./Pages/USA-3";
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
import FranceSwissLanding from "./Pages/EuropeBelgium";
import ItalyLanding from "./Pages/ItalyLanding";
import EasternEuropeLanding from "./Pages/EasternEuropeLanding";
import LuxuryEuropeLanding from "./Pages/LuxuryEuropeLanding";
import NewZealand from "./Pages/NewZealand";
import NewZealandLanding from "./Pages/NewZealandLanding";
import Thailand from "./Pages/Thailand";
import AsiaLanding from "./Pages/AsiaLanding";
import Singapore from "./Pages/Singapore";
import ThailandLanding from "./Pages/ThailandLanding";
import BangkokPattayaLanding from "./Pages/BangkokPattayaLanding";
import PhuketKrabiLanding from "./Pages/PhuketKrabiLanding";
import ThailandLuxuryLanding from "./Pages/ThailandLuxuryLanding";
import BestofSingapore from "./Pages/BestofSingapore";
import SingaporeSentosa from "./Pages/SingaporeSentosa";
import UniversalSingapore from "./Pages/UniversalStudiosTour";
import LuxurySingapore from "./Pages/LuxurySingaporeTour";
import Malaysia from "./Pages/Malaysia";
import MalaysiaLanding from "./Pages/MalaysiaLanding";
import KLGenting from "./Pages/KLGenting";
import Langkawi from "./Pages/Langkawi";
import Penang from "./Pages/Penang";
import LuxuryMalaysia from "./Pages/LuxuryMalaysia";
import Bali from "./Pages/Bali";
import BaliLanding from "./Pages/BaliLanding";
import UbudKutaLanding from './Pages/UbudKutaLanding';
import BaliBeachLanding from './Pages/BaliBeachLanding';
import BaliAdventureLanding from './Pages/BaliAdventureLanding';
import LuxuryBaliLanding from './Pages/LuxuryBaliLanding';
import Dubai from './Pages/Dubai';
import DubaiLanding from './Pages/DubaiLanding';
import DubaiAbuLanding from './Pages/DubaiAbuLanding';
import DesertSafariLanding from './Pages/DesertSafariLanding';
import LuxuryDubaiLanding from './Pages/LuxuryDubaiLanding';
import AbuDhabi from './Pages/AbuDhabi';
import AbuLanding from "./Pages/AbuLanding";
import AbuCityLanding from "./Pages/AbuCityLanding";
import AbuCultureLanding from "./Pages/AbuCultureLanding";
import AbuFerrariLanding from "./Pages/AbuFerrariLanding";
import AbuLuxuryLanding from "./Pages/AbuLuxuryLanding";
import France from "./Pages/France";
import FranceLanding from "./Pages/FranceLanding";
import ParisNiceLanding from "./Pages/ParisNiceLanding";
import FrenchRivieraLanding from './Pages/FrenchRivieraLanding';
import LuxuryFranceLanding from './Pages/LuxuryFranceLanding';
import Italy from "./Pages/Italy";
import Italypage from "./Pages/Italypage";
import RomeVeniceLanding from "./Pages/RomeVeniceLanding";
import FlorenceTourLanding from "./Pages/FlorenceTourLanding";
import AmalfiCoastLanding from "./Pages/AmalfiCoastLanding";
import LuxuryItalyLanding from "./Pages/LuxuryItalyLanding";
// import Switzerland from "./Pages/Switzerland";
import SwitzerlandLanding from "./Pages/SwitzerlandLanding";
import ZurichLucerneLanding from './Pages/ZurichLucerneLanding';
import InterlakenLanding from "./Pages/InterlakenLanding";
import SwissAlpsLanding from './Pages/SwissAlpsLanding';
import LuxurySwitzerland from "./Pages/LuxurySwitzerland";
import Hungary from "./Pages/Hungary";
import HungaryLanding from "./Pages/HungaryLanding";
import BudapestLanding from './Pages/BudapestLanding';
import DanubeCruiseLanding from './Pages/DanubeCruiseLanding';
import LuxuryHungaryLanding from './Pages/LuxuryHungaryLanding';
import Poland from './Pages/Poland';
import PolandLanding from './Pages/PolandLanding';
import Manali from './Pages/Manali';
import ManaliLanding from './Pages/ManaliLanding';
import RohtangLanding from './Pages/RohtangLanding';
import AdventureManaliLanding from './Pages/AdventureManaliLanding';
import LuxuryManaliLanding from './Pages/LuxuryManaliLanding';
import Shimla from './Pages/Shimla';
import ShimlaLanding from './Pages/ShimlaLanding';
import ShimlaKufriLanding from './Pages/ShimlaKufriLanding';
import ShimlaAdventureLanding from './Pages/ShimlaAdventureLanding';
import LuxuryShimlaLanding from './Pages/LuxuryShimlaLanding';
import Spiti from './Pages/Spiti';
import SpitiLanding from './Pages/SpitiLanding';
import SpitiAdventureLanding from './Pages/SpitiAdventureLanding';
import ChandratalLanding from './Pages/ChandratalLanding';
import LuxurySpitiLanding from './Pages/LuxurySpitiLanding';
import Srinagar from './Pages/Srinagar';
import SrinagarLanding from './Pages/SrinagarLanding';
import GulmargLanding from './Pages/GulmargLanding';
import HouseboatSrinagarLanding from './Pages/HouseboatSrinagarLanding';
import LuxuryKashmirLanding from './Pages/LuxuryKashmirLanding';
import Gulmarg from './Pages/Gulmarg';
import GulmargSnowAdventureLanding from './Pages/GulmargSnowAdventureLanding';
import GulmargSkiExperienceLanding from './Pages/GulmargSkiExperienceLanding';
import LuxuryGulmargTourLanding from './Pages/LuxuryGulmargTourLanding';
import Pahalgam from './Pages/Pahalgam';
import PahalgamLanding from './Pages/PahalgamLanding';
import PahalgamValleyLanding from './Pages/PahalgamValleyLanding';
import PahalgamAdventureLanding from './Pages/PahalgamAdventureLanding';
import LuxuryPahalgamLanding from './Pages/LuxuryPahalgamLanding';
import Ooty from './Pages/Ooty';
import OotyLanding from './Pages/OotyLanding';
import OotyCoonoorLanding from './Pages/OotyCoonoorLanding';
import OotyAdventureLanding from './Pages/OotyAdventureLanding';
import LuxuryOotyLanding from './Pages/LuxuryOotyLanding';
import Gangtok from './Pages/Gangtok';
import GangtokLanding from './Pages/GangtokLanding';
import GangtokNathulaLanding from './Pages/GangtokNathulaLanding';
import GangtokAdventureLanding from './Pages/GangtokAdventureLanding';
import LuxuryGangtokLanding from './Pages/LuxuryGangtokLanding';
import Guwahati from './Pages/Guwahati';
import GuwahatiLanding from './Pages/GuwahatiLanding';
import GuwahatiShillongLanding from './Pages/GuwahatiShillongLanding';
import GuwahatiAdventureLanding from './Pages/GuwahatiAdventureLanding';
import LuxuryGuwahatiLanding from './Pages/LuxuryGuwahatiLanding';
import Jaipur from './Pages/Jaipur';
import JaipurLanding from './Pages/JaipurLanding';
import JaipurUdaipurLanding from './Pages/JaipurUdaipurLanding';
import JaipurAdventureLanding from './Pages/JaipurAdventureLanding';
import LuxuryJaipurLanding from './Pages/LuxuryJaipurLanding';
import Udaipur from './Pages/Udaipur';
import UdaipurLanding from './Pages/UdaipurLanding';
import UdaipurMountAbuLanding from './Pages/UdaipurMountAbuLanding';
import UdaipurAdventureLanding from './Pages/UdaipurAdventureLanding';
import LuxuryUdaipurLanding from './Pages/LuxuryUdaipurLanding';
import NorthGoa from './Pages/NorthGoa';
import NorthGoaLanding from './Pages/NorthGoaLanding';
import NorthGoaPartyLanding from './Pages/NorthGoaPartyLanding';
import NorthGoaAdventureLanding from './Pages/NorthGoaAdventureLanding';
import LuxuryNorthGoaLanding from './Pages/LuxuryNorthGoaLanding';
import SouthGoa from './Pages/SouthGoa';
import SouthGoaLanding from './Pages/SouthGoaLanding';
import SouthGoaEscapeLanding from './Pages/SouthGoaEscapeLanding';
import SouthGoaAdventureLanding from './Pages/SouthGoaAdventureLanding';
import LuxurySouthGoaLanding from './Pages/LuxurySouthGoaLanding';
import KarnatakaTours from "./Pages/KarnatakaTours";
import BangaloreLanding from "./Pages/BangaloreLanding";
import MysoreLanding from "./Pages/MysoreLanding";
import CoorgLanding from "./Pages/CoorgLanding";
import HampiLanding from "./Pages/HampiLanding";
import TamilNaduTours from './Pages/TamilNaduTours';
import ChennaiLanding from "./Pages/ChennaiLanding";
import RameswaramMaduraiLanding from "./Pages/RameswaramMaduraiLanding";
import TempleLanding from "./Pages/TempleLanding";
import Kerala from "./Pages/Kerala";
import KeralaTourMunnar from "./Pages/KeralaTourMunnar";
import KeralaTourAlleppey from "./Pages/KeralaTourAlleppey";
import KeralaTourCochin from "./Pages/KeralaTourCochin";
import KenyaTours from './Pages/Kenya';
import KenyaUltimateSafariCircuit from './Pages/KenyaUltimateSafariCircuit';
import KenyaWildEscapade from './Pages/KenyaWildEscapade';
import KenyaWildSerenade from "./Pages/KenyaWildSerenade";
import KenyaEchoesOfTheWild from './Pages/KenyaEchoesOfTheWild';
import KenyaAmboseliWildTrails from "./Pages/KenyaAmboseliWildTrails";
import KenyaPredatorsAndPinkFeathers from "./Pages/KenyaPredatorsAndPinkFeathers";
import KenyaIntoTheHeartOfTheWild from "./Pages/KenyaIntoTheHeartOfTheWild";
import AustriaLanding from "./Pages/Austrialanding";
import AustriaLanding2 from "./Pages/Austrialanding-2";
import AustriaLanding3 from "./Pages/Austrialanding-3";
import AustriaLanding4 from "./Pages/Austrialanding-4";
import AustriaLanding5 from "./Pages/Austrialanding-5";
import AustriaLanding6 from "./Pages/Austrialanding-6";
import AustriaLanding7 from "./Pages/Austrialanding-7";
import AustriaLanding8 from "./Pages/Austrialanding-8";
import AustriaLanding9 from "./Pages/Austrialanding-9";
import AustriaLanding10 from "./Pages/Austrialanding-10";
import BelgiumLanding from "./Pages/EuropeBelgium";
import Belgium1 from "./Pages/Belgium-1";
import Belgium2 from "./Pages/Belgium-2";
import Belgium3 from "./Pages/Belgium-3";
import CroatiaLanding from "./Pages/EuropeCroatia";
import Croatia1 from "./Pages/Croatia-1";
import Croatia2 from "./Pages/Croatia-2";
import Croatia3 from "./Pages/Croatia-3";
import Croatia4 from "./Pages/Croatia-4";
import Croatia5 from "./Pages/Croatia-5";
import EuropePortugal from "./Pages/EuropePortugal";
import Portugal1 from "./Pages/Portugal-1";
import Portugal2 from "./Pages/Portugal-2";
import EuropeItaly from "./Pages/EuropeItaly";
import Italy1 from "./Pages/Italy-1";
import Italy2 from "./Pages/Italy-2";
import Italy3 from "./Pages/Italy-3";
import Italy4 from "./Pages/Italy-4";
import EuropePoland from './Pages/EuropePoland';
import Poland1 from './Pages/Poland-1';
import Poland2 from './Pages/Poland-2';
import EuropeHungary from './Pages/EuropeHungary';
import Hungary1 from './Pages/Hungary-1';
import Hungary2 from './Pages/Hungary-2';
import Hungary3 from './Pages/Hungary-3';
import Hungary4 from './Pages/Hungary-4';
import Hungary5 from './Pages/Hungary-5';
import EuropeDenmark from './Pages/EuropeDenmark';
import Denmark1 from './Pages/Denmark-1';
import Denmark2 from './Pages/Denmark-2';
import Denmark3 from './Pages/Denmark-3';
import Denmark4 from './Pages/Denmark-4';
import Denmark5 from './Pages/Denmark-5';
import EuropeGermany from './Pages/EuropeGermany';
import Germany1 from './Pages/Germany-1';
import Germany2 from './Pages/Germany-2';
import Germany3 from './Pages/Germany-3';
import Germany4 from './Pages/Germany-4';
import Germany5 from './Pages/Germany-5';
import Germany6 from './Pages/Germany-6';
import Germany7 from './Pages/Germany-7';
import Germany8 from './Pages/Germany-8';
import Germany9 from './Pages/Germany-9';
import Germany10 from './Pages/Germany-10';
import EuropeFrance from './Pages/EuropeFrance';
import France1 from './Pages/France-1';
import France2 from './Pages/France-2';
import France3 from './Pages/France-3';
import France4 from './Pages/France-4';
import France5 from './Pages/France-5';
import Vietnam from './Pages/Vietnam';
import Vietnam1 from './Pages/Vietnam-1';
import Vietnam2 from './Pages/Vietnam-2';
import Vietnam3 from './Pages/Vietnam-3';
import Vietnam4 from './Pages/Vietnam-4';
import Vietnam5 from './Pages/Vietnam-5';
import Vietnam6 from './Pages/Vietnam-6';
import Vietnam7 from './Pages/Vietnam-7';
import Vietnam8 from './Pages/Vietnam-8';
import Vietnam9 from './Pages/Vietnam-9';
import Vietnam10 from './Pages/Vietnam-10';
import Vietnam11 from './Pages/Vietnam-11';
import Vietnam12 from './Pages/Vietnam-12';
import Vietnam13 from './Pages/Vietnam-13';
import Vietnam14 from './Pages/Vietnam-14';
import Vietnam15 from './Pages/Vietnam-15';
import Switzerland from "./Pages/Switzerland";
import Switzerland1 from './Pages/Switzerland-1';
import Switzerland2 from './Pages/Switzerland-2';
import Switzerland3 from './Pages/Switzerland-3';
import Switzerland4 from './Pages/Switzerland-4';
import Switzerland5 from './Pages/Switzerland-5';
import Switzerland6 from './Pages/Switzerland-6';
import Switzerland7 from './Pages/Switzerland-7';
import Switzerland8 from "./Pages/Switzerland-8";
import Switzerland9 from './Pages/Switzerland-9';
import Switzerland10 from './Pages/Switzerland-10';
import Switzerland11 from './Pages/Switzerland-11';
import Switzerland12 from './Pages/Switzerland-12';
import England from './Pages/England';
import England1 from './Pages/England-1';
import England2 from './Pages/England-2';
import England3 from './Pages/England-3';
import England4 from './Pages/England-4';
import England5 from './Pages/England-5';
import England6 from './Pages/England-6';
import England7 from './Pages/England-7';
import England8 from './Pages/England-8';
import England9 from './Pages/England-9';
import England10 from './Pages/England-10';
import Spain from './Pages/Spain';
import Spain1 from './Pages/Spain-1';
import Spain2 from './Pages/Spain-2';
import Spain3 from './Pages/Spain-3';
import Spain4 from './Pages/Spain-4';
import Spain5 from './Pages/Spain-5';
import Spain6 from './Pages/Spain-6';
import Spain7 from './Pages/Spain-7';
import Spain8 from './Pages/Spain-8';
import Spain9 from './Pages/Spain-9';
import Spain10 from './Pages/Spain-10';
import Spain11 from './Pages/Spain-11';
import Scotland from './Pages/Scotland';
import Scotland1 from './Pages/Scotland-1';
import Scotland2 from './Pages/Scotland-2';
import Scotland3 from './Pages/Scotland-3';
import Scotland4 from './Pages/Scotland-4';
import Scotland5 from './Pages/Scotland-5';
import Scotland6 from './Pages/Scotland-6';
import CzechRepublic from './Pages/CzechRepublic';
import CzechRepublic1 from './Pages/CzechRepublic-1';
import CzechRepublic2 from './Pages/CzechRepublic-2';
import CzechRepublic3 from './Pages/CzechRepublic-3';
import CzechRepublic4 from './Pages/CzechRepublic-4';
import CzechRepublic5 from './Pages/CzechRepublic-5';
import Finland from './Pages/Finland';
import Finland1 from './Pages/Finland-1';
import Finland2 from './Pages/Finland-2';
import Finland3 from './Pages/Finland-3';
import Finland4 from './Pages/Finland-4';
import Greece from './Pages/Greece';
import Greece1 from './Pages/Greece-1';
import Greece2 from './Pages/Greece-2';
import Greece3 from './Pages/Greece-3';
import Greece4 from './Pages/Greece-4';
import Greece5 from './Pages/Greece-5';
import Greece6 from './Pages/Greece-6';
import Greece7 from './Pages/Greece-7';
import Iceland from './Pages/Iceland';
import Iceland1 from './Pages/Iceland-1';
import Iceland2 from './Pages/Iceland-2';


function LegacyHashRedirect() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash.startsWith("#/")) {
      navigate(`${location.hash.slice(1)}${location.search}`, { replace: true });
    }
  }, [location.hash, location.search, navigate]);

  return null;
}

function LegacyRouteRedirect({ to }) {
  const location = useLocation();
  return <Navigate to={`${to}${location.search}${location.hash}`} replace />;
}

function LegacyPagesRedirect() {
  const location = useLocation();
  const slug = location.pathname
    .slice("/Pages/".length)
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  return <Navigate to={`/destinations/${slug}${location.search}${location.hash}`} replace />;
}

function App() {
  return (
    <HelmetProvider> 
    <Router>
      <LegacyHashRedirect />
      <SEO />
      {/* HEADER */}
      <Header />

      {/* ROUTES */}
      <Routes>
        <Route 
          path="/packages/:slug" 
          element={<PublishedItinerary />}
            />
              <Route
  path="/"
  element={
    <>
              <VideoSlider />
              <TrendingDestinations />
              <IndiaDestinations/>
              <Adventures />
              <Fixeddepartures />
              <Reviews />
              <QueryBox />
              <FloatingButtons />
              <Footer />
            </>
          } 
        />
        <Route path="/villa" element={<Villa />} />
        <Route path="/visa" element={<Visa />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/hotels" element={<Hotels />} />
<Route path="/hotels/results" element={<HotelResultsPage />} />
<Route path="/flights" element={<Flights />} />
<Route path="/flights/results" element={<FlightResultsPage />} />
        
  <Route path="/destinations/europe" element={<Europe />} />
<Route path="/destinations/australia" element={<Australia />} />
<Route path="/destinations/canada" element={<Canada />} />
<Route path="/destinations/usa" element={<USA />} />
 <Route path="/destinations/usa-panorama" element={<USA1 />} />
<Route path="/destinations/golden-west-coast" element={<USA2 />} />
<Route path="/destinations/usa-gala-east-coast" element={<USA3 />} />
 <Route path="/destinations/ny-washington" element={<NYWashingtonLanding />} />
 <Route path="/destinations/california" element={<CaliforniaLanding />} />
 <Route path="/destinations/vegas-grand" element={<VegasGrandLanding />} />
<Route path="/destinations/luxury-usa" element={<LuxuryUSALanding />} />
<Route path="/destinations/australia-tours" element={<BestAustraliaLanding />} />
<Route path="/destinations/sydney-melbourne" element={<SydneyMelbourneLanding />} />
<Route path="/destinations/gold-coast" element={<GoldCoastLanding />} />
<Route path="/destinations/great-ocean" element={<GreatOceanLanding />} />
<Route path="/destinations/luxury-aus" element={<LuxuryAustraliaLanding />} />
<Route path="/destinations/canada-tours" element={<BestCanadaLanding />} />
<Route path="/destinations/toronto-niagara" element={<TorontoNiagaraLanding />} />
<Route path="/destinations/vancouver-victoria" element={<VancouverVictoriaLanding />} />
<Route path="/destinations/rocky-tour" element={<RockyTourLanding />} />
<Route path="/destinations/luxury-canada" element={<LuxuryCanadaLanding />} />
<Route path="/destinations/europe-tours" element={<EuropeLanding />} />
<Route path="/destinations/france-swiss" element={<FranceSwissLanding />} />
<Route path="/destinations/italy-tour" element={<ItalyLanding />} />
<Route path="/destinations/eastern-europe" element={<EasternEuropeLanding />} />
<Route path="/destinations/luxury-europe" element={<LuxuryEuropeLanding />} />
<Route path="/destinations/new-zealand" element={<NewZealand />} />
<Route path="/destinations/new-zealand-tours" element={<NewZealandLanding />} />
<Route path="/destinations/thailand" element={<Thailand />} />
<Route path="/destinations/asia" element={<AsiaLanding />} />
<Route path="/destinations/singapore" element={<Singapore />} />
<Route path="/destinations/thailand-tours" element={<ThailandLanding />} />
<Route path="/destinations/bangkok-pattaya" element={<BangkokPattayaLanding />} />
<Route path="/destinations/phuket-krabi" element={<PhuketKrabiLanding />} />
<Route path="/destinations/thailand-luxury" element={<ThailandLuxuryLanding />} />
<Route path="/destinations/best-of-singapore" element={<BestofSingapore />} />
<Route path="/destinations/singapore-sentosa" element={<SingaporeSentosa />} />
<Route path="/destinations/universal-singapore" element={<UniversalSingapore />} />
<Route path="/destinations/luxury-singapore" element={<LuxurySingapore />} />
<Route path="/destinations/malaysia" element={<Malaysia />} />
<Route path="/destinations/malaysia-tours" element={<MalaysiaLanding />} />
<Route path="/destinations/kl-genting" element={<KLGenting />} />
<Route path="/destinations/langkawi" element={<Langkawi />} />
<Route path="/destinations/penang" element={<Penang />} />
<Route path="/destinations/luxury-malaysia" element={<LuxuryMalaysia />} />
<Route path="/destinations/bali" element={<Bali />} />
<Route path="/destinations/bali-tours" element={<BaliLanding />} />
<Route path="/destinations/ubud-kuta" element={<UbudKutaLanding />} />
<Route path="/destinations/bali-beach" element={<BaliBeachLanding />} />
<Route path="/destinations/bali-adventure" element={<BaliAdventureLanding />} />
<Route path="/destinations/luxury-bali" element={<LuxuryBaliLanding />} />
<Route path="/destinations/dubai" element={<Dubai />} />
<Route path="/destinations/dubai-tours" element={<DubaiLanding />} />
<Route path="/destinations/dubai-abu" element={<DubaiAbuLanding />} />
<Route path="/destinations/desert-safari" element={<DesertSafariLanding />} />
<Route path="/destinations/luxury-dubai" element={<LuxuryDubaiLanding />} />
<Route path="/destinations/abu-dhabi" element={<AbuDhabi />} />
<Route path="/destinations/abu" element={<AbuLanding />} />
<Route path="/destinations/abu-city" element={<AbuCityLanding />} />
<Route path="/destinations/abu-culture" element={<AbuCultureLanding />} />
<Route path="/destinations/abu-ferrari" element={<AbuFerrariLanding />} />
<Route path="/destinations/abu-luxury" element={<AbuLuxuryLanding />} />
<Route path="/destinations/france" element={<France />} />
<Route path="/destinations/france-tours" element={<FranceLanding />} />
<Route path="/destinations/paris-nice" element={<ParisNiceLanding />} />
<Route path="/destinations/french-riviera" element={<FrenchRivieraLanding />} />
<Route path="/destinations/luxury-france" element={<LuxuryFranceLanding />} />
<Route path="/destinations/italy" element={<Italy />} />
<Route path="/destinations/italy-tours" element={<Italypage />} />
<Route path="/destinations/rome-venice" element={<RomeVeniceLanding />} />
<Route path="/destinations/florence-tour" element={<FlorenceTourLanding />} />
<Route path="/destinations/amalfi-coast" element={<AmalfiCoastLanding />} />
<Route path="/destinations/luxury-italy" element={<LuxuryItalyLanding />} />
<Route path="/destinations/switzerland" element={<Switzerland />} />
<Route path="/destinations/switzerland-tours" element={<SwitzerlandLanding />} />
<Route path="/destinations/zurich-lucerne" element={<ZurichLucerneLanding />} />
<Route path="/destinations/interlaken" element={<InterlakenLanding />} />
<Route path="/destinations/swiss-alps" element={<SwissAlpsLanding />} />
<Route path="/destinations/luxury-switzerland" element={<LuxurySwitzerland />} />
<Route path="/destinations/hungary" element={<Hungary />} />
<Route path="/destinations/hungary-tours" element={<HungaryLanding />} />
<Route path="/destinations/budapest" element={<BudapestLanding />} />
<Route path="/destinations/danube-cruise" element={<DanubeCruiseLanding />} />
<Route path='/destinations/luxury-hungary' element={<LuxuryHungaryLanding/>} />
<Route path="/destinations/poland" element={<Poland />} />
<Route path="/destinations/poland-tours" element={<PolandLanding />} />
<Route path="/destinations/manali" element={<Manali />} />
<Route path="/destinations/manali-tours" element={<ManaliLanding />} />
<Route path="/destinations/rohtang" element={<RohtangLanding />} />
<Route path="/destinations/manali-adventure" element={<AdventureManaliLanding />} />
<Route path="/destinations/luxury-manali" element={<LuxuryManaliLanding />} />
<Route path="/destinations/shimla" element={<Shimla />} />
<Route path="/destinations/shimla-tours" element={<ShimlaLanding />} />
<Route path="/destinations/shimla-kufri" element={<ShimlaKufriLanding />} />
<Route path="/destinations/shimla-adventure" element={<ShimlaAdventureLanding />} />
<Route path="/destinations/luxury-shimla" element={<LuxuryShimlaLanding />} />
<Route path="/destinations/spiti" element={<Spiti />} />
<Route path="/destinations/spiti-tours" element={<SpitiLanding />} />
<Route path="/destinations/spiti-adventure" element={<SpitiAdventureLanding />} />
<Route path="/destinations/chandratal" element={<ChandratalLanding />} />
<Route path="/destinations/luxury-spiti" element={<LuxurySpitiLanding />} />
<Route path="/destinations/srinagar" element={<Srinagar />} />
<Route path="/destinations/srinagar-tours" element={<SrinagarLanding />} />
<Route path="/destinations/gulmarg" element={<GulmargLanding />} />
<Route path="/destinations/houseboat" element={<HouseboatSrinagarLanding />} />
<Route path="/destinations/luxury-kashmir" element={<LuxuryKashmirLanding />} />
<Route path="/destinations/gulmarg-destination" element={<Gulmarg />} />
<Route path="/destinations/gulmarg-snow-adventure" element={<GulmargSnowAdventureLanding />} />
<Route path="/destinations/gulmarg-ski-experience" element={<GulmargSkiExperienceLanding />} />
<Route path="/destinations/luxury-gulmarg" element={<LuxuryGulmargTourLanding />} />
<Route path="/destinations/pahalgam" element={<Pahalgam />} />
<Route path="/destinations/pahalgam-tours" element={<PahalgamLanding/>} />
<Route path="/destinations/pahalgam-valley" element={<PahalgamValleyLanding/>} />
<Route path="/destinations/pahalgam-adventure" element={<PahalgamAdventureLanding/>} />
<Route path="/destinations/luxury-pahalgam" element={<LuxuryPahalgamLanding/>} />
<Route path="/destinations/ooty" element={<Ooty />} />
<Route path="/destinations/ooty-tours" element={<OotyLanding />} />
<Route path="/destinations/ooty-coonoor" element={<OotyCoonoorLanding />} />
<Route path="/destinations/ooty-adventure" element={<OotyAdventureLanding />} />
<Route path="/destinations/luxury-ooty" element={<LuxuryOotyLanding />} />
<Route path="/destinations/gangtok" element={<Gangtok />} />
<Route path="/destinations/gangtok-tours" element={<GangtokLanding />} />
<Route path="/destinations/gangtok-nathula" element={<GangtokNathulaLanding />} />
<Route path="/destinations/gangtok-adventure" element={<GangtokAdventureLanding />} />
<Route path="/destinations/luxury-gangtok" element={<LuxuryGangtokLanding />} />
<Route path="/destinations/guwahati" element={<Guwahati />} />
<Route path="/destinations/guwahati-tours" element={<GuwahatiLanding />} />
<Route path="/destinations/guwahati-shillong" element={<GuwahatiShillongLanding />} />
<Route path="/destinations/guwahati-adventure" element={<GuwahatiAdventureLanding />} />
<Route path="/destinations/luxury-guwahati" element={<LuxuryGuwahatiLanding />} />
<Route path="/destinations/jaipur" element={<Jaipur />} />
<Route path="/destinations/jaipur-tours" element={<JaipurLanding />} />
<Route path="/destinations/jaipur-udaipur" element={<JaipurUdaipurLanding />} />
<Route path="/destinations/jaipur-adventure" element={<JaipurAdventureLanding />} />
<Route path="/destinations/luxury-jaipur" element={<LuxuryJaipurLanding />} />
<Route path="/destinations/udaipur" element={<Udaipur />} />
<Route path="/destinations/udaipur-tours" element={<UdaipurLanding />} />
<Route path="/destinations/udaipur-mountabu" element={<UdaipurMountAbuLanding />} />
<Route path="/destinations/udaipur-adventure" element={<UdaipurAdventureLanding />} />
<Route path="/destinations/luxury-udaipur" element={<LuxuryUdaipurLanding />} />
<Route path="/destinations/northgoa" element={<NorthGoa />} />
<Route path="/destinations/northgoa-tours" element={<NorthGoaLanding />} />
<Route path="/destinations/northgoa-party" element={<NorthGoaPartyLanding />} />
<Route path="/destinations/northgoa-adventure" element={<NorthGoaAdventureLanding />} />
<Route path="/destinations/luxury-northgoa" element={<LuxuryNorthGoaLanding />} />
<Route path="/destinations/southgoa" element={<SouthGoa />} />
<Route path="/destinations/southgoa-tours" element={<SouthGoaLanding />} />
<Route path="/destinations/southgoa-escape" element={<SouthGoaEscapeLanding />} />
<Route path="/destinations/southgoa-adventure" element={<SouthGoaAdventureLanding />} />
<Route path="/destinations/luxury-southgoa" element={<LuxurySouthGoaLanding />} />
<Route path="/destinations/karnataka-tours" element={<KarnatakaTours />} />
<Route path="/destinations/bangalore" element={<BangaloreLanding />} />
<Route path="/destinations/mysore" element={<MysoreLanding />} />
<Route path="/destinations/coorg" element={<CoorgLanding />} />
<Route path="/destinations/hampi" element={<HampiLanding />} />
<Route path="/destinations/tamilnadu-tours" element={<TamilNaduTours />} />
<Route path="/destinations/chennai" element={<ChennaiLanding />} />
<Route path="/destinations/rameswaram-madurai" element={<RameswaramMaduraiLanding />} />
<Route path="/destinations/temple" element={<TempleLanding />} />
<Route path="/destinations/kerala-tours" element={<Kerala />} />
<Route path="/destinations/munnar" element={<KeralaTourMunnar />} />
<Route path="/destinations/alleppey" element={<KeralaTourAlleppey />} />
<Route path="/destinations/kochi" element={<KeralaTourCochin />} />
<Route path="/destinations/kenya" element={<KenyaTours />} />
<Route path="/destinations/kenya-ultimate-safari-circuit" element={<KenyaUltimateSafariCircuit />} />
<Route path="/destinations/kenya-wild-escapade" element={<KenyaWildEscapade/>} />
<Route path="/destinations/kenya-wild-serenade" element={<KenyaWildSerenade />} />
<Route path="/destinations/kenya-echoes-of-the-wild" element={<KenyaEchoesOfTheWild />} />
<Route path="/destinations/kenya-amboseli-wild-trails" element={<KenyaAmboseliWildTrails />} />
<Route path="/destinations/kenya-predators-and-pink-feathers" element={<KenyaPredatorsAndPinkFeathers />} />
<Route path="/destinations/kenya-into-the-heart-of-the-wild" element={<KenyaIntoTheHeartOfTheWild />} />
<Route path="/destinations/austria" element={<AustriaLanding />} />
<Route path="/destinations/budapest-vienna-prague-7-day" element={<AustriaLanding2 />} />
<Route path="/destinations/budapest-vienna-prague-9-day" element={<AustriaLanding3 />} />
<Route path="/destinations/vienna-munich-zurich-7-day" element={<AustriaLanding4 />} />
<Route path="/destinations/munich-innsbruck-salzburg-vienna-9-day" element={<AustriaLanding5 />} />
<Route path="/destinations/vienna-munich-zurich-8-day" element={<AustriaLanding6 />} />
<Route path="/destinations/zurich-innsbruck-salzburg-7-day" element={<AustriaLanding7 />} />
<Route path="/destinations/vienna-budapest-prague-7-day" element={<AustriaLanding8 />} />
<Route path="/destinations/munich-innsbruck-alps-7-day" element={<AustriaLanding9 />} />
<Route path="/destinations/medieval-streets-imperial-palaces-10-day" element={<AustriaLanding10 />} />
<Route path="/destinations/belgium" element={<BelgiumLanding />} />
<Route path="/destinations/windmills-to-eiffel" element={<Belgium1 />} />
<Route path='/destinations/amsterdam-paris-escape' element={<Belgium2 />} />
<Route path='/destinations/brussels-antwerp-rotterdam' element={<Belgium3 />} />
<Route path="/destinations/croatia" element={<CroatiaLanding />} />
<Route path='/destinations/central-europe-budapest-zagreb-ljubljana' element={<Croatia1 />} />
<Route path='/destinations/croatia-coast-and-islands' element={<Croatia2 />} />
<Route path='/destinations/two-cities-one-coast-croatia' element={<Croatia3 />} />
<Route path='/destinations/two-capitals-one-journey-croatia-slovenia' element={<Croatia4 />} />
<Route path='/destinations/croatia-in-a-week-zagreb' element={<Croatia5 />} />
<Route path='/destinations/portugal' element={<EuropePortugal />} />
<Route path='/destinations/seville-lisbon-porto-6-day' element={<Portugal1 />} />
<Route path='/destinations/spain-portugal-royal-cities-coastal-wonders' element={<Portugal2 />} />
<Route path='/destinations/italy-itineraries' element={<EuropeItaly />} />
<Route path='/destinations/florence-pisa-rome-8-day' element={<Italy1 />} />
<Route path='/destinations/essence-of-italy-10-day' element={<Italy2 />} />
<Route path='/destinations/french-riviera-to-milan-elegance' element={<Italy3 />} />
<Route path='/destinations/florence-pisa-rome-7-day' element={<Italy4 />} />
<Route path='/destinations/poland-itineraries' element={<EuropePoland />} />
<Route path='/destinations/classic-poland-warsaw-krakow' element={<Poland1 />} />
<Route path='/destinations/classic-europe-warsaw-prague' element={<Poland2 />} />
<Route path='/destinations/hungary-itineraries' element={<EuropeHungary />} />
<Route path='/destinations/central-europe-budapest-zagreb-ljubljana-hungary' element={<Hungary1 />} />
<Route path='/destinations/budapest-vienna-prague-7-day-hungary' element={<Hungary2 />} />
<Route path='/destinations/budapest-vienna-prague-9-day-hungary' element={<Hungary3 />} />
<Route path='/destinations/vienna-budapest-prague-7-day-hungary' element={<Hungary4 />} />
<Route path='/destinations/medieval-streets-imperial-palaces-10-day-hungary' element={<Hungary5 />} />
<Route path='/destinations/denmark-itineraries' element={<EuropeDenmark />} />
<Route path='/destinations/copenhagen-gothenburg-5-day' element={<Denmark1 />} />
<Route path='/destinations/best-of-sweden-5-day' element={<Denmark2 />} />
<Route path='/destinations/denmark-germany-8-day' element={<Denmark3 />} />
<Route path='/destinations/denmark-sweden-germany-8-day' element={<Denmark4 />} />
<Route path='/destinations/denmark-sweden-norway-8-day' element={<Denmark5 />} />
<Route path='/destinations/germany-itineraries' element={<EuropeGermany />} />
<Route path='/destinations/scenic-europe-ljubljana-salzburg-munich' element={<Germany1 />} />
<Route path='/destinations/munich-innsbruck-salzburg-vienna-9-day-germany' element={<Germany2 />} />
<Route path='/destinations/munich-stuttgart-frankfurt-7-day' element={<Germany3 />} />
<Route path='/destinations/vienna-munich-zurich-7-day-germany' element={<Germany4 />} />
<Route path='/destinations/vienna-munich-zurich-8-day-germany' element={<Germany5 />} />
<Route path='/destinations/zurich-innsbruck-salzburg-7-day-germany' element={<Germany6 /> } />
<Route path='/destinations/amsterdam-cologne-frankfurt-7-day' element={<Germany7 />} />
<Route path='/destinations/denmark-germany-8-day-tour' element={<Germany8 />} />
<Route path='/destinations/denmark-sweden-germany-8-day-tour' element={<Germany9 />} />
<Route path='/destinations/frankfurt-heidelberg-munich-7-day' element={<Germany10 />} />
<Route path='/destinations/france-itineraries' element={<EuropeFrance />} />
<Route path='/destinations/windmills-to-eiffel-netherlands-france-7-day' element={<France1 />} />
<Route path='/destinations/best-swiss-france-8-day' element={<France2 />} />
<Route path='/destinations/windmills-to-eiffel-benelux-7-day' element={<France3 />} />
<Route path='/destinations/amsterdam-paris-escape-9-day-france' element={<France4 />} />
<Route path='/destinations/spanish-french-riviera-7-day' element={<France5 />} />
<Route path='/destinations/vietnam' element={<Vietnam />} />
<Route path="/destinations/vietnam-tour" element={<Vietnam1 />} />
<Route path="/destinations/northern-vietnam-4-day" element={<Vietnam2 />} />
<Route path="/destinations/northern-vietnam-5-day" element={<Vietnam3 />} />
<Route path="/destinations/southern-vietnam-5-day" element={<Vietnam4 />} />
<Route path="/destinations/southern-vietnam-4-day" element={<Vietnam5 />} />
<Route path="/destinations/taste-of-vietnam" element={<Vietnam6/>} />
<Route path="/destinations/vietnam-cambodia" element={<Vietnam7/>} />
<Route path="/destinations/vietnam-glances" element={<Vietnam8 />} />
<Route path="/destinations/amazing-vietnam" element={<Vietnam9 />} />
<Route path="/destinations/cambodia-explore-siam-reap" element={<Vietnam10 />} />
<Route path="/destinations/central-vietnam" element={<Vietnam11 />} />
<Route path="/destinations/vietnam-central" element={<Vietnam12 />} />
<Route path="/destinations/essence-vietnam" element={<Vietnam13 />} />
<Route path="/destinations/highlights-vietnam" element={<Vietnam14 />} />
<Route path="/destinations/laos-escape" element={<Vietnam15 />} />
<Route path="/destinations/switzerland-itineraries" element={<Switzerland/>} />
<Route path="/destinations/swiss-france" element={<Switzerland1 />} />
<Route path="/destinations/munich-zurich" element={<Switzerland2 />} />
<Route path="/destinations/best-vienna" element={<Switzerland3 />} />
<Route path="/destinations/vegas-grand-canyon" element={<Switzerland4 />} />
<Route path="/destinations/zurich-bern" element={<Switzerland5/>} />
<Route path="/destinations/explore-genevaam" element={<Switzerland6/>} />
<Route path="/destinations/glimpses-switzerland" element={<Switzerland7/>} />
<Route path="/destinations/rhine-fall" element={<Switzerland8 />} />
<Route path="/destinations/scenic-switzerland-discovery" element={<Switzerland9/>} />
<Route path="/destinations/swiss-panorama" element={<Switzerland10 />} />
<Route path="/destinations/best-engelberg" element={<Switzerland11 />} />
<Route path="/destinations/zurich-s-charm" element={<Switzerland12 />} />
<Route path="/destinations/england-itineraries" element={<England />} />
<Route path="/destinations/london-newport-edinburgh" element={<England1 />} />
<Route path="/destinations/cardiff-manchester" element={<England2 />} />
<Route path="/destinations/london-newport" element={<England3 />} />
<Route path="/destinations/grand-britain-london-edinburgh" element={<England4 />} />
<Route path="/destinations/classic-uk-london-manchester" element={<England5 />} />
<Route path="/destinations/classic-europe" element={<England6 />} />
<Route path="/destinations/classic-uk-birmingham-manchester" element={<England7 />} />
<Route path="/destinations/grand-britain-london-edinburgh-glasgow" element={<England8 />} />
<Route path="/destinations/london-ireland" element={<England9 />} />
<Route path="/destinations/grand-discovery" element={<England10 />} />
<Route path="/destinations/spain-itineraries" element={<Spain />} />
<Route path="/destinations/madrid-ibiza" element={<Spain1 />} />
<Route path="/destinations/barcelona-madrid-ibiza-7-day" element={<Spain2 />} />
<Route path="/destinations/seville-madrid-classic" element={<Spain3 />} />
<Route path="/destinations/ibiza-madrid" element={<Spain4 />} />
<Route path="/destinations/barcelona-madrid" element={<Spain5 />} />
<Route path="/destinations/malaga-seville" element={<Spain6 />} />
<Route path="/destinations/barcelona-valencia-seville-madrid" element={<Spain7 />} />
<Route path="/destinations/barcelona-andalusian" element={<Spain8 />} />
<Route path="/destinations/lisbon-porto" element={<Spain9 />} />
<Route path="/destinations/cities-portugal-s" element={<Spain10 />} />
<Route path="/destinations/riviera-delight" element={<Spain11 />} />
<Route path="/destinations/scotland-itineraries" element={<Scotland />} />
<Route path="/destinations/london-cardiff-liverpool" element={<Scotland1 />} />
<Route path="/destinations/edinburgh-glasgow-classic" element={<Scotland2 />} />
<Route path="/destinations/england-scotland" element={<Scotland3 />} />
<Route path="/destinations/grand-britain-scottish-highlands" element={<Scotland4 />} />
<Route path="/destinations/glasgow-inverness" element={<Scotland5 />} />
<Route path="/destinations/edinburgh-glasgow-highlights" element={<Scotland6 />} />
<Route path="/destinations/finland-itineraries" element={<Finland />} />
<Route path="/destinations/finland-sweden" element={<Finland1 />} />
<Route path="/destinations/capitals-express" element={<Finland2 />} />
<Route path="/destinations/getaway-plus" element={<Finland3 />} />
<Route path="/destinations/mesmerizing-finland" element={<Finland4 />} />
<Route path="/destinations/greece-itineraries" element={<Greece />} />
<Route path="/destinations/athens-greece" element={<Greece1 />} />
<Route path="/destinations/athens-mykonos" element={<Greece2 />} />
<Route path="/destinations/glimpses-greece" element={<Greece3 />} />
<Route path="/destinations/barcelona-ibiza-madrid-8-day" element={<Greece4 />} />
<Route path="/destinations/barcelona-madridd" element={<Greece5 />} />
<Route path="/destinations/valencia-malaga" element={<Greece6 />} />
<Route path="/destinations/spain-highlights-tour" element={<Greece7 />} />
<Route path="/destinations/iceland-itineraries" element={<Iceland />} />
<Route path="/destinations/best-iceland" element={<Iceland1/>} />
<Route path="/destinations/iceland-akureyri" element={<Iceland2/>} />

        <Route path="/Pages/europe" element={<LegacyRouteRedirect to="/destinations/europe" />} />
        <Route path="/Pages/australia" element={<LegacyRouteRedirect to="/destinations/australia" />} />
        <Route path="/Pages/canada" element={<LegacyRouteRedirect to="/destinations/canada" />} />
        <Route path="/Pages/usa" element={<LegacyRouteRedirect to="/destinations/usa" />} />
        <Route path="/Pages/NewZealand" element={<LegacyRouteRedirect to="/destinations/new-zealand" />} />
        <Route path="/Pages/Thailand" element={<LegacyRouteRedirect to="/destinations/thailand" />} />
        <Route path="/Pages/Singapore" element={<LegacyRouteRedirect to="/destinations/singapore" />} />
        <Route path="/Pages/malaysia" element={<LegacyRouteRedirect to="/destinations/malaysia" />} />
        <Route path="/Pages/bali" element={<LegacyRouteRedirect to="/destinations/bali" />} />
        <Route path="/Pages/dubai" element={<LegacyRouteRedirect to="/destinations/dubai" />} />
        <Route path="/Pages/abu-dhabi" element={<LegacyRouteRedirect to="/destinations/abu-dhabi" />} />
        <Route path="/Pages/france" element={<LegacyRouteRedirect to="/destinations/france" />} />
        <Route path="/Pages/italy" element={<LegacyRouteRedirect to="/destinations/italy" />} />
        <Route path="/Pages/switzerland" element={<LegacyRouteRedirect to="/destinations/switzerland" />} />
        <Route path="/Pages/hungary" element={<LegacyRouteRedirect to="/destinations/hungary" />} />
        <Route path="/Pages/poland" element={<LegacyRouteRedirect to="/destinations/poland" />} />
        <Route path="/Pages/manali" element={<LegacyRouteRedirect to="/destinations/manali" />} />
        <Route path="/Pages/shimla" element={<LegacyRouteRedirect to="/destinations/shimla" />} />
        <Route path="/Pages/spiti" element={<LegacyRouteRedirect to="/destinations/spiti" />} />
        <Route path="/Pages/srinagar" element={<LegacyRouteRedirect to="/destinations/srinagar" />} />
        <Route path="/Pages/gulmarg" element={<LegacyRouteRedirect to="/destinations/gulmarg-destination" />} />
        <Route path="/Pages/pahalgam" element={<LegacyRouteRedirect to="/destinations/pahalgam" />} />
        <Route path="/Pages/ooty" element={<LegacyRouteRedirect to="/destinations/ooty" />} />
        <Route path="/Pages/gangtok" element={<LegacyRouteRedirect to="/destinations/gangtok" />} />
        <Route path="/Pages/guwahati" element={<LegacyRouteRedirect to="/destinations/guwahati" />} />
        <Route path="/Pages/jaipur" element={<LegacyRouteRedirect to="/destinations/jaipur" />} />
        <Route path="/Pages/udaipur" element={<LegacyRouteRedirect to="/destinations/udaipur" />} />
        <Route path="/Pages/northgoa" element={<LegacyRouteRedirect to="/destinations/northgoa" />} />
        <Route path="/Pages/southgoa" element={<LegacyRouteRedirect to="/destinations/southgoa" />} />
        <Route path="/Pages/vietnam" element={<LegacyRouteRedirect to="/destinations/vietnam" />} />
        <Route path="/Pages/munnar" element={<LegacyRouteRedirect to="/destinations/munnar" />} />
        <Route path="/Pages/alleppey" element={<LegacyRouteRedirect to="/destinations/alleppey" />} />
        <Route path="/Pages/kochi" element={<LegacyRouteRedirect to="/destinations/kochi" />} />
        <Route path="/Pages/chennai" element={<LegacyRouteRedirect to="/destinations/chennai" />} />
        <Route path="/Pages/germany" element={<LegacyRouteRedirect to="/destinations/germany-itineraries" />} />
        <Route path="/germany-landing" element={<LegacyRouteRedirect to="/destinations/germany-itineraries" />} />
        <Route path="/usa-landing" element={<LegacyRouteRedirect to="/destinations/usa" />} />
        <Route path="/alleppey-landing" element={<LegacyRouteRedirect to="/destinations/alleppey" />} />
        <Route path="/kochi-landing" element={<LegacyRouteRedirect to="/destinations/kochi" />} />
        <Route path="/Pages/:slug" element={<LegacyPagesRedirect />} />
        <Route path="/aus-landing" element={<LegacyRouteRedirect to="/destinations/australia-tours" />} />
        <Route path="/canada-landing" element={<LegacyRouteRedirect to="/destinations/canada-tours" />} />
        <Route path="/europe-landing" element={<LegacyRouteRedirect to="/destinations/europe-tours" />} />
        <Route path="/nz-landing" element={<LegacyRouteRedirect to="/destinations/new-zealand-tours" />} />
        <Route path="/thailand-landing" element={<LegacyRouteRedirect to="/destinations/thailand-tours" />} />
        <Route path="/malaysia-landing" element={<LegacyRouteRedirect to="/destinations/malaysia-tours" />} />
        <Route path="/bali-landing" element={<LegacyRouteRedirect to="/destinations/bali-tours" />} />
        <Route path="/dubai-landing" element={<LegacyRouteRedirect to="/destinations/dubai-tours" />} />
        <Route path="/abu-landing" element={<LegacyRouteRedirect to="/destinations/abu" />} />
        <Route path="/france-landing" element={<LegacyRouteRedirect to="/destinations/france-tours" />} />
        <Route path="/italy-landing" element={<LegacyRouteRedirect to="/destinations/italy-tours" />} />
        <Route path="/switzerland-landing" element={<LegacyRouteRedirect to="/destinations/switzerland-tours" />} />
        <Route path="/hungary-landing" element={<LegacyRouteRedirect to="/destinations/hungary-tours" />} />
        <Route path="/budapest-landing" element={<LegacyRouteRedirect to="/destinations/budapest" />} />
        <Route path="/poland-landing" element={<LegacyRouteRedirect to="/destinations/poland-tours" />} />
        <Route path="/manali-landing" element={<LegacyRouteRedirect to="/destinations/manali-tours" />} />
        <Route path="/rohtang-landing" element={<LegacyRouteRedirect to="/destinations/rohtang" />} />
        <Route path="/shimla-landing" element={<LegacyRouteRedirect to="/destinations/shimla-tours" />} />
        <Route path="/spiti-landing" element={<LegacyRouteRedirect to="/destinations/spiti-tours" />} />
        <Route path="/srinagar-landing" element={<LegacyRouteRedirect to="/destinations/srinagar-tours" />} />
        <Route path="/pahalgam-landing" element={<LegacyRouteRedirect to="/destinations/pahalgam-tours" />} />
        <Route path="/ooty-landing" element={<LegacyRouteRedirect to="/destinations/ooty-tours" />} />
        <Route path="/gangtok-landing" element={<LegacyRouteRedirect to="/destinations/gangtok-tours" />} />
        <Route path="/guwahati-landing" element={<LegacyRouteRedirect to="/destinations/guwahati-tours" />} />
        <Route path="/jaipur-landing" element={<LegacyRouteRedirect to="/destinations/jaipur-tours" />} />
        <Route path="/udaipur-landing" element={<LegacyRouteRedirect to="/destinations/udaipur-tours" />} />
        <Route path="/northgoa-landing" element={<LegacyRouteRedirect to="/destinations/northgoa-tours" />} />
        <Route path="/southgoa-landing" element={<LegacyRouteRedirect to="/destinations/southgoa-tours" />} />
        <Route path="/bangalore-landing" element={<LegacyRouteRedirect to="/destinations/bangalore" />} />
        <Route path="/mysore-landing" element={<LegacyRouteRedirect to="/destinations/mysore" />} />
        <Route path="/coorg-landing" element={<LegacyRouteRedirect to="/destinations/coorg" />} />
        <Route path="/hampi-landing" element={<LegacyRouteRedirect to="/destinations/hampi" />} />
        <Route path="/chennai-landing" element={<LegacyRouteRedirect to="/destinations/chennai" />} />
        <Route path="/temple-landing" element={<LegacyRouteRedirect to="/destinations/temple" />} />
        <Route path="/munnar-landing" element={<LegacyRouteRedirect to="/destinations/munnar" />} />
        <Route path="/austria-landing" element={<LegacyRouteRedirect to="/destinations/austria" />} />
        <Route path="/austria-landing-2" element={<LegacyRouteRedirect to="/destinations/budapest-vienna-prague-7-day" />} />
        <Route path="/austria-landing-3" element={<LegacyRouteRedirect to="/destinations/budapest-vienna-prague-9-day" />} />
        <Route path="/austria-landing-4" element={<LegacyRouteRedirect to="/destinations/vienna-munich-zurich-7-day" />} />
        <Route path="/austria-landing-5" element={<LegacyRouteRedirect to="/destinations/munich-innsbruck-salzburg-vienna-9-day" />} />
        <Route path="/austria-landing-6" element={<LegacyRouteRedirect to="/destinations/vienna-munich-zurich-8-day" />} />
        <Route path="/austria-landing-7" element={<LegacyRouteRedirect to="/destinations/zurich-innsbruck-salzburg-7-day" />} />
        <Route path="/austria-landing-8" element={<LegacyRouteRedirect to="/destinations/vienna-budapest-prague-7-day" />} />
        <Route path="/austria-landing-9" element={<LegacyRouteRedirect to="/destinations/munich-innsbruck-alps-7-day" />} />
        <Route path="/austria-landing-10" element={<LegacyRouteRedirect to="/destinations/medieval-streets-imperial-palaces-10-day" />} />
        <Route path="/austria-tour-2" element={<LegacyRouteRedirect to="/destinations/budapest-vienna-prague-7-day" />} />
        <Route path="/austria-tour-3" element={<LegacyRouteRedirect to="/destinations/budapest-vienna-prague-9-day" />} />
        <Route path="/austria-tour-4" element={<LegacyRouteRedirect to="/destinations/vienna-munich-zurich-7-day" />} />
        <Route path="/austria-tour-5" element={<LegacyRouteRedirect to="/destinations/munich-innsbruck-salzburg-vienna-9-day" />} />
        <Route path="/austria-tour-6" element={<LegacyRouteRedirect to="/destinations/vienna-munich-zurich-8-day" />} />
        <Route path="/austria-tour-7" element={<LegacyRouteRedirect to="/destinations/zurich-innsbruck-salzburg-7-day" />} />
        <Route path="/austria-tour-8" element={<LegacyRouteRedirect to="/destinations/vienna-budapest-prague-7-day" />} />
        <Route path="/austria-tour-9" element={<LegacyRouteRedirect to="/destinations/munich-innsbruck-alps-7-day" />} />
        <Route path="/austria-tour-10" element={<LegacyRouteRedirect to="/destinations/medieval-streets-imperial-palaces-10-day" />} />
        <Route path="/belgium-landing" element={<LegacyRouteRedirect to="/destinations/belgium" />} />
        <Route path="/belgium-landing-1" element={<LegacyRouteRedirect to="/destinations/windmills-to-eiffel" />} />
        <Route path="/belgium-landing-2" element={<LegacyRouteRedirect to="/destinations/amsterdam-paris-escape" />} />
        <Route path="/belgium-landing-3" element={<LegacyRouteRedirect to="/destinations/brussels-antwerp-rotterdam" />} />
        <Route path="/belgium-tour-1" element={<LegacyRouteRedirect to="/destinations/windmills-to-eiffel" />} />
        <Route path="/belgium-tour-2" element={<LegacyRouteRedirect to="/destinations/amsterdam-paris-escape" />} />
        <Route path="/belgium-tour-3" element={<LegacyRouteRedirect to="/destinations/brussels-antwerp-rotterdam" />} />
        <Route path="/croatia-landing" element={<LegacyRouteRedirect to="/destinations/croatia" />} />
        <Route path="/croatia-landing-1" element={<LegacyRouteRedirect to="/destinations/central-europe-budapest-zagreb-ljubljana" />} />
        <Route path="/croatia-landing-2" element={<LegacyRouteRedirect to="/destinations/croatia-coast-and-islands" />} />
        <Route path="/croatia-landing-3" element={<LegacyRouteRedirect to="/destinations/two-cities-one-coast-croatia" />} />
        <Route path="/croatia-landing-4" element={<LegacyRouteRedirect to="/destinations/two-capitals-one-journey-croatia-slovenia" />} />
        <Route path="/croatia-landing-5" element={<LegacyRouteRedirect to="/destinations/croatia-in-a-week-zagreb" />} />
        <Route path="/portugal-landing" element={<LegacyRouteRedirect to="/destinations/portugal" />} />
        <Route path="/portugal-landing-1" element={<LegacyRouteRedirect to="/destinations/seville-lisbon-porto-6-day" />} />
        <Route path="/portugal-landing-2" element={<LegacyRouteRedirect to="/destinations/spain-portugal-royal-cities-coastal-wonders" />} />
        <Route path="/italy-landing1" element={<LegacyRouteRedirect to="/destinations/italy-itineraries" />} />
        <Route path="/italy-landing2" element={<LegacyRouteRedirect to="/destinations/florence-pisa-rome-8-day" />} />
        <Route path="/italy-landing3" element={<LegacyRouteRedirect to="/destinations/essence-of-italy-10-day" />} />
        <Route path="/italy-landing4" element={<LegacyRouteRedirect to="/destinations/french-riviera-to-milan-elegance" />} />
        <Route path="/italy-landing5" element={<LegacyRouteRedirect to="/destinations/florence-pisa-rome-7-day" />} />
        <Route path="/poland-landing1" element={<LegacyRouteRedirect to="/destinations/poland-itineraries" />} />
        <Route path="/poland-landing2" element={<LegacyRouteRedirect to="/destinations/classic-poland-warsaw-krakow" />} />
        <Route path="/poland-landing3" element={<LegacyRouteRedirect to="/destinations/classic-europe-warsaw-prague" />} />
        <Route path="/hungary-landing1" element={<LegacyRouteRedirect to="/destinations/hungary-itineraries" />} />
        <Route path="/hungary-landing2" element={<LegacyRouteRedirect to="/destinations/central-europe-budapest-zagreb-ljubljana-hungary" />} />
        <Route path="/hungary-landing3" element={<LegacyRouteRedirect to="/destinations/budapest-vienna-prague-7-day-hungary" />} />
        <Route path="/hungary-landing4" element={<LegacyRouteRedirect to="/destinations/budapest-vienna-prague-9-day-hungary" />} />
        <Route path="/hungary-landing5" element={<LegacyRouteRedirect to="/destinations/vienna-budapest-prague-7-day-hungary" />} />
        <Route path="/hungary-landing6" element={<LegacyRouteRedirect to="/destinations/medieval-streets-imperial-palaces-10-day-hungary" />} />
        <Route path="/denmark-landing1" element={<LegacyRouteRedirect to="/destinations/denmark-itineraries" />} />
        <Route path="/denmark-landing2" element={<LegacyRouteRedirect to="/destinations/copenhagen-gothenburg-5-day" />} />
        <Route path="/denmark-landing3" element={<LegacyRouteRedirect to="/destinations/best-of-sweden-5-day" />} />
        <Route path="/denmark-landing4" element={<LegacyRouteRedirect to="/destinations/denmark-germany-8-day" />} />
        <Route path="/denmark-landing5" element={<LegacyRouteRedirect to="/destinations/denmark-sweden-germany-8-day" />} />
        <Route path="/denmark-landing6" element={<LegacyRouteRedirect to="/destinations/denmark-sweden-norway-8-day" />} />
        <Route path="/germany-landing1" element={<LegacyRouteRedirect to="/destinations/germany-itineraries" />} />
        <Route path="/germany-landing2" element={<LegacyRouteRedirect to="/destinations/scenic-europe-ljubljana-salzburg-munich" />} />
        <Route path="/germany-landing3" element={<LegacyRouteRedirect to="/destinations/munich-innsbruck-salzburg-vienna-9-day-germany" />} />
        <Route path="/germany-landing4" element={<LegacyRouteRedirect to="/destinations/munich-stuttgart-frankfurt-7-day" />} />
        <Route path="/germany-landing5" element={<LegacyRouteRedirect to="/destinations/vienna-munich-zurich-7-day-germany" />} />
        <Route path="/germany-landing6" element={<LegacyRouteRedirect to="/destinations/vienna-munich-zurich-8-day-germany" />} />
        <Route path="/germany-landing7" element={<LegacyRouteRedirect to="/destinations/zurich-innsbruck-salzburg-7-day-germany" />} />
        <Route path="/germany-landing8" element={<LegacyRouteRedirect to="/destinations/amsterdam-cologne-frankfurt-7-day" />} />
        <Route path="/germany-landing9" element={<LegacyRouteRedirect to="/destinations/denmark-germany-8-day-tour" />} />
        <Route path="/germany-landing10" element={<LegacyRouteRedirect to="/destinations/denmark-sweden-germany-8-day-tour" />} />
        <Route path="/germany-landing11" element={<LegacyRouteRedirect to="/destinations/frankfurt-heidelberg-munich-7-day" />} />
        <Route path="/france-landing1" element={<LegacyRouteRedirect to="/destinations/france-itineraries" />} />
        <Route path="/france-landing2" element={<LegacyRouteRedirect to="/destinations/windmills-to-eiffel-netherlands-france-7-day" />} />
        <Route path="/france-landing3" element={<LegacyRouteRedirect to="/destinations/best-swiss-france-8-day" />} />
        <Route path="/france-landing4" element={<LegacyRouteRedirect to="/destinations/windmills-to-eiffel-benelux-7-day" />} />
        <Route path="/france-landing5" element={<LegacyRouteRedirect to="/destinations/amsterdam-paris-escape-9-day-france" />} />
        <Route path="/france-landing6" element={<LegacyRouteRedirect to="/destinations/spanish-french-riviera-7-day" />} />
        <Route path="/Switzerland-landing1" element={<LegacyRouteRedirect to="/destinations/switzerland-itineraries" />} />
        <Route path="/England-landing1" element={<LegacyRouteRedirect to="/destinations/england-itineraries" />} />
        <Route path="/Spain-landing1" element={<LegacyRouteRedirect to="/destinations/spain-itineraries" />} />
        <Route path="/Scotland-landing1" element={<LegacyRouteRedirect to="/destinations/scotland-itineraries" />} />
        <Route path="/Finland-landing1" element={<LegacyRouteRedirect to="/destinations/finland-itineraries" />} />
        <Route path="/Greece-landing1" element={<LegacyRouteRedirect to="/destinations/greece-itineraries" />} />
        <Route path="/Iceland-landing1" element={<LegacyRouteRedirect to="/destinations/iceland-itineraries" />} />
        <Route path="/europe" element={<LegacyRouteRedirect to="/destinations/europe" />} />
        <Route path="/australia" element={<LegacyRouteRedirect to="/destinations/australia" />} />
        <Route path="/canada" element={<LegacyRouteRedirect to="/destinations/canada" />} />
        <Route path="/usa" element={<LegacyRouteRedirect to="/destinations/usa" />} />
        <Route path="/usa-panorama" element={<LegacyRouteRedirect to="/destinations/usa-panorama" />} />
        <Route path="/golden-west-coast" element={<LegacyRouteRedirect to="/destinations/golden-west-coast" />} />
        <Route path="/california" element={<LegacyRouteRedirect to="/destinations/california" />} />
        <Route path="/destinations/northen-vietnam" element={<LegacyRouteRedirect to="/destinations/northern-vietnam-4-day" />} />
        <Route path="/destinations/southern-vietnam" element={<LegacyRouteRedirect to="/destinations/southern-vietnam-5-day" />} />
        <Route path="/destinations/uk-escape" element={<LegacyRouteRedirect to="/destinations/london-newport-edinburgh" />} />
        <Route path="/destinations/grand-britain" element={<LegacyRouteRedirect to="/destinations/grand-britain-london-edinburgh" />} />
        <Route path="/destinations/classic-uk" element={<LegacyRouteRedirect to="/destinations/classic-uk-london-manchester" />} />
        <Route path="/destinations/best-barcelona" element={<LegacyRouteRedirect to="/destinations/barcelona-madrid-ibiza-7-day" />} />
        <Route path="/destinations/seville-madrid" element={<LegacyRouteRedirect to="/destinations/seville-madrid-classic" />} />
        <Route path="/destinations/edinburgh-glasgow" element={<LegacyRouteRedirect to="/destinations/edinburgh-glasgow-classic" />} />
        <Route path="/ny-washington" element={<LegacyRouteRedirect to="/destinations/ny-washington" />} />
        <Route path="/vegas-grand" element={<LegacyRouteRedirect to="/destinations/vegas-grand" />} />
        <Route path="/luxury-usa" element={<LegacyRouteRedirect to="/destinations/luxury-usa" />} />
        <Route path="/australia-tours" element={<LegacyRouteRedirect to="/destinations/australia-tours" />} />
        <Route path="/sydney-melbourne" element={<LegacyRouteRedirect to="/destinations/sydney-melbourne" />} />
        <Route path="/gold-coast" element={<LegacyRouteRedirect to="/destinations/gold-coast" />} />
        <Route path="/great-ocean" element={<LegacyRouteRedirect to="/destinations/great-ocean" />} />
        <Route path="/luxury-aus" element={<LegacyRouteRedirect to="/destinations/luxury-aus" />} />
        <Route path="/canada-tours" element={<LegacyRouteRedirect to="/destinations/canada-tours" />} />
        <Route path="/toronto-niagara" element={<LegacyRouteRedirect to="/destinations/toronto-niagara" />} />
        <Route path="/vancouver-victoria" element={<LegacyRouteRedirect to="/destinations/vancouver-victoria" />} />
        <Route path="/rocky-tour" element={<LegacyRouteRedirect to="/destinations/rocky-tour" />} />
        <Route path="/luxury-canada" element={<LegacyRouteRedirect to="/destinations/luxury-canada" />} />
        <Route path="/europe-tours" element={<LegacyRouteRedirect to="/destinations/europe-tours" />} />
        <Route path="/france-swiss" element={<LegacyRouteRedirect to="/destinations/france-swiss" />} />
        <Route path="/italy-tour" element={<LegacyRouteRedirect to="/destinations/italy-tour" />} />
        <Route path="/eastern-europe" element={<LegacyRouteRedirect to="/destinations/eastern-europe" />} />
        <Route path="/luxury-europe" element={<LegacyRouteRedirect to="/destinations/luxury-europe" />} />
        <Route path="/new-zealand" element={<LegacyRouteRedirect to="/destinations/new-zealand" />} />
        <Route path="/new-zealand-tours" element={<LegacyRouteRedirect to="/destinations/new-zealand-tours" />} />
        <Route path="/thailand" element={<LegacyRouteRedirect to="/destinations/thailand" />} />
        <Route path="/singapore" element={<LegacyRouteRedirect to="/destinations/singapore" />} />
        <Route path="/thailand-tours" element={<LegacyRouteRedirect to="/destinations/thailand-tours" />} />
        <Route path="/bangkok-pattaya" element={<LegacyRouteRedirect to="/destinations/bangkok-pattaya" />} />
        <Route path="/phuket-krabi" element={<LegacyRouteRedirect to="/destinations/phuket-krabi" />} />
        <Route path="/thailand-luxury" element={<LegacyRouteRedirect to="/destinations/thailand-luxury" />} />
        <Route path="/best-of-singapore" element={<LegacyRouteRedirect to="/destinations/best-of-singapore" />} />
        <Route path="/singapore-sentosa" element={<LegacyRouteRedirect to="/destinations/singapore-sentosa" />} />
        <Route path="/universal-singapore" element={<LegacyRouteRedirect to="/destinations/universal-singapore" />} />
        <Route path="/luxury-singapore" element={<LegacyRouteRedirect to="/destinations/luxury-singapore" />} />
        <Route path="/malaysia" element={<LegacyRouteRedirect to="/destinations/malaysia" />} />
        <Route path="/malaysia-tours" element={<LegacyRouteRedirect to="/destinations/malaysia-tours" />} />
        <Route path="/kl-genting" element={<LegacyRouteRedirect to="/destinations/kl-genting" />} />
        <Route path="/langkawi" element={<LegacyRouteRedirect to="/destinations/langkawi" />} />
        <Route path="/penang" element={<LegacyRouteRedirect to="/destinations/penang" />} />
        <Route path="/luxury-malaysia" element={<LegacyRouteRedirect to="/destinations/luxury-malaysia" />} />
        <Route path="/bali" element={<LegacyRouteRedirect to="/destinations/bali" />} />
        <Route path="/bali-tours" element={<LegacyRouteRedirect to="/destinations/bali-tours" />} />
        <Route path="/ubud-kuta" element={<LegacyRouteRedirect to="/destinations/ubud-kuta" />} />
        <Route path="/bali-beach" element={<LegacyRouteRedirect to="/destinations/bali-beach" />} />
        <Route path="/bali-adventure" element={<LegacyRouteRedirect to="/destinations/bali-adventure" />} />
        <Route path="/luxury-bali" element={<LegacyRouteRedirect to="/destinations/luxury-bali" />} />
        <Route path="/dubai" element={<LegacyRouteRedirect to="/destinations/dubai" />} />
        <Route path="/dubai-tours" element={<LegacyRouteRedirect to="/destinations/dubai-tours" />} />
        <Route path="/dubai-abu" element={<LegacyRouteRedirect to="/destinations/dubai-abu" />} />
        <Route path="/desert-safari" element={<LegacyRouteRedirect to="/destinations/desert-safari" />} />
        <Route path="/luxury-dubai" element={<LegacyRouteRedirect to="/destinations/luxury-dubai" />} />
        <Route path="/abu-dhabi" element={<LegacyRouteRedirect to="/destinations/abu-dhabi" />} />
        <Route path="/abu" element={<LegacyRouteRedirect to="/destinations/abu" />} />
        <Route path="/abu-city" element={<LegacyRouteRedirect to="/destinations/abu-city" />} />
        <Route path="/abu-culture" element={<LegacyRouteRedirect to="/destinations/abu-culture" />} />
        <Route path="/abu-ferrari" element={<LegacyRouteRedirect to="/destinations/abu-ferrari" />} />
        <Route path="/abu-luxury" element={<LegacyRouteRedirect to="/destinations/abu-luxury" />} />
        <Route path="/france" element={<LegacyRouteRedirect to="/destinations/france" />} />
        <Route path="/france-tours" element={<LegacyRouteRedirect to="/destinations/france-tours" />} />
        <Route path="/paris-nice" element={<LegacyRouteRedirect to="/destinations/paris-nice" />} />
        <Route path="/french-riviera" element={<LegacyRouteRedirect to="/destinations/french-riviera" />} />
        <Route path="/luxury-france" element={<LegacyRouteRedirect to="/destinations/luxury-france" />} />
        <Route path="/italy" element={<LegacyRouteRedirect to="/destinations/italy" />} />
        <Route path="/italy-tours" element={<LegacyRouteRedirect to="/destinations/italy-tours" />} />
        <Route path="/rome-venice" element={<LegacyRouteRedirect to="/destinations/rome-venice" />} />
        <Route path="/florence-tour" element={<LegacyRouteRedirect to="/destinations/florence-tour" />} />
        <Route path="/amalfi-coast" element={<LegacyRouteRedirect to="/destinations/amalfi-coast" />} />
        <Route path="/luxury-italy" element={<LegacyRouteRedirect to="/destinations/luxury-italy" />} />
        <Route path="/switzerland" element={<LegacyRouteRedirect to="/destinations/switzerland" />} />
        <Route path="/switzerland-tours" element={<LegacyRouteRedirect to="/destinations/switzerland-tours" />} />
        <Route path="/zurich-lucerne" element={<LegacyRouteRedirect to="/destinations/zurich-lucerne" />} />
        <Route path="/interlaken" element={<LegacyRouteRedirect to="/destinations/interlaken" />} />
        <Route path="/swiss-alps" element={<LegacyRouteRedirect to="/destinations/swiss-alps" />} />
        <Route path="/luxury-switzerland" element={<LegacyRouteRedirect to="/destinations/luxury-switzerland" />} />
        <Route path="/hungary" element={<LegacyRouteRedirect to="/destinations/hungary" />} />
        <Route path="/hungary-tours" element={<LegacyRouteRedirect to="/destinations/hungary-tours" />} />
        <Route path="/budapest" element={<LegacyRouteRedirect to="/destinations/budapest" />} />
        <Route path="/danube-cruise" element={<LegacyRouteRedirect to="/destinations/danube-cruise" />} />
        <Route path="/luxury-hungary" element={<LegacyRouteRedirect to="/destinations/luxury-hungary" />} />
        <Route path="/poland" element={<LegacyRouteRedirect to="/destinations/poland" />} />
        <Route path="/poland-tours" element={<LegacyRouteRedirect to="/destinations/poland-tours" />} />
        <Route path="/manali" element={<LegacyRouteRedirect to="/destinations/manali" />} />
        <Route path="/manali-tours" element={<LegacyRouteRedirect to="/destinations/manali-tours" />} />
        <Route path="/rohtang" element={<LegacyRouteRedirect to="/destinations/rohtang" />} />
        <Route path="/manali-adventure" element={<LegacyRouteRedirect to="/destinations/manali-adventure" />} />
        <Route path="/luxury-manali" element={<LegacyRouteRedirect to="/destinations/luxury-manali" />} />
        <Route path="/shimla" element={<LegacyRouteRedirect to="/destinations/shimla" />} />
        <Route path="/shimla-tours" element={<LegacyRouteRedirect to="/destinations/shimla-tours" />} />
        <Route path="/shimla-kufri" element={<LegacyRouteRedirect to="/destinations/shimla-kufri" />} />
        <Route path="/shimla-adventure" element={<LegacyRouteRedirect to="/destinations/shimla-adventure" />} />
        <Route path="/luxury-shimla" element={<LegacyRouteRedirect to="/destinations/luxury-shimla" />} />
        <Route path="/spiti" element={<LegacyRouteRedirect to="/destinations/spiti" />} />
        <Route path="/spiti-tours" element={<LegacyRouteRedirect to="/destinations/spiti-tours" />} />
        <Route path="/spiti-adventure" element={<LegacyRouteRedirect to="/destinations/spiti-adventure" />} />
        <Route path="/chandratal" element={<LegacyRouteRedirect to="/destinations/chandratal" />} />
        <Route path="/luxury-spiti" element={<LegacyRouteRedirect to="/destinations/luxury-spiti" />} />
        <Route path="/srinagar" element={<LegacyRouteRedirect to="/destinations/srinagar" />} />
        <Route path="/srinagar-tours" element={<LegacyRouteRedirect to="/destinations/srinagar-tours" />} />
        <Route path="/gulmarg" element={<LegacyRouteRedirect to="/destinations/gulmarg" />} />
        <Route path="/houseboat" element={<LegacyRouteRedirect to="/destinations/houseboat" />} />
        <Route path="/luxury-kashmir" element={<LegacyRouteRedirect to="/destinations/luxury-kashmir" />} />
        <Route path="/gulmarg-destination" element={<LegacyRouteRedirect to="/destinations/gulmarg-destination" />} />
        <Route path="/gulmarg-snow-adventure" element={<LegacyRouteRedirect to="/destinations/gulmarg-snow-adventure" />} />
        <Route path="/gulmarg-ski-experience" element={<LegacyRouteRedirect to="/destinations/gulmarg-ski-experience" />} />
        <Route path="/luxury-gulmarg" element={<LegacyRouteRedirect to="/destinations/luxury-gulmarg" />} />
        <Route path="/pahalgam" element={<LegacyRouteRedirect to="/destinations/pahalgam" />} />
        <Route path="/pahalgam-tours" element={<LegacyRouteRedirect to="/destinations/pahalgam-tours" />} />
        <Route path="/pahalgam-valley" element={<LegacyRouteRedirect to="/destinations/pahalgam-valley" />} />
        <Route path="/pahalgam-adventure" element={<LegacyRouteRedirect to="/destinations/pahalgam-adventure" />} />
        <Route path="/luxury-pahalgam" element={<LegacyRouteRedirect to="/destinations/luxury-pahalgam" />} />
        <Route path="/ooty" element={<LegacyRouteRedirect to="/destinations/ooty" />} />
        <Route path="/ooty-tours" element={<LegacyRouteRedirect to="/destinations/ooty-tours" />} />
        <Route path="/ooty-coonoor" element={<LegacyRouteRedirect to="/destinations/ooty-coonoor" />} />
        <Route path="/ooty-adventure" element={<LegacyRouteRedirect to="/destinations/ooty-adventure" />} />
        <Route path="/luxury-ooty" element={<LegacyRouteRedirect to="/destinations/luxury-ooty" />} />
        <Route path="/gangtok" element={<LegacyRouteRedirect to="/destinations/gangtok" />} />
        <Route path="/gangtok-tours" element={<LegacyRouteRedirect to="/destinations/gangtok-tours" />} />
        <Route path="/gangtok-nathula" element={<LegacyRouteRedirect to="/destinations/gangtok-nathula" />} />
        <Route path="/gangtok-adventure" element={<LegacyRouteRedirect to="/destinations/gangtok-adventure" />} />
        <Route path="/luxury-gangtok" element={<LegacyRouteRedirect to="/destinations/luxury-gangtok" />} />
        <Route path="/guwahati" element={<LegacyRouteRedirect to="/destinations/guwahati" />} />
        <Route path="/guwahati-tours" element={<LegacyRouteRedirect to="/destinations/guwahati-tours" />} />
        <Route path="/guwahati-shillong" element={<LegacyRouteRedirect to="/destinations/guwahati-shillong" />} />
        <Route path="/guwahati-adventure" element={<LegacyRouteRedirect to="/destinations/guwahati-adventure" />} />
        <Route path="/luxury-guwahati" element={<LegacyRouteRedirect to="/destinations/luxury-guwahati" />} />
        <Route path="/jaipur" element={<LegacyRouteRedirect to="/destinations/jaipur" />} />
        <Route path="/jaipur-tours" element={<LegacyRouteRedirect to="/destinations/jaipur-tours" />} />
        <Route path="/jaipur-udaipur" element={<LegacyRouteRedirect to="/destinations/jaipur-udaipur" />} />
        <Route path="/jaipur-adventure" element={<LegacyRouteRedirect to="/destinations/jaipur-adventure" />} />
        <Route path="/luxury-jaipur" element={<LegacyRouteRedirect to="/destinations/luxury-jaipur" />} />
        <Route path="/udaipur" element={<LegacyRouteRedirect to="/destinations/udaipur" />} />
        <Route path="/udaipur-tours" element={<LegacyRouteRedirect to="/destinations/udaipur-tours" />} />
        <Route path="/udaipur-mountabu" element={<LegacyRouteRedirect to="/destinations/udaipur-mountabu" />} />
        <Route path="/udaipur-adventure" element={<LegacyRouteRedirect to="/destinations/udaipur-adventure" />} />
        <Route path="/luxury-udaipur" element={<LegacyRouteRedirect to="/destinations/luxury-udaipur" />} />
        <Route path="/northgoa" element={<LegacyRouteRedirect to="/destinations/northgoa" />} />
        <Route path="/northgoa-tours" element={<LegacyRouteRedirect to="/destinations/northgoa-tours" />} />
        <Route path="/northgoa-party" element={<LegacyRouteRedirect to="/destinations/northgoa-party" />} />
        <Route path="/northgoa-adventure" element={<LegacyRouteRedirect to="/destinations/northgoa-adventure" />} />
        <Route path="/luxury-northgoa" element={<LegacyRouteRedirect to="/destinations/luxury-northgoa" />} />
        <Route path="/southgoa" element={<LegacyRouteRedirect to="/destinations/southgoa" />} />
        <Route path="/southgoa-tours" element={<LegacyRouteRedirect to="/destinations/southgoa-tours" />} />
        <Route path="/southgoa-escape" element={<LegacyRouteRedirect to="/destinations/southgoa-escape" />} />
        <Route path="/southgoa-adventure" element={<LegacyRouteRedirect to="/destinations/southgoa-adventure" />} />
        <Route path="/luxury-southgoa" element={<LegacyRouteRedirect to="/destinations/luxury-southgoa" />} />
        <Route path="/karnataka-tours" element={<LegacyRouteRedirect to="/destinations/karnataka-tours" />} />
        <Route path="/bangalore" element={<LegacyRouteRedirect to="/destinations/bangalore" />} />
        <Route path="/mysore" element={<LegacyRouteRedirect to="/destinations/mysore" />} />
        <Route path="/coorg" element={<LegacyRouteRedirect to="/destinations/coorg" />} />
        <Route path="/hampi" element={<LegacyRouteRedirect to="/destinations/hampi" />} />
        <Route path="/tamilnadu-tours" element={<LegacyRouteRedirect to="/destinations/tamilnadu-tours" />} />
        <Route path="/chennai" element={<LegacyRouteRedirect to="/destinations/chennai" />} />
        <Route path="/rameswaram-madurai" element={<LegacyRouteRedirect to="/destinations/rameswaram-madurai" />} />
        <Route path="/temple" element={<LegacyRouteRedirect to="/destinations/temple" />} />
        <Route path="/kerala-tours" element={<LegacyRouteRedirect to="/destinations/kerala-tours" />} />
        <Route path="/munnar" element={<LegacyRouteRedirect to="/destinations/munnar" />} />
        <Route path="/alleppey" element={<LegacyRouteRedirect to="/destinations/alleppey" />} />
        <Route path="/kochi" element={<LegacyRouteRedirect to="/destinations/kochi" />} />
        <Route path="/kenya" element={<LegacyRouteRedirect to="/destinations/kenya" />} />
        <Route path="/kenya-UltimateSafariCircuit" element={<LegacyRouteRedirect to="/destinations/kenya-ultimate-safari-circuit" />} />
        <Route path="/kenya-WildEscapade" element={<LegacyRouteRedirect to="/destinations/kenya-wild-escapade" />} />
        <Route path="/kenya-WildSerenade" element={<LegacyRouteRedirect to="/destinations/kenya-wild-serenade" />} />
        <Route path="/kenya-EchoesOfTheWild" element={<LegacyRouteRedirect to="/destinations/kenya-echoes-of-the-wild" />} />
        <Route path="/kenya-AmboseliWildTrails" element={<LegacyRouteRedirect to="/destinations/kenya-amboseli-wild-trails" />} />
        <Route path="/kenya-PredatorsAndPinkFeathers" element={<LegacyRouteRedirect to="/destinations/kenya-predators-and-pink-feathers" />} />
        <Route path="/kenya-IntoTheHeartOfTheWild" element={<LegacyRouteRedirect to="/destinations/kenya-into-the-heart-of-the-wild" />} />
        <Route path="/austria" element={<LegacyRouteRedirect to="/destinations/austria" />} />
        <Route path="/budapest-vienna-prague-7-day" element={<LegacyRouteRedirect to="/destinations/budapest-vienna-prague-7-day" />} />
        <Route path="/budapest-vienna-prague-9-day" element={<LegacyRouteRedirect to="/destinations/budapest-vienna-prague-9-day" />} />
        <Route path="/vienna-munich-zurich-7-day" element={<LegacyRouteRedirect to="/destinations/vienna-munich-zurich-7-day" />} />
        <Route path="/munich-innsbruck-salzburg-vienna-9-day" element={<LegacyRouteRedirect to="/destinations/munich-innsbruck-salzburg-vienna-9-day" />} />
        <Route path="/vienna-munich-zurich-8-day" element={<LegacyRouteRedirect to="/destinations/vienna-munich-zurich-8-day" />} />
        <Route path="/zurich-innsbruck-salzburg-7-day" element={<LegacyRouteRedirect to="/destinations/zurich-innsbruck-salzburg-7-day" />} />
        <Route path="/vienna-budapest-prague-7-day" element={<LegacyRouteRedirect to="/destinations/vienna-budapest-prague-7-day" />} />
        <Route path="/munich-innsbruck-alps-7-day" element={<LegacyRouteRedirect to="/destinations/munich-innsbruck-alps-7-day" />} />
        <Route path="/medieval-streets-imperial-palaces-10-day" element={<LegacyRouteRedirect to="/destinations/medieval-streets-imperial-palaces-10-day" />} />
        <Route path="/belgium" element={<LegacyRouteRedirect to="/destinations/belgium" />} />
        <Route path="/windmills-to-eiffel" element={<LegacyRouteRedirect to="/destinations/windmills-to-eiffel" />} />
        <Route path="/amsterdam-paris-escape" element={<LegacyRouteRedirect to="/destinations/amsterdam-paris-escape" />} />
        <Route path="/brussels-antwerp-rotterdam" element={<LegacyRouteRedirect to="/destinations/brussels-antwerp-rotterdam" />} />
        <Route path="/croatia" element={<LegacyRouteRedirect to="/destinations/croatia" />} />
        <Route path="/croatia-tour-1" element={<LegacyRouteRedirect to="/destinations/central-europe-budapest-zagreb-ljubljana" />} />
        <Route path="/croatia-tour-2" element={<LegacyRouteRedirect to="/destinations/croatia-coast-and-islands" />} />
        <Route path="/croatia-tour-3" element={<LegacyRouteRedirect to="/destinations/two-cities-one-coast-croatia" />} />
        <Route path="/croatia-tour-4" element={<LegacyRouteRedirect to="/destinations/two-capitals-one-journey-croatia-slovenia" />} />
        <Route path="/croatia-tour-5" element={<LegacyRouteRedirect to="/destinations/croatia-in-a-week-zagreb" />} />
        <Route path="/croatia-1" element={<LegacyRouteRedirect to="/destinations/central-europe-budapest-zagreb-ljubljana" />} />
        <Route path="/croatia-2" element={<LegacyRouteRedirect to="/destinations/croatia-coast-and-islands" />} />
        <Route path="/croatia-3" element={<LegacyRouteRedirect to="/destinations/two-cities-one-coast-croatia" />} />
        <Route path="/croatia-4" element={<LegacyRouteRedirect to="/destinations/two-capitals-one-journey-croatia-slovenia" />} />
        <Route path="/croatia-5" element={<LegacyRouteRedirect to="/destinations/croatia-in-a-week-zagreb" />} />
        <Route path="/destinations/croatia-1" element={<LegacyRouteRedirect to="/destinations/central-europe-budapest-zagreb-ljubljana" />} />
        <Route path="/destinations/croatia-2" element={<LegacyRouteRedirect to="/destinations/croatia-coast-and-islands" />} />
        <Route path="/destinations/croatia-3" element={<LegacyRouteRedirect to="/destinations/two-cities-one-coast-croatia" />} />
        <Route path="/destinations/croatia-4" element={<LegacyRouteRedirect to="/destinations/two-capitals-one-journey-croatia-slovenia" />} />
        <Route path="/destinations/croatia-5" element={<LegacyRouteRedirect to="/destinations/croatia-in-a-week-zagreb" />} />
        <Route path="/destinations/croatia-tour-1" element={<LegacyRouteRedirect to="/destinations/central-europe-budapest-zagreb-ljubljana" />} />
        <Route path="/destinations/croatia-tour-2" element={<LegacyRouteRedirect to="/destinations/croatia-coast-and-islands" />} />
        <Route path="/destinations/croatia-tour-3" element={<LegacyRouteRedirect to="/destinations/two-cities-one-coast-croatia" />} />
        <Route path="/destinations/croatia-tour-4" element={<LegacyRouteRedirect to="/destinations/two-capitals-one-journey-croatia-slovenia" />} />
        <Route path="/destinations/croatia-tour-5" element={<LegacyRouteRedirect to="/destinations/croatia-in-a-week-zagreb" />} />
        <Route path="/portugal" element={<LegacyRouteRedirect to="/destinations/portugal" />} />
        <Route path="/portugal-tour-1" element={<LegacyRouteRedirect to="/destinations/seville-lisbon-porto-6-day" />} />
        <Route path="/portugal-tour-2" element={<LegacyRouteRedirect to="/destinations/spain-portugal-royal-cities-coastal-wonders" />} />
        <Route path="/italy-tour-1" element={<LegacyRouteRedirect to="/destinations/italy-itineraries" />} />
        <Route path="/italy-tour-2" element={<LegacyRouteRedirect to="/destinations/florence-pisa-rome-8-day" />} />
        <Route path="/italy-tour-3" element={<LegacyRouteRedirect to="/destinations/essence-of-italy-10-day" />} />
        <Route path="/italy-tour-4" element={<LegacyRouteRedirect to="/destinations/french-riviera-to-milan-elegance" />} />
        <Route path="/italy-tour-5" element={<LegacyRouteRedirect to="/destinations/florence-pisa-rome-7-day" />} />
        <Route path="/poland-tour-1" element={<LegacyRouteRedirect to="/destinations/poland-itineraries" />} />
        <Route path="/poland-tour-2" element={<LegacyRouteRedirect to="/destinations/classic-poland-warsaw-krakow" />} />
        <Route path="/poland-tour-3" element={<LegacyRouteRedirect to="/destinations/classic-europe-warsaw-prague" />} />
        <Route path="/hungary-tour-1" element={<LegacyRouteRedirect to="/destinations/hungary-itineraries" />} />
        <Route path="/hungary-tour-2" element={<LegacyRouteRedirect to="/destinations/central-europe-budapest-zagreb-ljubljana-hungary" />} />
        <Route path="/hungary-tour-3" element={<LegacyRouteRedirect to="/destinations/budapest-vienna-prague-7-day-hungary" />} />
        <Route path="/hungary-tour-4" element={<LegacyRouteRedirect to="/destinations/budapest-vienna-prague-9-day-hungary" />} />
        <Route path="/hungary-tour-5" element={<LegacyRouteRedirect to="/destinations/vienna-budapest-prague-7-day-hungary" />} />
        <Route path="/hungary-tour-6" element={<LegacyRouteRedirect to="/destinations/medieval-streets-imperial-palaces-10-day-hungary" />} />
        <Route path="/denmark-tour-1" element={<LegacyRouteRedirect to="/destinations/denmark-itineraries" />} />
        <Route path="/denmark-tour-2" element={<LegacyRouteRedirect to="/destinations/copenhagen-gothenburg-5-day" />} />
        <Route path="/denmark-tour-3" element={<LegacyRouteRedirect to="/destinations/best-of-sweden-5-day" />} />
        <Route path="/denmark-tour-4" element={<LegacyRouteRedirect to="/destinations/denmark-germany-8-day" />} />
        <Route path="/denmark-tour-5" element={<LegacyRouteRedirect to="/destinations/denmark-sweden-germany-8-day" />} />
        <Route path="/denmark-tour-6" element={<LegacyRouteRedirect to="/destinations/denmark-sweden-norway-8-day" />} />
        <Route path="/germany-tour-1" element={<LegacyRouteRedirect to="/destinations/germany-itineraries" />} />
        <Route path="/germany-tour-2" element={<LegacyRouteRedirect to="/destinations/scenic-europe-ljubljana-salzburg-munich" />} />
        <Route path="/germany-tour-3" element={<LegacyRouteRedirect to="/destinations/munich-innsbruck-salzburg-vienna-9-day-germany" />} />
        <Route path="/germany-tour-4" element={<LegacyRouteRedirect to="/destinations/munich-stuttgart-frankfurt-7-day" />} />
        <Route path="/germany-tour-5" element={<LegacyRouteRedirect to="/destinations/vienna-munich-zurich-7-day-germany" />} />
        <Route path="/germany-tour-6" element={<LegacyRouteRedirect to="/destinations/vienna-munich-zurich-8-day-germany" />} />
        <Route path="/germany-tour-7" element={<LegacyRouteRedirect to="/destinations/zurich-innsbruck-salzburg-7-day-germany" />} />
        <Route path="/germany-tour-8" element={<LegacyRouteRedirect to="/destinations/amsterdam-cologne-frankfurt-7-day" />} />
        <Route path="/germany-tour-9" element={<LegacyRouteRedirect to="/destinations/denmark-germany-8-day-tour" />} />
        <Route path="/germany-tour-10" element={<LegacyRouteRedirect to="/destinations/denmark-sweden-germany-8-day-tour" />} />
        <Route path="/germany-tour-11" element={<LegacyRouteRedirect to="/destinations/frankfurt-heidelberg-munich-7-day" />} />
        <Route path="/france-tour-1" element={<LegacyRouteRedirect to="/destinations/france-itineraries" />} />
        <Route path="/france-tour-2" element={<LegacyRouteRedirect to="/destinations/windmills-to-eiffel-netherlands-france-7-day" />} />
        <Route path="/france-tour-3" element={<LegacyRouteRedirect to="/destinations/best-swiss-france-8-day" />} />
        <Route path="/france-tour-4" element={<LegacyRouteRedirect to="/destinations/windmills-to-eiffel-benelux-7-day" />} />
        <Route path="/france-tour-5" element={<LegacyRouteRedirect to="/destinations/amsterdam-paris-escape-9-day-france" />} />
        <Route path="/france-tour-6" element={<LegacyRouteRedirect to="/destinations/spanish-french-riviera-7-day" />} />
        <Route path="/vietnam" element={<LegacyRouteRedirect to="/destinations/vietnam" />} />
        <Route path="/vietnam-Tour" element={<LegacyRouteRedirect to="/destinations/vietnam-tour" />} />
        <Route path="/Northen-vietnam" element={<LegacyRouteRedirect to="/destinations/northern-vietnam-4-day" />} />
        <Route path="/Southern-Vietnam" element={<LegacyRouteRedirect to="/destinations/southern-vietnam-5-day" />} />
        <Route path="/Taste of-vietnam" element={<LegacyRouteRedirect to="/destinations/taste-of-vietnam" />} />
        <Route path="/Vietnam-Cambodia" element={<LegacyRouteRedirect to="/destinations/vietnam-cambodia" />} />
        <Route path="/Vietnam-Glances" element={<LegacyRouteRedirect to="/destinations/vietnam-glances" />} />
        <Route path="/Amazing-Vietnam" element={<LegacyRouteRedirect to="/destinations/amazing-vietnam" />} />
        <Route path="/Cambodia- Explore Siam Reap" element={<LegacyRouteRedirect to="/destinations/cambodia-explore-siam-reap" />} />
        <Route path="/Central Vietnam" element={<LegacyRouteRedirect to="/destinations/central-vietnam" />} />
        <Route path="/Vietnam-Central" element={<LegacyRouteRedirect to="/destinations/vietnam-central" />} />
        <Route path="/Essence-Vietnam" element={<LegacyRouteRedirect to="/destinations/essence-vietnam" />} />
        <Route path="/Highlights-Vietnam" element={<LegacyRouteRedirect to="/destinations/highlights-vietnam" />} />
        <Route path="/Laos-Escape" element={<LegacyRouteRedirect to="/destinations/laos-escape" />} />
        <Route path="/switzerland-tour-1" element={<LegacyRouteRedirect to="/destinations/switzerland-itineraries" />} />
        <Route path="/Swiss-France" element={<LegacyRouteRedirect to="/destinations/swiss-france" />} />
        <Route path="/Munich-Zurich" element={<LegacyRouteRedirect to="/destinations/munich-zurich" />} />
        <Route path="/Best-Vienna" element={<LegacyRouteRedirect to="/destinations/best-vienna" />} />
        <Route path="/vegas-grand-canyon" element={<LegacyRouteRedirect to="/destinations/vegas-grand-canyon" />} />
        <Route path="/Zurich-Bern" element={<LegacyRouteRedirect to="/destinations/zurich-bern" />} />
        <Route path="/Explore-Genevaam" element={<LegacyRouteRedirect to="/destinations/explore-genevaam" />} />
        <Route path="/Glimpses-Switzerland" element={<LegacyRouteRedirect to="/destinations/glimpses-switzerland" />} />
        <Route path="/Rhine-fall" element={<LegacyRouteRedirect to="/destinations/rhine-fall" />} />
        <Route path="/Scenic-Switzerland Discovery" element={<LegacyRouteRedirect to="/destinations/scenic-switzerland-discovery" />} />
        <Route path="/Swiss-Panorama" element={<LegacyRouteRedirect to="/destinations/swiss-panorama" />} />
        <Route path="/Best-Engelberg" element={<LegacyRouteRedirect to="/destinations/best-engelberg" />} />
        <Route path="/Zurich’s-Charm" element={<LegacyRouteRedirect to="/destinations/zurich-s-charm" />} />
        <Route path="/england-tour-1" element={<LegacyRouteRedirect to="/destinations/england-itineraries" />} />
        <Route path="/UK-Escape" element={<LegacyRouteRedirect to="/destinations/london-newport-edinburgh" />} />
        <Route path="/Cardiff-Manchester" element={<LegacyRouteRedirect to="/destinations/cardiff-manchester" />} />
        <Route path="/London-Newport" element={<LegacyRouteRedirect to="/destinations/london-newport" />} />
        <Route path="/Grand-Britain" element={<LegacyRouteRedirect to="/destinations/grand-britain-london-edinburgh" />} />
        <Route path="/Classic-UK" element={<LegacyRouteRedirect to="/destinations/classic-uk-london-manchester" />} />
        <Route path="/Classic-Europe" element={<LegacyRouteRedirect to="/destinations/classic-europe" />} />
        <Route path="/London-Ireland" element={<LegacyRouteRedirect to="/destinations/london-ireland" />} />
        <Route path="/Grand-Discovery" element={<LegacyRouteRedirect to="/destinations/grand-discovery" />} />
        <Route path="/spain-tour-1" element={<LegacyRouteRedirect to="/destinations/spain-itineraries" />} />
        <Route path="/Madrid-Ibiza" element={<LegacyRouteRedirect to="/destinations/madrid-ibiza" />} />
        <Route path="/Best-Barcelona" element={<LegacyRouteRedirect to="/destinations/barcelona-madrid-ibiza-7-day" />} />
        <Route path="/Seville-Madrid" element={<LegacyRouteRedirect to="/destinations/seville-madrid-classic" />} />
        <Route path="/Ibiza-Madrid" element={<LegacyRouteRedirect to="/destinations/ibiza-madrid" />} />
        <Route path="/Barcelona-Madrid" element={<LegacyRouteRedirect to="/destinations/barcelona-madrid" />} />
        <Route path="/Malaga-Seville" element={<LegacyRouteRedirect to="/destinations/malaga-seville" />} />
        <Route path="/Barcelona-Andalusian" element={<LegacyRouteRedirect to="/destinations/barcelona-andalusian" />} />
        <Route path="/Lisbon-Porto" element={<LegacyRouteRedirect to="/destinations/lisbon-porto" />} />
        <Route path="/Cities-Portugal’s" element={<LegacyRouteRedirect to="/destinations/cities-portugal-s" />} />
        <Route path="/Riviera-Delight" element={<LegacyRouteRedirect to="/destinations/riviera-delight" />} />
        <Route path="/scotland-tour-1" element={<LegacyRouteRedirect to="/destinations/scotland-itineraries" />} />
        <Route path="/Edinburgh-Glasgow" element={<LegacyRouteRedirect to="/destinations/edinburgh-glasgow-classic" />} />
        <Route path="/England-Scotland" element={<LegacyRouteRedirect to="/destinations/england-scotland" />} />
        <Route path="/Glasgow-Inverness" element={<LegacyRouteRedirect to="/destinations/glasgow-inverness" />} />
        <Route path="/finland-tour-1" element={<LegacyRouteRedirect to="/destinations/finland-itineraries" />} />
        <Route path="Finland-Sweden" element={<LegacyRouteRedirect to="/destinations/finland-sweden" />} />
        <Route path="/Capitals-Express" element={<LegacyRouteRedirect to="/destinations/capitals-express" />} />
        <Route path="/Getaway-Plus" element={<LegacyRouteRedirect to="/destinations/getaway-plus" />} />
        <Route path="/Mesmerizing-Finland" element={<LegacyRouteRedirect to="/destinations/mesmerizing-finland" />} />
        <Route path="/greece-tour-1" element={<LegacyRouteRedirect to="/destinations/greece-itineraries" />} />
        <Route path="/Athens-Greece" element={<LegacyRouteRedirect to="/destinations/athens-greece" />} />
        <Route path="/Athens-Mykonos" element={<LegacyRouteRedirect to="/destinations/athens-mykonos" />} />
        <Route path="Glimpses-Greece" element={<LegacyRouteRedirect to="/destinations/glimpses-greece" />} />
        <Route path="/Barcelona-Madridd" element={<LegacyRouteRedirect to="/destinations/barcelona-madridd" />} />
        <Route path="/Valencia-Malaga" element={<LegacyRouteRedirect to="/destinations/valencia-malaga" />} />
        <Route path="/iceland-tour-1" element={<LegacyRouteRedirect to="/destinations/iceland-itineraries" />} />
        <Route path="/Best-ICELAND" element={<LegacyRouteRedirect to="/destinations/best-iceland" />} />
        <Route path="/Iceland-Akureyri" element={<LegacyRouteRedirect to="/destinations/iceland-akureyri" />} />
            <Route path="/destinations/portugal-tour-1" element={<LegacyRouteRedirect to="/destinations/seville-lisbon-porto-6-day" />} />
        <Route path="/destinations/portugal-tour-2" element={<LegacyRouteRedirect to="/destinations/spain-portugal-royal-cities-coastal-wonders" />} />
        <Route path="/destinations/italy-tour-1" element={<LegacyRouteRedirect to="/destinations/italy-itineraries" />} />
        <Route path="/destinations/italy-tour-2" element={<LegacyRouteRedirect to="/destinations/florence-pisa-rome-8-day" />} />
        <Route path="/destinations/italy-tour-3" element={<LegacyRouteRedirect to="/destinations/essence-of-italy-10-day" />} />
        <Route path="/destinations/italy-tour-4" element={<LegacyRouteRedirect to="/destinations/french-riviera-to-milan-elegance" />} />
        <Route path="/destinations/italy-tour-5" element={<LegacyRouteRedirect to="/destinations/florence-pisa-rome-7-day" />} />
        <Route path="/destinations/poland-tour-1" element={<LegacyRouteRedirect to="/destinations/poland-itineraries" />} />
        <Route path="/destinations/poland-tour-2" element={<LegacyRouteRedirect to="/destinations/classic-poland-warsaw-krakow" />} />
        <Route path="/destinations/poland-tour-3" element={<LegacyRouteRedirect to="/destinations/classic-europe-warsaw-prague" />} />
        <Route path="/destinations/hungary-tour-1" element={<LegacyRouteRedirect to="/destinations/hungary-itineraries" />} />
        <Route path="/destinations/hungary-tour-2" element={<LegacyRouteRedirect to="/destinations/central-europe-budapest-zagreb-ljubljana-hungary" />} />
        <Route path="/destinations/hungary-tour-3" element={<LegacyRouteRedirect to="/destinations/budapest-vienna-prague-7-day-hungary" />} />
        <Route path="/destinations/hungary-tour-4" element={<LegacyRouteRedirect to="/destinations/budapest-vienna-prague-9-day-hungary" />} />
        <Route path="/destinations/hungary-tour-5" element={<LegacyRouteRedirect to="/destinations/vienna-budapest-prague-7-day-hungary" />} />
        <Route path="/destinations/hungary-tour-6" element={<LegacyRouteRedirect to="/destinations/medieval-streets-imperial-palaces-10-day-hungary" />} />
        <Route path="/destinations/denmark-tour-1" element={<LegacyRouteRedirect to="/destinations/denmark-itineraries" />} />
        <Route path="/destinations/denmark-tour-2" element={<LegacyRouteRedirect to="/destinations/copenhagen-gothenburg-5-day" />} />
        <Route path="/destinations/denmark-tour-3" element={<LegacyRouteRedirect to="/destinations/best-of-sweden-5-day" />} />
        <Route path="/destinations/denmark-tour-4" element={<LegacyRouteRedirect to="/destinations/denmark-germany-8-day" />} />
        <Route path="/destinations/denmark-tour-5" element={<LegacyRouteRedirect to="/destinations/denmark-sweden-germany-8-day" />} />
        <Route path="/destinations/denmark-tour-6" element={<LegacyRouteRedirect to="/destinations/denmark-sweden-norway-8-day" />} />
        <Route path="/destinations/germany-tour-1" element={<LegacyRouteRedirect to="/destinations/germany-itineraries" />} />
        <Route path="/destinations/germany-tour-2" element={<LegacyRouteRedirect to="/destinations/scenic-europe-ljubljana-salzburg-munich" />} />
        <Route path="/destinations/germany-tour-3" element={<LegacyRouteRedirect to="/destinations/munich-innsbruck-salzburg-vienna-9-day-germany" />} />
        <Route path="/destinations/germany-tour-4" element={<LegacyRouteRedirect to="/destinations/munich-stuttgart-frankfurt-7-day" />} />
        <Route path="/destinations/germany-tour-5" element={<LegacyRouteRedirect to="/destinations/vienna-munich-zurich-7-day-germany" />} />
        <Route path="/destinations/germany-tour-6" element={<LegacyRouteRedirect to="/destinations/vienna-munich-zurich-8-day-germany" />} />
        <Route path="/destinations/germany-tour-7" element={<LegacyRouteRedirect to="/destinations/zurich-innsbruck-salzburg-7-day-germany" />} />
        <Route path="/destinations/germany-tour-8" element={<LegacyRouteRedirect to="/destinations/amsterdam-cologne-frankfurt-7-day" />} />
        <Route path="/destinations/germany-tour-9" element={<LegacyRouteRedirect to="/destinations/denmark-germany-8-day-tour" />} />
        <Route path="/destinations/germany-tour-10" element={<LegacyRouteRedirect to="/destinations/denmark-sweden-germany-8-day-tour" />} />
        <Route path="/destinations/germany-tour-11" element={<LegacyRouteRedirect to="/destinations/frankfurt-heidelberg-munich-7-day" />} />
        <Route path="/destinations/france-tour-1" element={<LegacyRouteRedirect to="/destinations/france-itineraries" />} />
        <Route path="/destinations/france-tour-2" element={<LegacyRouteRedirect to="/destinations/windmills-to-eiffel-netherlands-france-7-day" />} />
        <Route path="/destinations/france-tour-3" element={<LegacyRouteRedirect to="/destinations/best-swiss-france-8-day" />} />
        <Route path="/destinations/france-tour-4" element={<LegacyRouteRedirect to="/destinations/windmills-to-eiffel-benelux-7-day" />} />
        <Route path="/destinations/france-tour-5" element={<LegacyRouteRedirect to="/destinations/amsterdam-paris-escape-9-day-france" />} />
        <Route path="/destinations/france-tour-6" element={<LegacyRouteRedirect to="/destinations/spanish-french-riviera-7-day" />} />
        <Route path="/destinations/switzerland-tour-1" element={<LegacyRouteRedirect to="/destinations/switzerland-itineraries" />} />
        <Route path="/destinations/england-tour-1" element={<LegacyRouteRedirect to="/destinations/england-itineraries" />} />
        <Route path="/destinations/spain-tour-1" element={<LegacyRouteRedirect to="/destinations/spain-itineraries" />} />
        <Route path="/destinations/scotland-tour-1" element={<LegacyRouteRedirect to="/destinations/scotland-itineraries" />} />
        <Route path="/destinations/finland-tour-1" element={<LegacyRouteRedirect to="/destinations/finland-itineraries" />} />
        <Route path="/destinations/greece-tour-1" element={<LegacyRouteRedirect to="/destinations/greece-itineraries" />} />
        <Route path="/destinations/iceland-tour-1" element={<LegacyRouteRedirect to="/destinations/iceland-itineraries" />} />
    </Routes> 
    </Router>
    </HelmetProvider>
  );
}

export default App;
