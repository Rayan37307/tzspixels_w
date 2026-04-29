import { useRef } from 'react';
import { Check } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const plans = [
    {
      name: 'STARTER',
      desc: 'FOR GROWING BRANDS',
      price: '$499',
      features: [
        'AI Support Agent',
        'Basic n8n Automation',
        '5 High-Impact Ad Creatives',
        'Shopify Optimization',
        'WhatsApp Integration'
      ],
      isPopular: false
    },
    {
      name: 'PRO',
      desc: 'OUR MOST POWERFUL PLAN',
      price: '$999',
      features: [
        'Everything in Starter',
        'Custom Next.js Landing Page',
        'Full CRM Automation',
        '15 Premium Ad Creatives',
        'Ad Account Management'
      ],
      isPopular: true
    },
    {
      name: 'ENTERPRISE',
      desc: 'FOR MARKET DOMINATION',
      price: 'CUSTOM',
      features: [
        'Everything in Pro',
        'Bespoke AI Solutions',
        'Inventory/POS Sync',
        'Unlimited Creatives',
        'Dedicated Brand Manager'
      ],
      isPopular: false
    }
  ];

  useGSAP(() => {
    gsap.from('.pricing-card', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
        once: true
      },
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out'
    });
  }, { scope: containerRef });

  return (
    <section id="pricing" ref={containerRef} className="section-padding bg-bg-secondary">
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-black italic tracking-tighter uppercase">PRICING PLANS</h2>
          <p className="text-zinc-500 text-lg font-medium">Choose the powerhouse plan for your brand.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card bg-white p-10 rounded-[2.5rem] relative flex flex-col pt-20 border transition-all duration-300 shadow-sm hover:shadow-xl ${plan.isPopular ? 'border-black' : 'border-black/5 hover:border-black/20'} group hover:-translate-y-2`}
            >
              {plan.isPopular && (
                <div className="popular-badge bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full whitespace-nowrap shadow-lg absolute top-8 left-1/2 -translate-x-1/2">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-10 text-center">
                <h3 className="text-4xl font-black mb-3 text-black italic tracking-tighter">{plan.name}</h3>
                <p className="text-zinc-400 text-xs font-black tracking-widest uppercase">{plan.desc}</p>
              </div>

              <div className="flex-1">
                <ul className="space-y-5 mb-12">
                  {plan.features.map((feature, i) => (
                    <li 
                      key={i} 
                      className="flex items-start gap-4 text-sm font-semibold"
                    >
                      <div className="mt-1 bg-black/5 rounded-lg p-1 flex items-center justify-center border border-black/5">
                        <Check size={16} className="text-black" />
                      </div>
                      <span className="text-zinc-600 transition-colors group-hover:text-black">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full flex items-center justify-center gap-3 py-5 rounded-2xl font-black text-xs tracking-[0.2em] uppercase transition-all ${plan.isPopular ? 'btn-primary' : 'border-2 border-black/10 hover:bg-zinc-50 text-black hover:border-black'}`}>
                <FaWhatsapp size={20} />
                <span>WHATSAPP US</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
