import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoaded(true), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
          }}
          className="fixed inset-0 z-[9999] bg-bg-primary flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background Decorative Text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
            <h1 className="text-[30vw] font-black leading-none italic">TZS PIXELS</h1>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Main Percentage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-baseline gap-2 mb-8"
            >
              <span className="text-8xl md:text-[12rem] font-black italic tracking-tighter text-white leading-none">
                {Math.min(progress, 100)}
              </span>
              <span className="text-2xl md:text-4xl font-black text-accent-primary italic">%</span>
            </motion.div>

            {/* Status Text */}
            <div className="flex flex-col items-center gap-4">
              <motion.div 
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-accent-primary shadow-[0_0_10px_#a855f7]"></div>
                <span className="text-[10px] font-black tracking-[0.4em] uppercase text-text-secondary">
                  Initializing Neural Protocol
                </span>
              </motion.div>
              
              {/* Progress Bar */}
              <div className="w-64 h-[2px] bg-white/5 relative overflow-hidden">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-accent-primary"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Corner Elements */}
          <div className="absolute top-12 left-12 flex flex-col gap-1 text-[10px] font-black tracking-widest text-text-secondary uppercase">
            <span>System: Online</span>
            <span>Version: 4.2.0</span>
          </div>
          
          <div className="absolute bottom-12 right-12 flex flex-col gap-1 text-[10px] font-black tracking-widest text-text-secondary uppercase text-right">
            <span>© 2026 TZS PIXELS</span>
            <span>Designed for Excellence</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
