"use client"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { FaRing, FaCamera, FaMusic, FaFlower, FaGift, FaGlass } from "react-icons/fa"
import { colors, gradients, typography } from "../assets/components/theme-colors"

const engagementPackages = [
  {
    name: "Intimate Engagement",
    price: "₹35,000",
    duration: "4 hours",
    guests: "Up to 50",
    features: [
      "Elegant ring ceremony setup",
      "Floral decorations",
      "Professional photography",
      "Engagement cake",
      "Welcome drinks",
      "Background music",
      "Ring bearer arrangement",
    ],
    popular: false,
  },
  {
    name: "Grand Engagement",
    price: "₹75,000",
    duration: "6 hours",
    guests: "Up to 150",
    features: [
      "Luxury venue decoration",
      "Stage setup with backdrop",
      "Professional photo & video",
      "Multi-tier engagement cake",
      "Cocktail & dinner service",
      "Live music or DJ",
      "Engagement favors",
      "Lighting arrangements",
      "Dedicated coordinator",
    ],
    popular: true,
  },
  {
    name: "Royal Engagement",
    price: "₹1,50,000",
    duration: "8 hours",
    guests: "Up to 300",
    features: [
      "Premium venue transformation",
      "Designer stage & mandap",
      "Cinematic photography team",
      "Designer engagement cake",
      "Premium catering service",
      "Live entertainment",
      "Luxury engagement favors",
      "Professional lighting",
      "Valet parking service",
      "Bridal suite access",
      "Welcome ceremony setup",
    ],
    popular: false,
  },
]

const engagementServices = [
  {
    icon: <FaRing className="text-4xl" />,
    title: "Ring Ceremony",
    description: "Beautiful ring exchange ceremony with traditional and modern elements",
  },
  {
    icon: <FaFlower className="text-4xl" />,
    title: "Floral Design",
    description: "Stunning floral arrangements and bouquets for the perfect romantic ambiance",
  },
  {
    icon: <FaCamera className="text-4xl" />,
    title: "Photography",
    description: "Professional engagement photography to capture your special moments",
  },
  {
    icon: <FaMusic className="text-4xl" />,
    title: "Entertainment",
    description: "Live music, DJ services, and entertainment for your engagement celebration",
  },
  {
    icon: <FaGlass className="text-4xl" />,
    title: "Catering",
    description: "Delicious catering options from cocktails to full dinner service",
  },
  {
    icon: <FaGift className="text-4xl" />,
    title: "Engagement Favors",
    description: "Personalized engagement favors and gifts for your guests",
  },
]

const engagementIdeas = [
  {
    title: "Garden Party Theme",
    description: "Outdoor engagement with natural beauty and floral arrangements",
    image: "/engagement-garden.jpg",
    features: ["Outdoor setup", "Natural lighting", "Floral arches", "Garden ambiance"],
  },
  {
    title: "Royal Palace Theme",
    description: "Luxurious engagement with royal decorations and grandeur",
    image: "/engagement-royal.jpg",
    features: ["Royal decorations", "Gold accents", "Luxury seating", "Grand entrance"],
  },
  {
    title: "Modern Chic Theme",
    description: "Contemporary engagement with sleek design and modern elements",
    image: "/engagement-modern.jpg",
    features: ["Modern decor", "LED lighting", "Minimalist design", "Chic ambiance"],
  },
  {
    title: "Traditional Theme",
    description: "Classic engagement with traditional decorations and customs",
    image: "/engagement-traditional.jpg",
    features: ["Traditional setup", "Cultural elements", "Classic decorations", "Ritual arrangements"],
  },
]

export default function Engagement() {
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
        <div className="absolute top-10 right-10 w-40 h-40">
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
              Engagement Celebrations
            </motion.h1>
            <motion.p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8" style={{ color: colors.black }}>
              Begin your journey together with a beautiful engagement celebration that marks the start of forever
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
                Plan Your Engagement
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
                backgroundImage: "url('/engagement-hero.jpg')",
                border: `3px solid ${colors.gold}`,
              }}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 p-6 rounded-xl shadow-lg"
              style={{
                backgroundColor: colors.gold,
                color: colors.black,
              }}
            >
              <p className="text-2xl font-bold">150+</p>
              <p className="text-sm">Perfect Proposals</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Engagement Ideas Section */}
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
              Engagement Themes
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.black }}>
              Choose from our beautiful engagement themes to create your perfect celebration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {engagementIdeas.map((idea, index) => (
              <motion.div
                key={idea.title}
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
                <div className="relative h-64">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${idea.image}')`,
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
                    className="text-2xl font-bold mb-3"
                    style={{
                      color: colors.royalGreen,
                      fontFamily: typography.heading,
                    }}
                  >
                    {idea.title}
                  </h3>
                  <p className="mb-4" style={{ color: colors.black }}>
                    {idea.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {idea.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-sm"
                        style={{
                          backgroundColor: colors.gold + "20",
                          color: colors.royalGreen,
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
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
              Our Engagement Services
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.black }}>
              Complete engagement services to make your special moment perfect
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {engagementServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl shadow-lg"
                style={{
                  backgroundColor: colors.white,
                  border: `1px solid ${colors.gold}30`,
                }}
              >
                <div className="mb-6 flex justify-center" style={{ color: colors.royalGreen }}>
                  {service.icon}
                </div>
                <h3
                  className="text-xl font-bold mb-4 text-center"
                  style={{
                    color: colors.royalGreen,
                    fontFamily: typography.heading,
                  }}
                >
                  {service.title}
                </h3>
                <p className="text-center" style={{ color: colors.black }}>
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
              Engagement Packages
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.black }}>
              Choose the perfect package for your engagement celebration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {engagementPackages.map((pkg, index) => (
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
                  ringColor: pkg.popular ? colors.gold : "transparent",
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
              Ready to Say Yes Forever?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let us create the perfect engagement celebration to mark the beginning of your beautiful journey
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
                Plan Your Engagement
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
