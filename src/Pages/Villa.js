import React, { useState, useMemo } from "react";
import Footer from "../components/Footer";
import "./Villa.css";

const villas = [
  // ── Pune ──
  {
    id: 1,
    title: "Exotic @ Mangifera Agro Estate",
    images: [
      "https://img.vistarooms.com/gallery/mangifera-estate-3454-1708695036-d467ab.jpg",
      "https://img.vistarooms.com/gallery/mangifera-estate-3454-1708695036-c11d28.jpg",
      "https://img.vistarooms.com/gallery/mangifera-estate-3454-1708695036-f68377.jpg",
      "https://img.vistarooms.com/gallery/mangifera-estate-3454-1708695036-5cb53b.jpg",
      "https://img.vistarooms.com/gallery/mangifera-estate-3454-1708695036-581391.jpg",
      "https://img.vistarooms.com/gallery/mangifera-estate-3454-1708695036-c674f1.jpg",
    ],
     
    location: "Pune, India", priceNum: 17862, price: "₹17,862",
    beds: 4, baths: 3, tag: "Pool", type: "Pool",
  },
  {
    id: 17,
    title: "Princess Vista - Pawna",
    images: [
      "https://img.vistarooms.com/gallery/princess-vista-8aa71b.jpg",
      "https://img.vistarooms.com/gallery/princess-vista-55657d.jpg",
      "https://img.vistarooms.com/gallery/princess-vista-aa03a6.jpg",
      "https://img.vistarooms.com/gallery/princess-vista-9de27a.jpg",
      "https://img.vistarooms.com/gallery/princess-vista-bbbc5f.jpg",
      "https://img.vistarooms.com/gallery/princess-vista-3117ed.jpg",
    ],
         location: "Pune, India", priceNum: 25731, price: "₹25,731",
    beds: 3, baths: 4, tag: "Pool", type: "Pool",
  },
  {
    id: 18,
    title: "El House - Lonawala",
    images: [
      "https://img.vistarooms.com/gallery/k6bxmiexv2opj0ky07jv.jpg",
      "https://img.vistarooms.com/gallery/xzzlg7jkvehr6hjfqlvr.jpg",
      "https://img.vistarooms.com/gallery/v68na7bawaxjk3zd6olp.jpg",
      "https://img.vistarooms.com/gallery/ogvmdnnexhnmpax8gwmn.jpg",
      "https://img.vistarooms.com/gallery/sjbwuwwhglofrv1wibfg.jpg",
      "https://img.vistarooms.com/gallery/avzsktcphv0r7bvlkk6f.jpg",
    ],
     
    location: "Pune, India", priceNum: 20110, price: "₹20,110",
    beds: 5, baths: 4, tag: "Sunset View", type: "Forest",
  },

  // ── SHIMLA ──
  {
    id: 2,
    title: "Spirits Unplugged Villa",
    images: [
      "https://img.vistarooms.com/gallery/spirits-unplugged-karyali-fb3dfc.jpg",
      "https://img.vistarooms.com/gallery/spirits-unplugged-karyali-01604c.jpg",
      "https://img.vistarooms.com/gallery/spirits-unplugged-karyali-1fc3e8.jpg",
      "https://img.vistarooms.com/gallery/spirits-unplugged-karyali-684a6b.jpg",
      "https://img.vistarooms.com/gallery/spirits-unplugged-karyali-afd167.jpg",
      "https://img.vistarooms.com/gallery/spirits-unplugged-karyali-f63ccb.jpg",
    ],
     
    location: "Shimla, India", priceNum: 24085, price: "₹24,085",
    beds: 4, baths: 4, tag: "Mountain", type: "Mountain",
  },
  {
    id: 19,
    title: "Pine Estate",
    images: [
      "https://img.vistarooms.com/gallery/pine-estate-e663f5.jpg",
      "https://img.vistarooms.com/gallery/pine-estate-873bc0.jpg",
      "https://img.vistarooms.com/gallery/pine-estate-1565e3.jpg",
      "https://img.vistarooms.com/gallery/pine-estate-97f9d1.jpg",
      "https://img.vistarooms.com/gallery/pine-estate-0ae7a0.jpg",
    ],
     
    location: "Shimla, India", priceNum: 46325, price: "₹46,325",
    beds: 6, baths: 6, tag: "Pine Forest", type: "Mountain",
  },
  {
    id: 20,
    title: "Rose Cottage",
    images: [
      "https://img.vistarooms.com/gallery/rose-cottage-0d9dc6.jpg",
      "https://img.vistarooms.com/gallery/rose-cottage-d200e5.jpg",
      "https://img.vistarooms.com/gallery/rose-cottage-a38dd3.jpg",
      "https://img.vistarooms.com/gallery/rose-cottage-e15715.jpg",
      "https://img.vistarooms.com/gallery/rose-cottage-e4d87a.jpg",
      "https://img.vistarooms.com/gallery/rose-cottage-475622.jpg",
    ],
     
    location: "Shimla, India", priceNum: 37913, price: "₹37,913",
    beds: 6, baths: 6, tag: "Snow View", type: "Mountain",
  },

  // ── GOA ──
  {
    id: 3,
    title: "Acacia Skies - Dabolim", 
    images: [
      "https://img.vistarooms.com/gallery/acacia-skies-77ea3c.jpg",
      "https://img.vistarooms.com/gallery/acacia-skies-ea5965.jpg",
      "https://img.vistarooms.com/gallery/acacia-skies-3e80e6.jpg",
      "https://img.vistarooms.com/gallery/acacia-skies-9ef39f.jpg",
      "https://img.vistarooms.com/gallery/acacia-skies-822e31.jpg",
      "https://img.vistarooms.com/gallery/acacia-skies-c41a95.jpg",
    ],
     
    location: "Goa, India", priceNum: 9474, price: "₹9,474",
    beds: 3, baths: 3, tag: "Beachfront", type: "Beach",
  },
  {
    id: 21,
    title: "Riverside Oasis",
    images: [
      "https://img.vistarooms.com/gallery/riverside-oasis-650617.jpg",
      "https://img.vistarooms.com/gallery/riverside-oasis-b4fdde.jpg",
      "https://img.vistarooms.com/gallery/riverside-oasis-a04422.jpg",
      "https://img.vistarooms.com/gallery/riverside-oasis-6b0b64.jpg",
      "https://img.vistarooms.com/gallery/riverside-oasis-c4a600.jpg",
      "https://img.vistarooms.com/gallery/riverside-oasis-bed7a3.jpg",
    ],
     
    location: "South Goa, India", priceNum: 9266, price: "₹9,266",
    beds: 3, baths: 3, tag: "Beachfront", type: "Beach",
  },
  {
    id: 22,
    title: "The Portugal Renaissance - Porvorim ",
    images: [
      "https://img.vistarooms.com/gallery/the-portugal-renaissance-porvorim-4-bhk-villa-in-goa-with-private-pool-and-spacious-rooms-c98413.jpg",
      "https://img.vistarooms.com/gallery/the-portugal-renaissance-porvorim-4-bhk-villa-in-goa-with-private-pool-and-spacious-rooms-14fa93.jpg",
      "https://img.vistarooms.com/gallery/the-portugal-renaissance-porvorim-4-bhk-villa-in-goa-with-private-pool-and-spacious-rooms-b7ce7c.jpg",
      "https://img.vistarooms.com/gallery/the-portugal-renaissance-porvorim-4-bhk-villa-in-goa-with-private-pool-and-spacious-rooms-c9547b.jpg",
      "https://img.vistarooms.com/gallery/the-portugal-renaissance-porvorim-4-bhk-villa-in-goa-with-private-pool-and-spacious-rooms-622563.jpg",
      "https://img.vistarooms.com/gallery/the-portugal-renaissance-porvorim-4-bhk-villa-in-goa-with-private-pool-and-spacious-rooms-9ef054.jpg",
    ],
     
    location: "Goa, India", priceNum: 14483, price: "₹14,483",
    beds: 4, baths: 4, tag: "Forest", type: "Forest",
  },

  // ── COORG ──
  {
    id: 4,
    title: "Coffee and Mist Villa",
    images: [
      "https://img.vistarooms.com/gallery/coffee-and-mist-5-bhk-villa-in-coorg-with-private-pool-and-spacious-rooms-29ebbc.jpg",
      "https://img.vistarooms.com/gallery/coffee-and-mist-5-bhk-villa-in-coorg-with-private-pool-and-spacious-rooms-a6e36a.jpg",
      "https://img.vistarooms.com/gallery/coffee-and-mist-5-bhk-villa-in-coorg-with-private-pool-and-spacious-rooms-e21b73.jpg",
      "https://img.vistarooms.com/gallery/coffee-and-mist-5-bhk-villa-in-coorg-with-private-pool-and-spacious-rooms-93aeb4.jpg",
      "https://img.vistarooms.com/gallery/coffee-and-mist-5-bhk-villa-in-coorg-with-private-pool-and-spacious-rooms-f0651d.jpg",
      "https://img.vistarooms.com/gallery/coffee-and-mist-5-bhk-villa-in-coorg-with-private-pool-and-spacious-rooms-ce36df.jpg",
    ],
     
    location: "Coorg, India", priceNum: 47003, price: "₹47,003",
    beds: 5, baths: 5, tag: "Forest", type: "Forest",
  },
  {
    id: 23,
    title: "The Haven - Grandeur",
    images: [
      "https://www.thehavengrandeur.com/main-img/homepage/herosection/hero-2.jpeg",
      "https://img.vistarooms.com/gallery/the-haven-grandeur-4-bhk-villa-in-coorg-with-spacious-rooms-8d5023.jpg",
      "https://img.vistarooms.com/gallery/the-haven-grandeur-4-bhk-villa-in-coorg-with-spacious-rooms-307755.jpg",
      "https://img.vistarooms.com/gallery/the-haven-grandeur-4-bhk-villa-in-coorg-with-spacious-rooms-fc2bf6.jpg",
      "https://img.vistarooms.com/gallery/the-haven-grandeur-4-bhk-villa-in-coorg-with-spacious-rooms-79ea4b.jpg",
      "https://img.vistarooms.com/gallery/the-haven-grandeur-4-bhk-villa-in-coorg-with-spacious-rooms-f63e3c.jpg",
      "https://img.vistarooms.com/gallery/the-haven-grandeur-4-bhk-villa-in-coorg-with-spacious-rooms-0099c8.jpg",
    ],
     
    location: "Coorg, India", priceNum: 28464, price: "₹28,464",
    beds: 4, baths: 4, tag: "Forest", type: "Forest",
  },

  // ── MUMBAI ──
  {
    id: 5,
    title: "Wooden House - Wada",
    images: [
      "https://img.vistarooms.com/gallery/wooden-house-58205e.jpg",
      "https://img.vistarooms.com/gallery/wooden-house-57bd05.jpg",
      "https://img.vistarooms.com/gallery/wooden-house-2935c2.jpg",
      "https://img.vistarooms.com/gallery/wooden-house-f57821.jpg",
      "https://img.vistarooms.com/gallery/wooden-house-417059.jpg",
      "https://img.vistarooms.com/gallery/wooden-house-84c4f3.jpg",
      "https://img.vistarooms.com/gallery/wooden-house-488508.jpg",

    ],
     
    location: "Mumbai, India", priceNum: 11719, price: "₹11,719",
    beds: 3, baths: 2, tag: "Luxury", type: "Luxury",
  },
  {
    id: 24,
    title: "Villa Bharat - Gorai",
    images: [
      "https://img.vistarooms.com/gallery/villa-bharat-43effc.JPG",
      "https://img.vistarooms.com/gallery/villa-bharat-f48ed8.JPG",
      "https://img.vistarooms.com/gallery/villa-bharat-bc1742.JPG",
      "https://img.vistarooms.com/gallery/villa-bharat-b96608.JPG",
      "https://img.vistarooms.com/gallery/villa-bharat-a4ad0b.JPG",
      "https://img.vistarooms.com/gallery/villa-bharat-695a8e.JPG",
    ],
     
    location: "Mumbai, India", priceNum: 24607, price: "₹24,607",
    beds: 3, baths: 4, tag: "BeachView", type: "Beach",
  },
  {
    id: 25,
    title: "Tinted Skies - Wada",
    images: [
      "https://img.vistarooms.com/gallery/tinted-skies-86100c.jpg",
      "https://img.vistarooms.com/gallery/tinted-skies-45f4a8.jpg",
      "https://img.vistarooms.com/gallery/tinted-skies-19180b.jpg",
      "https://img.vistarooms.com/gallery/tinted-skies-a38cca.jpg",
      "https://img.vistarooms.com/gallery/tinted-skies-d190ce.jpg",
      "https://img.vistarooms.com/gallery/tinted-skies-9da152.jpg",
      "https://img.vistarooms.com/gallery/tinted-skies-3aec6e.jpg",
    ],
     
    location: "Mumbai, India", priceNum: 12865, price: "₹12,865",
    beds: 3, baths: 3, tag: "Mountain", type: "Mountain",
  },

  // ── Manali ──
  {
    id: 6,
    title: "Jodhpur House",
    images: [
      "https://img.vistarooms.com/gallery/jodhpur-house-ffc457.jpg",
      "https://img.vistarooms.com/gallery/jodhpur-house-1269a1.jpg",
      "https://img.vistarooms.com/gallery/jodhpur-house-cb2069.jpg",
      "https://img.vistarooms.com/gallery/jodhpur-house-d32f6b.jpg",
      "https://img.vistarooms.com/gallery/jodhpur-house-d91531.jpg",
      "https://img.vistarooms.com/gallery/jodhpur-house-4ab60b.jpg",
      "https://img.vistarooms.com/gallery/jodhpur-house-5e0a27.jpg",
      "https://img.vistarooms.com/gallery/jodhpur-house-549a6f.jpg",
    ],
     
    location: "Manali, India", priceNum: 17882, price: "₹17,882",
    beds: 3, baths: 4, tag: "Snow View", type: "Snow",
  },
  {
    id: 26,
    title: "Moets Waterfront Estate - Raison",
    images: [
      "https://img.vistarooms.com/gallery/moets-waterfront-estate-raison-733cb8.jpg",
      "https://img.vistarooms.com/gallery/moets-waterfront-estate-raison-fd5173.jpg",
      "https://img.vistarooms.com/gallery/moets-waterfront-estate-raison-5e2e84.jpg",
      "https://img.vistarooms.com/gallery/moets-waterfront-estate-raison-e90a8a.jpg",
      "https://img.vistarooms.com/gallery/moets-waterfront-estate-raison-45885c.jpg",
      "https://img.vistarooms.com/gallery/moets-waterfront-estate-raison-4f12f7.jpg",
    ],
     
    location: "Manali, India", priceNum: 18302, price: "₹18,302",
    beds: 3, baths: 3, tag: "Riverside", type: "Heritage",
  },
  {
    id: 27,
    title: "Casa Bella Vista",
    images: [
      "https://img.vistarooms.com/gallery/casa-bella-001124.jpg",
      "https://img.vistarooms.com/gallery/casa-bella-vista-136717.jpg",
      "https://img.vistarooms.com/gallery/casa-bella-39c9a6.jpg",
      "https://img.vistarooms.com/gallery/casa-bella-f4052b.jpg",
      "https://img.vistarooms.com/gallery/casa-bella-1a9985.jpg",
      "https://img.vistarooms.com/gallery/casa-bella-fb48ba.jpg",
      "https://img.vistarooms.com/gallery/casa-bella-ebc6c9.jpg",
    ],
    
    location: "Manali, India", priceNum: 44973, price: "₹44,973",
    beds: 6, baths: 6, tag: "Snow View", type: "Luxury",
  },

  // ── DELHI ──
  {
    id: 7,
    title: "Hillside Paradise",
    images: [
      "https://img.vistarooms.com/gallery/hillside-paradise-c4291f.jpg",
      "https://img.vistarooms.com/gallery/hillside-paradise-636073.jpg",
      "https://img.vistarooms.com/gallery/hillside-paradise-9f5fa8.jpg",
      "https://img.vistarooms.com/gallery/hillside-paradise-24ff00.jpg",
      "https://img.vistarooms.com/gallery/hillside-paradise-27c2bf.jpg",
      "https://img.vistarooms.com/gallery/hillside-paradise-b02b27.jpg",
    ],
     
    location: "New Delhi, India", priceNum: 29649, price: "₹29,649",
    beds: 4, baths: 4, tag: "Mountain", type: "Mountain",
  },
  {
    id: 28,
    title: " The Brick House",
    images: [
      "https://img.vistarooms.com/gallery/the-brick-house-f39be7.jpg",
      "https://img.vistarooms.com/gallery/the-brick-house-81b16b.jpg",
      "https://img.vistarooms.com/gallery/the-brick-house-0db552.jpg",
      "https://img.vistarooms.com/gallery/the-brick-house-f6a316.jpg",
      "https://img.vistarooms.com/gallery/the-brick-house-ea0b4e.jpg",
      "https://img.vistarooms.com/gallery/the-brick-house-8581fd.jpg",
      "https://img.vistarooms.com/gallery/the-brick-house-dbf44f.jpg",
    ],
     
    location: "New Delhi, India", priceNum: 49748, price: "₹49,748",
    beds: 4, baths: 5, tag: "Pool", type: "Luxury",
  },
  {
    id: 29,
    title: "Bliss In The Woods - Gurgaon",
    images: [
      "https://img.vistarooms.com/gallery/bliss-in-the-woods-15e21e.jpg",
      "https://img.vistarooms.com/gallery/bliss-in-the-woods-4b268b.jpg",
      "https://img.vistarooms.com/gallery/bliss-in-the-woods-e4c74e.jpg",
      "https://img.vistarooms.com/gallery/bliss-in-the-woods-a749c8.jpg",
      "https://img.vistarooms.com/gallery/bliss-in-the-woods-353ae3.jpg",
    ],
     
    location: "Delhi, India", priceNum: 23576, price: "₹23,576",
    beds: 4, baths: 4, tag: "Beachfront", type: "Beach",
  },

  // ── Bangalore ──
  {
    id: 8,
    title: "Udhbhava Kamala",
    images: [
      "https://img.vistarooms.com/gallery/udhbhava-kamala-1598e3.jpg",
      "https://img.vistarooms.com/gallery/udhbhava-kamala-58243a.jpg",
      "https://img.vistarooms.com/gallery/udhbhava-kamala-a9862d.jpg",
      "https://img.vistarooms.com/gallery/udhbhava-kamala-9c1e3d.jpg",
      "https://img.vistarooms.com/gallery/udhbhava-kamala-4d673d.jpg",
      "https://img.vistarooms.com/gallery/udhbhava-kamala-3bb556.jpg",
    ],
     
    location: "Bangalore, India", priceNum: 18477, price: "₹18,477",
    beds: 4, baths: 4, tag: "Cliffside", type: "Heritage",
  },
  {
    id: 30,
    title: "Ananta Villa",
    images: [
      "https://img.vistarooms.com/gallery/ananta-f749f3.jpg",
      "https://img.vistarooms.com/gallery/ananta-dca3d4.jpg",
      "https://img.vistarooms.com/gallery/ananta-b4f406.jpg",
      "https://img.vistarooms.com/gallery/ananta-df7c20.jpg",
      "https://img.vistarooms.com/gallery/ananta-ec6cb7.jpg",
      "https://img.vistarooms.com/gallery/ananta-9cb203.jpg",
      "https://img.vistarooms.com/gallery/ananta-039ba6.jpg",
    ],
     
    location: "Bangalore, India", priceNum: 30439, price: "₹30,438",
    beds: 2, baths: 2, tag: "Sunset View", type: "Luxury",
  },

  // ── HYDERABAD ──
  {
    id: 9,
    title: "Amoda Villa",
    images: [
      "https://img.vistarooms.com/gallery/amoda-villa-98c531.jpg",
      "https://img.vistarooms.com/gallery/amoda-villa-bf2d1d.jpg",
      "https://img.vistarooms.com/gallery/amoda-villa-2afb09.jpg",
      "https://img.vistarooms.com/gallery/amoda-villa-a1000d.jpg",
      "https://img.vistarooms.com/gallery/amoda-villa-9035a5.jpg",
      "https://img.vistarooms.com/gallery/amoda-villa-f799d6.jpg",
    ],
     
    location: "Mahabaleshwar, India", priceNum: 18204, price: "₹18,204",
    beds: 3, baths: 4, tag: "Forest", type: "Forest",
  },
  {
    id: 31,
    title: "Dwarkamai Villa",
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/808018637.jpg?k=c8b6272849f79d02fa144721d8b63727b8241c4589239f0f70238b323cb966e7&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max500/808018852.jpg?k=fb06e23db97e4f7555b64ba044ee8776c73045c5bf5fe627fe28847018da8b40&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max300/820218706.jpg?k=94c1edb326a0afec11d78b45bcb72ff5e8984d9fc222a47743d4e7dedc5233ae&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max300/808018752.jpg?k=8ba756b5ade14f55486c71910eaf36bd8ad2b784ad085d2bc522f75213b3808c&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/808018780.jpg?k=7cd82673e4ed47f6cd6aab50b126163ccf7b1233bd170eb369d82dd2c7d9a5e9&o=",
    ],
     
    location: "Mahabaleshwar, India", priceNum: 24000, price: "₹24,000",
    beds: 5, baths: 4, tag: "Heritage", type: "Heritage",
  },

  // ── UDAIPUR ──
  {
    id: 10,
    title: "Udaikot Villa",
    images: [
      "https://img.vistarooms.com/gallery/udaikot-c6ccda.jpg",
      "https://img.vistarooms.com/gallery/udaikot-0147ea.jpg",
      "https://img.vistarooms.com/gallery/udaikot-79554f.jpg",
      "https://img.vistarooms.com/gallery/udaikot-65b328.jpg",
      "https://img.vistarooms.com/gallery/udaikot-ffc5d2.jpg",
      "https://img.vistarooms.com/gallery/udaikot-ccee7b.jpg",
      "https://img.vistarooms.com/gallery/udaikot-560a4c.jpg",
    ],
 
    location: "Udaipur, India", priceNum: 14700, price: "₹14,700",
    beds: 4, baths: 4, tag: "Heritage", type: "Heritage",
  },
  {
    id: 32,
    title: "The Wild Orchid",
    images: [
      "https://img.vistarooms.com/gallery/the-wild-orchid-76f0d9.jpg",
      "https://img.vistarooms.com/gallery/ie54li68zcwl2r9hewee.jpg",
      "https://img.vistarooms.com/gallery/d5lapbgx8k8gncynnatr.jpg",
      "https://img.vistarooms.com/gallery/u8vmmon2d72xdwww3w8j.jpg",
      "https://img.vistarooms.com/gallery/zfhxpphm1chwux3oqh9g.jpg",
      "https://img.vistarooms.com/gallery/jen4x5edahai0iaj7rv6.jpg",
      "https://img.vistarooms.com/gallery/h2f3nuu8cteii7azpiqy.jpg",
    ],
 
    location: "Udaipur, India", priceNum: 12832, price: "₹12,832",
    beds: 2, baths: 3, tag: "Lake View", type: "Heritage",
  },

  // ── KASHMIR ──
  {
    id: 11,
    title: "Suroor Villa",
    images: [
      "https://img.vistarooms.com/gallery/suroor-bc9e90.jpg",
      "https://img.vistarooms.com/gallery/suroor-2867dd.jpg",
      "https://img.vistarooms.com/gallery/suroor-ad377a.jpg",
      "https://img.vistarooms.com/gallery/suroor-588365.jpg",
      "https://img.vistarooms.com/gallery/suroor-3158cd.jpg",
      "https://img.vistarooms.com/gallery/suroor-2a111a.jpg",
    ],
   
    location: "Kashmir, India", priceNum: 34230, price: "₹34,230",
    beds: 4, baths: 3, tag: "Snow View", type: "Mountain",
  },
  {
    id: 33,
    title: "Shahzir Villa",
    images: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/58/b7/9c/hotel-shahzir-villa-is.jpg?w=1400&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/8a/1e/ea/caption.jpg?w=1400&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/bf/e6/f6/caption.jpg?w=1100&h=-1&s=1",
 
    ],
     
    location: "Kashmir, India", priceNum: 24000, price: "₹24,000",
    beds: 3, baths: 2, tag: "Houseboat", type: "Mountain",
  },
  {
    id: 34,
    title: "Noor By Haveli",
    images: [
      "https://dynamic-media-cdn.tripadvisor.com/media/partner/bookingcom/photo-o/32/a2/69/a3/noor-by-haveli.jpg?w=1400&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/partner/bookingcom/photo-o/32/a2/69/a2/noor-by-haveli.jpg?w=1400&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/partner/bookingcom/photo-o/32/a2/69/a4/noor-by-haveli.jpg?w=1400&h=-1&s=1",
    ],
 
    location: "Kashmir, India", priceNum: 19000, price: "₹19,000",
    beds: 4, baths: 3, tag: "Haveli", type: "Mountain",
  },

  // ── KERALA ──
  {
    id: 12,
    title: "The Backwater Heritage Villa",
    images: [
      "https://img.vistarooms.com/gallery/the-backwater-heritage-beb8dd.jpg",
      "https://img.vistarooms.com/gallery/the-backwater-heritage-c71221.jpg",
      "https://img.vistarooms.com/gallery/the-backwater-heritage-af5e4e.jpg",
      "https://img.vistarooms.com/gallery/the-backwater-heritage-aa782d.jpg",
      "https://img.vistarooms.com/gallery/the-backwater-heritage-44cddc.jpg",
      "https://img.vistarooms.com/gallery/the-backwater-heritage-1ff3f2.jpg",
      "https://img.vistarooms.com/gallery/the-backwater-heritage-e12ce7.jpg",
    ],
     
    location: "Kerala, India", priceNum: 18705, price: "₹18,705",
    beds: 2, baths: 1, tag: "Unique", type: "Heritage",
  },
  {
    id: 35,
    title: "Waves 'n' Winds Alleppey",
    images: [
      "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/651172295.jpg?k=75c1c216442d6279e156d73b96f73fa7ca94ecd30afa0d03c514a1a80aeaf3a6&o=&s=600x",
      "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/651233769.jpg?k=fda4e7720adac10a5f483bbe45a398729e8307896234fa2b5bf4bd46e1ef9892&o=&s=600x",
      "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/651182223.jpg?k=b30e446e2ebcaea0e38583eeaacee4de5caac2d4f513291aae59ec221035273e&o=&s=600x",
      "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/651233046.jpg?k=38c6d381b261f4c9569eda9f5049332a5d00d8940a6b367dc6716fdb6443f196&o=&s=600x",
      "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/772976907.jpg?k=ba7526591ae1c6f389bce01ad3f5ade5e21962742af6586cadff60eb1bef2676&o=&s=600x",
      "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/651181587.jpg?k=2302236adc87d41bf9111ca95e84f57c633af25967b0ae589c8d5720ac6b4589&o=&s=600x",
    ],
     
    location: "Kerala, India", priceNum: 20000, price: "₹20,000",
    beds: 3, baths: 2, tag: "Beach", type: "Beach",
  },
  {
    id: 36,
    title: "Paradise Valley",
    images: [
      "https://img.vistarooms.com/gallery/paradise-valley-f6ca33.jpg",
      "https://img.vistarooms.com/gallery/paradise-valley-239e28.jpg",
      "https://img.vistarooms.com/gallery/paradise-valley-fa174b.jpg",
      "https://img.vistarooms.com/gallery/paradise-valley-feaf8c.jpg",
      "https://img.vistarooms.com/gallery/paradise-valley-02d88b.jpg",
      "https://img.vistarooms.com/gallery/paradise-valley-499e91.jpg",
      "https://img.vistarooms.com/gallery/paradise-valley-7d2ccc.jpg",
      "https://img.vistarooms.com/gallery/paradise-valley-35a358.jpg",
    ],
     
    location: "Kerala, India", priceNum: 20662, price: "₹20,662",
    beds: 4, baths: 4, tag: "Tea Garden", type: "Forest",
  },

  // ── Punjab ──
  {
    id: 13,
    title: "XTASEA Villa",
    images: [
      "https://img.vistarooms.com/gallery/xtasea-651166.jpg",
      "https://img.vistarooms.com/gallery/xtasea-df7fd2.jpg",
      "https://img.vistarooms.com/gallery/xtasea-67bd64.jpg",
      "https://img.vistarooms.com/gallery/xtasea-577267.jpg",
      "https://img.vistarooms.com/gallery/xtasea-ecc930.jpg",
      "https://img.vistarooms.com/gallery/xtasea-9415b0.jpg",
    ],
     
    location: "Punjab, India", priceNum: 20338, price: "₹20,338",
    beds: 2, baths: 2, tag: "Heritage", type: "Heritage",
  },
  {
    id: 37,
    title: "Ista Inn Villa",
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max500/715208499.jpg?k=8e2b42d0b690a4130604a9c4d3b9d7bf4df6189101de50b516e79235d9d4fda0&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/715762528.jpg?k=512771ab7e1500f2f7c0d53b1dfe6595e2b9c88221b2668689bd7afb01ad9c2e&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max300/715208129.jpg?k=31abf3898a5b1d7d68644c17d361e5c3525a769310673fb92f9c015585eea20b&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max300/715208093.jpg?k=892c09b093094e5b2f8ee1b70e9f632d3de349308ff22c693629c768a7b3e192&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max500/715208007.jpg?k=251be0861e96219268091e5dfa09e29ab3dd4d72aaa975fe300c9abbb14e8b7c&o=",
    ],
     
    location: "Amritsar, India", priceNum: 18000, price: "₹18,000",
    beds: 3, baths: 3, tag: "Heritage", type: "Heritage",
  },

  // ── Chennai ──
  {
    id: 14,
    title: "Starry Deck Villa",
    images: [
      "https://img.vistarooms.com/gallery/starry-deck-4ae34a.jpg",
      "https://img.vistarooms.com/gallery/starry-deck-b21817.jpg",
      "https://img.vistarooms.com/gallery/starry-deck-7eb487.jpg",
      "https://img.vistarooms.com/gallery/starry-deck-5a780a.jpg",
      "https://img.vistarooms.com/gallery/starry-deck-ba3473.jpg",
      "https://img.vistarooms.com/gallery/starry-deck-2541f1.jpg",
    ],
     
    location: "Chennai, India", priceNum: 13883, price: "₹13,883",
    beds: 5, baths: 4, tag: "Pool", type: "Pool",
  },

  // ── NASHIK ──
  {
    id: 15,
    title: "Villaggio",
    images: [
      "https://img.vistarooms.com/gallery/villaggio-dcc7ae.jpg",
      "https://img.vistarooms.com/gallery/villaggio-3ceac6.jpg",
      "https://img.vistarooms.com/gallery/villaggio-ceb844.jpg",
      "https://img.vistarooms.com/gallery/villaggio-ef1429.jpg",
      "https://img.vistarooms.com/gallery/villaggio-7d9be6.jpg",
      "https://img.vistarooms.com/gallery/villaggio-44b2ae.jpg",
      "https://img.vistarooms.com/gallery/villaggio-d753f3.jpg",
    ],
    
    location: "Nashik, India", priceNum: 21234, price: "₹21,234",
    beds: 4, baths: 4, tag: "Pool", type: "Pool",
  },
  {
    id: 39,
    title: "Villa Cobblestone",
    images: [
      "https://img.vistarooms.com/gallery/villa-cobblestone-f034dc.jpg",
      "https://img.vistarooms.com/gallery/greystone-villa-972b65.jpg",
      "https://img.vistarooms.com/gallery/greystone-villa-ce9ee7.jpg",
      "https://img.vistarooms.com/gallery/greystone-villa-c4d921.jpg",
      "https://img.vistarooms.com/gallery/greystone-villa-404b5d.jpg",
      "https://img.vistarooms.com/gallery/greystone-villa-fff156.jpg",
      "https://img.vistarooms.com/gallery/greystone-villa-b8a10e.jpg",
    ],
     
    location: "Nashik, India", priceNum: 17862, price: "₹17,862",
    beds: 4, baths: 3, tag: "Pool", type: "Pool",
  },

  // ── Alibaug ──
  {
    id: 16,
    title: "Amara Villa",
    images: [
      "https://img.vistarooms.com/gallery/amara-villa-903551.jpg",
      "https://img.vistarooms.com/gallery/amara-villa-5cb40e.jpg",
      "https://img.vistarooms.com/gallery/amara-villa-4b7954.jpg",
      "https://img.vistarooms.com/gallery/amara-villa-fc6e76.jpg",
      "https://img.vistarooms.com/gallery/amara-villa-b639cb.jpg",
      "https://img.vistarooms.com/gallery/amara-villa-4f3584.jpg",
      "https://img.vistarooms.com/gallery/amara-villa-590c91.jpg",
    ],
    
    location: "Alibaug, India", priceNum: 69873, price: "₹69,873",
    beds: 6, baths: 7, tag: "Luxury", type: "Luxury",
  },
  {
    id: 40,
    title: "Pranaam Villa",
    images: [
      "https://img.vistarooms.com/gallery/pranaam-d602fe.jpg",
      "https://img.vistarooms.com/gallery/pranaam-06408c.jpg0",
      "https://img.vistarooms.com/gallery/pranaam-44e0d8.jpg",
      "https://img.vistarooms.com/gallery/pranaam-c6ae74.jpg",
      "https://img.vistarooms.com/gallery/pranaam-defe67.jpg",
      "https://img.vistarooms.com/gallery/pranaam-93dd67.jpg",
      "https://img.vistarooms.com/gallery/pranaam-d06047.jpg",
    ],
    
    location: "Alibaug, India", priceNum: 67236, price: "₹67,236",
    beds: 3, baths: 2, tag: "Luxury", type: "Luxury",
  },

  // ══════════════════════════════════════════
  // ── MAHARASHTRA (NEW AREA) ──
  // ══════════════════════════════════════════
  {
    id: 41,
    title: "Hamptons Charm Villa",
    images: [
      "https://img.vistarooms.com/gallery/hamptons-charm-60b249.jpg",
      "https://img.vistarooms.com/gallery/hamptons-charm-8e919b.jpg",
      "https://img.vistarooms.com/gallery/hamptons-charm-3e0590.jpg",
      "https://img.vistarooms.com/gallery/hamptons-charm-dbfa20.jpg",
      "https://img.vistarooms.com/gallery/hamptons-charm-22c680.jpg",
      "https://img.vistarooms.com/gallery/hamptons-charm-e11f24.jpg",
    ],
   
    location: "Alibaug, India", priceNum: 46965, price: "₹46,965",
    beds: 5, baths: 5, tag: "Hill Station", type: "Mountain",
  },
  {
    id: 42,
    title: "The Beach House",
    images: [
      "https://img.vistarooms.com/gallery/the-beach-house-bab679.jpg",
      "https://img.vistarooms.com/gallery/the-beach-house-e0b7db.jpg",
      "https://img.vistarooms.com/gallery/the-beach-house-48d33c.jpg",
      "https://img.vistarooms.com/gallery/the-beach-house-aebf2b.jpg",
      "https://img.vistarooms.com/gallery/the-beach-house-7f0bcf.jpg",
      "https://img.vistarooms.com/gallery/the-beach-house-b8db5d.jpg",
    ],
    
    location: "Alibaug, India", priceNum: 20000, price: "₹20,000",
    beds:3, baths: 3, tag: "Beach", type: "Beach",
  },
  {
    id: 43,
    title: "Basalt Villa",
    images: [
      "https://img.vistarooms.com/gallery/basalt-hillside-farmstay-c710ed.jpg",
      "https://img.vistarooms.com/gallery/basalt-hillside-farmstay-033197.jpg",
      "https://img.vistarooms.com/gallery/basalt-hillside-farmstay-e30075.jpg",
      "https://img.vistarooms.com/gallery/basalt-hillside-farmstay-5c6c32.jpg",
      "https://img.vistarooms.com/gallery/basalt-hillside-farmstay-4f1bc4.jpg",
      "https://img.vistarooms.com/gallery/basalt-hillside-farmstay-10da2d.jpg",
      "https://img.vistarooms.com/gallery/basalt-hillside-farmstay-1d0cfe.jpg",
    ],
    
    location: "Karjat, India", priceNum: 31352, price: "₹31,352",
    beds: 5, baths: 7, tag: "Sunset View", type: "Mountain",
  },
  {
    id: 44,
    title: "Lake Arches Villa",
    images: [
      "https://img.vistarooms.com/gallery/lake-arches-0719a4.jpg",
      "https://img.vistarooms.com/gallery/lake-arches-167d29.jpg",
      "https://img.vistarooms.com/gallery/lake-arches-f29ac6.jpg",
      "https://img.vistarooms.com/gallery/lake-arches-a2eebd.jpg",
      "https://img.vistarooms.com/gallery/lake-arches-8ac742.jpg",
      "https://img.vistarooms.com/gallery/lake-arches-720030.jpg",
      "https://img.vistarooms.com/gallery/lake-arches-bc30ba.jpg",
    ],
    
    location: "Igatpuri, India", priceNum: 34756, price: "₹34,756",
    beds: 3, baths: 2, tag: "Lake View", type: "Beach",
  },
  {
    id: 45,
    title: "Breezy Whispers ",
    images: [
      "https://img.vistarooms.com/gallery/breezy-whispers-e426d6.jpg",
      "https://img.vistarooms.com/gallery/breezy-whispers-481893.jpg",
      "https://img.vistarooms.com/gallery/breezy-whispers-8a5741.jpg",
      "https://img.vistarooms.com/gallery/breezy-whispers-4d6b8a.jpg",
      "https://img.vistarooms.com/gallery/breezy-whispers-5887dc.jpg",
    ],
    
    
    location: "Igatpuri, India", priceNum: 17210, price: "₹17,210",
    beds: 3, baths: 3, tag: "Lakefront", type: "Mountain",
  },
  {
    id: 47,
    title: "The Tavern At Canary Farms",
    images: [
      "https://pix10.agoda.net/hotelImages/28187563/0/9d39f50c8333a36991c5162a5767d3b8.jpg?ca=24&ce=0&s=1024x768",
      "https://th.bing.com/th/id/OLC.684yFYUlxUSQLw480x360?&rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://th.bing.com/th/id/OLC.UsmGFyD3R45cEQ480x360?&rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://pix10.agoda.net/hotelImages/28187563/0/a1b71742a63575404c911adc9c323142.jpg?ca=24&ce=0&s=1024x768",
      "https://th.bing.com/th/id/OLC.xzpkTXN2Ca9mnQ480x360?&rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://th.bing.com/th?id=OLC.duvC/l3V/YMAkw480x360&rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://pix10.agoda.net/hotelImages/28187563/0/455ece540f987d9be4f9ed40804f54eb.jpg?ca=24&ce=0&s=1024x768",
    ],
     
    location: "Lonavala, India", priceNum: 64265, price: "₹64,265",
    beds: 4, baths: 4, tag: "Riverside", type: "Forest",
  },
];

