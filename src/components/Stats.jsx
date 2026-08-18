import React from 'react';
import { Users, Folder, Trophy, Zap } from 'lucide-react';

const stats = [
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: Folder, value: "120+", label: "Projects Completed" },
  { icon: Trophy, value: "98%", label: "Client Satisfaction" },
  { icon: Zap, value: "2x", label: "Average Growth" }
];

export default function Stats() {
  return (
    <section className="pt-8 pb-12">
      <div className="bg-brand-deep/60 backdrop-blur-xl border border-brand-red/30 rounded-3xl p-8 lg:p-10 shadow-[0_0_40px_rgba(225,6,0,0.08)] relative overflow-hidden">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative z-10">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="flex items-center gap-4 lg:justify-center">
                <div className="text-brand-red"><Icon size={40} strokeWidth={1.5} /></div>
                <div>
                  <h4 className="text-3xl lg:text-4xl font-display font-bold text-white leading-none mb-1">{stat.value}</h4>
                  <p className="text-sm text-brand-gray">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}