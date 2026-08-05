import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
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

import Villa from "./Pages/Villa";
import Visa from "./Pages/Visa";
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
// import Switzerland from "./Pages/switzerland";
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



function App() {
  return (
    <HelmetProvider> 
    <Router>
      <SEO />
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
        
  <Route path="/Pages/europe" element={<Europe />} />
<Route path="/Pages/australia" element={<Australia />} />
<Route path="/Pages/canada" element={<Canada />} />
<Route path="/Pages/usa" element={<USA />} />
 <Route path="/usa-panorama" element={<USA1 />} />
<Route path="/golden-west-coast" element={<USA2 />} />
<Route path="/california" element={<USA3 />} />
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
<Route path="/thailand-landing" element={<ThailandLanding />} />
<Route path="/bangkok-pattaya" element={<BangkokPattayaLanding />} />
<Route path="/phuket-krabi" element={<PhuketKrabiLanding />} />
<Route path="/thailand-luxury" element={<ThailandLuxuryLanding />} />
<Route path="/best-of-singapore" element={<BestofSingapore />} />
<Route path="/singapore-sentosa" element={<SingaporeSentosa />} />
<Route path="/universal-singapore" element={<UniversalSingapore />} />
<Route path="/luxury-singapore" element={<LuxurySingapore />} />
<Route path="/Pages/malaysia" element={<Malaysia />} />
<Route path="/malaysia-landing" element={<MalaysiaLanding />} />
<Route path="/kl-genting" element={<KLGenting />} />
<Route path="/langkawi" element={<Langkawi />} />
<Route path="/penang" element={<Penang />} />
<Route path="/luxury-malaysia" element={<LuxuryMalaysia />} />
<Route path="/Pages/bali" element={<Bali />} />
<Route path="/bali-landing" element={<BaliLanding />} />
<Route path="/ubud-kuta" element={<UbudKutaLanding />} />
<Route path="/bali-beach" element={<BaliBeachLanding />} />
<Route path="/bali-adventure" element={<BaliAdventureLanding />} />
<Route path="/luxury-bali" element={<LuxuryBaliLanding />} />
<Route path="/Pages/dubai" element={<Dubai />} />
<Route path="/dubai-landing" element={<DubaiLanding />} />
<Route path="/dubai-abu" element={<DubaiAbuLanding />} />
<Route path="/desert-safari" element={<DesertSafariLanding />} />
<Route path="/luxury-dubai" element={<LuxuryDubaiLanding />} />
<Route path="/Pages/abu-dhabi" element={<AbuDhabi />} />
<Route path="/abu-landing" element={<AbuLanding />} />
<Route path="/abu-city" element={<AbuCityLanding />} />
<Route path="/abu-culture" element={<AbuCultureLanding />} />
<Route path="/abu-ferrari" element={<AbuFerrariLanding />} />
<Route path="/abu-luxury" element={<AbuLuxuryLanding />} />
<Route path="/Pages/france" element={<France />} />
<Route path="/france-landing" element={<FranceLanding />} />
<Route path="/paris-nice" element={<ParisNiceLanding />} />
<Route path="/french-riviera" element={<FrenchRivieraLanding />} />
<Route path="/luxury-france" element={<LuxuryFranceLanding />} />
<Route path="/Pages/italy" element={<Italy />} />
<Route path="/italy-landing" element={<Italypage />} />
<Route path="/rome-venice" element={<RomeVeniceLanding />} />
<Route path="/florence-tour" element={<FlorenceTourLanding />} />
<Route path="/amalfi-coast" element={<AmalfiCoastLanding />} />
<Route path="/luxury-italy" element={<LuxuryItalyLanding />} />
<Route path="/Pages/switzerland" element={<Switzerland />} />
<Route path="/switzerland-landing" element={<SwitzerlandLanding />} />
<Route path="/zurich-lucerne" element={<ZurichLucerneLanding />} />
<Route path="/interlaken" element={<InterlakenLanding />} />
<Route path="/swiss-alps" element={<SwissAlpsLanding />} />
<Route path="/luxury-switzerland" element={<LuxurySwitzerland />} />
<Route path="/Pages/hungary" element={<Hungary />} />
<Route path="/hungary-landing" element={<HungaryLanding />} />
<Route path="/budapest-landing" element={<BudapestLanding />} />
<Route path="/danube-cruise" element={<DanubeCruiseLanding />} />
<Route path='/luxury-hungary' element={<LuxuryHungaryLanding/>} />
<Route path="/Pages/poland" element={<Poland />} />
<Route path="/poland-landing" element={<PolandLanding />} />
<Route path="/Pages/manali" element={<Manali />} />
<Route path="/manali-landing" element={<ManaliLanding />} />
<Route path="/rohtang-landing" element={<RohtangLanding />} />
<Route path="/manali-adventure" element={<AdventureManaliLanding />} />
<Route path="/luxury-manali" element={<LuxuryManaliLanding />} />
<Route path="/Pages/shimla" element={<Shimla />} />
<Route path="/shimla-landing" element={<ShimlaLanding />} />
<Route path="/shimla-kufri" element={<ShimlaKufriLanding />} />
<Route path="/shimla-adventure" element={<ShimlaAdventureLanding />} />
<Route path="/luxury-shimla" element={<LuxuryShimlaLanding />} />
<Route path="/Pages/spiti" element={<Spiti />} />
<Route path="/spiti-landing" element={<SpitiLanding />} />
<Route path="/spiti-adventure" element={<SpitiAdventureLanding />} />
<Route path="/chandratal" element={<ChandratalLanding />} />
<Route path="/luxury-spiti" element={<LuxurySpitiLanding />} />
<Route path="/Pages/srinagar" element={<Srinagar />} />
<Route path="/srinagar-landing" element={<SrinagarLanding />} />
<Route path="/gulmarg" element={<GulmargLanding />} />
<Route path="/houseboat" element={<HouseboatSrinagarLanding />} />
<Route path="/luxury-kashmir" element={<LuxuryKashmirLanding />} />
<Route path="/Pages/gulmarg" element={<Gulmarg />} />
<Route path="/gulmarg-snow-adventure" element={<GulmargSnowAdventureLanding />} />
<Route path="/gulmarg-ski-experience" element={<GulmargSkiExperienceLanding />} />
<Route path="/luxury-gulmarg" element={<LuxuryGulmargTourLanding />} />
<Route path="/Pages/pahalgam" element={<Pahalgam />} />
<Route path="/pahalgam-landing" element={<PahalgamLanding/>} />
<Route path="/pahalgam-valley" element={<PahalgamValleyLanding/>} />
<Route path="/pahalgam-adventure" element={<PahalgamAdventureLanding/>} />
<Route path="/luxury-pahalgam" element={<LuxuryPahalgamLanding/>} />
<Route path="/Pages/ooty" element={<Ooty />} />
<Route path="/ooty-landing" element={<OotyLanding />} />
<Route path="/ooty-coonoor" element={<OotyCoonoorLanding />} />
<Route path="/ooty-adventure" element={<OotyAdventureLanding />} />
<Route path="/luxury-ooty" element={<LuxuryOotyLanding />} />
<Route path="/Pages/gangtok" element={<Gangtok />} />
<Route path="/gangtok-landing" element={<GangtokLanding />} />
<Route path="/gangtok-nathula" element={<GangtokNathulaLanding />} />
<Route path="/gangtok-adventure" element={<GangtokAdventureLanding />} />
<Route path="/luxury-gangtok" element={<LuxuryGangtokLanding />} />
<Route path="/Pages/guwahati" element={<Guwahati />} />
<Route path="/guwahati-landing" element={<GuwahatiLanding />} />
<Route path="/guwahati-shillong" element={<GuwahatiShillongLanding />} />
<Route path="/guwahati-adventure" element={<GuwahatiAdventureLanding />} />
<Route path="/luxury-guwahati" element={<LuxuryGuwahatiLanding />} />
<Route path="/Pages/jaipur" element={<Jaipur />} />
<Route path="/jaipur-landing" element={<JaipurLanding />} />
<Route path="/jaipur-udaipur" element={<JaipurUdaipurLanding />} />
<Route path="/jaipur-adventure" element={<JaipurAdventureLanding />} />
<Route path="/luxury-jaipur" element={<LuxuryJaipurLanding />} />
<Route path="/Pages/udaipur" element={<Udaipur />} />
<Route path="/udaipur-landing" element={<UdaipurLanding />} />
<Route path="/udaipur-mountabu" element={<UdaipurMountAbuLanding />} />
<Route path="/udaipur-adventure" element={<UdaipurAdventureLanding />} />
<Route path="/luxury-udaipur" element={<LuxuryUdaipurLanding />} />
<Route path="/Pages/northgoa" element={<NorthGoa />} />
<Route path="/northgoa-landing" element={<NorthGoaLanding />} />
<Route path="/northgoa-party" element={<NorthGoaPartyLanding />} />
<Route path="/northgoa-adventure" element={<NorthGoaAdventureLanding />} />
<Route path="/luxury-northgoa" element={<LuxuryNorthGoaLanding />} />
<Route path="/Pages/southgoa" element={<SouthGoa />} />
<Route path="/southgoa-landing" element={<SouthGoaLanding />} />
<Route path="/southgoa-escape" element={<SouthGoaEscapeLanding />} />
<Route path="/southgoa-adventure" element={<SouthGoaAdventureLanding />} />
<Route path="/luxury-southgoa" element={<LuxurySouthGoaLanding />} />
<Route path="/karnataka-tours" element={<KarnatakaTours />} />
<Route path="/bangalore-landing" element={<BangaloreLanding />} />
<Route path="/mysore-landing" element={<MysoreLanding />} />
<Route path="/coorg-landing" element={<CoorgLanding />} />
<Route path="/hampi-landing" element={<HampiLanding />} />
<Route path="/tamilnadu-tours" element={<TamilNaduTours />} />
<Route path="/chennai-landing" element={<ChennaiLanding />} />
<Route path="/rameswaram-madurai" element={<RameswaramMaduraiLanding />} />
<Route path="/temple-landing" element={<TempleLanding />} />
<Route path="/kerala-tours" element={<Kerala />} />
<Route path="/munnar-landing" element={<KeralaTourMunnar />} />
<Route path="/kenya" element={<KenyaTours />} />
<Route path="/kenya-UltimateSafariCircuit" element={<KenyaUltimateSafariCircuit />} />
<Route path="/kenya-WildEscapade" element={<KenyaWildEscapade/>} />
<Route path="/kenya-WildSerenade" element={<KenyaWildSerenade />} />
<Route path="/kenya-EchoesOfTheWild" element={<KenyaEchoesOfTheWild />} />
<Route path="/kenya-AmboseliWildTrails" element={<KenyaAmboseliWildTrails />} />
<Route path="/kenya-PredatorsAndPinkFeathers" element={<KenyaPredatorsAndPinkFeathers />} />
<Route path="/kenya-IntoTheHeartOfTheWild" element={<KenyaIntoTheHeartOfTheWild />} />
<Route path="/austria-landing" element={<AustriaLanding />} />
<Route path='/austria-landing-2' element={<AustriaLanding2 />} />
<Route path='/austria-landing-3' element={<AustriaLanding3 />} />
<Route path='/austria-landing-4' element={<AustriaLanding4 />} />
<Route path='/austria-landing-5' element={<AustriaLanding5 />} />
<Route path='/austria-landing-6' element={<AustriaLanding6 />} />
<Route path="/austria-landing-7" element={<AustriaLanding7 />} /> 
<Route path="/austria-landing-8" element={<AustriaLanding8 />} />
<Route path="/austria-landing-9" element={<AustriaLanding9 />} />
<Route path='/austria-landing-10' element={<AustriaLanding10 />} />
<Route path="/belgium-landing" element={<BelgiumLanding />} />
<Route path="/belgium-landing-1" element={<Belgium1 />} />
<Route path='/belgium-landing-2' element={<Belgium2 />} />
<Route path='/belgium-landing-3' element={<Belgium3 />} />
<Route path="/croatia-landing" element={<CroatiaLanding />} />
<Route path='/croatia-landing-1' element={<Croatia1 />} />
<Route path='/croatia-landing-2' element={<Croatia2 />} />
<Route path='/croatia-landing-3' element={<Croatia3 />} />
<Route path='/croatia-landing-4' element={<Croatia4 />} />
<Route path='/croatia-landing-5' element={<Croatia5 />} />
<Route path='/portugal-landing' element={<EuropePortugal />} />
<Route path='/portugal-landing-1' element={<Portugal1 />} />
<Route path='/portugal-landing-2' element={<Portugal2 />} />
<Route path='/italy-landing1' element={<EuropeItaly />} />
<Route path='/italy-landing2' element={<Italy1 />} />
<Route path='/italy-landing3' element={<Italy2 />} />
<Route path='/italy-landing4' element={<Italy3 />} />
<Route path='/italy-landing5' element={<Italy4 />} />
<Route path='/poland-landing1' element={<EuropePoland />} />
<Route path='/poland-landing2' element={<Poland1 />} />
<Route path='/poland-landing3' element={<Poland2 />} />
<Route path='/hungary-landing1' element={<EuropeHungary />} />
<Route path='/hungary-landing2' element={<Hungary1 />} />
<Route path='/hungary-landing3' element={<Hungary2 />} />
<Route path='/hungary-landing4' element={<Hungary3 />} />
<Route path='/hungary-landing5' element={<Hungary4 />} />
<Route path='/hungary-landing6' element={<Hungary5 />} />
<Route path='/denmark-landing1' element={<EuropeDenmark />} />
<Route path='/denmark-landing2' element={<Denmark1 />} />
<Route path='/denmark-landing3' element={<Denmark2 />} />
<Route path='/denmark-landing4' element={<Denmark3 />} />
<Route path='/denmark-landing5' element={<Denmark4 />} />
<Route path='/denmark-landing6' element={<Denmark5 />} />
<Route path='/germany-landing1' element={<EuropeGermany />} />
<Route path='/germany-landing2' element={<Germany1 />} />
<Route path='/germany-landing3' element={<Germany2 />} />
<Route path='/germany-landing4' element={<Germany3 />} />
<Route path='/germany-landing5' element={<Germany4 />} />
<Route path='/germany-landing6' element={<Germany5 />} />
<Route path='/germany-landing7' element={<Germany6 /> } />
<Route path='/germany-landing8' element={<Germany7 />} />
<Route path='/germany-landing9' element={<Germany8 />} />
<Route path='/germany-landing10' element={<Germany9 />} />
<Route path='/germany-landing11' element={<Germany10 />} />
<Route path='/france-landing1' element={<EuropeFrance />} />
<Route path='/france-landing2' element={<France1 />} />
<Route path='/france-landing3' element={<France2 />} />
<Route path='/france-landing4' element={<France3 />} />
<Route path='/france-landing5' element={<France4 />} />
<Route path='/france-landing6' element={<France5 />} />
<Route path='/Pages/vietnam' element={<Vietnam />} />
<Route path="/vietnam-Tour" element={<Vietnam1 />} />
<Route path="/Northen-vietnam" element={<Vietnam2 />} />
<Route path="/northen-vietnam" element={<Vietnam3 />} />
<Route path="/Southern-Vietnam" element={<Vietnam4 />} />
<Route path="/southern-vietnam" element={<Vietnam5 />} />
<Route path="/Taste of-vietnam" element={<Vietnam6/>} />
<Route path="/Vietnam-Cambodia" element={<Vietnam7/>} />
<Route path="/Vietnam-Glances" element={<Vietnam8 />} />
<Route path="/Amazing-Vietnam" element={<Vietnam9 />} />
<Route path="/Cambodia- Explore Siam Reap" element={<Vietnam10 />} />
<Route path="/Central Vietnam" element={<Vietnam11 />} />
<Route path="/Vietnam-Central" element={<Vietnam12 />} />
<Route path="/Essence-Vietnam" element={<Vietnam13 />} />
<Route path="/Highlights-Vietnam" element={<Vietnam14 />} />
<Route path="/Laos-Escape" element={<Vietnam15 />} />
<Route path="/Switzerland-landing1" element={<Switzerland/>} />
<Route path="/Swiss-France" element={<Switzerland1 />} />
<Route path="/Munich-Zurich" element={<Switzerland2 />} />
<Route path="/Best-Vienna" element={<Switzerland3 />} />
<Route path="/vegas-grand-canyon" element={<Switzerland4 />} />
<Route path="/Zurich-Bern" element={<Switzerland5/>} />
<Route path="/Explore-Genevaam" element={<Switzerland6/>} />
<Route path="/Glimpses-Switzerland" element={<Switzerland7/>} />
<Route path="/Rhine-fall" element={<Switzerland8 />} />
<Route path="/Scenic-Switzerland Discovery" element={<Switzerland9/>} />
<Route path="/Swiss-Panorama" element={<Switzerland10 />} />
<Route path="/Best-Engelberg" element={<Switzerland11 />} />
<Route path="/Zurich’s-Charm" element={<Switzerland12 />} />
<Route path="/England-landing1" element={<England />} />
<Route path="/UK-Escape" element={<England1 />} />
<Route path="/Cardiff-Manchester" element={<England2 />} />
<Route path="/London-Newport" element={<England3 />} />
<Route path="/Grand-Britain" element={<England4 />} />
<Route path="/Classic-UK" element={<England5 />} />
<Route path="/Classic-Europe" element={<England6 />} />
<Route path="/classic-uK" element={<England7 />} />
<Route path="/Grand-Britain" element={<England8 />} />
<Route path="/London-Ireland" element={<England9 />} />
<Route path="/Grand-Discovery" element={<England10 />} />
<Route path="/Spain-landing1" element={<Spain />} />
<Route path="/Madrid-Ibiza" element={<Spain1 />} />
<Route path="/Best-Barcelona" element={<Spain2 />} />
<Route path="/Seville-Madrid" element={<Spain3 />} />
<Route path="/Ibiza-Madrid" element={<Spain4 />} />
<Route path="/Barcelona-Madrid" element={<Spain5 />} />
<Route path="/Malaga-Seville" element={<Spain6 />} />
<Route path="/Seville-Madrid" element={<Spain7 />} />
<Route path="/Barcelona-Andalusian" element={<Spain8 />} />
<Route path="/Lisbon-Porto" element={<Spain9 />} />
<Route path="/Cities-Portugal’s" element={<Spain10 />} />
<Route path="/Riviera-Delight" element={<Spain11 />} />
<Route path="/Scotland-landing1" element={<Scotland />} />
<Route path="/UK-Escape" element={<Scotland1 />} />
<Route path="/Edinburgh-Glasgow" element={<Scotland2 />} />
<Route path="/England-Scotland" element={<Scotland3 />} />
<Route path="/Grand-Britain" element={<Scotland4 />} />
<Route path="/Glasgow-Inverness" element={<Scotland5 />} />
<Route path="/Edinburgh-Glasgow" element={<Scotland6 />} />
<Route path="/Finland-landing1" element={<Finland />} />
<Route path="Finland-Sweden" element={<Finland1 />} />
<Route path="/Capitals-Express" element={<Finland2 />} />
<Route path="/Getaway-Plus" element={<Finland3 />} />
<Route path="/Mesmerizing-Finland" element={<Finland4 />} />
<Route path="/Greece-landing1" element={<Greece />} />
<Route path="/Athens-Greece" element={<Greece1 />} />
<Route path="/Athens-Mykonos" element={<Greece2 />} />
<Route path="Glimpses-Greece" element={<Greece3 />} />
<Route path="/Best-Barcelona" element={<Greece4 />} />
<Route path="/Barcelona-Madridd" element={<Greece5 />} />
<Route path="/Valencia-Malaga" element={<Greece6 />} />
<Route path="/Seville-Madrid" element={<Greece7 />} />
<Route path="/Iceland-landing1" element={<Iceland />} />
<Route path="/Best-ICELAND" element={<Iceland1/>} />
<Route path="/Iceland-Akureyri" element={<Iceland2/>} />

    </Routes> 
    </Router>
    </HelmetProvider>
  );
}

export default App;