import { useState, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const faqs = [
    {
      q: 'HOW FAST CAN WE SEE RESULTS?',
      a: 'Typically, automation takes 2-4 weeks to fully integrate. However, ad performance can often show positive ROI within the first 14 days of scaling.'
    },
    {
      q: 'DO YOU PROVIDE ONGOING SUPPORT?',
      a: 'Yes. We don\'t just build and leave. We offer monthly management for ads, automations, and store updates to ensure constant growth.'
    },
    {
      q: 'IS MY BUSINESS DATA SECURE?',
      a: 'Absolutely. We use industry-standard encryption and secure API connections (n8n/Shopify) to ensure your data stays private and protected.'
    },
    {
      q: 'CAN YOU WORK WITH MY EXISTING STORE?',
      a: 'Yes, we specialize in optimizing existing Shopify and WordPress stores, as well as building custom Next.js frontends for legacy backends.'
    }
  ];

  useGSAP(() => {
    gsap.from('.faq-item', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: 'power4.out'
    });
  }, { scope: containerRef });

  return (
    <section id="faq" ref={containerRef} className="section-padding bg-white">
      <div className="container max-w-4xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-black italic tracking-tighter uppercase">F.A.Q</h2>
          <p className="text-zinc-500 text-lg font-medium">Common questions about scaling with Tzs Pixels.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="faq-item border border-black/5 rounded-[2rem] overflow-hidden bg-zinc-50/50 hover:bg-zinc-50 transition-colors"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-8 flex items-center justify-between text-left group"
              >
                <span className="text-lg md:text-xl font-black text-black italic tracking-tighter uppercase">
                  {faq.q}
                </span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border border-black/10 transition-all ${openIndex === index ? 'bg-black text-white rotate-180' : 'bg-white text-black'}`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <div className={`px-8 transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-zinc-500 font-medium leading-relaxed max-w-2xl">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