const TYPES = ["All","Beach","Mountain","Pool","Forest","Island","Heritage","Luxury"];

const IconSearch = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);
const IconPin = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const IconBed = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);
const IconBath = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12h16M4 6h16M4 18h7"/>
  </svg>
);
const IconCamera = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <circle cx="8.5" cy="8.5" r="1.5"/>
    <polyline points="21 15 16 10 5 21"/>
  </svg>
);
const IconHome = () => (
  <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

const Villa = () => {
  const [search, setSearch]       = useState("");
  const [activeType, setActiveType] = useState("All");
  const [minBeds, setMinBeds]     = useState(0);
  const [maxPrice, setMaxPrice]   = useState(100000);
  const [sortBy, setSortBy]       = useState("default");
  const [gallery, setGallery]     = useState(null);   // { villa, idx }
  const [cardPhoto, setCardPhoto] = useState({});     // { id: photoIndex }

  const getPhoto = (id) => cardPhoto[id] || 0;

  const changePhoto = (e, villa, dir) => {
    e.stopPropagation();
    setCardPhoto(prev => ({
      ...prev,
      [villa.id]: (getPhoto(villa.id) + dir + villa.images.length) % villa.images.length,
    }));
  };

  const filtered = useMemo(() => {
    let result = villas.filter(v => {
      const q = search.toLowerCase();
      return (
        (v.title.toLowerCase().includes(q) || v.location.toLowerCase().includes(q)) &&
        (activeType === "All" || v.type === activeType) &&
        v.beds >= minBeds &&
        v.priceNum <= maxPrice
      );
    });
    if (sortBy === "price-asc")  result = [...result].sort((a, b) => a.priceNum - b.priceNum);
    if (sortBy === "price-desc") result = [...result].sort((a, b) => b.priceNum - a.priceNum);
    return result;
  }, [search, activeType, minBeds, maxPrice, sortBy]);

  const areaGroups = useMemo(() => {
    const g = {};
    villas.forEach(v => {
      if (!g[v.location]) g[v.location] = [];
      g[v.location].push(v.title);
    });
    return g;
  }, []);

  const resetFilters = () => {
    setSearch(""); setActiveType("All");
    setMinBeds(0); setMaxPrice(100000); setSortBy("default");
  };

  return (
    <div className="villa-page">

      {/* ── HERO ── */}
      <div className="villa-hero">
        <div className="villa-hero-overlay" />
        <div className="villa-hero-content">
          {/* <span className="villa-eyebrow">Handpicked Luxury Stays</span> */}
          <h1 className="villa-hero-title">Live in <em>Extraordinary</em></h1>
          <p className="villa-hero-sub">
            Discover handpicked luxury villas across the world's most breathtaking destinations.
          </p>
        </div>
      </div>

      {/* ── FILTER BAR ── */}
      <div className="villa-filter-bar">

        {/* Search */}
        <div className="vf-search-wrap">
          <span className="vf-search-icon"><IconSearch /></span>
          <input
            className="vf-search"
            type="text"
            placeholder="Search by villa name or location..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {search && (
            <button className="vf-clear" onClick={() => setSearch("")}>×</button>
          )}
        </div>

        {/* Controls row */}
        <div className="vf-controls">
          <select className="vf-select" value={minBeds} onChange={e => setMinBeds(Number(e.target.value))}>
            <option value={0}>Any Beds</option>
            <option value={2}>2+ Beds</option>
            <option value={3}>3+ Beds</option>
            <option value={4}>4+ Beds</option>
            <option value={5}>5+ Beds</option>
          </select>

          <div className="vf-price-wrap">
            <span className="vf-price-label">Max ₹{(maxPrice / 1000).toFixed(0)}k</span>
            <input
              type="range" min="15000" max="100000" step="5000"
              value={maxPrice}
              onChange={e => setMaxPrice(Number(e.target.value))}
              className="vf-slider"
            />
          </div>

          <select className="vf-select" value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value="default">Sort: Default</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
          </select>
        </div>

        {/* Type pills */}
        <div className="vf-types">
          {TYPES.map(t => (
            <button
              key={t}
              className={`vf-pill${activeType === t ? " active" : ""}`}
              onClick={() => setActiveType(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="villa-container">
        <p className="villa-result-count">
          <strong>{filtered.length}</strong> villa{filtered.length !== 1 ? "s" : ""} found
        </p>

        {filtered.length > 0 ? (
          <div className="villa-grid">
            {filtered.map(villa => {
              const photoIdx = getPhoto(villa.id);
              return (
                <div className="villa-card" key={villa.id}>
                  <span className="villa-tag">{villa.tag}</span>

                  {/* Image */}
                  <div className="villa-img-wrap">
                    <img src={villa.images[photoIdx]} alt={villa.title} />
                    <div className="villa-img-overlay" />

                    <button className="vcard-arrow vcard-prev" onClick={e => changePhoto(e, villa, -1)}>&#8249;</button>
                    <button className="vcard-arrow vcard-next" onClick={e => changePhoto(e, villa,  1)}>&#8250;</button>

                    <div className="vcard-dots">
                      {villa.images.map((_, i) => (
                        <span
                          key={i}
                          className={`vcard-dot${i === photoIdx ? " active" : ""}`}
                          onClick={e => { e.stopPropagation(); setCardPhoto(p => ({ ...p, [villa.id]: i })); }}
                        />
                      ))}
                    </div>

                    <button
                      className="vcard-view-photos"
                      onClick={() => setGallery({ villa, idx: photoIdx })}
                    >
                      <IconCamera /> View Photos ({villa.images.length})
                    </button>
                  </div>

                  {/* Content */}
                  <div className="villa-content">
                    <p className="villa-location">
                      <IconPin /> {villa.location}
                    </p>
                    <h3>{villa.title}</h3>
                    <p className="villa-desc">{villa.desc}</p>
                    <div className="villa-stats">
                      <span><IconBed /> {villa.beds} Beds</span>
                      <span><IconBath /> {villa.baths} Baths</span>
                    </div>
                    <div className="villa-footer-row">
                      <div className="villa-price">{villa.price}<span>/night</span></div>
                      <button className="villa-btn">View Details</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* ── NO RESULTS ── */
          <div className="villa-empty">
            <div className="villa-empty-icon"><IconHome /></div>
            <h3>No Villas Found</h3>
            <p>Try adjusting your search or filters to discover more stays.</p>
            <button className="villa-empty-reset" onClick={resetFilters}>
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* ── GALLERY MODAL ── */}
      {gallery && (
        <div className="vgallery-overlay" onClick={() => setGallery(null)}>
          <div className="vgallery-box" onClick={e => e.stopPropagation()}>
            <button className="vgallery-close" onClick={() => setGallery(null)}>×</button>
            <p className="vgallery-villa-title">{gallery.villa.title}</p>
            <p className="vgallery-counter">{gallery.idx + 1} / {gallery.villa.images.length}</p>

            <div className="vgallery-main">
              <button
                className="vgallery-arrow vgallery-prev"
                onClick={() => setGallery(g => ({ ...g, idx: (g.idx - 1 + g.villa.images.length) % g.villa.images.length }))}
              >&#8249;</button>
              <img src={gallery.villa.images[gallery.idx]} alt={gallery.villa.title} />
              <button
                className="vgallery-arrow vgallery-next"
                onClick={() => setGallery(g => ({ ...g, idx: (g.idx + 1) % g.villa.images.length }))}
              >&#8250;</button>
            </div>

            <div className="vgallery-thumbs">
              {gallery.villa.images.map((img, i) => (
                <img
                  key={i} src={img} alt=""
                  className={i === gallery.idx ? "active" : ""}
                  onClick={() => setGallery(g => ({ ...g, idx: i }))}
                />
              ))}
            </div>
          </div>
        </div>
        
      )}
         <Footer />
    </div>
  );
};

export default Villa;