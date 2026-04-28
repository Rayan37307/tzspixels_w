import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter Plan',
      desc: 'নতুন ব্যবসার জন্য',
      features: [
        'AI Support Agent',
        'Comment & Inbox Automation',
        'WhatsApp / SMS Agent (Basic)',
        'Stock & Task Automation',
        '৫টি পর্যন্ত টিম মেম্বার',
      ],
      isPopular: false,
    },
    {
      name: 'Growth Plan',
      desc: 'সবচেয়ে উন্নত সমাধান',
      features: [
        'Starter এর সব ফিচার',
        'Advanced Analytics',
        '১৫টি পর্যন্ত টিম মেম্বার',
        'Custom Workflow Builder',
        'Priority Support',
      ],
      isPopular: true,
    },
    {
      name: 'Pro / Agency Plan',
      desc: 'বড় টিমের জন্য',
      features: [
        'Growth এর সব ফিচার',
        'Unlimited Team Members',
        'White-label Options',
        'Dedicated Account Manager',
        'Custom Integration',
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">আপনার গ্রোথের সাথে স্কেল হবে প্রাইসিং</h2>
          <p className="text-text-secondary text-lg">আপনার ব্যবসার জন্য সঠিক প্ল্যান বেছে নিন।</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass p-8 rounded-3xl relative flex flex-col pt-16 ${plan.isPopular ? 'border-accent-primary' : 'border-glass-border'}`}
            >
              {plan.isPopular && (
                <div className="popular-badge bg-accent-primary text-black text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap">
                  সবচেয়ে জনপ্রিয়
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                <p className="text-text-secondary text-sm">{plan.desc}</p>
              </div>

              <div className="flex-1">
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <div className="mt-1 bg-accent-primary/10 rounded-full p-0.5 flex items-center justify-center">
                        <Check size={14} className="text-accent-primary" />
                      </div>
                      <span className="text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all ${plan.isPopular ? 'btn-primary' : 'glass border-glass-border hover:border-white'}`}>
                <FaWhatsapp size={18} />
                <span>WhatsApp এ কথা বলুন</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
