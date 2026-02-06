import React from 'react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-secondary/5 px-6">
      <div className="max-w-7xl mx-auto">
        <h3 className="section-label mb-12 text-primary font-medium tracking-tight">Personal Details & Languages</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, index) => (
            <div key={index} className="bg-background p-8 rounded-2xl border border-border flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <img src={item.avatar} alt={item.author} className="w-12 h-12 rounded-full bg-secondary/10" />
                <div>
                  <h4 className="font-semibold text-primary">{item.author}</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">{item.role} — {item.company}</p>
                </div>
              </div>
              <p className="text-lg text-primary font-medium leading-normal">
                "{item.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};