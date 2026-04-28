import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'মোহাম্মদ রফিক',
      role: 'অনলাইন ফ্যাশন স্টোর',
      text: '"আমাদের অনলাইন দোকানের কমেন্ট রিপ্লাই আর স্টক আপডেট—সব এখন অটো। Tzs Pixels ছাড়া চিন্তাই করতে পারি না।',
      img: 'https://i.pravatar.cc/100?img=11'
    },
    {
      name: 'সানজিদা আক্তার',
      role: 'ডিজিটাল মার্কেটিং এজেন্সি',
      text: '"ক্লায়েন্টদের সোশ্যাল মিডিয়া ম্যানেজ করা এখন অনেক সহজ। কনটেন্ট জেনারেশন ফিচার তো মন্ত্রমুগ্ধের মতো!"',
      img: 'https://i.pravatar.cc/100?img=45'
    },
    {
      name: 'তানভীর হাসান',
      role: 'রেস্টুরেন্ট চেইন',
      text: '"WhatsApp অর্ডার ম্যানেজমেন্ট আর টিম কোঅর্ডিনেশন—সব জায়গায় Tzs Pixels আমাদের সময় বাঁচিয়ে দিয়েছে। ব্যবসা এখন স্মুথ চলছে।',
      img: 'https://i.pravatar.cc/100?img=33'
    }
  ];

  return (
    <section className="section-padding overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">যারা ব্যবহার করছেন, তারাই বলছেন</h2>
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={18} fill="var(--accent-primary)" stroke="none" />)}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl relative"
            >
              <Quote className="text-accent-primary absolute top-6 right-6 opacity-10" size={40} />
              
              <p className="text-lg italic mb-8 leading-relaxed relative z-10 text-white">
                {t.text}
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent-primary">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-xs text-text-secondary uppercase tracking-wider">{t.role}</div>
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
