import { motion } from 'framer-motion';

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
            MEET YOUR <span className="accent-gradient-text">AI ASSISTANT</span>
          </h2>
          <p className="text-text-secondary text-sm md:text-base font-bold tracking-widest uppercase max-w-2xl mx-auto">
            Our autonomous agents handle the heavy lifting while you scale.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group"
        >
          {/* Glass Container for the Iframe */}
          <div className="glass p-4 md:p-8 rounded-[3rem] border-2 border-white/5 shadow-2xl relative bg-white/[0.01] backdrop-blur-sm overflow-hidden">
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.15)] border border-white/10">
              <iframe 
                title="Ai Assistant Bot Poly-Art 3D Character Animated" 
                className="w-full h-full"
                frameBorder="0" 
                allowFullScreen 
                allow="autoplay; fullscreen; xr-spatial-tracking" 
                src="https://sketchfab.com/models/6796271285b644d5820f200aac7cbb95/embed?autostart=1&camera=0&preload=1&transparent=1&ui_hint=0&ui_infos=0&ui_stop=0&ui_watermark=0"
              >
              </iframe>
            </div>

            {/* Subtle Overlay Glow */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-bg-primary/40 to-transparent"></div>
          </div>

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
