"use client"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { FaHeart, FaRing, FaMusic, FaCamera } from "react-icons/fa"
import { FaWineGlassAlt } from "react-icons/fa";

import { BsFlower1 } from "react-icons/bs";

import { colors, gradients, typography } from "../assets/components/theme-colors"

const anniversaryPackages = [
  {
    name: "Silver Moments",
    price: "₹35,000",
    duration: "4 hours",
    guests: "Up to 50",
    features: [
      "Romantic venue decoration",
      "Candlelight dinner setup",
      "Anniversary cake & champagne",
      "Live acoustic music",
      "Photography session",
      "Personalized anniversary video",
    ],
    popular: false,
  },
  {
    name: "Golden Celebration",
    price: "₹65,000",
    duration: "6 hours",
    guests: "Up to 100",
    features: [
      "Elegant floral arrangements",
      "Premium dining experience",
      "Live band or DJ",
      "Professional photography & videography",
      "Anniversary slideshow presentation",
      "Welcome drinks & cocktails",
      "Dedicated event coordinator",
    ],
    popular: true,
  },
  {
    name: "Diamond Jubilee",
    price: "₹1,25,000",
    duration: "8 hours",
    guests: "Up to 200",
    features: [
      "Luxury venue transformation",
      "Multi-course gourmet dinner",
      "Live entertainment & performances",
      "Professional photo & video team",
      "Anniversary documentary creation",
      "Premium bar service",
      "Valet parking service",
      "Anniversary keepsake gifts",
    ],
    popular: false,
  },
]

const anniversaryServices = [
  {
    icon: <FaHeart className="text-4xl" />,
    title: "Romantic Ambiance",
    description: "Create the perfect romantic atmosphere with elegant lighting, candles, and decor",
  },
  {
    icon: <BsFlower1 className="text-4xl" />,
    title: "Floral Arrangements",
    description: "Beautiful flower arrangements and bouquets to celebrate your love story",
  },
  {
    icon: <FaMusic className="text-4xl" />,
    title: "Live Entertainment",
    description: "Live music, bands, or DJs to set the perfect mood for your celebration",
  },
  {
    icon: <FaCamera className="text-4xl" />,
    title: "Memory Capture",
    description: "Professional photography and videography to preserve your special moments",
  },
  {
    icon: <FaWineGlassAlt className="text-4xl" />,
    title: "Fine Dining",
    description: "Exquisite cuisine and premium beverages for an unforgettable dining experience",
  },
  {
    icon: <FaRing className="text-4xl" />,
    title: "Milestone Celebrations",
    description: "Special arrangements for milestone anniversaries with personalized touches",
  },
]

const anniversaryMilestones = [
  { year: "1st", name: "Paper Anniversary", color: "#E8F4FD" },
  { year: "5th", name: "Wood Anniversary", color: "#8B4513" },
  { year: "10th", name: "Tin Anniversary", color: "#C0C0C0" },
  { year: "15th", name: "Crystal Anniversary", color: "#E0E0E0" },
  { year: "20th", name: "China Anniversary", color: "#F0F8FF" },
  { year: "25th", name: "Silver Anniversary", color: "#C0C0C0" },
  { year: "50th", name: "Golden Anniversary", color: "#FFD700" },
  { year: "60th", name: "Diamond Anniversary", color: "#B9F2FF" },
]

export default function Anniversary() {
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
              Anniversary Celebrations
            </motion.h1>
            <motion.p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8" style={{ color: colors.black }}>
              Celebrate your love story with elegant anniversary celebrations that honor your journey together
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
                Plan Your Celebration
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
              className="absolute -bottom-6 -left-6 p-6 rounded-xl shadow-lg"
              style={{
                backgroundColor: colors.gold,
                color: colors.black,
              }}
            >
              <p className="text-2xl font-bold">15+</p>
              <p className="text-sm">Years of Love</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Anniversary Milestones */}
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
              Anniversary Milestones
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.black }}>
              Each anniversary year has its own special meaning and traditional celebration
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {anniversaryMilestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl text-center shadow-lg"
                style={{
                  backgroundColor: colors.white,
                  border: `2px solid ${colors.gold}30`,
                }}
              >
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold"
                  style={{
                    backgroundColor: milestone.color,
                    color: colors.black,
                  }}
                >
                  {milestone.year}
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{
                    color: colors.royalGreen,
                    fontFamily: typography.heading,
                  }}
                >
                  {milestone.name}
                </h3>
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
              Our Anniversary Services
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.black }}>
              Everything you need to create a romantic and memorable anniversary celebration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {anniversaryServices.map((service, index) => (
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
              Anniversary Packages
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.black }}>
              Choose the perfect package to celebrate your love story
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {anniversaryPackages.map((pkg, index) => (
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
                 onClick={() => {
  window.location.assign("https://wa.me/919762302055?text=I%20would%20like%20to%20book%20a%20marriage%20lawn");
}}

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
              Celebrate Your Love Story
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let us help you create a romantic anniversary celebration that honors your journey together
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
                Plan Your Anniversary
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
