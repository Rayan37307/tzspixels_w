import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="pt-24 pb-12 border-t-2 border-white/5 bg-bg-secondary/50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-accent-primary rounded-xl flex items-center justify-center font-black text-black text-2xl shadow-[0_0_20px_rgba(163,255,18,0.4)]">T</div>
              <span className="text-3xl font-black font-main text-white uppercase tracking-tighter">TZS PIXELS</span>
            </div>
            <p className="text-text-secondary text-sm mb-10 max-w-xs font-medium leading-relaxed">
              Global eCommerce Growth & AI Automation Agency. Building the future of high-scale digital brands.
            </p>
            <div className="flex gap-5">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map((Icon, i) => (
                <motion.a 
                  key={i}
                  href="#" 
                  whileHover={{ y: -5, backgroundColor: 'var(--accent-primary)', color: '#000' }}
                  className="w-12 h-12 glass flex items-center justify-center rounded-2xl transition-all text-white border-2 border-white/5"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-black mb-8 text-white uppercase italic tracking-tighter text-xl">SERVICES</h4>
            <ul className="space-y-5 text-xs font-black tracking-widest text-text-secondary uppercase">
              <li><a href="#" className="hover:text-accent-primary transition-colors">Custom eCommerce</a></li>
              <li><a href="#" className="hover:text-accent-primary transition-colors">Shopify & WordPress</a></li>
              <li><a href="#" className="hover:text-accent-primary transition-colors">Performance Ads</a></li>
              <li><a href="#" className="hover:text-accent-primary transition-colors">Business Automation</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-black mb-8 text-white uppercase italic tracking-tighter text-xl">RESOURCES</h4>
            <ul className="space-y-5 text-xs font-black tracking-widest text-text-secondary uppercase">
              <li><a href="#" className="hover:text-accent-primary transition-colors">Insights & Blog</a></li>
              <li><a href="#" className="hover:text-accent-primary transition-colors">Tzs Academy</a></li>
              <li><a href="#" className="hover:text-accent-primary transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-accent-primary transition-colors">Help Center</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-black mb-8 text-white uppercase italic tracking-tighter text-xl">COMPANY</h4>
            <ul className="space-y-5 text-xs font-black tracking-widest text-text-secondary uppercase">
              <li><a href="#" className="hover:text-accent-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-accent-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t-2 border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] font-black tracking-[0.3em] text-text-secondary uppercase">
          <div className="flex items-center gap-6">
            <span>© 2026 TZS PIXELS. ALL RIGHTS RESERVED.</span>
            <span className="hidden md:inline opacity-20">|</span>
            <span>FOUNDER: ALVI</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">PRIVACY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS</a>
            <a href="#" className="hover:text-white transition-colors">COOKIES</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
