import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { label: 'আজকে অটোমেটেড টাস্ক', value: '128', color: 'var(--accent-primary)' },
    { label: 'কমেন্ট রিপ্লাই হয়েছে', value: '342', color: '#60a5fa' },
    { label: 'SMS / WhatsApp রিপ্লাই', value: '97', color: '#f472b6' },
    { label: 'স্টক আপডেট হয়েছে', value: '23 প্রোডাক্ট', color: '#fbbf24' },
  ];

  return (
    <section className="py-10">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 text-center border-glass-border hover:border-accent-primary transition-all group"
            >
              <div className="text-3xl md:text-4xl font-bold mb-2 transition-transform group-hover:scale-110" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="text-sm text-text-secondary font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
