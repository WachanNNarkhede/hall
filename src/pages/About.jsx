"use client";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaAward, FaHeart, FaUsers, FaCalendarAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

// Color palette aligned with Home.jsx
const colors = {
  cream: "#F5F5DC",
  gold: "#D4A017",
  royalGreen: "#1B4D3E",
  black: "#1A1A1A",
  lightGold: "rgba(212, 160, 23, 0.2)",
};

// AnimatedCounter Component (from Home.jsx)
function AnimatedCounter({ target, duration = 1500 }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (!inView) return;

    const end = parseInt(target.replace(/[^0-9]/g, ""), 10);
    if (count === end) return;

    let current = 0;
    const timer = setInterval(() => {
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
        return;
      }
      const remaining = end - current;
      const increment = Math.min(
        remaining,
        Math.max(50, Math.floor(remaining * (0.1 + Math.random() * 0.4)))
      );
      current += increment;
      setCount(Math.min(current, end));
    }, duration / 10);

    return () => clearInterval(timer);
  }, [inView, target, duration, count]);

  return <span ref={ref}>{target.replace(/[0-9]+/, count)}</span>;
}

// Why Silver Petals items
const whySilverItems = [
  {
    title: "Premier Venues",
    desc: "Sophisticated spaces designed to bring your vision to life with customizable elegance.",
    icon: "🏛️",
    img: "/venue1.jpg",
  },
  {
    title: "Culinary Excellence",
    desc: "Exquisite menus crafted by world-class chefs, tailored to your preferences.",
    icon: "🍽️",
    img: "/catering1.jpg",
  },
  {
    title: "Seamless Planning",
    desc: "Comprehensive event management with meticulous attention to every detail.",
    icon: "📋",
    img: "/planning1.jpg",
  },
  {
    title: "Bespoke Décor",
    desc: "Customized designs that transform your event into a stunning masterpiece.",
    icon: "✨",
    img: "/decor1.jpg",
  },
  {
    title: "Exceptional Service",
    desc: "Dedicated professionals ensuring a flawless and memorable experience.",
    icon: "🤝",
    img: "/service1.jpg",
  },
];

// Stats data
const stats = [
  { value: "15+", label: "Years Experience", icon: <FaAward className="text-3xl" /> },
  { value: "500+", label: "Events Hosted", icon: <FaCalendarAlt className="text-3xl" /> },
  { value: "10000+", label: "Happy Guests", icon: <FaUsers className="text-3xl" /> },
  { value: "100%", label: "Satisfaction", icon: <FaHeart className="text-3xl" /> },
];

// Team members data
const teamMembers = [
  {
    name: "Eleanor Windsor",
    role: "Founder & CEO",
    desc: "Visionary leader with a passion for creating unforgettable events.",
    img: "https://th.bing.com/th/id/OIP.G5g0WydXYCBRY44x3iq0FgHaHa?w=626&h=626&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3",
  },
  {
    name: "James Carter",
    role: "Event Director",
    desc: "Master planner ensuring every detail is executed flawlessly.",
    img: "https://img.freepik.com/premium-photo/full-body-portrait-young-cheerful-indian-man_1077802-58865.jpg",
  },
  {
    name: "Sophie Laurent",
    role: "Head Chef",
    desc: "Culinary artist crafting exquisite menus tailored to your taste.",
    img: "silverpetals.png",
  },
  {
    name: "Amelia Rose",
    role: "Design Lead",
    desc: "Creative genius transforming venues into stunning masterpieces.",
    img: "https://img.freepik.com/premium-photo/ambitious-indian-entrepreneur-capturing-success-through-radiant-smile_983420-164466.jpg",
  },
];

