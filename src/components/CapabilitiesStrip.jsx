import React from 'react';

export default function CapabilitiesStrip() {
  return (
    <section className="w-full bg-surface-container text-on-surface py-space-md px-margin-mobile lg:px-margin-desktop shadow-sm border-b border-surface-container-high/60">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-sm">
          <span className="material-symbols-outlined text-secondary text-2xl">
            shield
          </span>
          <div>
            <span className="font-headline-sm text-headline-sm uppercase block leading-tight">
              Licensed Boiler Contractors
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Ludhiana, Punjab hub with prompt pan-India on-site deployment
            </span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-space-md">
          <div className="flex items-center gap-2 bg-surface-container-lowest px-space-sm py-1.5 rounded shadow-sm border border-transparent hover:border-secondary-container/40 transition-colors">
            <span className="material-symbols-outlined text-secondary-container text-[18px]">
              verified_user
            </span>
            <span className="font-label-code text-label-code uppercase tracking-wider text-on-surface font-semibold">
              High Heat Duty Rated (HA 70%)
            </span>
          </div>
          <div className="flex items-center gap-2 bg-surface-container-lowest px-space-sm py-1.5 rounded shadow-sm border border-transparent hover:border-secondary-container/40 transition-colors">
            <span className="material-symbols-outlined text-secondary-container text-[18px]">
              construction
            </span>
            <span className="font-label-code text-label-code uppercase tracking-wider text-on-surface font-semibold">
              Custom Structural Fabrication
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
