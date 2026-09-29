import React from 'react';
import { boilerFuels, fuelCalorificData } from '../data/websiteData';

export default function FuelsSection() {
  return (
    <section className="w-full py-space-xl px-margin-mobile lg:px-margin-desktop bg-surface-container-high/30">
      <div className="max-w-7xl mx-auto space-y-space-xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div>
            <span className="font-label-code text-label-code text-secondary font-bold uppercase tracking-widest block mb-space-xs">
              Caloric Energy Solutions
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface uppercase tracking-tight">
              Industrial Boiler Fuels &amp; Biomass
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Continuous bulk delivery of premium solid fuels and carbon-neutral agro-biomass customized to furnace grate systems.
          </p>
        </div>

        {/* 5 Fuels Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-space-sm">
          {boilerFuels.map((fuel, index) => (
            <div
              key={index}
              className={`bg-surface-container-lowest rounded-xl p-space-sm shadow-sm space-y-space-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group ${
                index === 4 ? 'col-span-2 md:col-span-1' : ''
              }`}
            >
              <div className="h-32 rounded bg-surface-container overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  alt={fuel.title}
                  src={fuel.imageUrl}
                />
              </div>
              <div className="p-1">
                <h4 className="font-headline-sm text-headline-sm text-on-surface">
                  {fuel.title}
                </h4>
                <span className="font-label-code text-label-code text-secondary font-bold block uppercase">
                  {fuel.category}
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant pt-1">
                  {fuel.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Fuel Calorific Yield & Ash Index */}
        <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
          <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase mb-space-sm">
            Fuel Caloric Yield &amp; Ash Index
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md text-body-sm">
            {fuelCalorificData.map((item, idx) => (
              <div key={idx} className="p-space-md bg-surface-container-low/50 rounded-lg space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-on-surface">{item.name}</span>
                  <span className="font-mono text-secondary font-bold">{item.gcv}</span>
                </div>
                <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-secondary-container h-full transition-all duration-500"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <span className="text-label-code text-outline uppercase block">
                  {item.spec}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
