
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="pt-24 pb-12 border-t border-black/5 bg-bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center font-black text-white text-2xl shadow-sm">T</div>
              <span className="text-3xl font-black font-main text-black uppercase tracking-tighter">TZS PIXELS</span>
            </div>
            <p className="text-zinc-500 text-sm mb-10 max-w-xs font-medium leading-relaxed">
              Global eCommerce Growth & AI Automation Agency. Building the future of high-scale digital brands.
            </p>
            <div className="flex gap-5">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map((Icon, i) => (
                <motion.a 
                  key={i}
                  href="#" 
                  whileHover={{ y: -5, backgroundColor: '#000', color: '#fff' }}
                  className="w-12 h-12 bg-white flex items-center justify-center rounded-2xl transition-all text-black border border-black/5 shadow-sm"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-black mb-8 text-black uppercase italic tracking-tighter text-xl">SERVICES</h4>
            <ul className="space-y-5 text-xs font-black tracking-widest text-zinc-500 uppercase">
              <li><a href="#" className="hover:text-black transition-colors">Custom eCommerce</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Shopify & WordPress</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Performance Ads</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Business Automation</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-black mb-8 text-black uppercase italic tracking-tighter text-xl">RESOURCES</h4>
            <ul className="space-y-5 text-xs font-black tracking-widest text-zinc-500 uppercase">
              <li><a href="#" className="hover:text-black transition-colors">Insights & Blog</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Tzs Academy</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Help Center</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-black mb-8 text-black uppercase italic tracking-tighter text-xl">COMPANY</h4>
            <ul className="space-y-5 text-xs font-black tracking-widest text-zinc-500 uppercase">
              <li><a href="#" className="hover:text-black transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] font-black tracking-[0.3em] text-zinc-400 uppercase">
          <div className="flex items-center gap-6">
            <span>© 2026 TZS PIXELS. ALL RIGHTS RESERVED.</span>
            <span className="hidden md:inline opacity-20">|</span>
            <span>FOUNDER: ALVI</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-black transition-colors">PRIVACY</a>
            <a href="#" className="hover:text-black transition-colors">TERMS</a>
            <a href="#" className="hover:text-black transition-colors">COOKIES</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
