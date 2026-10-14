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
const keyRoutes = ['flights', 'hotels', 'packages', 'visa', 'villa'];
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

console.log(`Generating static HTML entry points for ${routes.length} routes in build directory...`);

routes.forEach((route) => {
  const targetDir = path.join(buildDir, route);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  const targetFile = path.join(targetDir, 'index.html');
  fs.writeFileSync(targetFile, baseHtml, 'utf8');
});

console.log(`Successfully created static entry points for all ${routes.length} routes!`);

