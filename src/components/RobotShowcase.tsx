import { motion } from 'framer-motion';
import Terminal3D from './Terminal3D';

const RobotShowcase = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-bg-primary">
      {/* Background Glows for the Robot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-secondary/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase mb-4">
            CENTRAL <span className="accent-gradient-text">TERMINAL</span>
          </h2>
          <p className="text-text-secondary text-sm md:text-base font-bold tracking-widest uppercase max-w-2xl mx-auto">
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
          {/* Glass Container for the Model */}
          <div className="glass p-0 rounded-[3rem] border-2 border-white/5 shadow-2xl relative bg-white/[0.01] backdrop-blur-sm overflow-hidden min-h-[700px] flex items-center justify-center">
            <Terminal3D />
          </div>

            {/* Subtle Overlay Glow */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-bg-primary/40 to-transparent"></div>

          {/* Decorative Corner Accents */}
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-accent-primary rounded-tl-2xl"></div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-accent-secondary rounded-br-2xl"></div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-[10px] font-black tracking-[0.3em] uppercase text-text-secondary"
        >
          Interactive 3D Preview • Drag to Rotate
        </motion.p>
      </div>
    </section>
  );
};

export default RobotShowcase;
