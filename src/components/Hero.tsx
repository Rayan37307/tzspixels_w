import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { ArrowRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';

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

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col pt-32 pb-20 overflow-hidden bg-white">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Spline 
          scene="https://prod.spline.design/c7f07lhjJKcnmVp1/scene.splinecode" 
          className="w-full h-full"
        />
      </div>

      <div className="container relative z-10 flex-1 flex flex-col justify-between py-6">
        {/* Top Left Block */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-left max-w-md pt-4"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block px-3 py-1 mb-4 text-[8px] font-black tracking-[0.2em] uppercase border rounded-full border-accent-primary bg-accent-primary/10 text-accent-primary"
          >
            eCommerce Growth & AI Automation
          </motion.span>
          
          <motion.h1 
            variants={itemVariants}
            className="text-2xl md:text-4xl font-black mb-4 leading-tight text-black uppercase italic tracking-tighter"
          >
            SCALE YOUR BRAND <br />
            ON <span className="accent-gradient-text">AUTOPILOT.</span>
          </motion.h1>
        </motion.div>

        {/* Bottom Right Block */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="self-end text-right max-w-md flex flex-col items-end pb-4"
        >
          <motion.p 
            variants={itemVariants}
            className="text-sm md:text-base text-black/70 mb-8 leading-relaxed font-medium"
          >
            Custom eCommerce sites, Shopify mastery, High-ROI Ads, and AI-driven automation. Everything your brand needs to dominate the market.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-end gap-4 w-full"
          >
            <button className="btn-primary px-6 py-3 text-[10px] group font-black tracking-widest shadow-[0_0_20px_rgba(168,85,247,0.15)]">
              <FaWhatsapp size={18} className="group-hover:rotate-12 transition-transform" />
              <span>WHATSAPP US</span>
            </button>
            <button className="btn-secondary !text-black !border-black/10 px-6 py-3 text-[10px] flex items-center gap-2 group font-bold tracking-widest border hover:!bg-black/5">
              <span>FREE CONSULTATION</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-8 flex flex-col items-end gap-3 text-[8px] font-bold tracking-widest text-black/60 uppercase"
          >
            <div className="flex -space-x-2 items-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -4, zIndex: 10, scale: 1.1 }}
                  className="w-8 h-8 rounded-full border border-accent-primary bg-white flex items-center justify-center overflow-hidden cursor-pointer shadow-sm"
                >
                  <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="user" className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
            <span>Trusted by 90+ brands</span>
          </motion.div>

          {/* Live Status Indicator */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-8 inline-flex items-center gap-3 px-6 py-2 bg-white/50 backdrop-blur-md rounded-full border border-black/5 shadow-sm"
          >
            <div className="relative flex items-center justify-center">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-2 h-2 bg-red-500 rounded-full animate-ping opacity-75"></div>
            </div>
            <span className="text-[8px] font-black tracking-[0.2em] text-black uppercase">42 Agents live</span>
            <span className="px-2 py-0.5 bg-red-500 text-white text-[7px] font-black rounded-full uppercase tracking-widest">LIVE</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

