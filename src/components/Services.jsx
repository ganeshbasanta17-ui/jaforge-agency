import React from 'react';
import { MonitorSmartphone, Code2, Rocket, PenTool, TrendingUp, ArrowRight } from 'lucide-react';

const services = [
  { icon: MonitorSmartphone, title: "Website Design", desc: "Beautiful, modern designs that captivate and convert." },
  { icon: Code2, title: "Website Development", desc: "Fast, secure and scalable websites built for growth." },
  { icon: Rocket, title: "Landing Pages", desc: "High-converting pages that drive real results." },
  { icon: PenTool, title: "UI/UX Design", desc: "Intuitive experiences that users love and remember." },
  { icon: TrendingUp, title: "SEO Optimization", desc: "Rank higher and grow your business online." }
];

export default function Services() {
  return (
    <section id="services" className="pt-16 pb-12">
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h4 className="text-brand-red text-sm font-semibold tracking-wider uppercase mb-2">Our Services</h4>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-white relative inline-block">
            What We Do Best<span className="absolute -bottom-2 left-0 w-12 h-1 bg-brand-red rounded-full"></span>
          </h2>
        </div>
        <button className="flex items-center gap-2 text-sm text-brand-gray hover:text-brand-red transition-colors">
          View All Services <ArrowRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={index} className="group bg-white/[0.03] backdrop-blur-md border border-white/5 p-6 rounded-2xl hover:-translate-y-2 hover:bg-white/[0.06] hover:border-brand-red/30 transition-all duration-300 relative overflow-hidden">
              <div className="w-12 h-12 rounded-lg bg-brand-red/10 flex items-center justify-center mb-6">
                <Icon className="text-brand-red" size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 font-display">{service.title}</h3>
              <p className="text-brand-gray text-sm leading-relaxed mb-6">{service.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}