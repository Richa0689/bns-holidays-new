
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const seoData = {
  "/": {
    title: "Best Travel Agency in Pune & PCMC | BNS Holidays",
    description: "Plan domestic and international holidays with BNS Holidays, a travel agency serving Pune and Pimpri-Chinchwad. Explore tour packages and plan your next trip.",
  },
  "/packages": { title: "Holiday Tour Packages in India & Worldwide | BNS Holidays", description: "Explore guided holiday packages, destination tours and custom trips across India and worldwide with BNS Holidays." },
  "/hotels": { title: "Find Hotels for Your Holiday | BNS Holidays", description: "Search hotels for your next trip with BNS Holidays and find a stay that suits your destination and travel dates." },
  "/flights": { title: "Search Flights for Your Trip | BNS Holidays", description: "Compare flight options for one-way, round-trip and multi-city travel with BNS Holidays." },
  "/villa": { title: "Villa Stays | BNS Holidays", description: "Discover villa stays for your next holiday with BNS Holidays." },
  "/visa": { title: "Visa Services | BNS Holidays", description: "Visa assistance services with BNS Holidays." },
  "/destinations/europe": { title: "Europe Tour Packages | BNS Holidays", description: "Best Europe tour packages. France, Italy, Switzerland and more." },
  "/destinations/australia": { title: "Australia Tour Packages | BNS Holidays", description: "Best Australia tour packages. Sydney, Melbourne, Gold Coast and more." },
  "/destinations/canada": { title: "Canada Tour Packages | BNS Holidays", description: "Best Canada tour packages. Toronto, Vancouver, Niagara Falls and more." },
  "/destinations/usa": { title: "USA Tour Packages | BNS Holidays", description: "Best USA tour packages. New York, California, Las Vegas and more." },
  "/destinations/ny-washington": { title: "New York & Washington Tour | BNS Holidays", description: "Explore New York and Washington DC with BNS Holidays." },
  "/destinations/california": { title: "California Tour Package | BNS Holidays", description: "Best California tour packages with hotel, meals & sightseeing." },
  "/destinations/vegas-grand": { title: "Vegas & Grand Canyon Tour | BNS Holidays", description: "Las Vegas and Grand Canyon tour packages." },
  "/destinations/luxury-usa": { title: "Luxury USA Tour | BNS Holidays", description: "Premium luxury USA tour packages. Book now." },
  "/destinations/australia-tours": { title: "Best Australia Tours | BNS Holidays", description: "Book Australia tour packages with BNS Holidays." },
  "/destinations/sydney-melbourne": { title: "Sydney & Melbourne Tour | BNS Holidays", description: "Explore Sydney and Melbourne with BNS Holidays." },
  "/destinations/gold-coast": { title: "Gold Coast Tour | BNS Holidays", description: "Gold Coast tour packages with BNS Holidays." },
  "/destinations/great-ocean": { title: "Great Ocean Road Tour | BNS Holidays", description: "Great Ocean Road tour packages. Book now." },
  "/destinations/luxury-aus": { title: "Luxury Australia Tour | BNS Holidays", description: "Premium luxury Australia tour packages." },
  "/destinations/canada-tours": { title: "Best Canada Tours | BNS Holidays", description: "Book Canada tour packages with BNS Holidays." },
  "/destinations/toronto-niagara": { title: "Toronto & Niagara Tour | BNS Holidays", description: "Toronto and Niagara Falls tour packages." },
  "/destinations/vancouver-victoria": { title: "Vancouver & Victoria Tour | BNS Holidays", description: "Vancouver and Victoria tour packages." },
  "/destinations/rocky-tour": { title: "Rocky Mountain Tour Canada | BNS Holidays", description: "Canadian Rockies tour packages. Book now." },
  "/destinations/luxury-canada": { title: "Luxury Canada Tour | BNS Holidays", description: "Premium luxury Canada tour packages." },
  "/destinations/europe-tours": { title: "Best Europe Tours | BNS Holidays", description: "Book Europe tour packages with BNS Holidays." },
  "/destinations/austria": { title: "Austria & Central Europe Tour | BNS Holidays", description: "Explore Slovenia, Austria and Germany on the Scenic Europe Escape tour." },
  "/destinations/budapest-vienna-prague-7-day": { title: "Budapest, Vienna & Prague 7-Day Tour | BNS Holidays", description: "Explore Budapest, Vienna and Prague on a 7-day Central Europe tour." },
  "/destinations/budapest-vienna-prague-9-day": { title: "Budapest, Vienna & Prague 9-Day Tour | BNS Holidays", description: "Enjoy an extended 9-day tour of Budapest, Vienna and Prague." },
  "/destinations/vienna-munich-zurich-7-day": { title: "Vienna, Munich & Zurich 7-Day Tour | BNS Holidays", description: "Discover Vienna, Munich and Zurich on a 7-day European tour." },
  "/destinations/munich-innsbruck-salzburg-vienna-9-day": { title: "Munich, Innsbruck, Salzburg & Vienna Tour | BNS Holidays", description: "Explore Munich, Innsbruck, Salzburg and Vienna on a 9-day tour." },
  "/destinations/vienna-munich-zurich-8-day": { title: "Vienna, Munich & Zurich 8-Day Tour | BNS Holidays", description: "Discover Vienna, Munich and Zurich on an 8-day European tour." },
  "/destinations/zurich-innsbruck-salzburg-7-day": { title: "Zurich, Innsbruck & Salzburg 7-Day Tour | BNS Holidays", description: "Travel through Zurich, Innsbruck and Salzburg on a 7-day tour." },
  "/destinations/vienna-budapest-prague-7-day": { title: "Vienna, Budapest & Prague 7-Day Tour | BNS Holidays", description: "Visit Vienna, Budapest and Prague on a 7-day Central Europe trip." },
  "/destinations/munich-innsbruck-alps-7-day": { title: "Munich to Innsbruck Alps 7-Day Tour | BNS Holidays", description: "Journey from Munich to Innsbruck and explore the scenic Alps." },
  "/destinations/medieval-streets-imperial-palaces-10-day": { title: "Medieval Streets & Imperial Palaces 10-Day Tour | BNS Holidays", description: "Experience historic European cities and imperial palaces on a 10-day tour." },
  "/destinations/france-swiss": { title: "France & Switzerland Tour | BNS Holidays", description: "France and Switzerland combo tour packages." },
  "/destinations/italy-tour": { title: "Italy Tour Package | BNS Holidays", description: "Best Italy tour packages with BNS Holidays." },
  "/destinations/eastern-europe": { title: "Eastern Europe Tour | BNS Holidays", description: "Eastern Europe tour packages. Book now." },
  "/destinations/luxury-europe": { title: "Luxury Europe Tour | BNS Holidays", description: "Premium luxury Europe tour packages." },
  "/destinations/windmills-to-eiffel": { title: "Windmills to the Eiffel Tower Tour | BNS Holidays", description: "Explore Amsterdam, Brussels and Paris on this 7-day Netherlands, Belgium and France tour." },
  "/destinations/amsterdam-paris-escape": { title: "Amsterdam to Paris Escape | BNS Holidays", description: "Discover Amsterdam, Brussels, Ghent, Bruges and Paris on this 9-day Europe tour." },
  "/destinations/brussels-antwerp-rotterdam": { title: "Brussels, Antwerp & Rotterdam Tour | BNS Holidays", description: "Explore Brussels and Antwerp in Belgium and Rotterdam in the Netherlands on a 7-day tour." },
  "/destinations/central-europe-budapest-zagreb-ljubljana": { title: "Budapest, Zagreb & Ljubljana Tour | BNS Holidays", description: "Explore Budapest, Zagreb and Ljubljana on an 8-day Central Europe tour." },
  "/destinations/croatia-coast-and-islands": { title: "Croatia Coast & Islands Tour | BNS Holidays", description: "Discover Dubrovnik, Split, Zagreb and Zadar on a Croatia coast and islands tour." },
  "/destinations/two-cities-one-coast-croatia": { title: "Dubrovnik & Split Tour | BNS Holidays", description: "Explore Dubrovnik and Split on a 5-day Croatia coastal tour." },
  "/destinations/two-capitals-one-journey-croatia-slovenia": { title: "Zagreb & Ljubljana Tour | BNS Holidays", description: "Visit Zagreb and Ljubljana on a 5-day Croatia and Slovenia tour." },
  "/destinations/croatia-in-a-week-zagreb": { title: "Croatia in a Week Tour | BNS Holidays", description: "Explore Zagreb, Plitvice Lakes, Zadar, Split, Hvar and Dubrovnik on a 7-day tour." },
  "/destinations/new-zealand": { title: "New Zealand Tour Packages | BNS Holidays", description: "Best New Zealand tour packages with BNS Holidays." },
  "/destinations/new-zealand-tours": { title: "Best New Zealand Tours | BNS Holidays", description: "Book New Zealand tour packages with BNS Holidays." },
  "/destinations/thailand": { title: "Thailand Tour Packages | BNS Holidays", description: "Best Thailand tour packages. Bangkok, Phuket, Krabi and more." },
  "/destinations/asia": { title: "Asia Tour Packages | BNS Holidays", description: "Explore holiday packages across Thailand, Singapore, Malaysia, Bali and Vietnam with BNS Holidays." },
  "/destinations/singapore": { title: "Singapore Tour Packages | BNS Holidays", description: "Best Singapore tour packages with BNS Holidays." },
  "/destinations/thailand-tours": { title: "Best Thailand Tours | BNS Holidays", description: "Book Thailand tour packages with BNS Holidays." },
  "/destinations/bangkok-pattaya": { title: "Bangkok & Pattaya Tour | BNS Holidays", description: "Bangkok and Pattaya tour packages." },
  "/destinations/phuket-krabi": { title: "Phuket & Krabi Tour | BNS Holidays", description: "Phuket and Krabi tour packages." },
  "/destinations/thailand-luxury": { title: "Luxury Thailand Tour | BNS Holidays", description: "Premium luxury Thailand tour packages." },
  "/destinations/best-of-singapore": { title: "Best of Singapore Tour | BNS Holidays", description: "Explore the best of Singapore with BNS Holidays." },
  "/destinations/singapore-sentosa": { title: "Singapore Sentosa Tour | BNS Holidays", description: "Singapore Sentosa Island tour packages." },
  "/destinations/universal-singapore": { title: "Universal Studios Singapore | BNS Holidays", description: "Universal Studios Singapore tour packages." },
  "/destinations/luxury-singapore": { title: "Luxury Singapore Tour | BNS Holidays", description: "Premium luxury Singapore tour packages." },
  "/destinations/malaysia": { title: "Malaysia Tour Packages | BNS Holidays", description: "Best Malaysia tour packages. KL, Langkawi, Penang and more." },
  "/destinations/malaysia-tours": { title: "Best Malaysia Tours | BNS Holidays", description: "Book Malaysia tour packages with BNS Holidays." },
  "/destinations/kl-genting": { title: "KL & Genting Tour | BNS Holidays", description: "Kuala Lumpur and Genting tour packages." },
  "/destinations/langkawi": { title: "Langkawi Tour | BNS Holidays", description: "Langkawi island tour packages." },
  "/destinations/penang": { title: "Penang Tour | BNS Holidays", description: "Penang tour packages with BNS Holidays." },
  "/destinations/luxury-malaysia": { title: "Luxury Malaysia Tour | BNS Holidays", description: "Premium luxury Malaysia tour packages." },
  "/destinations/bali": { title: "Bali Tour Packages | BNS Holidays", description: "Best Bali tour packages. Ubud, Kuta, beaches and more." },
  "/destinations/bali-tours": { title: "Best Bali Tours | BNS Holidays", description: "Book Bali tour packages with BNS Holidays." },
  "/destinations/ubud-kuta": { title: "Ubud & Kuta Bali Tour | BNS Holidays", description: "Ubud and Kuta Bali tour packages." },
  "/destinations/bali-beach": { title: "Bali Beach Tour | BNS Holidays", description: "Bali beach holiday packages." },
  "/destinations/bali-adventure": { title: "Bali Adventure Tour | BNS Holidays", description: "Bali adventure tour packages." },
  "/destinations/luxury-bali": { title: "Luxury Bali Tour | BNS Holidays", description: "Premium luxury Bali tour packages." },
  "/destinations/dubai": { title: "Dubai Tour Packages | BNS Holidays", description: "Best Dubai tour packages. Desert safari, Burj Khalifa and more." },
  "/destinations/dubai-tours": { title: "Best Dubai Tours | BNS Holidays", description: "Book Dubai tour packages with BNS Holidays." },
  "/destinations/dubai-abu": { title: "Dubai & Abu Dhabi Tour | BNS Holidays", description: "Dubai and Abu Dhabi combo tour packages." },
  "/destinations/desert-safari": { title: "Desert Safari Dubai | BNS Holidays", description: "Dubai desert safari tour packages." },
  "/destinations/luxury-dubai": { title: "Luxury Dubai Tour | BNS Holidays", description: "Premium luxury Dubai tour packages." },
  "/destinations/abu-dhabi": { title: "Abu Dhabi Tour Packages | BNS Holidays", description: "Best Abu Dhabi tour packages." },
  "/destinations/abu": { title: "Best Abu Dhabi Tours | BNS Holidays", description: "Book Abu Dhabi tour packages." },
  "/destinations/abu-city": { title: "Abu Dhabi City Tour | BNS Holidays", description: "Abu Dhabi city tour packages." },
  "/destinations/abu-culture": { title: "Abu Dhabi Cultural Tour | BNS Holidays", description: "Abu Dhabi cultural tour packages." },
  "/destinations/abu-ferrari": { title: "Ferrari World Abu Dhabi | BNS Holidays", description: "Ferrari World Abu Dhabi tour packages." },
  "/destinations/abu-luxury": { title: "Luxury Abu Dhabi Tour | BNS Holidays", description: "Premium luxury Abu Dhabi tour packages." },
  "/destinations/france": { title: "France Tour Packages | BNS Holidays", description: "Best France tour packages. Paris, Nice, French Riviera and more." },
  "/destinations/france-tours": { title: "Best France Tours | BNS Holidays", description: "Book France tour packages with BNS Holidays." },
  "/destinations/paris-nice": { title: "Paris & Nice Tour | BNS Holidays", description: "Paris and Nice tour packages." },
  "/destinations/french-riviera": { title: "French Riviera Tour | BNS Holidays", description: "French Riviera tour packages." },
  "/destinations/luxury-france": { title: "Luxury France Tour | BNS Holidays", description: "Premium luxury France tour packages." },
  "/destinations/germany-itineraries": { title: "Germany Tour Packages | BNS Holidays", description: "Best Germany tour packages. Berlin, Munich, Bavarian Alps and more." },
  "/berlin-munich": { title: "Berlin & Munich Tour | BNS Holidays", description: "Berlin and Munich tour packages." },
  "/bavarian-alps": { title: "Bavarian Alps Tour | BNS Holidays", description: "Bavarian Alps tour packages." },
  "/luxury-germany": { title: "Luxury Germany Tour | BNS Holidays", description: "Premium luxury Germany tour packages." },
  "/destinations/italy": { title: "Italy Tour Packages | BNS Holidays", description: "Best Italy tour packages. Rome, Venice, Florence and more." },
  "/destinations/italy-tours": { title: "Best Italy Tours | BNS Holidays", description: "Book Italy tour packages with BNS Holidays." },
  "/destinations/rome-venice": { title: "Rome & Venice Tour | BNS Holidays", description: "Rome and Venice tour packages." },
  "/destinations/florence-tour": { title: "Florence Tour | BNS Holidays", description: "Florence tour packages." },
  "/destinations/amalfi-coast": { title: "Amalfi Coast Tour | BNS Holidays", description: "Amalfi Coast tour packages." },
  "/destinations/luxury-italy": { title: "Luxury Italy Tour | BNS Holidays", description: "Premium luxury Italy tour packages." },
  "/destinations/switzerland": { title: "Switzerland Tour Packages | BNS Holidays", description: "Best Switzerland tour packages. Zurich, Lucerne, Swiss Alps and more." },
  "/destinations/switzerland-tours": { title: "Best Switzerland Tours | BNS Holidays", description: "Book Switzerland tour packages." },
  "/destinations/zurich-lucerne": { title: "Zurich & Lucerne Tour | BNS Holidays", description: "Zurich and Lucerne tour packages." },
  "/destinations/interlaken": { title: "Interlaken Tour | BNS Holidays", description: "Interlaken tour packages." },
  "/destinations/swiss-alps": { title: "Swiss Alps Tour | BNS Holidays", description: "Swiss Alps tour packages." },
  "/destinations/luxury-switzerland": { title: "Luxury Switzerland Tour | BNS Holidays", description: "Premium luxury Switzerland tour packages." },
  "/destinations/hungary": { title: "Hungary Tour Packages | BNS Holidays", description: "Best Hungary tour packages. Budapest, Danube Cruise and more." },
  "/destinations/hungary-tours": { title: "Best Hungary Tours | BNS Holidays", description: "Book Hungary tour packages." },
  "/destinations/budapest": { title: "Budapest Tour | BNS Holidays", description: "Budapest tour packages." },
  "/destinations/danube-cruise": { title: "Danube Cruise Tour | BNS Holidays", description: "Danube Cruise tour packages." },
  "/destinations/luxury-hungary": { title: "Luxury Hungary Tour | BNS Holidays", description: "Premium luxury Hungary tour packages." },
  "/destinations/poland": { title: "Poland Tour Packages | BNS Holidays", description: "Best Poland tour packages with BNS Holidays." },
  "/destinations/poland-tours": { title: "Best Poland Tours | BNS Holidays", description: "Book Poland tour packages." },
  "/destinations/manali": { title: "Manali Tour Packages | BNS Holidays", description: "Best Manali tour packages. Rohtang Pass, adventure and more." },
  "/destinations/manali-tours": { title: "Best Manali Tours | BNS Holidays", description: "Book Manali tour packages." },
  "/destinations/rohtang": { title: "Rohtang Pass Tour | BNS Holidays", description: "Rohtang Pass tour packages." },
  "/destinations/manali-adventure": { title: "Manali Adventure Tour | BNS Holidays", description: "Manali adventure tour packages." },
  "/destinations/luxury-manali": { title: "Luxury Manali Tour | BNS Holidays", description: "Premium luxury Manali tour packages." },
  "/destinations/shimla": { title: "Shimla Tour Packages | BNS Holidays", description: "Best Shimla tour packages. Kufri, adventure and more." },
  "/destinations/shimla-tours": { title: "Best Shimla Tours | BNS Holidays", description: "Book Shimla tour packages." },
  "/destinations/shimla-kufri": { title: "Shimla & Kufri Tour | BNS Holidays", description: "Shimla and Kufri tour packages." },
  "/destinations/shimla-adventure": { title: "Shimla Adventure Tour | BNS Holidays", description: "Shimla adventure tour packages." },
  "/destinations/luxury-shimla": { title: "Luxury Shimla Tour | BNS Holidays", description: "Premium luxury Shimla tour packages." },
  "/destinations/spiti": { title: "Spiti Valley Tour Packages | BNS Holidays", description: "Best Spiti Valley tour packages." },
  "/destinations/spiti-tours": { title: "Best Spiti Tours | BNS Holidays", description: "Book Spiti Valley tour packages." },
  "/destinations/spiti-adventure": { title: "Spiti Adventure Tour | BNS Holidays", description: "Spiti Valley adventure tour packages." },
  "/destinations/chandratal": { title: "Chandratal Lake Tour | BNS Holidays", description: "Chandratal Lake tour packages." },
  "/destinations/luxury-spiti": { title: "Luxury Spiti Tour | BNS Holidays", description: "Premium luxury Spiti Valley tour packages." },
  "/destinations/srinagar": { title: "Srinagar Tour Packages | BNS Holidays", description: "Best Srinagar tour packages. Houseboat, Gulmarg and more." },
  "/destinations/srinagar-tours": { title: "Best Srinagar Tours | BNS Holidays", description: "Book Srinagar tour packages." },
  "/destinations/gulmarg": { title: "Gulmarg Tour | BNS Holidays", description: "Gulmarg tour packages." },
  "/destinations/houseboat": { title: "Houseboat Srinagar Tour | BNS Holidays", description: "Srinagar houseboat tour packages." },
  "/destinations/luxury-kashmir": { title: "Luxury Kashmir Tour | BNS Holidays", description: "Premium luxury Kashmir tour packages." },
  "/destinations/gulmarg-destination": { title: "Gulmarg Tour Packages | BNS Holidays", description: "Best Gulmarg tour packages. Skiing, snow adventure and more." },
  "/destinations/gulmarg-snow-adventure": { title: "Gulmarg Snow Adventure | BNS Holidays", description: "Gulmarg snow adventure tour packages." },
  "/destinations/gulmarg-ski-experience": { title: "Gulmarg Ski Experience | BNS Holidays", description: "Gulmarg skiing experience packages." },
  "/destinations/luxury-gulmarg": { title: "Luxury Gulmarg Tour | BNS Holidays", description: "Premium luxury Gulmarg tour packages." },
  "/destinations/pahalgam": { title: "Pahalgam Tour Packages | BNS Holidays", description: "Best Pahalgam tour packages." },
  "/destinations/pahalgam-tours": { title: "Best Pahalgam Tours | BNS Holidays", description: "Book Pahalgam tour packages." },
  "/destinations/pahalgam-valley": { title: "Pahalgam Valley Tour | BNS Holidays", description: "Pahalgam valley tour packages." },
  "/destinations/pahalgam-adventure": { title: "Pahalgam Adventure Tour | BNS Holidays", description: "Pahalgam adventure tour packages." },
  "/destinations/luxury-pahalgam": { title: "Luxury Pahalgam Tour | BNS Holidays", description: "Premium luxury Pahalgam tour packages." },
  "/destinations/munnar": { title: "Best Munnar Tours | BNS Holidays", description: "Book Munnar tour packages." },
  "/munnar-alleppey": { title: "Munnar & Alleppey Tour | BNS Holidays", description: "Munnar and Alleppey combo tour packages." },
  "/munnar-adventure": { title: "Munnar Adventure Tour | BNS Holidays", description: "Munnar adventure tour packages." },
  "/luxury-munnar": { title: "Luxury Munnar Tour | BNS Holidays", description: "Premium luxury Munnar tour packages." },
  "/destinations/alleppey": { title: "Alleppey Tour Packages | BNS Holidays", description: "Best Alleppey houseboat tour packages." },
  "/houseboat-alleppey": { title: "Alleppey Houseboat Tour | BNS Holidays", description: "Alleppey houseboat tour packages." },
  "/alleppey-kumarakom": { title: "Alleppey & Kumarakom Tour | BNS Holidays", description: "Alleppey and Kumarakom tour packages." },
  "/luxury-alleppey": { title: "Luxury Alleppey Tour | BNS Holidays", description: "Premium luxury Alleppey tour packages." },
  "/destinations/kochi": { title: "Kochi Tour Packages | BNS Holidays", description: "Best Kochi tour packages." },
  "/kochi-munnar": { title: "Kochi & Munnar Tour | BNS Holidays", description: "Kochi and Munnar combo tour packages." },
  "/kochi-cultural": { title: "Kochi Cultural Tour | BNS Holidays", description: "Kochi cultural tour packages." },
  "/luxury-kochi": { title: "Luxury Kochi Tour | BNS Holidays", description: "Premium luxury Kochi tour packages." },
  "/destinations/ooty": { title: "Ooty Tour Packages | BNS Holidays", description: "Best Ooty tour packages. Coonoor, adventure and more." },
  "/destinations/ooty-tours": { title: "Best Ooty Tours | BNS Holidays", description: "Book Ooty tour packages." },
  "/destinations/ooty-coonoor": { title: "Ooty & Coonoor Tour | BNS Holidays", description: "Ooty and Coonoor tour packages." },
  "/destinations/ooty-adventure": { title: "Ooty Adventure Tour | BNS Holidays", description: "Ooty adventure tour packages." },
  "/destinations/luxury-ooty": { title: "Luxury Ooty Tour | BNS Holidays", description: "Premium luxury Ooty tour packages." },
  "/destinations/gangtok": { title: "Gangtok Tour Packages | BNS Holidays", description: "Best Gangtok tour packages. Nathula Pass, adventure and more." },
  "/destinations/gangtok-tours": { title: "Best Gangtok Tours | BNS Holidays", description: "Book Gangtok tour packages." },
  "/destinations/gangtok-nathula": { title: "Gangtok & Nathula Tour | BNS Holidays", description: "Gangtok and Nathula Pass tour packages." },
  "/destinations/gangtok-adventure": { title: "Gangtok Adventure Tour | BNS Holidays", description: "Gangtok adventure tour packages." },
  "/destinations/luxury-gangtok": { title: "Luxury Gangtok Tour | BNS Holidays", description: "Premium luxury Gangtok tour packages." },
  "/destinations/guwahati": { title: "Guwahati Tour Packages | BNS Holidays", description: "Best Guwahati tour packages. Shillong, adventure and more." },
  "/destinations/guwahati-tours": { title: "Best Guwahati Tours | BNS Holidays", description: "Book Guwahati tour packages." },
  "/destinations/guwahati-shillong": { title: "Guwahati & Shillong Tour | BNS Holidays", description: "Guwahati and Shillong tour packages." },
  "/destinations/guwahati-adventure": { title: "Guwahati Adventure Tour | BNS Holidays", description: "Guwahati adventure tour packages." },
  "/destinations/luxury-guwahati": { title: "Luxury Guwahati Tour | BNS Holidays", description: "Premium luxury Guwahati tour packages." },
  "/destinations/jaipur": { title: "Jaipur Tour Packages | BNS Holidays", description: "Best Jaipur tour packages. Udaipur, adventure and more." },
  "/destinations/jaipur-tours": { title: "Best Jaipur Tours | BNS Holidays", description: "Book Jaipur tour packages." },
  "/destinations/jaipur-udaipur": { title: "Jaipur & Udaipur Tour | BNS Holidays", description: "Jaipur and Udaipur combo tour packages." },
  "/destinations/jaipur-adventure": { title: "Jaipur Adventure Tour | BNS Holidays", description: "Jaipur adventure tour packages." },
  "/destinations/luxury-jaipur": { title: "Luxury Jaipur Tour | BNS Holidays", description: "Premium luxury Jaipur tour packages." },
  "/destinations/udaipur": { title: "Udaipur Tour Packages | BNS Holidays", description: "Best Udaipur tour packages." },
  "/destinations/udaipur-tours": { title: "Best Udaipur Tours | BNS Holidays", description: "Book Udaipur tour packages." },
  "/destinations/udaipur-mountabu": { title: "Udaipur & Mount Abu Tour | BNS Holidays", description: "Udaipur and Mount Abu tour packages." },
  "/destinations/udaipur-adventure": { title: "Udaipur Adventure Tour | BNS Holidays", description: "Udaipur adventure tour packages." },
  "/destinations/luxury-udaipur": { title: "Luxury Udaipur Tour | BNS Holidays", description: "Premium luxury Udaipur tour packages." },
  "/destinations/northgoa": { title: "North Goa Tour Packages | BNS Holidays", description: "Best North Goa tour packages. Beaches, party, adventure and more." },
  "/destinations/northgoa-tours": { title: "Best North Goa Tours | BNS Holidays", description: "Book North Goa tour packages." },
  "/destinations/northgoa-party": { title: "North Goa Party Tour | BNS Holidays", description: "North Goa party tour packages." },
  "/destinations/northgoa-adventure": { title: "North Goa Adventure Tour | BNS Holidays", description: "North Goa adventure tour packages." },
  "/destinations/luxury-northgoa": { title: "Luxury North Goa Tour | BNS Holidays", description: "Premium luxury North Goa tour packages." },
  "/destinations/southgoa": { title: "South Goa Tour Packages | BNS Holidays", description: "Best South Goa tour packages." },
  "/destinations/southgoa-tours": { title: "Best South Goa Tours | BNS Holidays", description: "Book South Goa tour packages." },
  "/destinations/southgoa-escape": { title: "South Goa Escape Tour | BNS Holidays", description: "South Goa peaceful escape tour packages." },
  "/destinations/southgoa-adventure": { title: "South Goa Adventure Tour | BNS Holidays", description: "South Goa adventure tour packages." },
  "/destinations/luxury-southgoa": { title: "Luxury South Goa Tour | BNS Holidays", description: "Premium luxury South Goa tour packages." },
  "/destinations/karnataka-tours": { title: "Karnataka Tour Packages | BNS Holidays", description: "Best Karnataka tour packages. Bangalore, Mysore, Coorg, Hampi and more." },
  "/destinations/bangalore": { title: "Bangalore Tour Package | BNS Holidays", description: "Best Bangalore tour packages starting from ₹12,000." },
  "/destinations/mysore": { title: "Mysore Tour Package | BNS Holidays", description: "Best Mysore tour packages starting from ₹15,000." },
  "/destinations/coorg": { title: "Coorg Tour Package | BNS Holidays", description: "Best Coorg tour packages starting from ₹18,000." },
  "/destinations/hampi": { title: "Hampi Tour Package | BNS Holidays", description: "Best Hampi tour packages starting from ₹20,000." },
  // TAMIL NADU
"/destinations/tamilnadu-tours": {
  title: "Tamil Nadu Tour Packages | BNS Holidays",
  description: "Best Tamil Nadu tour packages. Chennai, Rameswaram, Madurai, temples and more. Book with BNS Holidays!"
},
"/destinations/chennai": {
  title: "Chennai Tour Package | BNS Holidays",
  description: "Best Chennai tour packages. Mahabalipuram, cultural tours included. Starting from great prices. Book now!"
},
"/destinations/rameswaram-madurai": {
  title: "Rameswaram & Madurai Tour | BNS Holidays",
  description: "Rameswaram and Madurai tour packages. Temple tours, pilgrimage packages included. Book with BNS Holidays!"
},
"/destinations/temple": {
  title: "Tamil Nadu Temple Tour | BNS Holidays",
  description: "Tamil Nadu temple tour packages. Visit famous temples across Tamil Nadu. Book with BNS Holidays!"
},
};

