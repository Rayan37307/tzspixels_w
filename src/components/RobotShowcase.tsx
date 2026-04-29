import { motion } from 'framer-motion';
import Terminal3D from './Terminal3D';

const RobotShowcase = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-bg-primary">
      {/* Background Glows for the Robot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-black/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-black italic tracking-tighter uppercase mb-4">
            CENTRAL <span className="accent-gradient-text">TERMINAL</span>
          </h2>
          <p className="text-zinc-500 text-sm md:text-base font-bold tracking-widest uppercase max-w-2xl mx-auto">
            The command center of your automated empire.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group"
        >
          {/* Container for the Model */}
          <div className="bg-white p-0 rounded-[3rem] border border-black/5 shadow-xl relative overflow-hidden min-h-[400px] flex items-center justify-center">
            <Terminal3D />
          </div>

          {/* Decorative Corner Accents */}
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-black rounded-tl-2xl"></div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b border-r border-black rounded-br-2xl"></div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-[10px] font-black tracking-[0.3em] uppercase text-zinc-400"
        >
          Interactive 3D Preview • Drag to Rotate
        </motion.p>
      </div>
    </section>
  );
};

export default RobotShowcase;
