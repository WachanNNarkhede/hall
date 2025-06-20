'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ServicesPage: React.FC = () => {
  const servicesSectionRef = useRef<HTMLElement>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);



  useEffect(() => {
    console.log('AOS refreshed due to expandedCard change:', expandedCard);
  }, [expandedCard]);

 const services = [
  {
    title: 'Birthday Party',
    services: [
      'Theme Decoration',
      'Balloon Setup',
      'Custom Cake',
      'Kids Entertainment',
      'Photo Booth',
      'Music & Lighting',
      'Return Gifts',
      'Catering',
    ],
    image: 'servicesimage/bday1.png',
    description: 'Celebrate birthdays with fun themes, entertainment, and delicious food.',
  },
  {
    title: 'Marriage',
    services: [
      'Mandap Setup',
      'Stage Decoration',
      'Bridal Entry',
      'Live Band/DJ',
      'Catering & Buffet',
      'Guest Management',
      'Photography',
      'Accommodation',
    ],
    image: '/marriage.jpg',
    description: 'Grand celebrations with complete wedding arrangements and elegant decor.',
  },
  {
    title: 'Death Ceremonies',
    services: [
      'Prayer Hall Setup',
      'Pooja Samagri Arrangement',
      'Catering (Satvik Bhojan)',
      'Seating & Tents',
      'Priest Arrangement',
      'Return Gifts (Dhoti, Towels)',
      'Transport for Guests',
      'Shraddh Setup',
    ],
    image: '/death-ceremony.jpg',
    description: 'Respectful arrangements for 10th, 13th Day and Shraddh rituals with traditional services.',
  },
  {
    title: 'Baby Mundan',
    services: [
      'Mundan Stage Setup',
      'Pooja Essentials',
      'Family Seating',
      'Live Video Coverage',
      'Lunch/Bhoj Arrangement',
      'Traditional Decor',
      'Tonsure Artist',
    ],
    image: '/mundan.jpg',
    description: 'Traditional mundan ceremony arrangements with pooja setup and guest hospitality.',
  },
  {
    title: 'New Year Party',
    services: [
      'DJ & Dance Floor',
      'LED Wall Countdown',
      'Welcome Drinks',
      'Themed Decor',
      'Live Performances',
      'Buffet & Drinks',
      'Party Games',
      'Photo Booth',
    ],
    image: '/newyear.jpg',
    description: 'Ring in the new year with music, dance, delicious food, and sparkling celebrations.',
  },
  {
    title: 'Holi Party',
    services: [
      'Rain Dance Setup',
      'Organic Colors',
      'Thandai & Snacks',
      'Dhol & DJ',
      'Waterproof Tents',
      'Security Staff',
      'Selfie Zones',
    ],
    image: '/holi.jpg',
    description: 'Celebrate Holi with rain dance, safe colors, and high-energy music.',
  },
  {
    title: 'Engagement',
    services: [
      'Ring Ceremony Stage',
      'Floral Backdrop',
      'LED Screens',
      'Catering',
      'Couple Entry Concept',
      'Photography',
      'Seating for Guests',
      'Cake & Toast Setup',
    ],
    image: '/engagement.jpg',
    description: 'Stylish and elegant setups for a memorable engagement celebration.',
  },
  {
    title: 'Anniversary',
    services: [
      'Themed Decor',
      'Couple Dance Floor',
      'Photo Collage Wall',
      'Live Singing',
      'Custom Cake',
      'Special Lighting',
      'Catering Services',
    ],
    image: '/anniversary.jpg',
    description: 'Celebrate your milestone moments with romantic decor and entertainment.',
  },
  {
    title: 'Corporate Events',
    services: [
      'Stage & Audio Setup',
      'Projector Screens',
      'Brand Backdrop',
      'Seating & Tables',
      'Snacks & Meals',
      'Event Hosts',
      'Transportation',
    ],
    image: '/corporate.jpg',
    description: 'Professional setups for corporate launches, conferences, and parties.',
  },
  {
    title: 'Kitty Party',
    services: [
      'Themed Decor',
      'Games & Activities',
      'Tea & Snacks',
      'Music & Karaoke',
      'Photo Booth',
      'MC Hosting',
    ],
    image: '/kitty.jpg',
    description: 'Fun-filled gatherings with games, entertainment and great food.',
  },
];

  const scrollToServices = () => {
    if (servicesSectionRef.current) {
      const offsetTop = servicesSectionRef.current.getBoundingClientRect().top + window.scrollY - 50;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      console.log('Scrolling to services section');
    }
  };

  const handleToggle = (index: number) => {
    console.log(`Toggling card ${index}. Current expandedCard: ${expandedCard}`);
    setExpandedCard(expandedCard === index ? null : index);
    console.log(`New expandedCard: ${expandedCard === index ? null : index}`);
  };

  return (
    <div className="bg-[#FFFFFF] text-[#1A1A1A] min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[55vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center ">
          <img
            src="servicesimage/bday1.png"
            alt="Luxury  Services"
            className="object-cover bg-center bg-cover opacity-90"
          />
        </div>
        <div className="relative mt-16 mb-28 h-[50vh] text-center px-4 max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <div className="absolute inset-0 bg-[#1A1A1A]/30 backdrop-blur-sm rounded-3xl -z-10"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 mt-26 text-white tracking-tight">
            Premium Wedding Services
          </h1>
          <p className="text-xl text-[#FFFFFF]/90 mb-8 max-w-3xl mx-auto">
            Experience exceptional  Weddign Services  to make your special day.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#B8972F', }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#D4AF37] text-[#FFFFFF] font-semibold py-3 px-10 rounded-full shadow-lg transition-all duration-300"
            data-aos="zoom-in"
            data-aos-delay="400"
            onClick={scrollToServices}
          >
            Explore Services
          </motion.button>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesSectionRef} className="py-32 px-4 sm:px-6 lg:px-8 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#D4AF37]">
              Our Signature Services
            </h2>
            <p className="text-lg text-[#666666] max-w-3xl mx-auto">
              Discover our comprehensive range of beauty services designed to pamper and transform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`relative rounded-2xl shadow-lg border border-[#E8E8E8] bg-[#FFFFFF] transition-all duration-300 ${
                  expandedCard === index ? 'min-h-[600px]' : 'h-[450px]'
                }`} // Moved motion.div to outer container
                whileHover={{ y: -10, scale: 1.02, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)' }}
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
                onHoverStart={() => console.log(`Hover started on card ${index}`)}
                onHoverEnd={() => console.log(`Hover ended on card ${index}`)}
              >
                <div className="relative h-60">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-center rounded-t-2xl bg-cover "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/70 to-transparent rounded-t-2xl"></div>
                </div>
                <div className="p-6 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-[#D4AF37] mb-3 text-center">{service.title}</h3>
                  <p className="text-[#666666] mb-4 text-sm text-center">{service.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: '#B8972F', boxShadow: '0 4px 12px rgba(212, 175, 55, 0.4)' }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-[#D4AF37] text-[#FFFFFF] font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-300"
                    onClick={() => handleToggle(index)}
                  >
                    {expandedCard === index ? 'Hide Details' : 'View Details'}
                  </motion.button>
                </div>
                <AnimatePresence>
                  {expandedCard === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="p-6 bg-[#FFFFFF] border-t border-[#E8E8E8]"
                      onAnimationStart={() => console.log(`Expanding card ${index}`)}
                      onAnimationComplete={() => console.log(`Card ${index} expansion complete`)}
                    >
                      <h4 className="text-md font-medium text-[#D4AF37] mb-2">Services Offered:</h4>
                      <ul className="space-y-2">
                        {service.services.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-[#00BCD4] mr-2">•</span>
                            <span className="text-[#666666] text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#D4AF37]">
              Why Choose Our Services
            </h2>
            <p className="text-lg text-[#666666] max-w-3xl mx-auto">
              We combine expertise, premium products, and personalized care for exceptional results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              data-aos="fade-up" 
              data-aos-delay="100"
              whileHover={{ y: -5 }}
              className="bg-[#F9F9F9] p-8 rounded-2xl shadow-md border border-[#E8E8E8]"
            >
              <div className="text-[#D4AF37] text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">Expert Professionals</h3>
              <p className="text-[#666666] text-sm">
                Our certified Wedding specialists have extensive training and stay updated with the latest trends  in the Events industry.
              </p>
            </motion.div>
            
            <motion.div 
              data-aos="fade-up" 
              data-aos-delay="200"
              whileHover={{ y: -5 }}
              className="bg-[#F9F9F9] p-8 rounded-2xl shadow-md border border-[#E8E8E8]"
            >
              <div className="text-[#D4AF37] text-4xl mb-4">💖</div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">Premium Decor</h3>
              <p className="text-[#666666] text-sm">
                We use only trendy Decoration and, professional-grade photographers that are trained to capture moments that you love.
              </p>
            </motion.div>
            
            <motion.div 
              data-aos="fade-up" 
              data-aos-delay="300"
              whileHover={{ y: -5 }}
              className="bg-[#F9F9F9] p-8 rounded-2xl shadow-md border border-[#E8E8E8]"
            >
              <div className="text-[#D4AF37] text-4xl mb-4">👰🏻🤵🏻</div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">Event Organizers.</h3>
              <p className="text-[#666666] text-sm">
                Every service begins with a consultation to understand your unique needs and desired outcomes for customized venue.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;