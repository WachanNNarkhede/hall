"use client";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
const colors = {
  cream: "#F5F5DC",
  gold: "#D4A017",
  royalGreen: "#1B4D3E",
  black: "#1A1A1A",
  lightGold: "rgba(212, 160, 23, 0.2)",
  darkNavy: "#0A1428",
  navy: "#1A2A44",
  lightGold2: "#E6B422",
  champagne: "#F5E6C8",
  white: "#ffffff",
};

const gradients = {
  primary: `linear-gradient(135deg, ${colors.cream} 0%, ${colors.lightGold} 100%)`,
  dark: `linear-gradient(135deg, ${colors.darkNavy} 0%, ${colors.navy} 100%)`,
  gold: `linear-gradient(135deg, ${colors.gold} 0%, ${colors.lightGold2} 100%)`,
  royal: `linear-gradient(135deg, ${colors.royalGreen} 0%, ${colors.navy} 100%)`,
};

const BirthdayParty = ({ setCurrentPage }) => {
  const birthdayPackages = [
    {
      name: "Kids Wonderland",
      price: "₹25,000",
      duration: "4 hours",
      guests: "Up to 50",
      features: [
        "Themed decorations (Cartoon/Princess/Superhero)",
        "Professional entertainer & games",
        "Kids-friendly menu with cake",
        "Photo booth with props",
        "Party favors for all kids",
        "Balloon arrangements",
      ],
      popular: false,
    },
    {
      name: "Teen Celebration",
      price: "₹45,000",
      duration: "5 hours",
      guests: "Up to 80",
      features: [
        "Modern party decorations",
        "DJ & music system",
        "Dance floor with lighting",
        "Customized birthday cake",
        "Buffet dinner/lunch",
        "Photography coverage",
        "Social media worthy setup",
      ],
      popular: true,
    },
    {
      name: "Adult Milestone",
      price: "₹75,000",
      duration: "6 hours",
      guests: "Up to 120",
      features: [
        "Elegant venue decoration",
        "Premium catering menu",
        "Live music or DJ",
        "Professional photography",
        "Customized cake & desserts",
        "Welcome drinks",
        "Dedicated event coordinator",
      ],
      popular: false,
    },
  ];

  const birthdayServices = [
    {
      icon: "🎂",
      title: "Custom Cakes",
      description: "Designer cakes crafted by expert bakers with personalized themes and flavors",
    },
    {
      icon: "🎵",
      title: "Entertainment",
      description: "Professional DJs, live music, entertainers, and interactive games for all ages",
    },
    {
      icon: "📸",
      title: "Photography",
      description: "Capture every precious moment with professional photography and videography",
    },
    {
      icon: "🍽️",
      title: "Catering",
      description: "Delicious menus tailored to your preferences, from kids' favorites to gourmet cuisine",
    },
    {
      icon: "🎁",
      title: "Party Favors",
      description: "Customized return gifts and party favors to make your celebration memorable",
    },
    {
      icon: "✨",
      title: "Themed Decor",
      description: "Transform your venue with stunning themed decorations and ambiance",
    },
  ];

  const birthdayGallery = [
    { src: "https://lh3.googleusercontent.com/p/AF1QipPkjqtp9Jwioe1sQxiRVK2yEXdujLuCsD9cdr3c=s1360-w1360-h1020-rw", alt: "Kids birthday party with colorful decorations" },
    { src: "https://lh3.googleusercontent.com/p/AF1QipMKY9iKptb1nSQDsmIC-A1W8tjEbx7PdLsscQDD=s1360-w1360-h1020-rw", alt: "Elegant adult birthday celebration" },
    { src: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npFLbqPdVclJpZiQzkLOfociJLytWLyIo71tZ-WRodRHqHKkLUbEUtKbs9Ml7l4ukyVvgVUzyPyJ99WgRFe2YAVpNiL1SYJFht8KnXn-wcqvO1QVxY0SUHQM5vWPWnjG5hgpGYv=s1360-w1360-h1020-rw", alt: "Teen birthday party with modern setup" },
    { src: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr1SX8xBf3QZReqXqJb0G48yVhlOO4fZ15ZQMXtsAMuQ0ZJj4rSk92BNhoWDlpcnNKIZO7G0vEKkjPasYUkpTWTuiEa_jCe8a9y9u5rBVEsJeHAULVAX3x8_tKjgewYDDwtb9RD=s1360-w1360-h1020-rw", alt: "Birthday cake cutting ceremony" },
    { src: "https://lh3.googleusercontent.com/p/AF1QipP6w2PweIcuull-8puli14wM9Gnc78gs3fQX-k4=s1360-w1360-h1020-rw", alt: "Birthday party entertainment" },
    { src: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqHgh8kS_7CeLUkHQcLeqD3l4v0QtxpuJsGu-AH-zr9wf9KabXAyLYyXRaDQBZUJ6yqUA6eWXEyln46O_-WV6o-ZIKgTb8ASCuauBWv8VBfeD7gEfmbbW6MstVuOz9R07L3uJcpPKPSBltl=s1360-w1360-h1020-rw", alt: "Birthday party dining setup" },
  ];

  const handleNavClick = (page) => {
    if (setCurrentPage) {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div
      className="relative overflow-hidden min-h-screen pt-20"
      style={{
        background: gradients.primary,
        color: colors.black,
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="w-full flex justify-center"
            >
              <svg width="300" height="30" viewBox="0 0 300 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 15 L25 15 Q35 10 45 15 Q55 20 65 15 H235 Q245 20 255 15 Q265 10 275 15 L290 15" stroke="#D4A017" stroke-width="3"/>
                <path d="M45 10 Q55 5 65 10 M65 20 Q55 25 65 20 M235 10 Q245 5 255 10 M255 20 Q245 25 255 20" fill="#D4A017"/>
                <path d="M50 15 Q60 10 70 15 T90 15 T110 15 C120 15 130 10 140 15 C150 20 160 15 170 15 C180 15 190 20 200 15 C210 10 220 15 230 15 C240 15 250 20 260 15 C270 10 280 15 290 15" stroke="#D4A017" stroke-width="3" fill="none"/>
                <path d="M200 10 L205 5 L210 10 Z" fill="#D4A017"/>
              </svg>
            </motion.div>
            <h1
              className="text-5xl md:text-7xl font-bold mb-6 font-heading"
              style={{ color: colors.royalGreen, fontFamily: "'Cinzel', serif" }}
            >
              Birthday Celebrations
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full flex justify-center"
            >
              <svg width="300" height="30" viewBox="0 0 300 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 15 L25 15 Q35 10 45 15 Q55 20 65 15 H235 Q245 20 255 15 Q265 10 275 15 L290 15" stroke="#D4A017" stroke-width="3"/>
                <path d="M45 10 Q55 5 65 10 M65 20 Q55 25 65 20 M235 10 Q245 5 255 10 M255 20 Q245 25 255 20" fill="#D4A017"/>
                <path d="M50 15 Q60 10 70 15 T90 15 T110 15 C120 15 130 10 140 15 C150 20 160 15 170 15 C180 15 190 20 200 15 C210 10 220 15 230 15 C240 15 250 20 260 15 C270 10 280 15 290 15" stroke="#D4A017" stroke-width="3" fill="none"/>
                <path d="M200 10 L205 5 L210 10 Z" fill="#D4A017"/>
              </svg>
            </motion.div>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8" style={{ color: colors.black }}>
              Make every birthday unforgettable with our magical celebrations tailored for all ages
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#packages"
                className="px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-transform hover:scale-105"
                style={{ backgroundColor: colors.gold, color: colors.black }}
              >
                View Packages
              </a>
              <button
                onClick={() => handleNavClick("contact")}
                className="px-8 py-4 rounded-full font-bold text-lg border-2 shadow-lg transition-transform hover:scale-105"
                style={{
                  backgroundColor: "transparent",
                  color: colors.royalGreen,
                  borderColor: colors.royalGreen,
                }}
              >
                Book Consultation
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-4xl mx-auto">
           <div className="group relative h-[70svh] w-full rounded-2xl overflow-hidden shadow-2xl border-[3px]" style={{ borderColor: colors.gold }}>
  <div
    className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
    style={{
      backgroundImage: "url('https://lh3.googleusercontent.com/gps-cs-s/AC9h4noBmDv_Hj97S2uuVWhYRS6uTXRu4R8BXwalaMeobi8-f6E5EblNe75QWINzDI7qADK46BpqrCM5BwX53n_tWVbQIQ5LqJKlJkunMWd7AH1xy1m8A7i92K6yk1MTnnobpEolsAs=s1360-w1360-h1020-rw')",
    }}
  ></div>

  <div
    className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700"
    style={{
      backgroundImage: "url('https://lh3.googleusercontent.com/p/AF1QipMKY9iKptb1nSQDsmIC-A1W8tjEbx7PdLsscQDD=s1360-w1360-h1020-rw')", // ← your hover image
    }}
  ></div>
</div>

            <div
              className="absolute -bottom-6 -right-6 p-6 rounded-xl shadow-lg"
              style={{ backgroundColor: colors.gold, color: colors.black }}
            >
              <p className="text-2xl font-bold">500+</p>
              <p className="text-sm">Happy Birthdays</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="w-full flex justify-center"
            >
              <svg width="250" height="25" viewBox="0 0 250 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12.5 L15 12.5 Q20 7.5 25 12.5 Q30 17.5 35 12.5 H215 Q220 17.5 225 12.5 Q230 7.5 235 12.5 L245 12.5" stroke="#1B4D3E" stroke-width="2"/>
                <path d="M25 7.5 Q30 2.5 35 7.5 M35 17.5 Q30 22.5 35 17.5 M215 7.5 Q220 2.5 225 7.5 M225 17.5 Q220 22.5 225 17.5" fill="#1B4D3E"/>
                <path d="M30 12.5 Q35 7.5 40 12.5 T50 12.5 T60 12.5 C65 12.5 70 7.5 75 12.5 C80 17.5 85 12.5 90 12.5 C95 12.5 100 17.5 105 12.5 C110 7.5 115 12.5 120 12.5 C125 12.5 130 17.5 135 12.5 C140 7.5 145 12.5 150 12.5 T160 12.5 T170 12.5" stroke="#1B4D3E" stroke-width="2" fill="none"/>
                <path d="M100 7.5 L105 2.5 L110 7.5 Z" fill="#1B4D3E"/>
              </svg>
            </motion.div>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 font-heading"
              style={{ color: colors.royalGreen, fontFamily: "'Cinzel', serif" }}
            >
              Our Birthday Services
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full flex justify-center"
            >
              <svg width="250" height="25" viewBox="0 0 250 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12.5 L15 12.5 Q20 7.5 25 12.5 Q30 17.5 35 12.5 H215 Q220 17.5 225 12.5 Q230 7.5 235 12.5 L245 12.5" stroke="#1B4D3E" stroke-width="2"/>
                <path d="M25 7.5 Q30 2.5 35 7.5 M35 17.5 Q30 22.5 35 17.5 M215 7.5 Q220 2.5 225 7.5 M225 17.5 Q220 22.5 225 17.5" fill="#1B4D3E"/>
                <path d="M30 12.5 Q35 7.5 40 12.5 T50 12.5 T60 12.5 C65 12.5 70 7.5 75 12.5 C80 17.5 85 12.5 90 12.5 C95 12.5 100 17.5 105 12.5 C110 7.5 115 12.5 120 12.5 C125 12.5 130 17.5 135 12.5 C140 7.5 145 12.5 150 12.5 T160 12.5 T170 12.5" stroke="#1B4D3E" stroke-width="2" fill="none"/>
                <path d="M100 7.5 L105 2.5 L110 7.5 Z" fill="#1B4D3E"/>
              </svg>
            </motion.div>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.black }}>
              Everything you need to create the perfect birthday celebration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {birthdayServices.map((service) => (
              <div
                key={service.title}
                className="p-8 rounded-2xl shadow-lg bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                style={{ border: `1px solid ${colors.gold}30` }}
              >
                <div className="mb-6 flex justify-center text-4xl" style={{ color: colors.royalGreen }}>
                  {service.icon}
                </div>
                <h3
                  className="text-xl font-bold mb-4 text-center font-heading"
                  style={{ color: colors.royalGreen, fontFamily: "'Cinzel', serif" }}
                >
                  {service.title}
                </h3>
                <p className="text-center" style={{ color: colors.black }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="w-full flex justify-center"
            >
              <svg width="250" height="25" viewBox="0 0 250 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12.5 L15 12.5 Q20 7.5 25 12.5 Q30 17.5 35 12.5 H215 Q220 17.5 225 12.5 Q230 7.5 235 12.5 L245 12.5" stroke="#1B4D3E" stroke-width="2"/>
                <path d="M25 7.5 Q30 2.5 35 7.5 M35 17.5 Q30 22.5 35 17.5 M215 7.5 Q220 2.5 225 7.5 M225 17.5 Q220 22.5 225 17.5" fill="#1B4D3E"/>
                <path d="M30 12.5 Q35 7.5 40 12.5 T50 12.5 T60 12.5 C65 12.5 70 7.5 75 12.5 C80 17.5 85 12.5 90 12.5 C95 12.5 100 17.5 105 12.5 C110 7.5 115 12.5 120 12.5 C125 12.5 130 17.5 135 12.5 C140 7.5 145 12.5 150 12.5 T160 12.5 T170 12.5" stroke="#1B4D3E" stroke-width="2" fill="none"/>
                <path d="M100 7.5 L105 2.5 L110 7.5 Z" fill="#1B4D3E"/>
              </svg>
            </motion.div>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 font-heading"
              style={{ color: colors.royalGreen, fontFamily: "'Cinzel', serif" }}
            >
              Birthday Packages
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full flex justify-center"
            >
              <svg width="250" height="25" viewBox="0 0 250 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12.5 L15 12.5 Q20 7.5 25 12.5 Q30 17.5 35 12.5 H215 Q220 17.5 225 12.5 Q230 7.5 235 12.5 L245 12.5" stroke="#1B4D3E" stroke-width="2"/>
                <path d="M25 7.5 Q30 2.5 35 7.5 M35 17.5 Q30 22.5 35 17.5 M215 7.5 Q220 2.5 225 7.5 M225 17.5 Q220 22.5 225 17.5" fill="#1B4D3E"/>
                <path d="M30 12.5 Q35 7.5 40 12.5 T50 12.5 T60 12.5 C65 12.5 70 7.5 75 12.5 C80 17.5 85 12.5 90 12.5 C95 12.5 100 17.5 105 12.5 C110 7.5 115 12.5 120 12.5 C125 12.5 130 17.5 135 12.5 C140 7.5 145 12.5 150 12.5 T160 12.5 T170 12.5" stroke="#1B4D3E" stroke-width="2" fill="none"/>
                <path d="M100 7.5 L105 2.5 L110 7.5 Z" fill="#1B4D3E"/>
              </svg>
            </motion.div>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.black }}>
              Choose the perfect package for your special celebration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {birthdayPackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative p-8 rounded-2xl shadow-xl bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  pkg.popular ? "ring-4" : ""
                }`}
                style={{
                  border: `2px solid ${pkg.popular ? colors.gold : colors.royalGreen + "30"}`,
                  ringColor: pkg.popular ? colors.gold : "transparent",
                }}
              >
                {pkg.popular && (
                  <div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-sm font-bold"
                    style={{ backgroundColor: colors.gold, color: colors.black }}
                  >
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3
                    className="text-2xl font-bold mb-2 font-heading"
                    style={{ color: colors.royalGreen, fontFamily: "'Cinzel', serif" }}
                  >
                    {pkg.name}
                  </h3>
                  <div className="text-4xl font-bold mb-2" style={{ color: colors.gold }}>
                    {pkg.price}
                  </div>
                  <p style={{ color: colors.black }}>
                    {pkg.duration} • {pkg.guests}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-lg mt-0.5" style={{ color: colors.gold }}>
                        ✓
                      </span>
                      <span style={{ color: colors.black }}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className="w-full py-3 rounded-full font-bold text-lg transition-transform hover:scale-105"
                  style={{
                    backgroundColor: pkg.popular ? colors.gold : colors.royalGreen,
                    color: pkg.popular ? colors.black : colors.white,
                  }}
                >
                  Choose Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="w-full flex justify-center"
            >
              <svg width="250" height="25" viewBox="0 0 250 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12.5 L15 12.5 Q20 7.5 25 12.5 Q30 17.5 35 12.5 H215 Q220 17.5 225 12.5 Q230 7.5 235 12.5 L245 12.5" stroke="#1B4D3E" stroke-width="2"/>
                <path d="M25 7.5 Q30 2.5 35 7.5 M35 17.5 Q30 22.5 35 17.5 M215 7.5 Q220 2.5 225 7.5 M225 17.5 Q220 22.5 225 17.5" fill="#1B4D3E"/>
                <path d="M30 12.5 Q35 7.5 40 12.5 T50 12.5 T60 12.5 C65 12.5 70 7.5 75 12.5 C80 17.5 85 12.5 90 12.5 C95 12.5 100 17.5 105 12.5 C110 7.5 115 12.5 120 12.5 C125 12.5 130 17.5 135 12.5 C140 7.5 145 12.5 150 12.5 T160 12.5 T170 12.5" stroke="#1B4D3E" stroke-width="2" fill="none"/>
                <path d="M100 7.5 L105 2.5 L110 7.5 Z" fill="#1B4D3E"/>
              </svg>
            </motion.div>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 font-heading"
              style={{ color: colors.royalGreen, fontFamily: "'Cinzel', serif" }}
            >
              Birthday Celebrations Gallery
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full flex justify-center"
            >
              <svg width="250" height="25" viewBox="0 0 250 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12.5 L15 12.5 Q20 7.5 25 12.5 Q30 17.5 35 12.5 H215 Q220 17.5 225 12.5 Q230 7.5 235 12.5 L245 12.5" stroke="#1B4D3E" stroke-width="2"/>
                <path d="M25 7.5 Q30 2.5 35 7.5 M35 17.5 Q30 22.5 35 17.5 M215 7.5 Q220 2.5 225 7.5 M225 17.5 Q220 22.5 225 17.5" fill="#1B4D3E"/>
                <path d="M30 12.5 Q35 7.5 40 12.5 T50 12.5 T60 12.5 C65 12.5 70 7.5 75 12.5 C80 17.5 85 12.5 90 12.5 C95 12.5 100 17.5 105 12.5 C110 7.5 115 12.5 120 12.5 C125 12.5 130 17.5 135 12.5 C140 7.5 145 12.5 150 12.5 T160 12.5 T170 12.5" stroke="#1B4D3E" stroke-width="2" fill="none"/>
                <path d="M100 7.5 L105 2.5 L110 7.5 Z" fill="#1B4D3E"/>
              </svg>
            </motion.div>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.black }}>
              See how we bring birthday dreams to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {birthdayGallery.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl aspect-square cursor-pointer group"
                style={{
                  border: `2px solid ${colors.gold}`,
                  boxShadow: `0 10px 30px ${colors.lightGold}`,
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div
            className="p-12 rounded-2xl"
            style={{ backgroundColor: colors.royalGreen, color: colors.white }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading" style={{ fontFamily: "'Cinzel', serif" }}>
              Ready to Plan Your Perfect Birthday?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let our experts create a magical celebration that will be remembered forever
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => handleNavClick("contact")}
                className="px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105"
                style={{ backgroundColor: colors.gold, color: colors.black }}
              >
                Book Your Celebration
              </button>
              <a
                href="tel:+919876543210"
                className="px-8 py-4 rounded-full font-bold text-lg border-2 transition-transform hover:scale-105"
                style={{
                  backgroundColor: "transparent",
                  color: colors.white,
                  borderColor: colors.white,
                }}
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BirthdayParty;