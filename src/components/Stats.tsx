import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const stats = [
    { label: 'AUTOMATED TASKS TODAY', value: '1,284' },
    { label: 'COMMENTS REPLIED', value: '3,429' },
    { label: 'REVENUE GENERATED', value: '$420K+' },
    { label: 'CONVERSION INCREASE', value: '+34%' },
  ];

  useGSAP(() => {
    gsap.from('.stat-box', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 90%',
      },
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: 'power4.out'
    });

    // Count-up effect would be cool here, but for now just entry stagger
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-12 border-y border-black/5 bg-bg-secondary">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-box text-center group"
            >
              <div 
                className="text-4xl md:text-6xl font-black mb-3 transition-transform group-hover:scale-110 tracking-tighter italic text-black"
              >
                {stat.value}
              </div>
              <div className="text-[10px] text-zinc-400 font-black tracking-[0.2em] uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
