import React, { useState } from "react";
import Footer from "../components/Footer";
import "./Visa.css";

const visas = [
  {
    country: "USA Visa",
    img: "https://flagcdn.com/w1280/us.png",
    desc: "Apply for tourist, business, and student visas for the USA.",

    // PDF LINK ADDED HERE
    pdfLink:
      "http://stampthepassport.com/doc/visa/unitedstates_touristvisa_bns_holidays_visa_requirement.pdf",

    
  },
  {
    country: "UK Visa",
    img: "https://flagcdn.com/w1280/gb.png",
    desc: "Get assistance for UK visa applications with easy processing.",
    pdfLink:
    "http://stampthepassport.com/doc/visa/unitedkingdom_touristvisa_bns_holidays_visa_requirement.pdf",
  },
  {
    country: "Spain Visa",
    img: "https://flagcdn.com/w1280/es.png",
    desc: "Get assistance for Spain visa applications with easy processing.",
    pdfLink:
    "http://stampthepassport.com/doc/visa/spain_touristvisa_bns_holidays_visa_requirement.pdf",
  },
  {
    country: "Dubai Visa",
    img: "https://flagcdn.com/w1280/ae.png",
    desc: "Fast and easy Dubai visa services for your travel plans.",
    pdfLink:
      "http://stampthepassport.com/doc/visa/dubai_touristvisa_bns_holidays_visa_requirement.pdf",
  },
  {
    country: "Australia Visa",
    img: "https://flagcdn.com/w1280/au.png",
    desc: "Apply for Australia tourist and work visas hassle-free.",
    pdfLink:
    "http://stampthepassport.com/doc/visa/australia_touristvisa_bns_holidays_visa_requirement.pdf",
  },
  {
    country: "Canada Visa",
    img: "https://flagcdn.com/w1280/ca.png",
    desc: "Complete support for Canada visa applications.",
    pdfLink:
    "http://stampthepassport.com/doc/visa/canada_touristvisa_bns_holidays_visa_requirement.pdf",
  },
  {
    country: "Thailand Visa",
    img: "https://flagcdn.com/w1280/th.png",
    desc: "Easy and smooth processing for Thailand tourist visas.",
    pdfLink:
    "http://stampthepassport.com/doc/visa/thailand_touristvisa_bns_holidays_visa_requirement.pdf",
  },
  {
    country: "Singapore Visa",
    img: "https://flagcdn.com/w1280/sg.png",
    desc: "Fast and reliable assistance for Singapore visa applications.",
    pdfLink:
    "http://stampthepassport.com/doc/visa/singapore_touristvisa_bns_holidays_visa_requirement.pdf",
  },
  {
    country: "China Visa",
    img: "https://flagcdn.com/w1280/cn.png",
    desc: "Fast and reliable assistance for China visa applications.",
    pdfLink:
    "http://stampthepassport.com/doc/visa/china_touristvisa_bns_holidays_visa_requirement.pdf",
  },
  {
    country: "Japan Visa",
    img: "https://flagcdn.com/w1280/jp.png",
    desc: "Professional support for Japan tourist and business visas.",
    pdfLink:
      "http://stampthepassport.com/doc/visa/japan_touristvisa_bns_holidays_visa_requirement.pdf",
  },
  {
    country: "New Zealand Visa",
    img: "https://flagcdn.com/w1280/nz.png",
    desc: "Hassle-free guidance for New Zealand visa applications.",
    pdfLink:
    "http://stampthepassport.com/doc/visa/newzealand_touristvisa_bns_holidays_visa_requirement.pdf",
  },
  {
    country: "Switzerland Visa",
    img: "https://flagcdn.com/w1280/ch.png",
    desc: "Complete visa support for Switzerland travel and tourism.",
    pdfLink:
    "http://stampthepassport.com/doc/visa/switzerland_touristvisa_bns_holidays_visa_requirement.pdf",
  },
  {
    country: "South Korea Visa",
    img: "https://flagcdn.com/w1280/kr.png",
    desc: "Easy and secure processing for South Korea visa applications.",
    pdfLink:
    "http://stampthepassport.com/doc/visa/korea,republicofsouthkorea_touristvisa_bns_holidays_visa_requirement.pdf",
  },
  {
    country: "South Africa Visa",
    img: "https://flagcdn.com/w1280/za.png",
    desc: "Reliable assistance for South Africa tourist and business visas.",
    documents: {
      subtitle: "As per South Africa Immigration",
      items: [
        { text: "PASSPORT" },
        { text: "LAST 6 MONTHS BANK STATEMENT" },
        { text: "PAY SLIPS" },
        { text: "INCOME TAX RETURN" },
        { text: "TRAVEL ITINERARY" },
      ],
    },
  },
  {
    country: "Sri Lanka Visa",
    img: "https://flagcdn.com/w1280/lk.png",
    desc: "Simple and quick support for Sri Lanka visa applications.",
    pdfLink:
    "http://stampthepassport.com/doc/visa/srilanka_touristvisa_bns_holidays_visa_requirement.pdf",
  },
  {
    country: "Finland Visa",
    img: "https://flagcdn.com/w1280/fi.png",
    desc: "Complete guidance for Finland tourist and business visas.",
    documents: {
      subtitle: "As per Finland Immigration",
      items: [
        { text: "PASSPORT" },
        { text: "LAST 6 MONTHS BANK STATEMENT" },
        { text: "PAY SLIPS" },
        { text: "INCOME TAX RETURN" },
        { text: "TRAVEL ITINERARY" },
      ],
    },
  },
  {
    country: "France Visa",
    img: "https://flagcdn.com/w1280/fr.png",
    desc: "Professional visa support for France travel and tourism.",
    pdfLink:
    "http://stampthepassport.com/doc/visa/france_touristvisa_bns_holidays_visa_requirement.pdf",
  },
  {
    country: "Italy Visa",
    img: "https://flagcdn.com/w1280/it.png",
    desc: "Professional visa support for Italy travel and tourism.",
    pdfLink:
    "http://stampthepassport.com/doc/visa/italy_touristvisa_bns_holidays_visa_requirement.pdf",
  },
  {
    country: "Germany Visa",
    img: "https://flagcdn.com/w1280/de.png",
    desc: "End-to-end support for Germany visa applications.",
    pdfLink:
    "http://stampthepassport.com/doc/visa/germany_touristvisa_bns_holidays_visa_requirement.pdf",
  },
  {
    country: "Philippines Visa",
    img: "https://flagcdn.com/w1280/ph.png",
    desc: "End-to-end support for Philippines visa applications.",
    pdfLink:
    "http://stampthepassport.com/doc/visa/philippines_touristvisa_bns_holidays_visa_requirement.pdf",
  },
  {
    country: "Norway Visa",
    img: "https://flagcdn.com/w1280/no.png",
    desc: "Professional assistance for Norway tourist and business visas.",
    documents: {
      subtitle: "As per Norway Immigration",
      items: [
        { text: "PASSPORT" },
        { text: "LAST 6 MONTHS BANK STATEMENT" },
        { text: "PAY SLIPS" },
        { text: "INCOME TAX RETURN" },
        { text: "TRAVEL ITINERARY" },
      ],
    },
  },
  {
    country: "Vietnam Visa",
    img: "https://flagcdn.com/w1280/vn.png",
    desc: "Quick and reliable support for Vietnam visa applications.",
    pdfLink:
    "http://stampthepassport.com/doc/visa/vietnam_touristvisa_bns_holidays_visa_requirement.pdf",
  },
  {
    country: "Turkey Visa",
    img: "https://flagcdn.com/w1280/tr.png",
    desc: "Quick and reliable support for Turkey visa applications.",
    pdfLink:
    "http://stampthepassport.com/doc/visa/turkey_touristvisa_bns_holidays_visa_requirement.pdf",
  },
];

