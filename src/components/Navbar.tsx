import React, { useState, useEffect } from 'react';
import { Menu, X, PlayCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'হোম', href: '#' },
    { name: 'সার্ভিসসমূহ', href: '#services' },
    { name: 'সলিউশন', href: '#solutions' },
    { name: 'কিভাবে কাজ করে', href: '#how-it-works' },
    { name: 'প্রাইসিং', href: '#pricing' },
    { name: 'রিসোর্স', href: '#resources' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass' : 'py-6'}`}>
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent-primary rounded-lg flex items-center justify-center font-bold text-black text-xl">T</div>
          <span className="text-xl font-bold tracking-tighter font-main">Tzs Pixels</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-text-secondary hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="flex items-center gap-2 text-sm font-medium hover:text-accent-primary transition-colors text-white">
            <PlayCircle size={18} />
            <span>ডেমো দেখুন</span>
          </button>
          <button className="btn-primary flex items-center gap-2 py-2 px-5 text-sm">
            <FaWhatsapp size={18} />
            <span>WhatsApp এ কথা বলুন</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full glass mt-2 p-6 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-4 pt-4 border-t border-glass-border">
              <button className="flex items-center justify-center gap-2 py-3 border border-glass-border rounded-xl text-white">
                <PlayCircle size={20} />
                <span>ডেমো দেখুন</span>
              </button>
              <button className="btn-primary justify-center">
                <FaWhatsapp size={20} />
                <span>WhatsApp এ কথা বলুন</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
