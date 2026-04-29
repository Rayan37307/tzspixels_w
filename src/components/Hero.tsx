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
    <section className="relative min-h-screen overflow-hidden bg-[#E3E3E3]">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full h-auto md:scale-100 scale-100 flex items-center justify-center"
        >
          <Spline 
            scene="https://prod.spline.design/c7f07lhjJKcnmVp1/scene.splinecode" 
            className="w-full h-auto"
          />
        </motion.div>
      </div>

      <div className="container relative z-10 h-screen pointer-events-none">
        {/* Top Left Block */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="absolute top-32 left-6 md:left-12 text-left max-w-[200px] md:max-w-md pointer-events-auto"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block px-2 py-0.5 mb-2 text-[6px] md:text-[8px] font-black tracking-[0.2em] uppercase border rounded-full border-accent-primary bg-accent-primary/10 text-accent-primary"
          >
            AI AUTOMATION
          </motion.span>
          
          <motion.h1 
            variants={itemVariants}
            className="text-sm md:text-2xl font-black mb-2 leading-tight text-black uppercase italic tracking-tighter"
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
          className="absolute bottom-12 right-6 md:right-12 text-right max-w-[250px] md:max-w-md flex flex-col items-end pointer-events-auto"
        >
          <motion.p 
            variants={itemVariants}
            className="text-[10px] md:text-sm text-black/70 mb-4 leading-relaxed font-medium"
          >
            Custom eCommerce sites, Shopify mastery, High-ROI Ads, and AI-driven automation. 
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-end gap-2 w-full"
          >
            <button className="btn-primary px-4 py-2 text-[8px] group font-black tracking-widest">
              <FaWhatsapp size={14} />
              <span>WHATSAPP</span>
            </button>
            <button className="btn-secondary !text-black !border-black/10 px-4 py-2 text-[8px] flex items-center gap-2 group font-bold tracking-widest border">
              <span>CONSULT</span>
              <ArrowRight size={14} />
            </button>
          </motion.div>

          {/* Live Status Indicator */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-white/50 backdrop-blur-md rounded-full border border-black/5 shadow-sm"
          >
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-[6px] font-black tracking-[0.2em] text-black uppercase">42 Agents live</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

