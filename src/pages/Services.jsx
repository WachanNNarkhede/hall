// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGlassCheers, FaBirthdayCake, FaUtensils, FaBusinessTime, FaMicrophone, FaPhotoVideo } from "react-icons/fa";

const colors = {
  darkNavy: "#0A1428", navy: "#1A2A44", gold: "#D4A017", lightGold: "#E6B422", cream: "#F8F4E8", champagne: "#F5E6C8"
};

const services = [
  {
    title: "Weddings", icon: <FaGlassCheers className="text-3xl" />, image: "shadi.jpg",
    description: "From intimate ceremonies to grand receptions with impeccable attention to detail.",
    features: ["Custom decor", "Bridal suites", "Event coordination", "Vendor management"]
  },
  {
    title: "Social Events", icon: <FaBirthdayCake className="text-3xl" />, image: "pexels-rosario-fernandes-26325-3835638.jpg",
    description: "Elegant celebrations for birthdays, anniversaries, and milestone events.",
    features: ["Themed decor", "Entertainment", "Lighting design", "Photo booths"]
  },
  {
    title: "Gourmet Catering", icon: <FaUtensils className="text-3xl" />, image: "pexels-simeart-30311728.jpg",
    description: "Michelin-inspired catering with customizable menus.",
    features: ["Five-star team", "Global cuisine", "Dietary options", "Food stations"]
  },
  {
    title: "Corporate Events", icon: <FaBusinessTime className="text-3xl" />, image: "cooprate.jpg",
    description: "Sophisticated venues for conferences and galas.",
    features: ["AV support", "Branded decor", "Executive catering", "Team-building"]
  },
  {
    title: "Entertainment", icon: <FaMicrophone className="text-3xl" />, image: "parties.jpg",
    description: "Complete production for concerts and shows.",
    features: ["Stage design", "Sound engineering", "Green rooms", "VIP services"]
  },
  {
    title: "Photography", icon: <FaPhotoVideo className="text-3xl" />, image: "photogra.jpg",
    description: "Professional media to capture precious moments.",
    features: ["Drone footage", "Cinematic reels", "Photo booths", "Same-day edits"]
  }
];

export default function Services() {
  return (
    <div className="relative overflow-hidden" style={{ 
      background: `linear-gradient(135deg, ${colors.darkNavy} 0%, ${colors.navy} 100%)`,
      color: colors.cream
    }}>
      {/* <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "url('parties.jpg')", backgroundSize: "400px", backgroundRepeat: "repeat"
      }}></div> */}

      <section className="relative max-w-7xl mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} 
          viewport={{ margin: "-100px" }} className="text-center mb-20">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6" style={{ color: colors.gold, fontFamily: "'Tangerine', cursive" }}>
            Signature Services
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl max-w-4xl mx-auto" style={{ color: colors.champagne }}>
            Where every detail is crafted to perfection
          </motion.p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}
          viewport={{ margin: "-100px" }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-28">
          {services.map((service, index) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ y: -10 }}
              className="rounded-xl overflow-hidden" style={{ background: colors.navy, border: `1px solid ${colors.gold}20` }}>
              <div className="relative h-60 overflow-hidden">
                <motion.img src={service.image} alt={service.title} className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }} transition={{ duration: 0.4 }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full" style={{ background: colors.gold, color: colors.darkNavy }}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold" style={{ color: colors.cream }}>{service.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4" style={{ color: colors.champagne }}>{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-gold mt-1">•</span>
                      <span style={{ color: colors.cream }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          viewport={{ margin: "-100px" }} className="rounded-xl p-12 text-center"
          style={{ background: colors.navy, border: `1px solid ${colors.gold}30` }}>
          <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold mb-6" style={{ color: colors.gold, fontFamily: "'Cinzel', serif" }}>
            Ready to Plan Your Event?
          </motion.h3>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: colors.champagne }}>
            Our specialists will bring your vision to life
          </motion.p>
          <motion.a href="/contact" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }} whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-4 font-bold rounded-lg text-lg"
            style={{ backgroundColor: colors.gold, color: colors.darkNavy }}>
            Contact Our Planners
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}