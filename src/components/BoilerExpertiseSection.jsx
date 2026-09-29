import React from 'react';
import { boilerBrands } from '../data/websiteData';

export default function BoilerExpertiseSection() {
  return (
    <section className="w-full py-space-xl px-margin-mobile lg:px-margin-desktop bg-surface" id="boilers-section">
      <div className="max-w-7xl mx-auto space-y-space-lg">
        <div className="text-center max-w-3xl mx-auto space-y-space-xs">
          <span className="font-label-code text-label-code text-secondary uppercase tracking-widest font-bold">
            Supported OEM Makes
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface uppercase tracking-tight">
            Industrial Boiler Expertise
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Proven contractor execution for top national and international boiler models. We handle original refractory lining, modifications, and replacement brick arches.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {boilerBrands.map((brand, index) => (
            <div
              key={index}
              className="bg-surface-container-low p-space-lg rounded-xl shadow-sm space-y-space-sm flex flex-col justify-between border border-transparent hover:border-secondary-container/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="space-y-space-xs">
                <div className="w-10 h-10 rounded bg-secondary-container/10 flex items-center justify-center text-secondary group-hover:bg-secondary-container group-hover:text-on-secondary transition-colors duration-300">
                  <span className="material-symbols-outlined">{brand.icon}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  {brand.name}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {brand.description}
                </p>
              </div>

              <div className="pt-space-xs text-label-code font-label-code text-secondary font-semibold uppercase">
                {brand.models}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
