
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'ANALYZE & STRATEGIZE',
      desc: 'We deep-dive into your business processes to identify automation and growth opportunities.',
    },
    {
      number: '02',
      title: 'INTEGRATE & CONNECT',
      desc: 'We seamlessly connect your store, social media, ads, and support channels into one ecosystem.',
    },
    {
      number: '03',
      title: 'AUTOMATE & SCALE',
      desc: 'Your brand runs on autopilot—handling leads, customers, and inventory while you focus on growth.',
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-bg-secondary relative overflow-hidden">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-white italic tracking-tighter uppercase">OUR PROCESS</h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto font-medium">
            Dominate your market in three powerful steps.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="flex-1 relative w-full"
            >
              <div className="text-[12rem] font-black absolute -top-24 -left-8 pointer-events-none opacity-[0.03] text-white italic">
                {step.number}
              </div>
              
              <div className="glass p-10 rounded-3xl relative z-10 h-full border-2 border-white/5 hover:border-accent-primary transition-all group">
                <div className="w-16 h-16 bg-accent-primary text-black rounded-2xl flex items-center justify-center font-black text-2xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-[0_0_20px_rgba(163,255,18,0.4)]">
                  {step.number}
                </div>
                <h3 className="text-2xl font-black mb-6 leading-tight text-white uppercase italic tracking-tighter">
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                    className="w-12 h-1 bg-accent-primary opacity-20 origin-left"
                  ></motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Growth Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-32 grid grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {[
            { value: '90+', label: 'GLOBAL BRANDS' },
            { value: '5K+', label: 'HOURS SAVED' },
            { value: '85%', label: 'AUTOMATION RATE' },
            { value: 'NO.1', label: 'ECOM AGENCY' }
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <motion.div 
                whileHover={{ scale: 1.2, rotate: -3 }}
                className="text-5xl md:text-6xl font-black text-accent-primary mb-4 italic tracking-tighter"
              >
                {stat.value}
              </motion.div>
              <div className="text-[10px] text-text-secondary font-black tracking-[0.3em] uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
