
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'MICHAEL CHEN',
      role: 'FOUNDER, URBAN WEAR',
      text: '"Tzs Pixels completely automated our inventory and customer support. Our ROI has never been higher. Absolutely game-changing."',
      img: 'https://i.pravatar.cc/100?img=11'
    },
    {
      name: 'SARAH JENKINS',
      role: 'MARKETING HEAD, GLOW TECH',
      text: '"The performance ads and creative designs they provided scaled our brand from $10k to $100k MRR in just three months."',
      img: 'https://i.pravatar.cc/100?img=45'
    },
    {
      name: 'DAVID ROSS',
      role: 'CEO, KITCHEN PRO',
      text: '"The custom Next.js site is lightning fast. Combined with their WhatsApp automation, our conversion rate jumped by 40%."',
      img: 'https://i.pravatar.cc/100?img=33'
    }
  ];

  return (
    <section className="section-padding overflow-hidden bg-bg-primary">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-white italic tracking-tighter uppercase">CLIENT SUCCESS</h2>
          <div className="flex justify-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map(i => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <Star size={24} fill="var(--accent-primary)" stroke="none" className="drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-[2rem] relative border-2 border-white/5 hover:border-accent-primary/30 transition-all group"
            >
              <Quote className="text-accent-primary absolute top-8 right-10 opacity-10 group-hover:opacity-30 transition-opacity" size={60} />
              
              <p className="text-xl font-bold italic mb-10 leading-relaxed relative z-10 text-white tracking-tight">
                {t.text}
              </p>
              
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-accent-secondary shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-black text-lg text-white uppercase italic tracking-tighter">{t.name}</div>
                  <div className="text-[10px] text-text-secondary font-black uppercase tracking-[0.2em]">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
