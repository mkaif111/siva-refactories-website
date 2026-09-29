import React from 'react';
import { companyData } from '../data/websiteData';

export default function Footer() {
  return (
    <footer className="w-full bg-primary-container text-on-primary py-10 sm:py-margin-desktop px-4 sm:px-6 lg:px-margin-desktop">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-space-xl">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-space-md">
            <div className="flex items-center">
              <div className="p-2 sm:p-2.5 bg-surface-container-lowest rounded-xl inline-flex items-center shadow-md">
                <img
                  alt={`${companyData.name} Logo`}
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain"
                  src={companyData.logoUrl}
                  style={{ imageRendering: '-webkit-optimize-contrast' }}
                />
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-inverse-on-surface max-w-md">
              Premier refractory installation contractor and high-temperature thermal insulation specialists based in Ludhiana. Delivering complete turnkey solutions, furnace relining, and emergency maintenance for major industrial boilers nationwide.
            </p>
            <div className="space-y-space-xs font-body-sm text-body-sm">
              <div className="flex items-center gap-space-sm text-inverse-on-surface">
                <span className="material-symbols-outlined text-secondary-container text-[18px]">
                  badge
                </span>
                <span>Proprietor: {companyData.proprietor}</span>
              </div>
              <div className="flex items-center gap-space-sm text-inverse-on-surface">
                <span className="material-symbols-outlined text-secondary-container text-[18px]">
                  call
                </span>
                <a
                  className="hover:text-secondary-fixed transition-colors"
                  href={`tel:${companyData.phoneRaw}`}
                >
                  {companyData.phone}
                </a>
              </div>
              <div className="flex items-center gap-space-sm text-inverse-on-surface">
                <span className="material-symbols-outlined text-secondary-container text-[18px]">
                  mail
                </span>
                <a
                  className="hover:text-secondary-fixed transition-colors break-all"
                  href={`mailto:${companyData.email}`}
                >
                  {companyData.email}
                </a>
              </div>
              <div className="flex items-center gap-space-sm text-inverse-on-surface">
                <span className="material-symbols-outlined text-secondary-container text-[18px]">
                  pin_drop
                </span>
                <span>{companyData.location}</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div className="space-y-3 sm:space-y-space-md">
            <span className="font-headline-sm text-headline-sm text-on-primary block uppercase tracking-wide">
              Services
            </span>
            <div className="flex flex-col space-y-space-xs font-body-sm text-body-sm">
              <a
                className="text-inverse-on-surface hover:text-secondary-fixed transition-colors"
                href="#services-section"
              >
                Refractory Boiler Brickwork
              </a>
              <a
                className="text-inverse-on-surface hover:text-secondary-fixed transition-colors"
                href="#services-section"
              >
                Thermal Insulation &amp; Cladding
              </a>
              <a
                className="text-inverse-on-surface hover:text-secondary-fixed transition-colors"
                href="#services-section"
              >
                Castable Gunning &amp; Pouring
              </a>
              <a
                className="text-inverse-on-surface hover:text-secondary-fixed transition-colors"
                href="#services-section"
              >
                Furnace Relining &amp; Overhauling
              </a>
              <a
                className="text-inverse-on-surface hover:text-secondary-fixed transition-colors"
                href="#services-section"
              >
                24/7 Breakdown &amp; Maintenance
              </a>
            </div>
          </div>

          {/* Materials & Fuels */}
          <div className="space-y-3 sm:space-y-space-md">
            <span className="font-headline-sm text-headline-sm text-on-primary block uppercase tracking-wide">
              Materials &amp; Fuels
            </span>
            <div className="flex flex-col space-y-space-xs font-body-sm text-body-sm">
              <a
                className="text-inverse-on-surface hover:text-secondary-fixed transition-colors"
                href="#materials-section"
              >
                Fire Bricks (IS-6, IS-8, HA 70%)
              </a>
              <a
                className="text-inverse-on-surface hover:text-secondary-fixed transition-colors"
                href="#materials-section"
              >
                Dense &amp; Insulating Castables
              </a>
              <a
                className="text-inverse-on-surface hover:text-secondary-fixed transition-colors"
                href="#materials-section"
              >
                Ceramic Fiber Blankets &amp; Boards
              </a>
              <a
                className="text-inverse-on-surface hover:text-secondary-fixed transition-colors"
                href="#materials-section"
              >
                Refractory Mortar &amp; Binders
              </a>
              <a
                className="text-inverse-on-surface hover:text-secondary-fixed transition-colors"
                href="#materials-section"
              >
                Biomass, Petcoke &amp; Coal
              </a>
            </div>
          </div>

          {/* Boilers Supported */}
          <div className="space-y-3 sm:space-y-space-md">
            <span className="font-headline-sm text-headline-sm text-on-primary block uppercase tracking-wide">
              Boilers Supported
            </span>
            <div className="flex flex-col space-y-space-xs font-body-sm text-body-sm">
              <span className="text-inverse-on-surface">Thermax Boilers</span>
              <span className="text-inverse-on-surface">Cheema Boilers</span>
              <span className="text-inverse-on-surface">IBL Industrial Boilers</span>
              <span className="text-inverse-on-surface">Imported China Boilers</span>
              <span className="text-inverse-on-surface">AFBC &amp; CFBC Systems</span>
              <span className="text-inverse-on-surface">Waste Heat Recovery Units</span>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-6 border-t border-surface-container-low/10 flex flex-col sm:flex-row items-center justify-between text-body-sm font-body-sm text-inverse-on-surface gap-3 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Siva Refractories Contractor. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm">
            <span className="font-label-code text-label-code uppercase tracking-wider text-secondary-container">
              Certified High-Temp Industrial Partner
            </span>
            <a className="hover:text-secondary-fixed transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-secondary-fixed transition-colors" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
