
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
      name: 'ENTERPRISE',
      desc: 'CUSTOM BUILT FOR SCALE',
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

  const itemVariants: any = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7
      }
    }
  };

  return (
    <section id="pricing" className="section-padding bg-bg-secondary">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-black italic tracking-tighter uppercase">PRICING PLANS</h2>
          <p className="text-zinc-500 text-lg font-medium">Choose the powerhouse plan for your brand.</p>
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
              className={`bg-white p-10 rounded-[2.5rem] relative flex flex-col pt-20 border transition-all duration-300 shadow-sm hover:shadow-xl ${plan.isPopular ? 'border-black' : 'border-black/5 hover:border-black/20'}`}
            >
              {plan.isPopular && (
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="popular-badge bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full whitespace-nowrap shadow-lg"
                >
                  MOST POPULAR
                </motion.div>
              )}

              <div className="mb-10">
                <h3 className="text-4xl font-black mb-3 text-black italic tracking-tighter">{plan.name}</h3>
                <p className="text-zinc-400 text-xs font-black tracking-widest uppercase">{plan.desc}</p>
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
                      <div className="mt-1 bg-black/5 rounded-lg p-1 flex items-center justify-center border border-black/5">
                        <Check size={16} className="text-black" />
                      </div>
                      <span className="text-zinc-600 transition-colors">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <button className={`w-full flex items-center justify-center gap-3 py-5 rounded-2xl font-black text-xs tracking-[0.2em] uppercase transition-all ${plan.isPopular ? 'btn-primary' : 'border-2 border-black/10 hover:bg-zinc-50 text-black hover:border-black'}`}>
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
