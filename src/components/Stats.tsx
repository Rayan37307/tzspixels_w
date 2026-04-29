
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { label: 'AUTOMATED TASKS TODAY', value: '1,284', color: 'var(--accent-primary)' },
    { label: 'COMMENTS REPLIED', value: '3,429', color: '#60a5fa' },
    { label: 'REVENUE GENERATED', value: '$420K+', color: '#f472b6' },
    { label: 'CONVERSION INCREASE', value: '+34%', color: '#fbbf24' },
  ];

  return (
    <section className="py-12 border-y border-black/5 bg-bg-secondary">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div 
                className="text-4xl md:text-6xl font-black mb-3 transition-transform group-hover:scale-110 tracking-tighter italic text-black"
              >
                {stat.value}
              </div>
              <div className="text-[10px] text-zinc-400 font-black tracking-[0.2em] uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
