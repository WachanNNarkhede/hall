"use client";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { IconMenu2, IconX, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useInView } from "react-intersection-observer";

// Color variables
const colors = {
  navy: "#1A2A44",
  darkNavy: "#0F1C32",
  lightNavy: "#2A3F6B",
  gold: "#D4A017",
  cream: "#F5F5DC",
  charcoal: "#333333",
  seaGreen: "#2E8B57",
  lightGold: "rgba(212, 160, 23, 0.2)",
  lightPeach: "#fdf2e9",
  lightCream: "#fffaf5",
  sageGreen: "#606c38",
  lightBeige: "#f3e8d6",
};

// Image list for hero carousel
const heroImageList = [
  "/hallwed.jpg",
  "/team1.jpg",
  "/lawn.jpg",
  "/banqet.avif",
  "/cooprate.jpg",
  "/photogra.jpg",
];

// Image list for Why Silver Petals carousel
const whySilverItems = [
  {
    title: "Elegant Venues",
    desc: "Beautifully decorated halls with customizable themes to match your vision.",
    icon: "🎉",
    img: "/venue1.jpg",
  },
  {
    title: "Gourmet Catering",
    desc: "Delicious menu options prepared by top chefs for every taste and tradition.",
    icon: "🍽️",
    img: "/catering1.jpg",
  },
  {
    title: "Full Event Planning",
    desc: "From décor to entertainment, we manage every detail with love and care.",
    icon: "💐",
    img: "/planning1.jpg",
  },
  {
    title: "Exquisite Décor",
    desc: "Transform your event with stunning decorations tailored to your style.",
    icon: "✨",
    img: "/decor1.jpg",
  },
  {
    title: "Impeccable Service",
    desc: "Our dedicated team ensures every moment is seamless and memorable.",
    icon: "🤝",
    img: "/service1.jpg",
  },
];

