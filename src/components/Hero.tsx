import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="relative pt-40 pb-24 overflow-hidden">
      {/* Background Glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="ambient-glow glow-1"
      ></motion.div>
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="ambient-glow glow-2"
      ></motion.div>

      <div className="container relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block px-5 py-2 mb-8 text-[10px] font-black tracking-[0.2em] uppercase border-2 rounded-full border-accent-primary bg-accent-primary/10 text-accent-primary shadow-[0_0_15px_rgba(163,255,18,0.2)]"
          >
            eCommerce Growth & AI Automation
          </motion.span>
          
          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] text-white uppercase italic tracking-tighter"
          >
            SCALE YOUR BRAND <br />
            ON <span className="accent-gradient-text">AUTOPILOT.</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="max-w-3xl mx-auto text-lg md:text-xl text-text-secondary mb-12 leading-relaxed font-medium"
          >
            Custom eCommerce sites, Shopify mastery, High-ROI Ads, and AI-driven automation. Everything your brand needs to dominate the market—unified in one powerhouse platform.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <button className="btn-primary px-10 py-5 text-lg group font-black tracking-widest shadow-[0_0_30px_rgba(163,255,18,0.3)]">
              <FaWhatsapp size={24} className="group-hover:rotate-12 transition-transform" />
              <span>WHATSAPP US NOW</span>
            </button>
            <button className="btn-secondary px-10 py-5 text-lg flex items-center gap-2 group font-bold tracking-widest border-2">
              <span>FREE CONSULTATION</span>
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-16 flex flex-col items-center gap-4 text-xs font-bold tracking-widest text-text-secondary uppercase"
          >
            <div className="flex -space-x-3 items-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -8, zIndex: 10, scale: 1.1 }}
                  className="w-10 h-10 rounded-full border-2 border-accent-primary bg-bg-primary flex items-center justify-center overflow-hidden cursor-pointer"
                >
                  <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="user" className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
            <span>Trusted by 90+ high-scale eCommerce brands</span>
          </motion.div>
        </motion.div>

        {/* Live Status Indicator */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-20 inline-flex items-center gap-4 px-8 py-4 glass rounded-full border-2 border-white/10"
        >
          <div className="relative flex items-center justify-center">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 w-3 h-3 bg-red-500 rounded-full animate-ping opacity-75"></div>
          </div>
          <span className="text-xs font-black tracking-[0.2em] text-white uppercase">AI Agents active: Handling 42 live customers</span>
          <span className="px-3 py-1 bg-red-500 text-white text-[10px] font-black rounded-full uppercase tracking-widest">LIVE</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
