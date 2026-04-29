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
          <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center font-black text-white text-2xl shadow-sm">T</div>
          <span className="text-2xl font-black tracking-tighter font-main uppercase transition-colors duration-300 text-black">Tzs Pixels</span>
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
              className="text-xs font-bold transition-colors relative group tracking-widest text-black/60 hover:text-black"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-xs font-bold transition-colors tracking-widest text-black/80 hover:text-black"
          >
            <PlayCircle size={18} />
            <span>DEMO</span>
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary flex items-center gap-2 py-2.5 px-6 text-xs font-black tracking-widest"
          >
            <FaWhatsapp size={18} />
            <span>WHATSAPP</span>
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
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
            className="lg:hidden absolute top-full left-0 w-full glass-nav mt-0 p-8 flex flex-col gap-6 overflow-hidden rounded-b-3xl shadow-2xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-bold text-black hover:text-black/60 uppercase"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-4 pt-4 border-t border-black/5">
              <button className="flex items-center justify-center gap-2 py-3 border border-black/10 rounded-xl text-black font-bold uppercase text-xs tracking-widest">
                <PlayCircle size={20} />
                <span>DEMO</span>
              </button>
              <button className="btn-primary justify-center text-xs font-black tracking-widest">
                <FaWhatsapp size={20} />
                <span>WHATSAPP</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
};

export default Navbar;
