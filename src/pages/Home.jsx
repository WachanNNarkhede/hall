"use client";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useInView } from "react-intersection-observer";

// Color variables
const colors = {
  cream: "#F5F5DC",
  gold: "#D4A017",
  royalGreen: "#1B4D3E",
  black: "#1A1A1A",
  lightGold: "rgba(212, 160, 23, 0.2)",
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

// Image list for Gallery Showcase with captions
const galleryImages = [
  { src: "/shadi.jpg", caption: "Elegant Wedding Reception" },
  { src: "/photoone.jpg", caption: "Corporate Gala Night" },
  { src: "/phototwo.jpg", caption: "Vibrant Birthday Celebration" },
  { src: "/parties.jpg", caption: "Luxurious Anniversary Party" },
];

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

// AnimatedCounter Component

function AnimatedCounter({ target, duration = 1 }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const frame = useRef();
  const start = useRef();
  
  useEffect(() => {
    if (!inView) return;

    const end = parseInt(target, 10);
    const durationMs = duration * 1000;

    const animate = (timestamp) => {
      if (!start.current) start.current = timestamp;
      const progress = timestamp - start.current;
      const value = Math.floor((progress / durationMs) * end);
      setCount(value < end ? value : end);

      if (progress < durationMs) {
        frame.current = requestAnimationFrame(animate);
      }
    };

    frame.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame.current);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Home() {
  const [doorsOpen, setDoorsOpen] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [heroImgIndex, setHeroImgIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [isGalleryPaused, setIsGalleryPaused] = useState(false);

  const services = [
    {
      title: "Wedding Celebrations",
      desc: "Craft your dream wedding with elegant venues, bespoke décor, and gourmet catering.",
      img: "/shadi.jpg",
    },
    {
      title: "Corporate Events",
      desc: "Host professional gatherings with state-of-the-art facilities and custom menus.",
      img: "/team1.jpg",
    },
    {
      title: "Birthday Parties",
      desc: "Celebrate with vibrant themes, personalized décor, and delightful cuisine.",
      img: "/photogra.jpg",
    },
    {
      title: "Gourmet Catering",
      desc: "Enjoy exquisite dishes crafted by top chefs for every taste and tradition.",
      img: "/phototwo.jpg",
    },
  ];

  const milestones = [
    {
      year: "2015",
      title: "Founded Silver Petals",
      desc: "Began creating unforgettable events with our first luxurious banquet hall.",
      icon: "🎉",
    },
    {
      year: "2018",
      title: "Expanded Venues",
      desc: "Added two new halls with diverse themes and larger capacities.",
      icon: "🏛️",
    },
    {
      year: "2023",
      title: "Award-Winning Service",
      desc: "Earned 'Best Event Venue' for exceptional planning and hospitality.",
      icon: "🏆",
    },
  ];

  // Hero and Gallery Carousel Effects
  useEffect(() => {
    const timer = setTimeout(() => setDoorsOpen(true), 500);
    const contentTimer = setTimeout(() => setContentVisible(true), 1500);
    const heroCarouselInterval = setInterval(() => {
      setHeroImgIndex((prev) => (prev + 1) % heroImageList.length);
    }, 4000);
    const galleryInterval = setInterval(() => {
      if (!isGalleryPaused) {
        setGalleryIndex((prev) => (prev + 1) % galleryImages.length);
      }
    }, 3000);
    return () => {
      clearTimeout(timer);
      clearTimeout(contentTimer);
      clearInterval(heroCarouselInterval);
      clearInterval(galleryInterval);
    };
  }, [isGalleryPaused]);

  const getHeroSlides = () => {
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

  const getGallerySlides = () => {
    const images = [];
    for (let i = -1; i <= 1; i++) {
      const actualIndex = (galleryIndex + i + galleryImages.length) % galleryImages.length;
      images.push({
        ...galleryImages[actualIndex],
        center: i === 0,
        offset: i,
      });
    }
    return images;
  };

  const nextGallerySlide = () => {
    setGalleryIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevGallerySlide = () => {
    setGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const flipNext = () => {
    if (currentPage < services.length - 1) setCurrentPage(currentPage + 1);
  };

  const flipBack = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  return (
    <div
      className="relative overflow-x-hidden min-h-screen"
      style={{
        background: `linear-gradient(135deg, ${colors.cream} 0%, ${colors.lightGold} 100%)`,
        color: colors.black,
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        id="home"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hallwed.jpg')", zIndex: 1 }}
        />
        <div
          className="absolute inset-0 z-[2]"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        />
        <div className="absolute inset-0 z-[30] flex">
          <motion.div
            className="w-1/2 h-full"
            initial={{ x: "0%", opacity: 1 }}
            animate={{ x: doorsOpen ? "-100%" : "0%", opacity: doorsOpen ? 0 : 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{
              backgroundImage: "url('/doorr.png')",
              backgroundSize: "cover",
              backgroundPosition: "right center",
              backgroundColor: colors.cream,
            }}
          />
          <motion.div
            className="w-1/2 h-full"
            initial={{ x: "0%", opacity: 1 }}
            animate={{ x: doorsOpen ? "100%" : "0%", opacity: doorsOpen ? 0 : 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{
              backgroundImage: "url('/doorf.png')",
              backgroundSize: "cover",
              backgroundPosition: "left center",
              backgroundColor: colors.cream,
            }}
          />
        </div>
        <motion.div
          className="relative z-[40] flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: contentVisible ? 1 : 0, scale: contentVisible ? 1 : 0.95 }}
          transition={{ delay: 0.2, duration: 1 }}
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
            transition={{ delay: 0.5 }}
          >
            <div className="relative w-full h-full overflow-hidden rounded-xl flex items-center justify-center">
              {getHeroSlides().map((img, i) => (
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
              color: colors.royalGreen,
              textShadow: "2px 2px 6px rgba(0,0,0,0.5)",
            }}
          >
            Create unforgettable memories in our luxurious banquet hall
          </motion.p>
          <motion.a
            href="#gallery"
            whileHover={{
              scale: 1.05,
              backgroundColor: colors.royalGreen,
              boxShadow: `0 0 20px ${colors.gold}`,
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 font-bold rounded-lg text-lg"
            style={{ backgroundColor: colors.gold, color: colors.cream }}
            aria-label="Explore our gallery"
            tabIndex={0}
          >
            Explore Our Gallery
          </motion.a>
        </motion.div>
      </section>

      {/* Why Silver Petals Section */}
      <section
        className="relative py-24 overflow-hidden"
        id="why-silver-petals"
        style={{
          background: `linear-gradient(135deg, ${colors.cream} 0%, ${colors.lightGold} 100%)`,
          color: colors.black,
        }}
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
        <div className="max-w-7xl mx-auto px-6 relative z-10">
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

      {/* Services Section */}
      <section
        className="relative py-20"
        id="services"
        style={{
          background: `linear-gradient(135deg, ${colors.cream} 0%, ${colors.lightGold} 100%)`,
          color: colors.black,
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12"
            style={{ fontFamily: "'Cinzel', serif", color: colors.royalGreen }}
          >
            Our Services
          </motion.h2>
          <div className="relative flex justify-center" style={{ perspective: "1000px" }}>
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
                      style={{ backfaceVisibility: "hidden", border: `2px solid ${colors.gold}` }}
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
                            style={{ fontFamily: "'Cinzel', serif", color: colors.royalGreen }}
                          >
                            {service.title}
                          </h3>
                          <p className="text-lg mb-4" style={{ color: colors.black }}>
                            {service.desc}
                          </p>
                        </div>
                        <motion.a
                          href="#gallery"
                          whileHover={{ scale: 1.05 }}
                          className="inline-block px-6 py-3 font-semibold rounded-lg"
                          style={{ backgroundColor: colors.gold, color: colors.cream }}
                          aria-label={`View details for ${service.title}`}
                          tabIndex={0}
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
                backgroundColor: currentPage === 0 ? colors.black : colors.royalGreen,
                color: colors.cream,
                opacity: currentPage === 0 ? 0.5 : 1,
              }}
              aria-label="Previous Service Page"
              tabIndex={0}
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
                backgroundColor: currentPage === services.length - 1 ? colors.black : colors.royalGreen,
                color: colors.cream,
                opacity: currentPage === services.length - 1 ? 0.5 : 1,
              }}
              aria-label="Next Service Page"
              tabIndex={0}
            >
              Next Page
            </motion.button>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section
        className="relative py-24 overflow-hidden"
        id="milestones"
        style={{
          background: `linear-gradient(135deg, ${colors.cream} 0%, ${colors.lightGold} 100%)`,
          color: colors.black,
        }}
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
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            style={{ fontFamily: "'Cinzel', serif", color: colors.royalGreen }}
          >
            Our Milestones
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-current mt-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </motion.h2>
          <div className="relative flex flex-col md:flex-row gap-8 items-center">
            <div
              className="hidden md:block absolute top-1/2 h-1 w-full"
              style={{
                background: `linear-gradient(to right, ${colors.royalGreen}33, ${colors.royalGreen}, ${colors.royalGreen}33)`,
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
                whileHover={{ scale: 1.03, boxShadow: `0 15px 30px ${colors.lightGold}` }}
                className="relative z-10 w-full md:w-1/3 bg-white rounded-2xl p-6 shadow-lg"
                style={{ border: `1px solid ${colors.gold}` }}
              >
                <div className="flex flex-col items-center text-center">
                  <span
                    className="text-4xl font-bold text-white rounded-lg px-4 py-2 shadow-md mb-4"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      background: `linear-gradient(to right, ${colors.royalGreen}, ${colors.gold})`,
                    }}
                  >
                    <AnimatedCounter target={milestone.year} duration={1} />
                  </span>
                  <span className="text-3xl mb-4" style={{ color: colors.royalGreen }}>
                    {milestone.icon}
                  </span>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: "'Cinzel', serif", color: colors.royalGreen }}
                  >
                    {milestone.title}
                  </h3>
                  <p className="text-base" style={{ color: colors.black }}>
                    {milestone.desc}
                  </p>
                  <div
                    className="absolute -bottom-10 left-1/2 w-4 h-4 rounded-full"
                    style={{
                      background: colors.royalGreen,
                      transform: "translateX(-50%)",
                      boxShadow: `0 0 10px ${colors.royalGreen}66`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Showcase Section */}
      <section
        className="relative py-24 overflow-hidden"
        id="gallery"
        style={{
          background: `linear-gradient(135deg, ${colors.cream} 0%, ${colors.lightGold} 100%)`,
          color: colors.black,
        }}
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
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12"
            style={{ fontFamily: "'Cinzel', serif", color: colors.royalGreen }}
          >
            Event Gallery
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-current mt-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-center mb-12 max-w-3xl mx-auto"
            style={{ color: colors.black }}
          >
            Explore our stunning events, showcasing elegance and creativity in every moment.
          </motion.p>
          <div
            className="relative w-full max-w-5xl mx-auto h-[500px] sm:h-[600px]"
            onMouseEnter={() => setIsGalleryPaused(true)}
            onMouseLeave={() => setIsGalleryPaused(false)}
            role="region"
            aria-label="Event gallery carousel"
            tabIndex={0}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <AnimatePresence initial={false}>
                {getGallerySlides().map((img) => (
                  <motion.div
                    key={`${img.src}-${galleryIndex}`}
                    className={`absolute rounded-2xl overflow-hidden shadow-2xl ${
                      img.center ? "w-[70%] sm:w-[60%] h-[90%]" : "w-[40%] sm:w-[30%] h-[70%]"
                    }`}
                    initial={{ x: img.offset * 300, opacity: 0, rotateY: img.offset * 30 }}
                    animate={{
                      x: img.center ? 0 : img.offset * 250,
                      opacity: img.center ? 1 : 0.7,
                      rotateY: img.center ? 0 : img.offset * 15,
                      zIndex: img.center ? 10 : 5,
                    }}
                    exit={{ x: img.offset * -300, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <div className="relative w-full h-full">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url('${img.src}')`,
                          border: `3px solid ${colors.gold}`,
                        }}
                      />
                      {!img.center && (
                        <div
                          className="absolute inset-0"
                          style={{
                            background: `linear-gradient(${
                              img.offset < 0 ? "to right" : "to left"
                            }, ${colors.black}40, transparent)`,
                          }}
                        />
                      )}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4 text-center"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: img.center ? 0 : 50, opacity: img.center ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-lg font-semibold" style={{ fontFamily: "'Cinzel', serif" }}>
                          {img.caption}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            <motion.button
              onClick={prevGallerySlide}
              whileHover={{ scale: 1.1, backgroundColor: colors.gold }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-[-40px] sm:left-[-60px] top-1/2 transform -translate-y-1/2 p-3 rounded-full shadow-lg"
              style={{ backgroundColor: colors.royalGreen, color: colors.cream }}
              aria-label="Previous Gallery Slide"
              tabIndex={0}
            >
              <IconChevronLeft size={28} />
            </motion.button>
            <motion.button
              onClick={nextGallerySlide}
              whileHover={{ scale: 1.1, backgroundColor: colors.gold }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-[-40px] sm:right-[-60px] top-1/2 transform -translate-y-1/2 p-3 rounded-full shadow-lg"
              style={{ backgroundColor: colors.royalGreen, color: colors.cream }}
              aria-label="Next Gallery Slide"
              tabIndex={0}
            >
              <IconChevronRight size={28} />
            </motion.button>
            <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 flex gap-2">
              {galleryImages.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setGalleryIndex(i)}
                  className={`w-3 h-3 rounded-full ${
                    i === galleryIndex ? "opacity-100" : "opacity-50"
                  }`}
                  style={{ backgroundColor: colors.royalGreen }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  aria-label={`Go to gallery slide ${i + 1}`}
                  tabIndex={0}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-12">
            <motion.a
              href="mailto:info@silverpetals.com"
              whileHover={{ scale: 1.05, backgroundColor: colors.gold }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 font-bold rounded-lg text-lg shadow-md"
              style={{ backgroundColor: colors.royalGreen, color: colors.cream }}
              aria-label="Contact us"
              tabIndex={0}
            >
              Contact Us
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}