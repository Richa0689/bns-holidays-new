const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');
const sitemapPath = path.join(buildDir, 'sitemap.xml');
const indexHtmlPath = path.join(buildDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('build/index.html not found! Run npm run build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// Remove noindex from 404.html if present so it doesn't block crawlers
const fourZeroFourPath = path.join(buildDir, '404.html');
if (fs.existsSync(fourZeroFourPath)) {
  let fourZeroFour = fs.readFileSync(fourZeroFourPath, 'utf8');
  fourZeroFour = fourZeroFour.replace('<meta name="robots" content="noindex" />', '');
  fs.writeFileSync(fourZeroFourPath, fourZeroFour, 'utf8');
  console.log('Cleaned 404.html (removed noindex directive)');
}

// Key routes + any routes found in sitemap
const keyRoutes = ['flights', 'hotels', 'packages', 'visa', 'india-tours', 'fixed-departures', 'villa'];
const routes = [...keyRoutes];

if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  const locRegex = /<loc>https:\/\/bnsholidays\.co\.in\/([^<]+)<\/loc>/g;
  let match;
  while ((match = locRegex.exec(sitemapContent)) !== null) {
    const route = match[1].replace(/^\/|\/$/g, '');
    if (route && !routes.includes(route)) {
      routes.push(route);
    }
  }
}

const routeMetadata = {
  flights: {
    title: "Flight Booking Services - Domestic & International | BNS Holidays",
    description: "Compare and book domestic and international flight tickets with BNS Holidays at competitive fares. Instant quotes and 24/7 travel support.",
  },
  hotels: {
    title: "Worldwide Hotel Booking - Luxury Resorts & Stays | BNS Holidays",
    description: "Search and book top-rated hotels, luxury stays, and holiday resorts across destinations worldwide with BNS Holidays.",
  },
  packages: {
    title: "International Tour Packages - Worldwide Holidays | BNS Holidays",
    description: "Explore curated international holiday tour packages across Europe, Asia, USA, Australia, Bali, and Dubai with BNS Holidays.",
  },
  visa: {
    title: "Visa Assistance & Consultation Services | BNS Holidays",
    description: "Hassle-free tourist and visitor visa consultation and documentation services with BNS Holidays. Fast processing and expert guidance.",
  },
  'india-tours': {
    title: "India Tour Packages - Domestic Holiday Packages | BNS Holidays",
    description: "Discover curated holiday packages across India with BNS Holidays - Kashmir, Himachal, Kerala, Rajasthan, Goa and more.",
  },
  'fixed-departures': {
    title: "Fixed Departure Tours - Group Holiday Departures | BNS Holidays",
    description: "Join confirmed fixed departure group tours with BNS Holidays. All-inclusive itineraries, dedicated tour managers, and guaranteed departures.",
  },
  villa: {
    title: "Luxury Villa Rentals & Vacation Stays | BNS Holidays",
    description: "Discover private luxury villas and vacation holiday homes with BNS Holidays for your dream getaway.",
  },
};

console.log(`Generating static HTML entry points for ${routes.length} routes in build directory...`);

routes.forEach((route) => {
  const targetDir = path.join(buildDir, route);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  const targetFile = path.join(targetDir, 'index.html');
  
  let pageHtml = baseHtml;
  const meta = routeMetadata[route] || {
    title: `${route.split(/[-/]/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} Tour Packages | BNS Holidays`,
    description: `Explore top attractions, sightseeing itineraries and tour packages for ${route.split(/[-/]/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} with BNS Holidays.`,
  };

  pageHtml = pageHtml.replace(/<title>.*?<\/title>/i, `<title>${meta.title}</title>`);
  pageHtml = pageHtml.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
    `<meta name="description" content="${meta.description}" />`
  );

  const canonicalUrl = `https://bnsholidays.co.in/${route}`;
  if (pageHtml.includes('rel="canonical"')) {
    pageHtml = pageHtml.replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i, `<link rel="canonical" href="${canonicalUrl}" />`);
  } else {
    pageHtml = pageHtml.replace('</head>', `  <link rel="canonical" href="${canonicalUrl}" />\n  </head>`);
  }

  fs.writeFileSync(targetFile, pageHtml, 'utf8');
});

console.log(`Successfully created static entry points for all ${routes.length} routes with unique SEO metadata!`);