const Visa = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleOpenPdf = (pdfLink) => {
    window.open(pdfLink, "_blank");
  };

  const openApplyForm = (country) => {
    setSelectedCountry(country);
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendToWhatsApp = (e) => {
    e.preventDefault();

    const message = `
*New Visa Lead*

*Country:* ${selectedCountry}

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
`;

    const whatsappUrl = `https://wa.me/917066620673?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");

    setShowForm(false);

    setFormData({
      name: "",
      phone: "",
      email: "",
    });
  };

  const filteredVisas = visas.filter((visa) => {
    const matchesSearch = visa.country
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesFilter =
      activeFilter === "All" || visa.category === activeFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <div className="visa-container">
        <h1 className="visa-title">Visa Services</h1>

        <p className="visa-subtitle">
          Get visa assistance for all countries with quick and easy processing.
        </p>

        {/* SEARCH */}
        <div className="visa-search-wrapper">
          <input
            type="text"
            placeholder="Search Visa Country..."
            className="visa-search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* FILTERS */}
        <div className="visa-filters">
          {["All", "Tourist", "Business", "Student"].map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${
                activeFilter === filter ? "active-filter" : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="visa-grid">
          {filteredVisas.map((visa, index) => (
            <div className="visa-card" key={index}>
              <img src={visa.img} alt={visa.country} />

              <div className="visa-content">
                <h3>{visa.country}</h3>

                <p>{visa.desc}</p>

                <div className="visa-category">
                  {visa.category} Tourist
                </div>

                <div className="visa-btn-group">
                  <button
                    className="btn-apply"
                    onClick={() => openApplyForm(visa.country)}
                  >
                    Apply Now
                  </button>

                  <button
                    className="btn-docs"
                    onClick={() => handleOpenPdf(visa.pdfLink)}
                  >
                    Required Documents
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* APPLY FORM MODAL */}
        {showForm && (
          <div className="modal-overlay" onClick={() => setShowForm(false)}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
              <button
                className="modal-close"
                onClick={() => setShowForm(false)}
              >
                &times;
              </button>

              <h2 className="modal-title">Apply for {selectedCountry}</h2>

              <form className="visa-form" onSubmit={sendToWhatsApp}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />

                <button type="submit" className="submit-btn">
                  Submit on WhatsApp
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Visa;