import { useRef } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { ArrowRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!titleRef.current) return;

    // Split text for animation
    const text = new SplitType(titleRef.current, { types: 'chars,words' });
    
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.from('.hero-badge', {
      y: 20,
      opacity: 0,
      duration: 1,
      delay: 0.5
    })
    .from(text.chars, {
      y: 100,
      opacity: 0,
      stagger: 0.02,
      duration: 1,
    }, '-=0.8')
    .from('.hero-model', {
      scale: 0.8,
      opacity: 0,
      duration: 1.5,
      ease: 'expo.out'
    }, '-=1')
    .from('.hero-bottom-right > *', {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
    }, '-=1');

    // Floating animation for model
    gsap.to('.hero-model', {
      y: 15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-bg-primary">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="hero-model w-full h-auto md:scale-100 scale-100 flex items-center justify-center">
          <Spline 
            scene="https://prod.spline.design/c7f07lhjJKcnmVp1/scene.splinecode" 
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="container relative z-10 h-screen pointer-events-none">
        {/* Top Left Block */}
        <div className="absolute top-32 left-6 md:left-12 text-left max-w-[200px] md:max-w-md pointer-events-auto">
          <span className="hero-badge inline-block px-2 py-0.5 mb-2 text-[6px] md:text-[8px] font-black tracking-[0.2em] uppercase border rounded-full border-black/10 bg-black/5 text-black">
            AI AUTOMATION
          </span>
          
          <h1 
            ref={titleRef}
            className="hero-title text-sm md:text-2xl font-black mb-2 leading-tight text-black uppercase italic tracking-tighter"
          >
            SCALE YOUR BRAND <br />
            ON <span className="accent-gradient-text">AUTOPILOT.</span>
          </h1>
        </div>

        {/* Bottom Right Block */}
        <div className="hero-bottom-right absolute bottom-12 right-6 md:right-12 text-right max-w-[250px] md:max-w-md flex flex-col items-end pointer-events-auto">
          <p className="text-[10px] md:text-sm text-black/60 mb-4 leading-relaxed font-medium">
            Custom eCommerce sites, Shopify mastery, High-ROI Ads, and AI-driven automation. 
          </p>

          <div className="flex flex-col md:flex-row items-center justify-end gap-2 w-full">
            <button className="btn-primary px-4 py-2 text-[8px] group font-black tracking-widest">
              <FaWhatsapp size={14} />
              <span>WHATSAPP</span>
            </button>
            <button className="btn-secondary px-4 py-2 text-[8px] flex items-center gap-2 group font-bold tracking-widest border">
              <span>CONSULT</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Live Status Indicator */}
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 glass rounded-full border border-black/5 shadow-sm">
            <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse"></div>
            <span className="text-[6px] font-black tracking-[0.2em] text-black uppercase">42 Agents live</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
