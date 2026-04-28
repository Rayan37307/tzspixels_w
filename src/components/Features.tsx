import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, Users, Box, CheckSquare, MessageSquare, Send, 
  FileText, Image as ImageIcon, Sparkles 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: 'Business Automation Flow',
      desc: 'Sales, Support, Operations—সব প্রোসেস n8n ও অন্য টুলের সাথে কানেক্ট করে অটো চালাও।',
      icon: <Zap className="text-accent-primary" />,
      tags: ['No-code', 'Bangla + English'],
    },
    {
      title: 'Team Management',
      desc: 'কে কোন টাস্ক করবে, ডেডলাইন, পারফরমেন্স—সব এক জায়গায়।',
      icon: <Users style={{ color: '#60a5fa' }} />,
      tags: ['Real-time', 'SME Friendly'],
    },
    {
      title: 'Stock & Inventory Management',
      desc: 'স্টক কম হলে অটো অ্যালার্ট, Google Sheet / POS এর সাথে সিঙ্ক।',
      icon: <Box style={{ color: '#c084fc' }} />,
      tags: ['Auto-sync', 'Smart Alerts'],
    },
    {
      title: 'Task Management & Reminders',
      desc: 'ডেইলি, উইকলি, মান্থলি রিপিট টাস্ক—আর মিস হবে না কিছু।',
      icon: <CheckSquare style={{ color: '#4ade80' }} />,
      tags: ['Recurring', 'Never Miss'],
    },
    {
      title: 'Comment & Inbox Reply',
      desc: 'Facebook, Instagram, TikTok কমেন্ট ও ইনবক্সে অটো রিপ্লাই—Bangla + English সাপোর্ট।',
      icon: <MessageSquare style={{ color: '#f472b6' }} />,
      tags: ['Multi-platform', '24/7 Active'],
    },
    {
      title: 'SMS & WhatsApp Agent',
      desc: 'লিড আসলে অটো রিপ্লাই, follow-up message, অফার send—সব কিছু Tzs Pixels Agent করে।',
      icon: <Send style={{ color: '#22d3ee' }} />,
      tags: ['Instant Reply', 'Lead Nurture'],
    },
    {
      title: 'Content Generation',
      desc: 'Ads copy, FB পোস্ট, ইমেইল, স্ক্রিপ্ট—এক ক্লিকে তৈরি।',
      icon: <FileText style={{ color: '#fb923c' }} />,
      tags: ['AI-powered', 'Bangla Support'],
    },
    {
      title: 'Image & Creative Generation',
      desc: 'বিজ্ঞাপনের ডিজাইন, সোশ্যাল মিডিয়া ব্যানার—AI ইমেজ জেনারেশন।',
      icon: <ImageIcon style={{ color: '#818cf8' }} />,
      tags: ['Creative AI', 'Brand Ready'],
    },
  ];

  return (
    <section id="services" className="section-padding relative">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Tzs Pixels কী করে?</h2>
          <p className="text-text-secondary text-lg">ব্যবসার সব দিক সামলাবে একটি AI অটোমেশন প্ল্যাটফর্ম।</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 relative overflow-hidden group"
            >
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                {React.cloneElement(feature.icon as React.ReactElement, { size: 28 })}
              </div>
              
              <h3 className="text-xl font-bold mb-4 transition-colors group-hover:text-accent-primary text-white">{feature.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                {feature.desc}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {feature.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 border border-glass-border rounded-full text-xs font-medium uppercase tracking-wider text-text-secondary">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
