import { useRef } from 'react';
import { Quote, Star } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: 'MICHAEL CHEN',
      role: 'FOUNDER, URBAN WEAR',
      text: '"Tzs Pixels completely automated our inventory and customer support. Our ROI has never been higher. Absolutely game-changing."',
      img: 'https://i.pravatar.cc/100?img=11'
    },
    {
      name: 'SARAH JENKINS',
      role: 'MARKETING HEAD, GLOW TECH',
      text: '"The performance ads and creative designs they provided scaled our brand from $10k to $100k MRR in just three months."',
      img: 'https://i.pravatar.cc/100?img=45'
    },
    {
      name: 'DAVID ROSS',
      role: 'CEO, KITCHEN PRO',
      text: '"The custom Next.js site is lightning fast. Combined with their WhatsApp automation, our conversion rate jumped by 40%."',
      img: 'https://i.pravatar.cc/100?img=33'
    }
  ];

  useGSAP(() => {
    gsap.from('.testimonial-card', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      },
      y: 100,
      opacity: 0,
      stagger: 0.15,
      duration: 1.2,
      ease: 'power4.out'
    });

    gsap.from('.star-item', {
      scrollTrigger: {
        trigger: '.stars-container',
        start: 'top 90%',
      },
      scale: 0,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: 'back.out(1.7)'
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="section-padding overflow-hidden bg-bg-primary">
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-black italic tracking-tighter uppercase">CLIENT SUCCESS</h2>
          <div className="stars-container flex justify-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="star-item">
                <Star size={24} fill="black" stroke="none" className="drop-shadow-sm" />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="testimonial-card bg-white p-10 rounded-[2rem] relative border border-black/5 hover:border-black/20 transition-all group shadow-sm hover:shadow-xl hover:-translate-y-2"
            >
              <Quote className="text-black absolute top-8 right-10 opacity-5 group-hover:opacity-10 transition-opacity" size={60} />
              
              <p className="text-xl font-bold italic mb-10 leading-relaxed relative z-10 text-black tracking-tight">
                {t.text}
              </p>
              
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-black/10 shadow-sm">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-black text-lg text-black uppercase italic tracking-tighter">{t.name}</div>
                  <div className="text-[10px] text-zinc-400 font-black uppercase tracking-[0.2em]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
