import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      q: 'Tzs Pixels কি ছোট ব্যবসার জন্য?',
      a: 'হ্যাঁ, একদম! আমরা মূলত ছোট ও মাঝারি ব্যবসার (SME) কাজের চাপ কমানোর জন্যই এই প্ল্যাটফর্মটি তৈরি করেছি।',
    },
    {
      q: 'আমার পেজ / সিস্টেম কানেক্ট করতে কত সময় লাগে?',
      a: 'সাধারণত ৫-১০ মিনিটের মধ্যেই আপনি আপনার ফেসবুক পেজ বা হোয়াটসঅ্যাপ কানেক্ট করে অটোমেশন শুরু করতে পারেন।',
    },
    {
      q: 'বাংলা ভাষায় কি সাপোর্ট পাবো?',
      a: 'অবশ্যই! আমাদের AI এজেন্ট বাংলা এবং ইংরেজি—উভয় ভাষাতেই কথা বলতে এবং কাস্টমার হ্যান্ডেল করতে সক্ষম।',
    },
    {
      q: 'প্রাইসিং কিভাবে কাজ করে?',
      a: 'আপনার ব্যবসার প্রয়োজন এবং টিমের সদস্য সংখ্যার ওপর ভিত্তি করে আমাদের বিভিন্ন প্ল্যান রয়েছে। বিস্তারিত জানতে আমাদের হোয়াটসঅ্যাপ করুন।',
    },
    {
      q: 'আমার ডাটা কি সিকিউর থাকবে?',
      a: 'হ্যাঁ, আমরা আপনার ডাটা সিকিউরিটিকে সর্বোচ্চ গুরুত্ব দেই। আপনার সব ডাটা এনক্রিপ্টেড থাকে এবং আমরা কোনো থার্ড পার্টিকে ডাটা শেয়ার করি না।',
    },
  ];

  return (
    <section className="section-padding">
      <div className="container max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">সাধারণ কিছু প্রশ্ন</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass border-glass-border overflow-hidden rounded-2xl">
      <button 
        className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-lg text-white">{q}</span>
        {isOpen ? <Minus size={20} className="text-accent-primary" /> : <Plus size={20} className="text-text-secondary" />}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-text-secondary leading-relaxed border-t border-glass-border">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQ;
