import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'আমাদেরকে আপনার ব্যবসা বুঝিয়ে বলুন',
      desc: 'আপনার ব্যবসা কী করে, কোন কাজগুলো রিপিট হয়—সেগুলো শেয়ার করুন।',
    },
    {
      number: '02',
      title: 'সিস্টেম ও টুল কানেক্ট করি',
      desc: 'Facebook পেজ, WhatsApp, POS/Inventory, Google Sheet, CRM—সব কানেক্ট।',
    },
    {
      number: '03',
      title: 'Tzs Pixels Agent সব চালাবে',
      desc: 'কমেন্ট রিপ্লাই, লিড follow-up, স্টক আপডেট, রিপোর্ট—সব অটো চলবে।',
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">কিভাবে কাজ করে?</h2>
          <p className="text-text-secondary text-lg">মাত্র ৩ ধাপেই আপনার ব্যবসা অটোমেশন।</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex-1 relative w-full"
            >
              <div className="text-8xl font-black absolute -top-10 -left-4 pointer-events-none opacity-5 text-white">
                {step.number}
              </div>
              
              <div className="glass p-8 rounded-3xl relative z-10 h-full hover:border-accent-primary transition-colors">
                <div className="w-12 h-12 bg-accent-primary text-black rounded-full flex items-center justify-center font-bold mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-4 leading-tight text-white">{step.title}</h3>
                <p className="text-text-secondary leading-relaxed">{step.desc}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                  <div className="w-12 h-0.5 bg-accent-primary opacity-30"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Growth Stats */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: '0+', label: 'ব্যবসা মালিক আমাদের সাথে' },
            { value: '0', label: 'ঘণ্টা সেভ প্রতি সপ্তাহে' },
            { value: '0%', label: 'এর বেশি রিপিট টাস্ক অটোমেশন' },
            { value: '1st', label: 'Bangla First AI Automation প্ল্যাটফর্ম' }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-bold text-accent-primary mb-2">{stat.value}</div>
              <div className="text-sm text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
