"use client"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { FaRing, FaHeart, FaMusic, FaCamera, FaUtensils, FaCar, FaGift } from "react-icons/fa"
import { colors, gradients, typography } from "../assets/components/theme-colors"

const weddingPackages = [
  {
    name: "Intimate Wedding",
    price: "₹2,50,000",
    duration: "Full Day",
    guests: "Up to 100",
    features: [
      "Elegant venue decoration",
      "Bridal suite preparation",
      "Professional photography",
      "Traditional catering menu",
      "Live music arrangements",
      "Wedding cake & desserts",
      "Floral arrangements",
      "Basic lighting setup",
    ],
    popular: false,
  },
  {
    name: "Grand Wedding",
    price: "₹5,00,000",
    duration: "2 Days",
    guests: "Up to 300",
    features: [
      "Luxury venue transformation",
      "Pre-wedding ceremonies setup",
      "Professional photo & video team",
      "Multi-cuisine catering",
      "Live band & DJ services",
      "Designer wedding cake",
      "Premium floral decorations",
      "Stage & mandap decoration",
      "Welcome drinks & cocktails",
      "Valet parking service",
    ],
    popular: true,
  },
  {
    name: "Royal Wedding",
    price: "₹10,00,000",
    duration: "3 Days",
    guests: "Up to 500",
    features: [
      "Palace-style venue setup",
      "Complete wedding planning",
      "Cinematic photography & videography",
      "Royal feast catering",
      "Celebrity entertainment",
      "Multi-tier designer cake",
      "Exotic floral arrangements",
      "Grand stage & mandap",
      "Premium bar service",
      "Luxury transportation",
      "Wedding favors & gifts",
      "Honeymoon suite arrangement",
    ],
    popular: false,
  },
]

const weddingServices = [
  {
    icon: <FaRing className="text-4xl" />,
    title: "Wedding Planning",
    description: "Complete wedding planning from engagement to reception with expert coordination",
  },
  {
    icon: <FaRing className="text-4xl" />,
    title: "Floral Design",
    description: "Stunning floral arrangements for mandap, stage, and venue decoration",
  },
  {
    icon: <FaCamera className="text-4xl" />,
    title: "Photography & Videography",
    description: "Professional wedding photography and cinematic videography services",
  },
  {
    icon: <FaUtensils className="text-4xl" />,
    title: "Catering Services",
    description: "Traditional and contemporary cuisine with customizable wedding menus",
  },
  {
    icon: <FaMusic className="text-4xl" />,
    title: "Entertainment",
    description: "Live music, DJ services, and cultural performances for your celebration",
  },
  {
    icon: <FaCar className="text-4xl" />,
    title: "Transportation",
    description: "Luxury transportation arrangements for bride, groom, and guests",
  },
  {
    icon: <FaGift className="text-4xl" />,
    title: "Wedding Favors",
    description: "Personalized wedding favors and gifts for your guests",
  },
  {
    icon: <FaHeart className="text-4xl" />,
    title: "Honeymoon Planning",
    description: "Romantic honeymoon packages and destination planning services",
  },
]

const weddingCeremonies = [
  {
    name: "Engagement Ceremony",
    description: "Beautiful ring ceremony with traditional rituals and modern touches",
    image: "https://lh3.googleusercontent.com/p/AF1QipMamsbyDNvfHJ3TEU0KKmx0OVmfElAC7PtvfgZf=s1360-w1360-h1020-rw",
  },
  {
    name: "Mehendi Ceremony",
    description: "Colorful mehendi celebration with music, dance, and traditional decorations",
    image: "https://lh3.googleusercontent.com/p/AF1QipNLL5Pd7sDQJEFrpRca130f4goQaZlh1Pg9VTDf=s1360-w1360-h1020-rw",
  },
  {
    name: "Sangam Ceremony",
    description: "Pre-wedding celebration bringing both families together in joy",
    image: "https://lh3.googleusercontent.com/p/AF1QipN6ED55eaLM0-auroZdOBe8o_mJ9JRF5wi5VlhT=s1360-w1360-h1020-rw",
  },
  {
    name: "Wedding Ceremony",
    description: "Sacred wedding rituals in a beautifully decorated mandap setting",
    image: "https://lh3.googleusercontent.com/p/AF1QipPHAKk11oOaGddJUX5VUeChlqxGIi2-tcpnNUbU=s1360-w1360-h1020-rw",
  },
  {
    name: "Reception Party",
    description: "Grand reception celebration with dinner, dance, and entertainment",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrPgPWJh0nECnwhg1ifwSkOisPZyCAQO040KyBlU2eVjWSXX_wgSHzFMaZ4bteXYgsnvn-jC1nspMzNczLKzpBKn2G1K6PafonVCncsy8Nv5VaV8YixXYZwENrLsssKT1Azi3Y-sA=s1360-w1360-h1020-rw",
  },
]

