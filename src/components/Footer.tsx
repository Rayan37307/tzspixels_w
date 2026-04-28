import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 border-t border-glass-border">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-accent-primary rounded flex items-center justify-center font-bold text-black">T</div>
              <span className="text-xl font-bold font-main text-white">Tzs Pixels</span>
            </div>
            <p className="text-text-secondary text-sm mb-6 max-w-xs">
              বাংলা ভাষায় প্রথম AI Automation সহকারী, আপনার ব্যবসার জন্য।
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 glass flex items-center justify-center rounded-full hover:bg-accent-primary hover:text-black transition-all text-white">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="w-10 h-10 glass flex items-center justify-center rounded-full hover:bg-accent-primary hover:text-black transition-all text-white">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 glass flex items-center justify-center rounded-full hover:bg-accent-primary hover:text-black transition-all text-white">
                <FaLinkedinIn size={18} />
              </a>
              <a href="#" className="w-10 h-10 glass flex items-center justify-center rounded-full hover:bg-accent-primary hover:text-black transition-all text-white">
                <FaTwitter size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-6 text-white">সার্ভিসসমূহ</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-white transition-colors">Business Automation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Team Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Stock & Inventory</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Task Automation</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-6 text-white">রিসোর্স</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-white transition-colors">ব্লগ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tzs Academy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">কমিউনিটি</a></li>
              <li><a href="#" className="hover:text-white transition-colors">হেল্প সেন্টার</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-6 text-white">কোম্পানি</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-white transition-colors">আমাদের সম্পর্কে</a></li>
              <li><a href="#" className="hover:text-white transition-colors">যোগাযোগ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">প্রাইভেসি পলিসি</a></li>
              <li><a href="#" className="hover:text-white transition-colors">টার্মস অফ সার্ভিস</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-glass-border flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-text-secondary">
          <div className="flex items-center gap-4">
            <span>© 2026 Tzs Pixels. সর্বস্বত্ব সংরক্ষিত।</span>
            <span className="hidden md:inline">|</span>
            <span>CEO: Alvi</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
