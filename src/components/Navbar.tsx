import { useState, useEffect } from 'react';
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
    { name: 'HOME', href: '#' },
    { name: 'SERVICES', href: '#services' },
    { name: 'SOLUTIONS', href: '#solutions' },
    { name: 'HOW IT WORKS', href: '#how-it-works' },
    { name: 'PRICING', href: '#pricing' },
    { name: 'RESOURCES', href: '#resources' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 glass-nav' : 'py-6'}`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-10 h-10 bg-accent-primary rounded-lg flex items-center justify-center font-black text-black text-2xl shadow-[0_0_20px_rgba(163,255,18,0.5)]">T</div>
          <span className="text-2xl font-black tracking-tighter font-main text-white uppercase">Tzs Pixels</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a 
              key={link.name} 
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
              className="text-xs font-bold text-text-secondary hover:text-accent-primary transition-colors relative group tracking-widest"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-primary transition-all group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-xs font-bold hover:text-accent-primary transition-colors text-white tracking-widest"
          >
            <PlayCircle size={18} />
            <span>WATCH DEMO</span>
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(163,255,18,0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary flex items-center gap-2 py-2.5 px-6 text-xs font-black tracking-widest"
          >
            <FaWhatsapp size={18} />
            <span>WHATSAPP US</span>
          </motion.button>
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full glass mt-2 p-6 flex flex-col gap-6 overflow-hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-bold text-white hover:text-accent-primary uppercase"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-4 pt-4 border-t border-glass-border">
              <button className="flex items-center justify-center gap-2 py-3 border border-glass-border rounded-xl text-white font-bold uppercase text-xs tracking-widest">
                <PlayCircle size={20} />
                <span>WATCH DEMO</span>
              </button>
              <button className="btn-primary justify-center text-xs font-black tracking-widest">
                <FaWhatsapp size={20} />
                <span>WHATSAPP US</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        .glass-nav {
          background: rgba(5, 5, 5, 0.9);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}} />
    </motion.nav>
  );
};

export default Navbar;
