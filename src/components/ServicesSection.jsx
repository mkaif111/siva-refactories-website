import React from 'react';
import { coreServices, companyData } from '../data/websiteData';

export default function ServicesSection() {
  return (
    <section className="w-full py-8 sm:py-space-xl px-4 sm:px-6 lg:px-margin-desktop bg-surface" id="services-section">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-space-xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div>
            <div className="inline-flex items-center gap-space-xs text-secondary mb-space-xs">
              <span className="material-symbols-outlined text-[18px]">handyman</span>
              <span className="font-label-code text-label-code uppercase tracking-widest font-bold">
                Comprehensive Capabilities
              </span>
            </div>
            <h2 className="text-2xl sm:text-headline-xl text-headline-xl text-on-surface uppercase tracking-tight">
              Deals In: Industrial Turnkey Contracts
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Executing complete engineering, erection, re-tubing, and masonry services directly adhering to OEM parameters.
          </p>
        </div>

        {/* 6-Grid: 5 Service Cards + 1 Urgent Relining Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((service, index) => (
            <div
              key={index}
              className="bg-surface-container-lowest rounded-xl p-space-md sm:p-space-lg shadow-sm hover:shadow-lg border border-transparent hover:border-secondary-container/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-space-sm">
                <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-primary-container transition-transform duration-300 group-hover:scale-110">
                  <span className="material-symbols-outlined text-2xl text-secondary-container">
                    {service.icon}
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="font-label-code text-label-code text-secondary font-bold uppercase">
                    Work Area {service.number}
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    {service.title}
                  </h3>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {service.description}
                </p>
              </div>

              <div className="mt-space-md pt-space-sm bg-surface-container-low/40 p-2.5 rounded text-body-sm">
                <span className="font-label-code text-label-code block uppercase text-outline">
                  {service.tagLabel}
                </span>
                <span className="font-body-sm text-on-surface font-semibold">
                  {service.tagValue}
                </span>
              </div>
            </div>
          ))}

          {/* Urgent Shutdown Emergency Card */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 bg-primary-container text-on-primary rounded-xl p-space-md sm:p-space-lg shadow-lg flex flex-col justify-between border-2 border-secondary-container/40 animate-thermal-pulse">
            <div className="space-y-space-sm">
              <div className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary px-2.5 py-1 rounded text-label-code font-label-code uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-on-primary animate-ping" />
                Emergency Shutdown Team
              </div>
              <h3 className="font-headline-md text-headline-md text-on-primary">
                Need Urgent Boiler Refractory Relining?
              </h3>
              <p className="font-body-sm text-body-sm text-inverse-on-surface">
                Minimize unplanned plant downtime. Our specialized masonry and castable crews mobilize within hours across Ludhiana and north India.
              </p>
            </div>
            <div className="mt-space-md">
              <a
                className="w-full bg-secondary-container text-on-secondary py-space-sm px-space-md rounded font-label-lg text-label-lg flex items-center justify-center gap-space-xs hover:bg-secondary active:scale-95 transition-all shadow-md hover:shadow-[0_0_15px_rgba(253,101,30,0.4)]"
                href={`tel:${companyData.phoneRaw}`}
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>Direct Call: {companyData.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
