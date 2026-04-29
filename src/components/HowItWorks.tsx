import { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      number: '01',
      title: 'ANALYZE & STRATEGIZE',
      desc: 'We deep-dive into your business processes to identify automation and growth opportunities.',
    },
    {
      number: '02',
      title: 'INTEGRATE & CONNECT',
      desc: 'We seamlessly connect your store, social media, ads, and support channels into one ecosystem.',
    },
    {
      number: '03',
      title: 'AUTOMATE & SCALE',
      desc: 'Your brand runs on autopilot—handling leads, customers, and inventory while you focus on growth.',
    },
  ];

  useGSAP(() => {
    gsap.from('.step-card', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      },
      x: (index) => (index % 2 === 0 ? -100 : 100),
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'expo.out'
    });

    gsap.from('.stat-item', {
      scrollTrigger: {
        trigger: '.stats-grid',
        start: 'top 90%',
      },
      scale: 0.5,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'back.out(1.7)'
    });
  }, { scope: containerRef });

  return (
    <section id="how-it-works" ref={containerRef} className="section-padding bg-bg-secondary relative overflow-hidden">
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-black italic tracking-tighter uppercase">OUR PROCESS</h2>
          <p className="text-zinc-500 text-lg max-w-3xl mx-auto font-medium">
            Dominate your market in three powerful steps.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
          {steps.map((step, index) => (
            <div
              key={index}
              className="step-card flex-1 relative w-full"
            >
              <div className="text-[12rem] font-black absolute -top-24 -left-8 pointer-events-none opacity-[0.03] text-black italic">
                {step.number}
              </div>
              
              <div className="bg-white p-10 rounded-3xl relative z-10 h-full border border-black/5 hover:border-black/20 transition-all group shadow-sm">
                <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center font-black text-2xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-md">
                  {step.number}
                </div>
                <h3 className="text-2xl font-black mb-6 leading-tight text-black uppercase italic tracking-tighter">
                  {step.title}
                </h3>
                <p className="text-zinc-500 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                  <div className="w-12 h-1 bg-black opacity-10 origin-left"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Growth Stats */}
        <div className="stats-grid mt-32 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { value: '90+', label: 'GLOBAL BRANDS' },
            { value: '5K+', label: 'HOURS SAVED' },
            { value: '85%', label: 'AUTOMATION RATE' },
            { value: 'NO.1', label: 'ECOM AGENCY' }
          ].map((stat, i) => (
            <div key={i} className="stat-item text-center group">
              <div 
                className="text-5xl md:text-6xl font-black text-black mb-4 italic tracking-tighter transition-transform group-hover:scale-110"
              >
                {stat.value}
              </div>
              <div className="text-[10px] text-zinc-400 font-black tracking-[0.3em] uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