export default function Marriage() {
  return (
    <div
      className="relative overflow-hidden min-h-screen"
      style={{
        background: gradients.primary,
        color: colors.black,
        fontFamily: typography.body,
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40">
          <div
            className="w-full h-full bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20L0 20z' fill='${encodeURIComponent(
                colors.royalGreen,
              )}' fillOpacity='0.2'/%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              style={{
                color: colors.royalGreen,
                fontFamily: typography.heading,
              }}
            >
              Dream Weddings
            </motion.h1>
            <motion.p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8" style={{ color: colors.black }}>
              Create the wedding of your dreams with our comprehensive planning and exquisite venues
            </motion.p>
            <motion.div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="#packages"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full font-bold text-lg shadow-lg"
                style={{
                  backgroundColor: colors.gold,
                  color: colors.black,
                }}
              >
                View Packages
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full font-bold text-lg border-2 shadow-lg"
                style={{
                  backgroundColor: "transparent",
                  color: colors.royalGreen,
                  borderColor: colors.royalGreen,
                }}
              >
                Plan Your Wedding
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative max-w-4xl mx-auto"
          >
            <div
              className="rounded-2xl overflow-hidden shadow-2xl h-96 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://lh3.googleusercontent.com/p/AF1QipMamsbyDNvfHJ3TEU0KKmx0OVmfElAC7PtvfgZf=s1360-w1360-h1020-rw')",
                border: `3px solid ${colors.gold}`,
              }}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -right-6 p-6 rounded-xl shadow-lg"
              style={{
                backgroundColor: colors.gold,
                color: colors.black,
              }}
            >
              <p className="text-2xl font-bold">200+</p>
              <p className="text-sm">Dream Weddings</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Wedding Ceremonies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{
                color: colors.royalGreen,
                fontFamily: typography.heading,
              }}
            >
              Wedding Ceremonies
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.black }}>
              From engagement to reception, we handle every ceremony with perfection
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {weddingCeremonies.map((ceremony, index) => (
              <motion.div
                key={ceremony.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden shadow-lg"
                style={{
                  backgroundColor: colors.white,
                  border: `1px solid ${colors.gold}30`,
                }}
              >
                <div className="relative h-48">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${ceremony.image}')`,
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, ${colors.black}60, transparent)`,
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{
                      color: colors.royalGreen,
                      fontFamily: typography.heading,
                    }}
                  >
                    {ceremony.name}
                  </h3>
                  <p style={{ color: colors.black }}>{ceremony.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{
                color: colors.royalGreen,
                fontFamily: typography.heading,
              }}
            >
              Our Wedding Services
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.black }}>
              Comprehensive wedding services to make your special day perfect
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weddingServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl shadow-lg text-center"
                style={{
                  backgroundColor: colors.white,
                  border: `1px solid ${colors.gold}30`,
                }}
              >
                <div className="mb-4 flex justify-center" style={{ color: colors.royalGreen }}>
                  {service.icon}
                </div>
                <h3
                  className="text-lg font-bold mb-3"
                  style={{
                    color: colors.royalGreen,
                    fontFamily: typography.heading,
                  }}
                >
                  {service.title}
                </h3>
                <p className="text-sm" style={{ color: colors.black }}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{
                color: colors.royalGreen,
                fontFamily: typography.heading,
              }}
            >
              Wedding Packages
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.black }}>
              Choose the perfect wedding package for your dream celebration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {weddingPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                className={`relative p-8 rounded-2xl shadow-xl ${pkg.popular ? "ring-4" : ""}`}
                style={{
                  backgroundColor: colors.white,
                  border: `2px solid ${pkg.popular ? colors.gold : colors.royalGreen + "30"}`,
                }}
              >
                {pkg.popular && (
                  <div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-sm font-bold"
                    style={{
                      backgroundColor: colors.gold,
                      color: colors.black,
                    }}
                  >
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{
                      color: colors.royalGreen,
                      fontFamily: typography.heading,
                    }}
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

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 rounded-full font-bold text-lg"
                  style={{
                    backgroundColor: pkg.popular ? colors.gold : colors.royalGreen,
                    color: pkg.popular ? colors.black : colors.white,
                  }}
                >
                  Choose Package
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-12 rounded-2xl"
            style={{
              backgroundColor: colors.royalGreen,
              color: colors.white,
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: typography.heading }}>
              Ready to Plan Your Dream Wedding?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let our wedding experts create the perfect celebration for your special day
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full font-bold text-lg"
                style={{
                  backgroundColor: colors.gold,
                  color: colors.black,
                }}
              >
                Start Planning
              </motion.a>
              <motion.a
                href="tel:+919876543210"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full font-bold text-lg border-2"
                style={{
                  backgroundColor: "transparent",
                  color: colors.white,
                  borderColor: colors.white,
                }}
              >
                Call Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
