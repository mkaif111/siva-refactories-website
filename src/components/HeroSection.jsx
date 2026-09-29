import React from 'react';
import { companyData, heroStats } from '../data/websiteData';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-primary-container text-on-primary overflow-hidden pt-6 pb-10 sm:py-space-xl px-4 sm:px-6 lg:px-margin-desktop">
      {/* Radial grid pattern backdrop */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fd651e_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Status Tags */}
        <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-md">
          <div className="inline-flex items-center gap-space-xs bg-surface-container-low/10 px-space-sm py-space-xs rounded text-secondary-fixed border border-secondary-container/20">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary-container animate-status-blink" />
            <span className="font-label-code text-label-code uppercase tracking-wider">
              Industrial Heat Solutions • Ludhiana Hub
            </span>
          </div>
          <div className="flex items-center gap-space-md text-xs sm:text-body-sm font-label-md text-inverse-on-surface">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-secondary-container">
                verified
              </span>
              ISO Compliant Thermal Workmanship
            </span>
            <span className="hidden sm:inline-block text-surface-tint">|</span>
            <span className="hidden sm:flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-ping" />
              <span className="material-symbols-outlined text-[16px] text-secondary-container">
                bolt
              </span>
              24/7 Rapid Relining
            </span>
          </div>
        </div>

        {/* Main Grid: Info + 3D Boiler Illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column: Headings, CTA, Metrics */}
          <div className="lg:col-span-7 space-y-space-md">
            <div className="inline-flex items-center gap-2 bg-secondary-container/20 text-secondary-fixed px-3 py-1 rounded border border-secondary-container/30">
              <span className="material-symbols-outlined text-[18px] text-secondary-container animate-pulse">
                local_fire_department
              </span>
              <span className="font-label-code text-label-code uppercase tracking-widest">
                Industrial Refractory Contractor &amp; Fabricator
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-primary tracking-tight uppercase leading-tight">
              <span className="block">Turnkey Industrial</span>
              <span className="text-secondary-container drop-shadow-[0_0_20px_rgba(253,101,30,0.35)]">
                Boiler Furnace
              </span>{' '}
              &amp;
              <span className="block">Refractory Solutions</span>
            </h1>

            <p className="font-body-md sm:font-body-lg text-body-md sm:text-body-lg text-inverse-on-surface max-w-2xl">
              {companyData.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-space-xs">
              <a
                className="relative group overflow-hidden bg-secondary-container text-on-secondary px-space-lg py-space-sm rounded font-label-lg text-label-lg shadow-md hover:bg-secondary hover:shadow-[0_0_20px_rgba(253,101,30,0.5)] active:scale-95 transition-all duration-300 flex items-center justify-center gap-space-xs ring-2 ring-secondary-container/40"
                href="#rfq-section"
              >
                <span className="relative z-10">Request Immediate Estimate</span>
                <span className="material-symbols-outlined text-[18px] relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                  arrow_forward
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </a>

              <a
                className="bg-surface-container-lowest/10 text-on-primary hover:bg-surface-container-lowest/20 hover:border-secondary-container/40 border border-transparent px-space-lg py-space-sm rounded font-label-lg text-label-lg transition-all duration-300 flex items-center justify-center gap-space-xs active:scale-95"
                href="#materials-section"
              >
                <span className="material-symbols-outlined text-[18px]">menu_book</span>
                <span>Browse Material Catalog</span>
              </a>
            </div>

            {/* 4 Metrics Cards */}
            <div className="pt-space-md grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {heroStats.map((stat, i) => (
                <div
                  key={i}
                  className="p-space-sm bg-surface-container-low/10 rounded border border-white/5 hover:border-secondary-container/50 hover:bg-surface-container-low/20 hover:-translate-y-1 transition-all duration-300 cursor-default group"
                >
                  <div className="flex items-center gap-1.5">
                    {stat.blink && (
                      <span className="w-2 h-2 rounded-full bg-secondary-container animate-status-blink" />
                    )}
                    <span
                      className={`font-display-hero text-2xl sm:text-headline-lg leading-none block transition-transform group-hover:scale-105 ${
                        stat.highlight ? 'text-secondary-container' : 'text-on-primary'
                      }`}
                    >
                      {stat.value}
                    </span>
                  </div>
                  <span className="font-label-md text-xs sm:text-label-md text-inverse-on-surface uppercase mt-1 block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Boiler Schematic Visual */}
          <div className="lg:col-span-5 relative w-full">
            <div className="absolute -inset-2 bg-gradient-to-tr from-secondary-container/30 via-secondary/15 to-transparent rounded-2xl blur-xl pointer-events-none opacity-75" />
            <div className="relative rounded-xl overflow-hidden bg-primary shadow-2xl w-full max-w-full border border-secondary-container/20">
              <div className="p-3 sm:p-space-md bg-surface-container-low/10 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-secondary-container animate-pulse" />
                  <span className="font-label-code text-label-code text-on-primary uppercase tracking-wide">
                    Heavy Steam Boiler Schematic
                  </span>
                </div>
                <span className="font-label-code text-label-code text-secondary-container uppercase font-semibold">
                  Industrial Unit #09
                </span>
              </div>

              <div className="relative p-3 sm:p-space-md flex flex-col items-center justify-center bg-surface-container-lowest overflow-hidden group">
                <img
                  alt="Isometric 3D cutaway engineering illustration of industrial boiler furnace system with refractory lining and thermal core"
                  className="w-full max-w-full h-56 sm:h-72 object-contain rounded drop-shadow-sm transition-transform duration-700 ease-out group-hover:scale-105"
                  src={companyData.boilerSchematicUrl}
                  style={{ imageRendering: '-webkit-optimize-contrast' }}
                />
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-primary-container/95 text-on-primary px-space-xs py-1 rounded text-label-code font-label-code shadow-md text-[10px] sm:text-label-code border border-white/10 animate-float-subtle">
                  Thermax / Cheema Compatible
                </div>
                <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-secondary-container text-on-secondary px-space-xs py-1 rounded text-label-code font-label-code shadow-md text-[10px] sm:text-label-code border border-secondary-fixed/30 animate-thermal-pulse">
                  APH &amp; Scrubber Integrated
                </div>
              </div>

              <div className="p-space-sm bg-surface-container-low/10 grid grid-cols-3 text-center text-xs sm:text-body-sm font-label-md text-inverse-on-surface border-t border-white/5">
                <div>
                  <span className="text-outline-variant block text-label-code text-[10px] sm:text-label-code">
                    BED LINING
                  </span>
                  <span className="text-on-primary font-semibold">Firecrete Super</span>
                </div>
                <div>
                  <span className="text-outline-variant block text-label-code text-[10px] sm:text-label-code">
                    LAGGING
                  </span>
                  <span className="text-on-primary font-semibold">Ceramic Blankets</span>
                </div>
                <div>
                  <span className="text-outline-variant block text-label-code text-[10px] sm:text-label-code">
                    PIPELINES
                  </span>
                  <span className="text-secondary-container font-semibold">Class A Welded</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
