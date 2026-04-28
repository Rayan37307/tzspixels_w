import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, Users, Box, CheckSquare, MessageSquare, Send, 
  FileText, Image as ImageIcon, Layout, Globe, BarChart3, ShoppingCart
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: 'Custom eCommerce Development',
      desc: 'High-performance bespoke websites built with Next.js & React for maximum conversion and speed.',
      icon: <Layout style={{ color: '#a3ff12' }} />,
      tags: ['Next.js', 'React', 'Speed'],
    },
    {
      title: 'Shopify & WordPress Experts',
      desc: 'Full store setup, custom theme development, and deep platform optimization.',
      icon: <Globe style={{ color: '#60a5fa' }} />,
      tags: ['Shopify', 'WordPress'],
    },
    {
      title: 'Performance Marketing (Ads)',
      desc: 'Strategic Meta, Google, and TikTok ad campaigns engineered for massive ROI.',
      icon: <BarChart3 style={{ color: '#f472b6' }} />,
      tags: ['Ads', 'Growth'],
    },
    {
      title: 'Creative Design & Posters',
      desc: 'High-impact ad creatives, social media content, and professional brand identity.',
      icon: <ImageIcon style={{ color: '#fb923c' }} />,
      tags: ['Design', 'Ads'],
    },
    {
      title: 'Full Business Automation',
      desc: 'Automate sales, support, and operations using n8n and advanced AI agents.',
      icon: <Zap style={{ color: '#c084fc' }} />,
      tags: ['n8n', 'AI'],
    },
    {
      title: 'eCommerce Brand Nurturing',
      desc: '360° support for your brand—from automation to design, all in one place.',
      icon: <ShoppingCart style={{ color: '#4ade80' }} />,
      tags: ['Brand', 'Scaling'],
    },
    {
      title: 'SMS & WhatsApp Agent',
      desc: 'Instant lead response, automated follow-ups, and 24/7 customer handling.',
      icon: <Send style={{ color: '#22d3ee' }} />,
      tags: ['WhatsApp', 'SMS'],
    },
    {
      title: 'Stock & Inventory Sync',
      desc: 'Real-time inventory tracking across Google Sheets, POS, and your store.',
      icon: <Box style={{ color: '#818cf8' }} />,
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

  const itemVariants = {
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
    <section id="services" className="section-padding relative">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-white italic tracking-tighter">WHAT WE DO</h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto font-medium">
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
              className="glass-card p-8 relative overflow-hidden group border-2 border-white/5 hover:border-accent-primary/50"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 rounded-2xl glass flex items-center justify-center mb-8 border-2 border-white/10"
              >
                {React.cloneElement(feature.icon as React.ReactElement, { size: 32 })}
              </motion.div>
              
              <h3 className="text-xl font-black mb-4 transition-colors group-hover:text-accent-primary text-white leading-tight uppercase">
                {feature.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-8 font-medium">
                {feature.desc}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {feature.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 border-2 border-white/5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-accent-primary">
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
