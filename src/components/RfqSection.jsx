import React, { useState } from 'react';
import { companyData } from '../data/websiteData';

export default function RfqSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    location: '',
    service: 'Boiler Furnace Refractory Masonry',
    boilerBrand: 'Thermax (AFBC / Packaged)',
    requirements: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="w-full py-8 sm:py-space-xl px-4 sm:px-6 lg:px-margin-desktop bg-surface-container-low" id="rfq-section">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Column: Direct Technical Desk */}
          <div className="lg:col-span-5 space-y-space-md">
            <div className="space-y-space-xs">
              <span className="font-label-code text-label-code text-secondary font-bold uppercase tracking-widest block">
                Direct Contracting Contact
              </span>
              <h2 className="text-2xl sm:text-headline-xl text-headline-xl text-on-surface uppercase tracking-tight">
                Connect With Our Technical Desk
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Get an instant assessment, boiler drawing review, or customized material quotation directly from Proprietor Lalit Kumar.
              </p>
            </div>

            <div className="bg-primary-container text-on-primary p-4 sm:p-space-lg rounded-xl shadow-md space-y-space-md border border-white/5">
              <div className="flex items-center gap-space-md pb-space-sm border-b border-surface-container-low/10">
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary font-bold text-headline-sm shrink-0 shadow-md">
                  LK
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-primary">
                    {companyData.proprietor}
                  </h3>
                  <span className="font-label-code text-label-code text-secondary-fixed uppercase block">
                    {companyData.title}
                  </span>
                </div>
              </div>

              <div className="space-y-space-sm font-body-sm text-body-sm text-inverse-on-surface">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-secondary-container text-xl">
                    phone_iphone
                  </span>
                  <div>
                    <span className="text-outline-variant block text-label-code">
                      MOBILE / WHATSAPP
                    </span>
                    <a
                      className="text-on-primary font-semibold hover:text-secondary-fixed transition-colors break-all"
                      href={`tel:${companyData.phoneRaw}`}
                    >
                      {companyData.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-secondary-container text-xl">
                    mail
                  </span>
                  <div>
                    <span className="text-outline-variant block text-label-code">
                      DIRECT EMAIL
                    </span>
                    <a
                      className="text-on-primary font-semibold hover:text-secondary-fixed transition-colors break-all"
                      href={`mailto:${companyData.email}`}
                    >
                      {companyData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-secondary-container text-xl">
                    location_on
                  </span>
                  <div>
                    <span className="text-outline-variant block text-label-code">
                      HEADQUARTERS
                    </span>
                    <span className="text-on-primary font-semibold">
                      {companyData.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Map Thumbnail */}
              <div className="pt-space-xs">
                <div
                  className="w-full h-32 sm:h-36 bg-surface-container rounded-lg bg-cover bg-center overflow-hidden flex items-end p-2 border border-white/10 shadow-inner"
                  style={{ backgroundImage: `url("${companyData.ludhianaMapBgUrl}")` }}
                >
                  <span className="bg-primary/90 text-on-primary text-label-code font-label-code px-2 py-1 rounded backdrop-blur-sm">
                    Ludhiana Engineering Hub
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Request For Quote Form */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-4 sm:p-space-lg rounded-xl shadow-sm space-y-space-md border border-surface-container">
            <div className="border-b border-surface-container pb-space-sm">
              <h3 className="text-lg sm:text-headline-md font-headline-md text-on-surface uppercase">
                Request Quotation &amp; Site Inspection
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Fill in your boiler system details for custom refractory estimations.
              </p>
            </div>

            <form className="space-y-4 sm:space-y-space-md" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1">
                  <label className="font-label-md text-xs sm:text-label-md uppercase text-on-surface font-semibold block">
                    Full Name / Contact Person
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-surface p-space-sm rounded font-body-sm text-on-surface border border-outline-variant/40 focus:outline-none focus:ring-2 focus:ring-secondary-container/40 focus:border-secondary-container transition-all"
                    placeholder="e.g. Ramesh Singh (Plant Head)"
                    required
                    type="text"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-label-md text-xs sm:text-label-md uppercase text-on-surface font-semibold block">
                    Company / Mill Name
                  </label>
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-surface p-space-sm rounded font-body-sm text-on-surface border border-outline-variant/40 focus:outline-none focus:ring-2 focus:ring-secondary-container/40 focus:border-secondary-container transition-all"
                    placeholder="e.g. Ludhiana Textile Mills"
                    required
                    type="text"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-label-md text-xs sm:text-label-md uppercase text-on-surface font-semibold block">
                    Phone Number (Required)
                  </label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-surface p-space-sm rounded font-body-sm text-on-surface border border-outline-variant/40 focus:outline-none focus:ring-2 focus:ring-secondary-container/40 focus:border-secondary-container transition-all"
                    placeholder="+91 98765-43210"
                    required
                    type="tel"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-label-md text-xs sm:text-label-md uppercase text-on-surface font-semibold block">
                    Plant Location / City
                  </label>
                  <input
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full bg-surface p-space-sm rounded font-body-sm text-on-surface border border-outline-variant/40 focus:outline-none focus:ring-2 focus:ring-secondary-container/40 focus:border-secondary-container transition-all"
                    placeholder="e.g. Ludhiana / Jalandhar / Panipat"
                    type="text"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1">
                  <label className="font-label-md text-xs sm:text-label-md uppercase text-on-surface font-semibold block">
                    Service / Scope Required
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-surface p-space-sm rounded font-body-sm text-on-surface border border-outline-variant/40 focus:outline-none focus:ring-2 focus:ring-secondary-container/40 focus:border-secondary-container transition-all"
                  >
                    <option>Boiler Furnace Refractory Masonry</option>
                    <option>Pipeline Thermal Insulation &amp; Cladding</option>
                    <option>Boiler Tube Repairing &amp; Retubing</option>
                    <option>Boiler Erection (Chimney / HRU / APH)</option>
                    <option>Refractory Castable Material Supply</option>
                    <option>Boiler Fuel &amp; Biomass Bulk Supply</option>
                    <option>Emergency Shutdown Maintenance</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-label-md text-xs sm:text-label-md uppercase text-on-surface font-semibold block">
                    Boiler Brand / Capacity
                  </label>
                  <select
                    name="boilerBrand"
                    value={formData.boilerBrand}
                    onChange={handleChange}
                    className="w-full bg-surface p-space-sm rounded font-body-sm text-on-surface border border-outline-variant/40 focus:outline-none focus:ring-2 focus:ring-secondary-container/40 focus:border-secondary-container transition-all"
                  >
                    <option>Thermax (AFBC / Packaged)</option>
                    <option>Cheema Boiler System</option>
                    <option>IBL Industrial Boiler</option>
                    <option>Imported China Boiler</option>
                    <option>Other / Custom Fabricated</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-label-md text-xs sm:text-label-md uppercase text-on-surface font-semibold block">
                  Technical Requirements / Scope Details
                </label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  className="w-full bg-surface p-space-sm rounded font-body-sm text-on-surface border border-outline-variant/40 focus:outline-none focus:ring-2 focus:ring-secondary-container/40 focus:border-secondary-container transition-all"
                  placeholder="Specify steam tonnage, working temperature, material grades needed (Whytheat K, 70% Firebricks, etc.), or shutdown timeline..."
                  rows={3}
                />
              </div>

              {submitted && (
                <div className="p-space-sm bg-secondary-container/20 text-secondary font-label-md text-label-md rounded flex items-center gap-2 border border-secondary-container/30">
                  <span className="material-symbols-outlined text-[18px]">task_alt</span>
                  <span>
                    Thank you, {formData.name || 'valued client'}! Your quotation request has been routed directly to {companyData.proprietor} ({companyData.phone}). We will contact you promptly.
                  </span>
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-space-xs">
                <span className="font-label-code text-label-code text-on-surface-variant uppercase text-center sm:text-left">
                  Prompt Pan-Punjab Callout
                </span>
                <button
                  className="group relative overflow-hidden bg-secondary-container text-on-secondary px-space-lg py-space-sm rounded font-label-lg text-label-lg shadow-sm hover:bg-secondary hover:shadow-[0_0_15px_rgba(253,101,30,0.45)] active:scale-95 transition-all flex items-center justify-center gap-space-xs w-full sm:w-auto"
                  type="submit"
                >
                  <span className="relative z-10">Submit Technical RFQ</span>
                  <span className="material-symbols-outlined text-[18px] relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                    send
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
