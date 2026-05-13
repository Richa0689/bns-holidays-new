import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; 
import SEO from "./components/SEO";

import Header from './components/Header';
import VideoSlider from './components/VideoSlider';
import TrendingDestinations from './components/TrendingDestinations';
import IndiaDestinations from './components/IndiaDestinations';
import Adventures from './components/Adventures';
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
import Germany from './Pages/Germany';
import GermanyLanding from './Pages/GermanyLanding';
import BerlinMunichLanding from './Pages/BerlinMunichLanding';
import BavarianAlpsLanding from "./Pages/BavarianAlpsLanding";
import LuxuryGermanyLanding from "./Pages/LuxuryGermanyLanding";
import Italy from "./Pages/Italy";
import Italypage from "./Pages/Italypage";
import RomeVeniceLanding from "./Pages/RomeVeniceLanding";
import FlorenceTourLanding from "./Pages/FlorenceTourLanding";
import AmalfiCoastLanding from "./Pages/AmalfiCoastLanding";
import LuxuryItalyLanding from "./Pages/LuxuryItalyLanding";
import Switzerland from "./Pages/Switzerland";
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
              <IndiaDestinations />
              <Adventures />
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
<Route path="/Pages/germany" element={<Germany />} />
<Route path="/germany-landing" element={<GermanyLanding />} />
<Route path="/berlin-munich" element={<BerlinMunichLanding />} />
<Route path="/bavarian-alps" element={<BavarianAlpsLanding />} />
<Route path="/luxury-germany" element={<LuxuryGermanyLanding />} />
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
      </Routes> 
    </Router>
    </HelmetProvider>
  );
}

export default App;