export default function About() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${colors.cream} 0%, ${colors.lightGold} 100%)`,
        color: colors.black,
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40">
          <div
            className="w-full h-full bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20L0 20z' fill='${encodeURIComponent(
                colors.royalGreen
              )}' fill-opacity='0.2'/%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="absolute bottom-20 right-10 w-32 h-32 rotate-45">
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

      {/* Main Content */}
      <section className="relative max-w-7xl mx-auto px-6 py-24 min-h-screen">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 relative inline-block"
            style={{
              color: colors.royalGreen,
              fontFamily: "'Cinzel', serif",
            }}
          >
            Our Legacy of Excellence
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-current mt-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl max-w-4xl mx-auto"
            style={{
              color: colors.black,
              lineHeight: "1.6",
            }}
          >
            Where timeless elegance meets contemporary luxury
          </motion.p>
        </motion.div>

        {/* Story Section */}
        <motion.div className="grid md:grid-cols-2 gap-12 sm:gap-16 items-center mb-28">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.img
              src="silverpetals.png"
              alt="Silver Petals banquet hall"
              className="rounded-xl shadow-2xl w-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              style={{
                border: `2px solid ${colors.gold}`,
                boxShadow: `0 20px 40px ${colors.lightGold}`,
              }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 p-4 rounded-xl shadow-lg"
              style={{
                background: colors.gold,
                color: colors.black,
                fontFamily: "'Cinzel', serif",
                border: `1px solid ${colors.royalGreen}`,
              }}
            >
              <p className="text-xl font-bold">2008</p>
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
                color: colors.royalGreen,
                fontFamily: "'Cinzel', serif",
              }}
            >
              Our Heritage
            </motion.h3>
            <motion.div
              className="space-y-5 text-lg"
              style={{ color: colors.black }}
            >
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                Founded in <span style={{ color: colors.gold }}>2008</span> by hospitality visionary{" "}
                <span style={{ color: colors.gold }}>Eleanor Windsor</span>, Silver Petals began as a
                passion project to redefine event excellence.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Our <span style={{ color: colors.gold }}>20,000 sq. ft.</span> venue combines historic
                charm with modern amenities, hosting everything from royal weddings to international
                summits.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Our <span style={{ color: colors.gold }}>bespoke approach</span> sets us apart, with
                each event crafted by master planners, Michelin-trained chefs, and design virtuosos.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-28"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                boxShadow: `0 10px 30px ${colors.lightGold}`,
              }}
              className="p-6 sm:p-8 rounded-xl text-center transition-all"
              style={{
                background: colors.cream,
                border: `1px solid ${colors.gold}`,
                color: colors.black,
              }}
              role="region"
              aria-label={stat.label}
            >
              <motion.div
                className="mb-4 flex justify-center"
                style={{ color: colors.royalGreen }}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                {stat.icon}
              </motion.div>
              <p
                className="text-3xl sm:text-4xl font-bold mb-2"
                style={{
                  color: colors.gold,
                }}
              >
                <AnimatedCounter target={stat.value} />
              </p>
              <p className="text-base sm:text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-28"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-12 text-center relative"
            style={{
              color: colors.royalGreen,
              fontFamily: "'Cinzel', serif",
            }}
          >
            Meet Our Team
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-current mt-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  boxShadow: `0 10px 30px ${colors.lightGold}`,
                }}
                className="rounded-xl overflow-hidden bg-white border"
                style={{
                  borderColor: colors.gold,
                }}
                role="region"
                aria-label={`Team member ${member.name}`}
              >
                <div className="relative h-64">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${member.img}')`,
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, ${colors.black}50, transparent)`,
                    }}
                  />
                </div>
                <div className="p-6 text-center">
                  <h4
                    className="text-xl font-bold mb-2"
                    style={{
                      color: colors.royalGreen,
                      fontFamily: "'Cinzel', serif",
                    }}
                  >
                    {member.name}
                  </h4>
                  <p className="text-base font-medium mb-2" style={{ color: colors.gold }}>
                    {member.role}
                  </p>
                  <p className="text-sm" style={{ color: colors.black }}>
                    {member.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-xl p-8 sm:p-12"
          style={{
            background: colors.cream,
            border: `1px solid ${colors.gold}`,
            boxShadow: `0 20px 50px ${colors.lightGold}`,
          }}
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-8 text-center relative"
            style={{
              color: colors.royalGreen,
              fontFamily: "'Cinzel', serif",
            }}
          >
            Pillars of Distinction
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-current mt-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Excellence",
                desc: "We pursue perfection in every detail, from cuisine to decor, ensuring flawless execution.",
                icon: "✨",
              },
              {
                title: "Hospitality",
                desc: "Warm, personalized service that makes every guest feel like royalty.",
                icon: "👑",
              },
              {
                title: "Innovation",
                desc: "Continually evolving to bring fresh, creative concepts to life.",
                icon: "💡",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  borderColor: colors.gold,
                }}
                className="rounded-lg p-6 sm:p-8 transition-all"
                style={{
                  background: colors.cream,
                  border: `1px solid ${colors.royalGreen}20`,
                  color: colors.black,
                }}
              >
                <div
                  className="text-4xl mb-4"
                  style={{ color: colors.royalGreen }}
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
      <section
              className="relative text-white py-24 w-full overflow-hidden"
              id="why-silver-petals"
             
            >
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-10 left-10 w-40 h-40">
                  <div
                    className="w-full h-full bg-repeat"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20L0 20z' fill='${encodeURIComponent(
                        colors.royalGreen
                      )}' fill-opacity='0.2'/%3E%3C/svg%3E")`,
                    }}
                  />
                </div>
                <div className="absolute bottom-20 right-10 w-32 h-32 rotate-45">
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
              <div className=" mx-auto px-6 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-16"
                >
                  <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-6"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: colors.royalGreen,
                      position: "relative",
                      display: "inline-block",
                    }}
                  >
                    Why Silver Petals
                    <motion.div
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-current mt-4"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                    />
                  </motion.h2>
                  <motion.p
                    className="text-xl max-w-3xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{ color: colors.black }}
                  >
                    Your dream celebration deserves the perfect setting. Discover what makes us the ideal choice for your special day.
                  </motion.p>
                </motion.div>
                <div className="flex flex-col lg:flex-row gap-10 items-center justify-between">
                  <div className="w-full lg:w-7/12 relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {whySilverItems.map((item, index) => (
                        <motion.div
                          key={index}
                          className="bg-white rounded-2xl border p-8 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
                          style={{
                            borderColor: colors.royalGreen + "20",
                            background: `linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.95) 100%)`,
                          }}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ y: -10 }}
                        >
                          <div className="flex items-start mb-4">
                            <div
                              className="text-4xl mr-4 transition-colors duration-300 group-hover:text-rose-500"
                              style={{ color: colors.royalGreen }}
                            >
                              {item.icon}
                            </div>
                            <h3
                              className="text-xl font-bold mt-1"
                              style={{
                                fontFamily: "'Cinzel', serif",
                                color: colors.royalGreen,
                              }}
                            >
                              {item.title}
                            </h3>
                          </div>
                          <p className="text-base" style={{ color: colors.black }}>
                            {item.desc}
                          </p>
                          <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
                            <div
                              className="absolute bottom-0 right-0 w-16 h-16 transform rotate-45 translate-y-1/2"
                              style={{ backgroundColor: colors.royalGreen + "10" }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <motion.div
                    className="w-full lg:w-5/12 relative rounded-2xl overflow-hidden"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                      <div
                        className="absolute inset-0 z-10"
                        style={{
                          background: `linear-gradient(to top, ${colors.royalGreen}70, ${colors.cream}30)`,
                        }}
                      />
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url('/person3.jpg')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                      <motion.div
                        className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-lg max-w-xs"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                      >
                        <div className="flex items-center mb-3">
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center text-white mr-3"
                            style={{ backgroundColor: colors.royalGreen }}
                          >
                            <span className="text-xl font-serif">"</span>
                          </div>
                          <div>
                            <p className="font-bold" style={{ color: colors.black }}>
                              Emily & James
                            </p>
                            <p className="text-sm opacity-70" style={{ color: colors.black }}>
                              June Wedding
                            </p>
                          </div>
                        </div>
                        <p className="text-sm italic" style={{ color: colors.black }}>
                          "The perfect venue with attention to every detail. Our dream wedding came true!"
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
                <motion.div
                  className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {[
                    { value: "200+", label: "Events Hosted" },
                    { value: "98%", label: "Client Satisfaction" },
                    { value: "15", label: "Years Experience" },
                    { value: "50+", label: "Vendor Partners" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div
                        className="text-5xl font-bold mb-2"
                        style={{ color: colors.royalGreen }}
                      >
                        {stat.value}
                      </div>
                      <p className="text-lg font-medium" style={{ color: colors.black }}>
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </section>
    </div>
  );
}