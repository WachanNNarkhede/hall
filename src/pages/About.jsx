// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaAward, FaHeart, FaUsers, FaCalendarAlt } from "react-icons/fa";

export default function About() {

  

  // Enhanced color palette
  const colors = {
    darkNavy: "#0A1428",     // Darker background for better contrast
    navy: "#1A2A44",         // Primary dark blue
    lightNavy: "#2A3F6B",    // Lighter accents
    gold: "#D4A017",         // Primary gold
    lightGold: "#E6B422",    // Brighter gold accents
    cream: "#F8F4E8",        // Warmer cream for text
    champagne: "#F5E6C8"     // Soft highlight color
  };

  const stats = [
    { value: "15+", label: "Years Experience", icon: <FaAward className="text-3xl" /> },
    { value: "500+", label: "Events Hosted", icon: <FaCalendarAlt className="text-3xl" /> },
    { value: "10K+", label: "Happy Guests", icon: <FaUsers className="text-3xl" /> },
    { value: "100%", label: "Satisfaction", icon: <FaHeart className="text-3xl" /> }
  ];

  const team = [
    { name: "Sarah Johnson", role: "Event Director", img: "person1.jpg" },
    { name: "Michael Chen", role: "Head Chef", img: "person2.jpg" },
    { name: "Elena Rodriguez", role: "Design Specialist", img: "person3.jpg" },
    { name: "David Wilson", role: "Operations Manager", img: "person1.jpg" }
  ];

  return (
    <div className="relative overflow-hidden" style={{ 
      background: `linear-gradient(135deg, ${colors.darkNavy} 0%, ${colors.navy} 100%)`,
      color: colors.cream
    }}>



      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "url('parties.jpg')",
        backgroundSize: "4000px",
        backgroundRepeat: "repeat"
      }}></div>

      {/* Main Content */}
      <section className="relative max-w-7xl mx-auto px-6 py-24 min-h-screen flex flex-col justify-center">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ 
              color: colors.gold,
              fontFamily: "'Tangerine', cursive",
              textShadow: '0 2px 10px rgba(212, 160, 23, 0.3)'
            }}
          >
            Our Legacy of Excellence
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl max-w-4xl mx-auto"
            style={{ 
              color: colors.champagne,
              lineHeight: '1.6'
            }}
          >
            Where timeless elegance meets contemporary luxury
          </motion.p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-center mb-28"
        >
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ margin: "-100px" }}
            className="relative"
          >
            <motion.img
              src="team1.jpg"
              alt="Luxury banquet hall"
              className="rounded-xl shadow-2xl w-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              style={{
                border: `2px solid ${colors.gold}30`,
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
              }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 p-6 rounded-xl shadow-lg"
              style={{ 
                background: colors.gold,
                color: colors.darkNavy,
                fontFamily: "'Cinzel', serif",
                border: `1px solid ${colors.lightGold}`
              }}
            >
              <p className="text-2xl font-bold">2008</p>
              <p className="text-sm">Established</p>
            </motion.div>
          </motion.div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-6"
              style={{ 
                color: colors.lightGold,
                fontFamily: "'Cinzel', serif"
              }}
            >
              Our Heritage
            </motion.h3>
            
            <motion.div
              className="space-y-5 text-lg"
              style={{ color: colors.cream }}
            >
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                Founded in <span style={{ color: colors.lightGold }}>2008</span> by hospitality visionary 
                <span style={{ color: colors.lightGold }}> Eleanor Windsor</span>, our venue began as 
                a passion project to redefine event excellence.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Today, our <span style={{ color: colors.lightGold }}>20,000 sq. ft.</span> space 
                combines historic charm with modern amenities, hosting everything from 
                royal weddings to international summits.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                What truly sets us apart is our <span style={{ color: colors.lightGold }}>bespoke approach</span> - 
                each event is uniquely crafted by our team of master planners, 
                Michelin-trained chefs, and design virtuosos.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, margin: "-100px" }}
          className="grid md:grid-cols-4 gap-6 mb-28"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                backgroundColor: colors.lightNavy,
                boxShadow: `0 10px 30px ${colors.gold}20`
              }}
              className="p-8 rounded-xl text-center transition-all"
              style={{
                background: colors.navy,
                border: `1px solid ${colors.gold}20`,
                color: colors.cream
              }}
            >
              <div className="mb-4 flex justify-center" style={{ color: colors.lightGold }}>
                {stat.icon}
              </div>
              <p 
                className="text-4xl font-bold mb-2" 
                style={{ 
                  color: colors.gold,
                  textShadow: '0 2px 5px rgba(212, 160, 23, 0.3)'
                }}
              >
                {stat.value}
              </p>
              <p className="text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Section */}
        <div className="mb-28">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 text-center"
            style={{ 
              color: colors.lightGold,
              fontFamily: "'Cinzel', serif"
            }}
          >
            The Architects of Celebration
          </motion.h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <motion.div 
                  className="relative mb-6 overflow-hidden rounded-lg aspect-square"
                  style={{
                    border: `1px solid ${colors.gold}30`,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                  }}
                >
                  <motion.img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-6"
                  >
                    <div>
                      <p 
                        className="text-gold font-bold text-lg"
                        style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}
                      >
                        {member.name}
                      </p>
                      <p 
                        className="text-champagne text-sm"
                        style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}
                      >
                        {member.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
                <h4 
                  className="text-xl font-bold mb-1"
                  style={{ color: colors.cream }}
                >
                  {member.name}
                </h4>
                <p 
                  className="text-gold"
                  style={{ opacity: 0.9 }}
                >
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, margin: "-100px" }}
          className="rounded-xl p-12"
          style={{
            background: `linear-gradient(135deg, ${colors.navy} 0%, ${colors.darkNavy} 100%)`,
            border: `1px solid ${colors.gold}20`,
            boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
          }}
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-8 text-center"
            style={{ 
              color: colors.lightGold,
              fontFamily: "'Cinzel', serif"
            }}
          >
            Pillars of Distinction
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Excellence", 
                desc: "We pursue perfection in every detail, from cuisine to decor, ensuring flawless execution.",
                icon: "✨"
              },
              { 
                title: "Hospitality", 
                desc: "Warm, personalized service that makes every guest feel like royalty.",
                icon: "👑"
              },
              { 
                title: "Innovation", 
                desc: "Continually evolving to bring fresh, creative concepts to life.",
                icon: "💡"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.03,
                  borderColor: colors.gold
                }}
                className="rounded-lg p-8 transition-all"
                style={{ 
                  background: colors.darkNavy,
                  border: `1px solid ${colors.gold}15`,
                  color: colors.cream
                }}
              >
                <div 
                  className="text-4xl mb-4"
                  style={{ color: colors.lightGold }}
                >
                  {value.icon}
                </div>
                <h4 
                  className="text-xl font-bold mb-3"
                  style={{ color: colors.gold }}
                >
                  {value.title}
                </h4>
                <p className="opacity-90">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}