import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Glows */}
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase border rounded-full border-glass-border glass text-accent-primary">
            প্রথম AI অটোমেশন প্ল্যাটফর্ম
          </span>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white">
            আপনার পুরো ব্যবসা চালান <br />
            <span className="accent-gradient-text">Tzs Pixels</span> দিয়ে, অটো-পাইলটে।
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-text-secondary mb-10 leading-relaxed">
            টিম ম্যানেজমেন্ট, স্টক ট্র্যাকিং, টাস্ক, কনটেন্ট, কমেন্ট আর SMS রিপ্লাই—সব কিছুই এখন এক প্ল্যাটফর্মে অটোমেশন।
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="btn-primary px-8 py-4 text-lg">
              <FaWhatsapp size={22} />
              <span>এখনই WhatsApp এ কথা বলুন</span>
            </button>
            <button className="btn-secondary px-8 py-4 text-lg flex items-center gap-2">
              <span>ফ্রি কনসাল্টেশন</span>
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-2 text-sm text-text-secondary">
            <div className="flex -space-x-2 items-center">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-bg-primary bg-white/5 flex items-center justify-center overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <span>ইতোমধ্যে ৯০+ ব্যবসা মালিক Tzs Pixels ব্যবহার করছেন।</span>
          </div>
        </motion.div>

        {/* Live Status Indicator */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 inline-flex items-center gap-4 px-6 py-3 glass rounded-2xl border border-glass-border"
        >
          <div className="relative flex items-center justify-center">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 w-3 h-3 bg-red-500 rounded-full animate-ping opacity-75"></div>
          </div>
          <span className="text-sm font-medium text-white">AI Agent এখনই কাস্টমারকে রিপ্লাই দিচ্ছে…</span>
          <span className="px-2 py-0.5 bg-red-500/10 text-red-500 text-xs font-bold rounded uppercase tracking-wider">লাইভ</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
