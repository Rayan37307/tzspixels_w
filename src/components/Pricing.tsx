import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'STARTER',
      desc: 'FOR GROWING BRANDS',
      features: [
        'AI Support Agent',
        'Inbox Automation',
        'Shopify/WP Setup',
        'Stock Automation',
        'Up to 5 Team Members',
      ],
      isPopular: false,
    },
    {
      name: 'GROWTH',
      desc: 'MOST ADVANCED SOLUTION',
      features: [
        'Everything in Starter',
        'Performance Ads Support',
        'Custom Workflow Builder',
        'Advanced Analytics',
        'Priority Support',
      ],
      isPopular: true,
    },
    {
      features: [
        'Everything in Growth',
        'Custom Next.js Store',
        'Full Brand Nurturing',
        'Dedicated Manager',
        'Custom Integration',
      ],
      isPopular: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="pricing" className="section-padding bg-bg-secondary/30">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-white italic tracking-tighter uppercase">PRICING PLANS</h2>
          <p className="text-text-secondary text-lg font-medium">Choose the powerhouse plan for your brand.</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`glass p-10 rounded-[2.5rem] relative flex flex-col pt-20 border-2 transition-all duration-300 ${plan.isPopular ? 'border-accent-primary shadow-[0_0_40px_rgba(163,255,18,0.1)]' : 'border-white/5 hover:border-white/20'}`}
            >
              {plan.isPopular && (
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="popular-badge bg-accent-primary text-black text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full whitespace-nowrap shadow-[0_0_20px_rgba(163,255,18,0.5)]"
                >
                  MOST POPULAR
                </motion.div>
              )}

              <div className="mb-10">
                <h3 className="text-4xl font-black mb-3 text-white italic tracking-tighter">{plan.name}</h3>
                <p className="text-text-secondary text-xs font-black tracking-widest uppercase">{plan.desc}</p>
              </div>

              <div className="flex-1">
                <ul className="space-y-5 mb-12">
                  {plan.features.map((feature, i) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                      className="flex items-start gap-4 text-sm font-semibold"
                    >
                      <div className="mt-1 bg-accent-primary/20 rounded-lg p-1 flex items-center justify-center">
                        <Check size={16} className="text-accent-primary" />
                      </div>
                      <span className="text-text-secondary group-hover:text-white transition-colors">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <button className={`w-full flex items-center justify-center gap-3 py-5 rounded-2xl font-black text-xs tracking-[0.2em] uppercase transition-all ${plan.isPopular ? 'btn-primary' : 'glass border-2 border-white/10 hover:border-white text-white'}`}>
                <FaWhatsapp size={20} />
                <span>WHATSAPP US</span>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