// AnimatedCounter Component with Scroll Trigger
function AnimatedCounter({ target, duration = 1500 }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (!inView) return;

    const end = parseInt(target, 10);
    if (count === end) return;

    let current = 0;
    const timer = setInterval(() => {
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
        return;
      }

      // Calculate remaining distance to target
      const remaining = end - current;
      // Generate random increment: 10% to 50% of remaining or at least 50, capped at remaining
      const increment = Math.min(
        remaining,
        Math.max(50, Math.floor(remaining * (0.1 + Math.random() * 0.4)))
      );
      current += increment;
      setCount(Math.min(current, end));
    }, duration / 10); // Run 10 steps over duration

    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Home() {
  // Hero states
  const [doorsOpen, setDoorsOpen] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [heroImgIndex, setHeroImgIndex] = useState(0);
  
  // Services book state
  const [currentPage, setCurrentPage] = useState(0);
  // Why Silver Petals carousel state
  const [whySilverIndex, setWhySilverIndex] = useState(0);

  const services = [
    {
      title: "Wedding Celebrations",
      desc: "Let us make your dream wedding a reality with our elegant venues, bespoke décor, and gourmet catering tailored to your vision.",
      img: "/shadi.jpg",
    },
    {
      title: "Corporate Events",
      desc: "Host sophisticated business gatherings or galas in our versatile spaces, complete with state-of-the-art facilities and custom menus.",
      img: "/team1.jpg",
    },
    {
      title: "Birthday Parties",
      desc: "Celebrate life’s milestones with vibrant themes, personalized décor, and delicious cuisine for an unforgettable birthday bash.",
      img: "/photogra.jpg",
    },
    {
      title: "Gourmet Catering",
      desc: "Savor exquisite dishes crafted by our top chefs, with menu options to suit every taste and tradition.",
      img: "/phototwo.jpg",
    },
  ];

  // Milestones data
  const milestones = [
    {
      year: "2015",
      title: "Founded Silver Petals",
      desc: "Started our journey to create unforgettable events with our first luxurious banquet hall.",
      number: 1,
      icon: "🎉",
    },
    {
      year: "2018",
      title: "Expanded Venues",
      desc: "Opened two additional halls, offering diverse themes and larger capacities.",
      number: 3,
      icon: "🏛️",
    },
    {
      year: "2023",
      title: "Award-Winning Service",
      desc: "Received the 'Best Event Venue' award for our exceptional planning and hospitality.",
      number: 5,
      icon: "🏆",
    },
  ];

  // Hero and carousel effects
  useEffect(() => {
    const timer = setTimeout(() => {
      setDoorsOpen(true);
    }, 500);
    const contentTimer = setTimeout(() => {
      setContentVisible(true);
    }, 1500);
    const heroCarouselInterval = setInterval(() => {
      setHeroImgIndex((prev) => (prev + 1) % heroImageList.length);
    }, 4000);
    return () => {
      clearTimeout(timer);
      clearTimeout(contentTimer);
      clearInterval(heroCarouselInterval);
    };
  }, []);

  // Hero carousel images
  const getHeroCarouselImages = () => {
    const images = [];
    for (let i = 0; i < 5; i++) {
      const actualIndex = (heroImgIndex + i) % heroImageList.length;
      images.push({
        src: heroImageList[actualIndex],
        center: i === 2,
      });
    }
    return images;
  };

  // Why Silver Petals navigation
  const nextWhySilverSlide = () => {
    setWhySilverIndex((prev) => (prev + 1) % whySilverItems.length);
  };
  const prevWhySilverSlide = () => {
    setWhySilverIndex((prev) => (prev - 1 + whySilverItems.length) % whySilverItems.length);
  };

  // Book navigation
  const flipNext = () => {
    if (currentPage < services.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  const flipBack = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div
      className="relative overflow-x-hidden min-h-screen"
      style={{
        background: `linear-gradient(135deg, ${colors.darkNavy} 0%, ${colors.navy} 50%, ${colors.lightNavy} 100%)`,
        color: colors.cream,
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      {/* Mobile Nav */}
      {/* <div className="lg:hidden fixed top-4 right-4 z-[60]">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-full"
          style={{ backgroundColor: colors.gold }}
        >
          {mobileMenuOpen ? <IconX color={colors.navy} /> : <IconMenu2 color={colors.navy} />}
        </button>
      </div> */}

      {/* <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed inset-y-0 right-0 w-64 z-[50] p-6"
            style={{
              backgroundColor: colors.navy,
              borderLeft: `2px solid ${colors.gold}`,
            }}
          >
            <nav className="flex flex-col space-y-4 mt-8">
              {["Home", "Why Silver Petals", "Services", "Milestones", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                  className="text-xl py-2 px-4 rounded-lg hover:bg-white/10 transition-colors"
                  style={{ color: colors.gold }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence> */}

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        id="home"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundColor: colors.darkNavy,
            backgroundImage: "url('/photoone.jpg')",
            zIndex: 1,
          }}
        />
        <div
          className="absolute inset-0 z-[2]"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        />
        <div className="absolute inset-0 z-[30] flex">
          <motion.div
            className="w-1/2 h-full"
            initial={{ x: "0%", opacity: 1 }}
            animate={{
              x: doorsOpen ? "-100%" : "0%",
              opacity: doorsOpen ? 0 : 1,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{
              backgroundImage: "url('/doorr.png')",
              backgroundSize: "cover",
              backgroundPosition: "right center",
              backgroundColor: colors.darkNavy,
            }}
          />
          <motion.div
            className="w-1/2 h-full"
            initial={{ x: "0%", opacity: 1 }}
            animate={{
              x: doorsOpen ? "100%" : "0%",
              opacity: doorsOpen ? 0 : 1,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{
              backgroundImage: "url('/doorf.png')",
              backgroundSize: "cover",
              backgroundPosition: "left center",
              backgroundColor: colors.darkNavy,
            }}
          />
        </div>
        <motion.div
          className="relative z-[40] flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: contentVisible ? 1 : 0,
            scale: contentVisible ? 1 : 0.95,
          }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            style={{
              color: colors.gold,
              fontFamily: "'Cinzel', serif",
              textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
            }}
          >
            Welcome to Silver Petals
          </motion.h1>
          <motion.div
            className="w-full max-w-3xl h-64 md:h-80 relative my-8"
            animate={{ opacity: contentVisible ? 1 : 0 }}
            transition={{ delay: 1.5 }}
          >
            <div className="relative w-full h-full overflow-hidden rounded-xl flex items-center justify-center">
              {getHeroCarouselImages().map((img, i) => (
                <motion.div
                  key={`${img.src}-${i}`}
                  className={`absolute transition-all duration-500 rounded-xl ${
                    img.center ? "w-full h-full z-[41]" : "w-1/3 h-2/3 z-[40] opacity-70"
                  }`}
                  animate={{
                    left: img.center ? "50%" : i < 2 ? `${i * 25}%` : `${(i - 1) * 25 + 75}%`,
                    transform: img.center ? "translateX(-50%)" : "none",
                    scale: img.center ? 1.1 : 0.9,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div
                    className="w-full h-full bg-gray-200 rounded-xl border-2"
                    style={{
                      backgroundImage: `url('${img.src}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderColor: colors.gold,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-8"
            style={{
              color: colors.gold,
              textShadow: "2px 2px 6px rgba(0,0,0,0.5)",
            }}
          >
            Create unforgettable memories in our luxurious banquet hall
          </motion.p>
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              backgroundColor: colors.seaGreen,
              boxShadow: `0 0 20px ${colors.gold}`,
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 font-bold rounded-lg text-lg"
            style={{
              backgroundColor: colors.gold,
              color: colors.navy,
            }}
          >
            Book Your Event
          </motion.a>
        </motion.div>
      </section>

      {/* Why Silver Petals Section with Slider Carousel */}
      <section
        className="relative py-20"
        id="why-silver-petals"
        style={{
          background: colors.lightPeach,
          color: colors.charcoal,
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12"
            style={{ fontFamily: "'Cinzel', serif", color: colors.sageGreen }}
          >
            Why Silver Petals
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-center mb-12 max-w-3xl mx-auto"
          >
            Your dream celebration deserves the perfect setting. Here's why we are the best choice for your special day.
          </motion.p>
          <div className="relative w-full max-w-2xl mx-auto h-[400px] overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.div
                key={whySilverIndex}
                initial={{ x: whySilverIndex > 0 ? "100%" : "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: whySilverIndex > 0 ? "-100%" : "100%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute w-full h-full"
              >
                <div
                  className="w-full h-full bg-white rounded-xl border-2 p-6 flex flex-col items-center justify-between"
                  style={{
                    borderColor: colors.sageGreen,
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  }}
                >
                  <div
                    className="w-full h-48 bg-gray-200 rounded-lg mb-4"
                    style={{
                      backgroundImage: `url('${whySilverItems[whySilverIndex].img}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div
                    className="text-4xl mb-2"
                    style={{ color: colors.sageGreen }}
                  >
                    {whySilverItems[whySilverIndex].icon}
                  </div>
                  <h3
                    className="text-xl font-bold mb-2 text-center"
                    style={{ fontFamily: "'Cinzel', serif", color: colors.sageGreen }}
                  >
                    {whySilverItems[whySilverIndex].title}
                  </h3>
                  <p className="text-base text-center opacity-80">
                    {whySilverItems[whySilverIndex].desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <motion.button
              onClick={prevWhySilverSlide}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full"
              style={{
                backgroundColor: colors.sageGreen,
                color: colors.lightCream,
              }}
            >
              <IconChevronLeft size={24} />
            </motion.button>
            <motion.button
              onClick={nextWhySilverSlide}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full"
              style={{
                backgroundColor: colors.sageGreen,
                color: colors.lightCream,
              }}
            >
              <IconChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Services Section with Book Animation */}
      <section
        className="relative py-20"
        id="services"
        style={{
          background: colors.navy,
          color: colors.cream,
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12"
            style={{ fontFamily: "'Cinzel', serif", color: colors.gold }}
          >
            Our Services
          </motion.h2>
          <div className="relative mr-36 flex justify-center perspective-1000">
            <div className="book w-full max-w-4xl h-[500px]">
              <AnimatePresence initial={false}>
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    className="absolute w-full h-full"
                    style={{
                      transformOrigin: "left center",
                      transformStyle: "preserve-3d",
                      zIndex: services.length - Math.abs(index - currentPage),
                    }}
                    initial={{ rotateY: index > currentPage ? 90 : index < currentPage ? -180 : 0 }}
                    animate={{
                      rotateY: index > currentPage ? 90 : index < currentPage ? -180 : 0,
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <div
                      className="absolute w-full h-full bg-white shadow-2xl p-8 flex"
                      style={{
                        backfaceVisibility: "hidden",
                        border: `2px solid ${colors.gold}`,
                      }}
                    >
                      <div className="w-1/2 h-full">
                        <div
                          className="w-full h-full bg-gray-200 rounded-lg"
                          style={{
                            backgroundImage: `url('${service.img}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        />
                      </div>
                      <div className="w-1/2 p-6 flex flex-col justify-between">
                        <div>
                          <h3
                            className="text-2xl font-bold mb-4"
                            style={{ fontFamily: "'Cinzel', serif", color: colors.navy }}
                          >
                            {service.title}
                          </h3>
                          <p className="text-lg mb-4" style={{ color: colors.charcoal }}>
                            {service.desc}
                          </p>
                        </div>
                        <motion.a
                          href="#contact"
                          whileHover={{ scale: 1.05 }}
                          className="inline-block px-6 py-3 font-semibold rounded-lg"
                          style={{
                            backgroundColor: colors.gold,
                            color: colors.navy,
                          }}
                        >
                          Detail Information
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={flipBack}
              disabled={currentPage === 0}
              whileHover={{ scale: currentPage === 0 ? 1 : 1.05 }}
              whileTap={{ scale: currentPage === 0 ? 1 : 0.95 }}
              className="px-6 py-3 rounded-lg text-lg font-semibold"
              style={{
                backgroundColor: currentPage === 0 ? colors.charcoal : colors.sageGreen,
                color: colors.lightCream,
                opacity: currentPage === 0 ? 0.5 : 1,
              }}
            >
              Previous Page
            </motion.button>
            <motion.button
              onClick={flipNext}
              disabled={currentPage === services.length - 1}
              whileHover={{ scale: currentPage === services.length - 1 ? 1 : 1.05 }}
              whileTap={{ scale: currentPage === services.length - 1 ? 1 : 0.95 }}
              className="px-6 py-3 rounded-lg text-lg font-semibold"
              style={{
                backgroundColor: currentPage === services.length - 1 ? colors.charcoal : colors.sageGreen,
                color: colors.lightCream,
                opacity: currentPage === services.length - 1 ? 0.5 : 1,
              }}
            >
              Next Page
            </motion.button>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section
        className="relative py-20"
        id="milestones"
        style={{
          background: colors.lightBeige,
          color: colors.charcoal,
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            style={{ fontFamily: "'Cinzel', serif", color: colors.sageGreen }}
          >
            Our Milestones
          </motion.h2>
          <div className="relative flex flex-col md:flex-row gap-8 items-center">
            <div
              className="hidden md:block absolute top-1/2 h-1 w-full"
              style={{
                background: `linear-gradient(to right, ${colors.sageGreen}33, ${colors.sageGreen}, ${colors.sageGreen}33)`,
                transform: "translateY(-50%)",
                zIndex: 0,
              }}
            />
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: `0 15px 30px rgba(96, 108, 56, 0.15)`,
                }}
                className="relative z-10 w-full md:w-1/3 p-6 rounded-2xl"
                style={{
                  background: `linear-gradient(135deg, ${colors.lightCream} 0%, #fff 100%)`,
                  border: `1px solid ${colors.sageGreen}22`,
                }}
              >
                <div className="flex flex-col items-center text-center">
                  {/* Year and Icon */}
                  <div className="relative mb-4">
                    <span
                      className="text-4xl font-bold text-white bg-gradient-to-r from-sageGreen to-seaGreen rounded-lg px-4 py-2 shadow-md"
                      style={{
                        fontFamily: "'Cinzel', serif",
                        background: `linear-gradient(to right, ${colors.sageGreen}, ${colors.seaGreen})`,
                      }}
                    >
                      <AnimatedCounter target={milestone.year} duration={1500} />
                    </span>
                    {/* Timeline Dot */}
                    <div
                      className="absolute -bottom-10 left-1/2 w-4 h-4 rounded-full"
                      style={{
                        background: colors.sageGreen,
                        transform: "translateX(-50%)",
                        boxShadow: `0 0 10px ${colors.sageGreen}66`,
                      }}
                    />
                  </div>
                  <span className="text-3xl mb-4">{milestone.icon}</span>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: "'Cinzel', serif", color: colors.sageGreen }}
                  >
                    {milestone.title}
                  </h3>
                  <p className="text-base opacity-85 leading-relaxed">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="relative py-32"
        id="contact"
        style={{
          background: colors.gold,
          color: colors.navy,
        }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Ready to Create Magic?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us to schedule a tour or discuss your event needs.
          </p>
          <a
            href="mailto:info@silverpetals.com"
            className="inline-block px-8 py-4 font-bold rounded-lg text-lg"
            style={{
              backgroundColor: colors.cream,
              boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
            }}
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}