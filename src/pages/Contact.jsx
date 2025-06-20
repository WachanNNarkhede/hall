"use client";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp } from "react-icons/fa";

export default function ContactUs() {
  // Color variables matching your original theme
  const colors = {
    cream: "#F5F5DC",
    gold: "#D4A017",
    royalGreen: "#1B4D3E",
    black: "#1A1A1A",
    lightGold: "rgba(212, 160, 23, 0.2)",
  };

  // WhatsApp contact details
  const whatsappNumber = "919876543210"; // Replace with your actual number
  const whatsappMessage = "Hello%20Silver%20Petals,%20I%20would%20like%20to%20inquire%20about%20your%20services";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const openWhatsApp = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div 
      className="relative min-h-screen"
      style={{
        background: `linear-gradient(135deg, ${colors.cream} 0%, ${colors.lightGold} 100%)`,
        color: colors.black,
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-40 h-40">
          <div
            className="w-full h-full bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20L0 20z' fill='${encodeURIComponent(
                colors.royalGreen
              )}' fill-opacity='0.2'/%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </div>

      <section className="relative max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{
              color: colors.royalGreen,
              fontFamily: "'Cinzel', serif",
            }}
          >
            Contact Silver Petals
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            style={{ color: colors.black }}
          >
            Reach out to us for bookings, inquiries, or to schedule a visit to our beautiful venue.
          </motion.p>
        </motion.div>

        <div className="grid  md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white mt-24 p-8 rounded-xl shadow-lg"
              style={{ border: `1px solid ${colors.gold}` }}>
              <h3
                className="text-2xl font-bold mb-8"
                style={{
                  color: colors.royalGreen,
                  fontFamily: "'Cinzel', serif",
                }}
              >
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-full"
                    style={{
                      background: colors.royalGreen,
                      color: colors.cream,
                    }}
                  >
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h4
                      className="text-lg font-semibold"
                      style={{ color: colors.royalGreen }}
                    >
                      Our Location
                    </h4>
                    <p style={{ color: colors.black }}>
SILVER PETALS HALL , DHAYRI PHATA, Shivam Complex, Wadgaon Budruk, Narhe, Pune, Maharashtra 411041, India                    </p>
                  </div>
                </motion.div>
                
                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-full"
                    style={{
                      background: colors.royalGreen,
                      color: colors.cream,
                    }}
                  >
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <h4
                      className="text-lg font-semibold"
                      style={{ color: colors.royalGreen }}
                    >
                      Phone
                    </h4>
                    <p style={{ color: colors.black }}>+91 98765 43210</p>
                  </div>
                </motion.div>
                
                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-full"
                    style={{
                      background: colors.royalGreen,
                      color: colors.cream,
                    }}
                  >
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h4
                      className="text-lg font-semibold"
                      style={{ color: colors.royalGreen }}
                    >
                      Email
                    </h4>
                    <p style={{ color: colors.black }}>events@silverpetals.com</p>
                  </div>
                </motion.div>
                
                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-full"
                    style={{
                      background: colors.royalGreen,
                      color: colors.cream,
                    }}
                  >
                    <FaClock className="text-xl" />
                  </div>
                  <div>
                    <h4
                      className="text-lg font-semibold"
                      style={{ color: colors.royalGreen }}
                    >
                      Hours
                    </h4>
                    <p style={{ color: colors.black }}>
                      Monday - Sunday: 9AM - 11PM
                    </p>
                  </div>
                </motion.div>
              </div>
              
              {/* WhatsApp Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={openWhatsApp}
                className="w-full mt-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2"
                style={{
                  backgroundColor: colors.gold,
                  color: colors.black,
                }}
              >
                <FaWhatsapp className="text-2xl" /> Chat on WhatsApp
              </motion.button>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="h-full">
              <h3
                className="text-2xl font-bold mb-6"
                style={{
                  color: colors.royalGreen,
                  fontFamily: "'Cinzel', serif",
                }}
              >
                Find Us
              </h3>
              <div
                className="rounded-xl overflow-hidden h-full shadow-lg border-2"
                style={{ borderColor: colors.gold }}
              >
                <iframe
                  title="Silver Petals Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5260925627445!2d73.81171217383826!3d18.459814271029952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2957c37d68253%3A0x760324ccee6dc6c9!2sSILVER%20PETALS%20HALL%20%2C%20DHAYRI%20PHATA!5e0!3m2!1sen!2sus!4v1750414946425!5m2!1sen!2sus" 
                  className="w-full h-full min-h-[400px]"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}