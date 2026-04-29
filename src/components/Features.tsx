import { motion } from 'framer-motion';
import { 
  Zap, Box, Send, 
  Image as ImageIcon, Layout, Globe, BarChart3, ShoppingCart
} from 'lucide-react';
import { cloneElement, type ReactElement } from 'react';

const Features = () => {
  const features = [
    {
      title: 'Custom eCommerce Development',
      desc: 'High-performance bespoke websites built with Next.js & React for maximum conversion and speed.',
      icon: <Layout className="text-black" />,
      tags: ['Next.js', 'React', 'Speed'],
    },
    {
      title: 'Shopify & WordPress Experts',
      desc: 'Full store setup, custom theme development, and deep platform optimization.',
      icon: <Globe className="text-black" />,
      tags: ['Shopify', 'WordPress'],
    },
    {
      title: 'Performance Marketing (Ads)',
      desc: 'Strategic Meta, Google, and TikTok ad campaigns engineered for massive ROI.',
      icon: <BarChart3 className="text-black" />,
      tags: ['Ads', 'Growth'],
    },
    {
      title: 'Creative Design & Posters',
      desc: 'High-impact ad creatives, social media content, and professional brand identity.',
      icon: <ImageIcon className="text-black" />,
      tags: ['Design', 'Ads'],
    },
    {
      title: 'Full Business Automation',
      desc: 'Automate sales, support, and operations using n8n and advanced AI agents.',
      icon: <Zap className="text-black" />,
      tags: ['n8n', 'AI'],
    },
    {
      title: 'eCommerce Brand Nurturing',
      desc: '360° support for your brand—from automation to design, all in one place.',
      icon: <ShoppingCart className="text-black" />,
      tags: ['Brand', 'Scaling'],
    },
    {
      title: 'SMS & WhatsApp Agent',
      desc: 'Instant lead response, automated follow-ups, and 24/7 customer handling.',
      icon: <Send className="text-black" />,
      tags: ['WhatsApp', 'SMS'],
    },
    {
      title: 'Stock & Inventory Sync',
      desc: 'Real-time inventory tracking across Google Sheets, POS, and your store.',
      icon: <Box className="text-black" />,
      tags: ['Sync', 'Stock'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="section-padding relative bg-white">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-black italic tracking-tighter">WHAT WE DO</h2>
          <p className="text-zinc-500 text-lg max-w-3xl mx-auto font-medium">
            Everything your eCommerce brand needs to scale—unified in one powerhouse platform.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="glass-card p-8 relative overflow-hidden group border-2 border-black/5 hover:border-black/20"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 rounded-2xl bg-zinc-50 flex items-center justify-center mb-8 border border-black/5"
              >
                {cloneElement(feature.icon as ReactElement, { size: 32 } as any)}
              </motion.div>
              
              <h3 className="text-xl font-black mb-4 transition-colors group-hover:text-zinc-600 text-black leading-tight uppercase">
                {feature.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8 font-medium">
                {feature.desc}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {feature.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-black/5 border border-black/5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-black/60">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
