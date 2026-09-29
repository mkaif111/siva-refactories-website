import React, { useState } from 'react';
import { companyData, navLinks } from '../data/websiteData';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      {/* Top Industrial Bar */}
      <div className="bg-primary-container text-on-primary py-2 px-4 sm:px-6 lg:px-margin-desktop">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between text-body-sm font-body-sm gap-2 text-xs sm:text-sm">
          <div className="flex items-center gap-space-md sm:gap-space-lg flex-wrap">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-secondary-container">
                location_on
              </span>
              <span>{companyData.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-secondary-container">
                person
              </span>
              <span>{companyData.proprietor} (Proprietor)</span>
            </div>
          </div>
          <div className="flex items-center gap-space-md sm:gap-space-lg flex-wrap">
            <a
              className="flex items-center gap-1 hover:text-secondary-fixed transition-colors"
              href={`tel:${companyData.phoneRaw}`}
            >
              <span className="material-symbols-outlined text-[16px] text-secondary-container">
                phone_in_talk
              </span>
              <span>{companyData.phone}</span>
            </a>
            <a
              className="hidden sm:flex items-center gap-1 hover:text-secondary-fixed transition-colors"
              href={`mailto:${companyData.email}`}
            >
              <span className="material-symbols-outlined text-[16px] text-secondary-container">
                mail
              </span>
              <span>{companyData.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="h-20 sm:h-24 md:h-28 bg-surface/95 backdrop-blur-xl px-4 sm:px-6 lg:px-margin-desktop border-b border-outline-variant/20">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between gap-2 sm:gap-space-md">
          {/* Logo */}
          <div className="flex items-center">
            <a className="flex items-center py-1 group" href="#" title={companyData.name}>
              <img
                alt={`${companyData.name} Logo`}
                className="h-14 sm:h-16 md:h-20 lg:h-22 w-auto max-w-[240px] sm:max-w-[320px] md:max-w-[380px] object-contain shrink-0 drop-shadow-sm transition-transform duration-300 group-hover:scale-[1.02]"
                src={companyData.logoUrl}
                style={{ imageRendering: '-webkit-optimize-contrast' }}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-space-sm">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className={`px-space-sm py-space-xs transition-colors rounded-lg ${
                  idx === 0
                    ? 'bg-surface-container text-on-surface font-semibold shadow-sm'
                    : 'font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low/60'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <a
              className="bg-secondary-container text-on-secondary px-3 py-1.5 sm:px-space-md sm:py-space-xs rounded font-label-md sm:font-label-lg text-label-md sm:text-label-lg shadow-sm hover:bg-secondary hover:shadow-[0_0_15px_rgba(253,101,30,0.4)] active:scale-95 transition-all flex items-center gap-1"
              href={`tel:${companyData.phoneRaw}`}
            >
              <span className="material-symbols-outlined text-[16px] sm:text-[18px]">
                call
              </span>
              <span className="hidden sm:inline">Call Desk</span>
              <span className="sm:hidden">Call</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-lowest/98 backdrop-blur-xl border-b border-surface-container shadow-xl px-4 py-4 space-y-2">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-on-surface font-medium hover:bg-surface-container hover:text-secondary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-surface-container flex flex-col gap-2 text-sm text-on-surface-variant">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-secondary-container">
                location_on
              </span>
              <span>{companyData.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-secondary-container">
                mail
              </span>
              <a href={`mailto:${companyData.email}`} className="hover:underline">
                {companyData.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
