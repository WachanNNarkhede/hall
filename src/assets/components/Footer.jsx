// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const footerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["end end", "start start"]
  });

  // Adjusted animation values
  const y = useTransform(scrollYProgress, [0, 0.5], ["10%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0.5, 0.2], [0.5, 1]);

  const colors = {
    teal: "#003c3c",
    gold: "#d4b886",
    goldTransparent: "#d4b88640",
    cream: "#FFF8E1" // Retained for text contrast
  };

  return (
    <footer 
      ref={footerRef}
      className="relative bg-[#003c3c] text-[#d4b886] pt-20 pb-8 z-10"
     
    >
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
      
      <motion.div 
        style={{ y, opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10"
      >
        {/* Footer Content Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <h4 className="text-xl font-bold text-gold" style={{ fontFamily: "'Cinzel', serif" }}>
              Contact Us
            </h4>
            <ul className="space-y-2 text-cream/90 text-sm">
              <li>
                <motion.a 
                  href="mailto:info@luxebanquet.com"
                  whileHover={{ 
                    x: 3,
                    color: colors.gold,
                  }}
                  className="flex items-start gap-2 transition-all"
                >
                  <span className="mt-0.5">✉️</span>
                  <span>info@luxebanquet.com</span>
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="tel:+1234567890"
                  whileHover={{ 
                    x: 3,
                    color: colors.gold,
                  }}
                  className="flex items-start gap-2 transition-all"
                >
                  <span className="mt-0.5">📞</span>
                  <span>+1 (234) 567-890</span>
                </motion.a>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">📍</span>
                <span>123 Luxury Avenue, Elegant City</span>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-3"
          >
            <h4 className="text-xl font-bold text-gold" style={{ fontFamily: "'Cinzel', serif" }}>
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {["Home", "About", "Services", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <motion.a
                    href={`#${link.toLowerCase()}`}
                    whileHover={{ 
                      x: 3,
                      color: colors.gold,
                    }}
                    className="block transition-all py-0.5 text-cream"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media Column */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-3"
          >
            <h4 className="text-xl font-bold text-gold" style={{ fontFamily: "'Cinzel', serif" }}>
              Follow Us
            </h4>
            <div className="flex gap-3 md:gap-4">
              {[
                { icon: <FaFacebook size={18} />, label: "Facebook" },
                { icon: <FaInstagram size={18} />, label: "Instagram" },
                { icon: <FaTwitter size={18} />, label: "Twitter" },
                { icon: <FaLinkedin size={18} />, label: "LinkedIn" }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    y: -2,
                    scale: 1.05,
                    color: colors.gold,
                  }}
                  className="text-xl text-cream transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-4">
              <h5 className="text-base font-semibold mb-2 text-gold">
                Join Our Newsletter
              </h5>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="px-3 py-1.5 text-sm rounded-l-md w-full text-teal focus:outline-none border border-gold/30 bg-cream/80"
                />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-3 py-1.5 bg-gold text-teal font-medium rounded-r-md text-sm"
                >
                  Join
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 1, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 pt-4 border-t border-gold/30 text-center text-cream/80 text-sm"
        >
          <p>© {new Date().getFullYear()} Luxe Banquet Hall. All rights reserved.</p>
          <p className="mt-1 text-xs">Designed with ❤️ for your special moments</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}