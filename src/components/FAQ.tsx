import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      q: 'IS TZS PIXELS FOR SMALL BUSINESSES?',
      a: 'Absolutely. We specialize in helping SMEs automate repetitive tasks and scale their revenue through high-impact marketing and custom tech.',
    },
    {
      q: 'HOW LONG DOES SETUP TAKE?',
      a: 'Standard automation and store integrations usually take 5-10 days. Custom eCommerce builds typically take 3-4 weeks depending on complexity.',
    },
    {
      q: 'DO YOU PROVIDE GLOBAL SUPPORT?',
      a: 'Yes. Our AI agents and support teams handle brands across multiple timezones and languages, ensuring 24/7 coverage.',
    },
    {
      q: 'HOW DOES THE PRICING WORK?',
      a: 'We offer tiered subscription plans based on your brand size and requirements. Custom projects are quoted based on the scope of work.',
    },
    {
      q: 'IS MY DATA SECURE?',
      a: 'Security is our top priority. All data is encrypted and we strictly adhere to global privacy standards. Your business data is never shared.',
    },
  ];

  return (
    <section className="section-padding bg-bg-primary">
      <div className="container max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-black italic tracking-tighter uppercase">QUESTIONS?</h2>
          <p className="text-zinc-500 text-lg font-medium">Everything you need to know about scaling with us.</p>
        </motion.div>

        <div className="space-y-6">
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
    <div className="bg-white border border-black/5 overflow-hidden rounded-3xl transition-all hover:border-black/10 shadow-sm">
      <button 
        className="w-full p-8 text-left flex items-center justify-between hover:bg-zinc-50 transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-black text-xl text-black italic tracking-tighter uppercase">{q}</span>
        {isOpen ? <Minus size={24} className="text-black" /> : <Plus size={24} className="text-zinc-400" />}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-8 pt-0 text-zinc-600 leading-relaxed font-medium border-t border-black/5">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQ;