const serviceKeywords = {
  "/": [
    "best travel agency in Pune",
    "travel agency in Pimpri-Chinchwad",
    "domestic tour packages",
    "international tour packages",
    "holiday packages from Pune",
    "BNS Holidays",
  ],
  "/packages": ["domestic tour packages", "international tour packages", "holiday packages from Pune", "BNS Holidays"],
  "/flights": ["flight booking", "one-way flights", "round-trip flights", "multi-city flights", "BNS Holidays"],
  "/hotels": ["hotel booking", "holiday hotels", "hotel deals", "BNS Holidays"],
  "/villa": ["villa holidays", "holiday villa stays", "villa booking", "BNS Holidays"],
  "/visa": ["visa assistance", "travel visa services", "visa support for holidays", "BNS Holidays"],
};

const normalizePath = (pathname) => {
  const normalized = pathname.toLowerCase().replace(/\/+$/, "");
  return normalized || "/";
};

const getKeywords = (pathname, seo) => {
  const path = normalizePath(pathname);
  const title = seo.title.replace(/\s*\|\s*BNS Holidays$/i, "").trim();
  const destination = path
    .replace(/^\/destinations\//, "")
    .replace(/^\/|\/$/g, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\d+\s*(?:day|days|night|nights)\b/gi, "")
    .trim();
  const topic = destination || title;
  const phrases = [
    ...(seo.keywords || []),
    ...(serviceKeywords[path] || []),
    title,
    ...(path.startsWith("/destinations/")
      ? [`${topic} tour packages`, `${topic} holiday packages`, `${topic} travel packages`]
      : []),
    "BNS Holidays",
  ];

  return [...new Set(phrases.map((phrase) => phrase.trim()).filter(Boolean))].slice(0, 10).join(", ");
};

function SEO() {
  const { pathname } = useLocation();
  const normalizedPath = normalizePath(pathname);
  const pageName = normalizedPath
    .replace(/^\/destinations\//, "")
    .split("/")
    .filter(Boolean)
    .join(" ")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

  const seo = seoData[normalizedPath] || {
    title: `${pageName || "BNS Holidays"} Tour Packages | BNS Holidays`,
    description: `Explore ${pageName || "holiday"} tour packages and travel experiences with BNS Holidays.`,
  };
  const keywords = getKeywords(normalizedPath, seo);
  const isSearchResults = normalizedPath.endsWith("/results");
  const canonicalUrl = `https://bnsholidays.co.in${normalizedPath}`;

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={isSearchResults ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
    </Helmet>
  );
}

export default SEO;