import React from 'react';
import { refractoryMaterials, gradeMatrix } from '../data/websiteData';

export default function MaterialsSection() {
  return (
    <section className="w-full py-8 sm:py-space-xl px-4 sm:px-6 lg:px-margin-desktop bg-surface-container-low" id="materials-section">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-space-lg">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div>
            <span className="font-label-code text-label-code text-secondary font-bold uppercase tracking-widest block mb-space-xs">
              Certified High-Temp Stock
            </span>
            <h2 className="text-2xl sm:text-headline-xl text-headline-xl text-on-surface uppercase tracking-tight">
              Refractory Materials &amp; Castables
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Standard and customized supply of chemical-resistant, abrasion-resistant, and high-alumina refractory components.
          </p>
        </div>

        {/* 4 Materials Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {refractoryMaterials.map((item, index) => (
            <div
              key={index}
              className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-lg border border-transparent hover:border-secondary-container/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-space-sm">
                <div className="h-40 rounded bg-surface-container overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    alt={item.imageAlt}
                    src={item.imageUrl}
                  />
                </div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="bg-primary text-secondary-container font-label-code text-label-code px-2 py-0.5 rounded uppercase font-bold">
                    {item.badge1}
                  </span>
                  <span className="bg-surface-container font-label-code text-label-code px-2 py-0.5 rounded text-on-surface uppercase">
                    {item.badge2}
                  </span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface">
                  {item.title}
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {item.description}
                </p>
              </div>

              <div className="mt-space-md pt-space-xs flex items-center justify-between text-body-sm">
                <span className="text-secondary font-semibold">{item.temp}</span>
                <a
                  className="text-on-surface hover:text-secondary-container font-label-md text-label-md flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  href="#rfq-section"
                >
                  Inquire <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Refractory Grade Matrix */}
        <div className="mt-space-xl bg-surface-container-lowest rounded-xl p-4 sm:p-space-lg shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-space-md">
            <h3 className="text-lg sm:text-headline-md font-headline-md text-on-surface uppercase">
              Engineering Refractory Grade Matrix
            </h3>
            <span className="font-label-code text-label-code text-secondary font-semibold uppercase">
              Ludhiana Warehouse Stocked
            </span>
          </div>

          <div className="overflow-x-auto w-full rounded-lg shadow-sm border border-surface-container">
            <table className="w-full text-left text-body-sm font-body-sm min-w-[640px]">
              <thead className="bg-primary-container text-on-primary font-label-md text-label-md uppercase">
                <tr>
                  <th className="py-space-sm px-space-md">Material Designation</th>
                  <th className="py-space-sm px-space-md">Key Chemistry / Grade</th>
                  <th className="py-space-sm px-space-md">Max Working Temp</th>
                  <th className="py-space-sm px-space-md">Bulk Density</th>
                  <th className="py-space-sm px-space-md">Primary Furnace Application</th>
                </tr>
              </thead>
              <tbody className="text-on-surface">
                {gradeMatrix.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`${
                      idx % 2 === 0
                        ? 'bg-surface-container-low/40 hover:bg-surface-container-low'
                        : 'bg-surface-container-lowest hover:bg-surface-container-low/30'
                    } transition-colors`}
                  >
                    <td className="py-space-sm px-space-md font-semibold">{row.material}</td>
                    <td className="py-space-sm px-space-md">{row.chemistry}</td>
                    <td className="py-space-sm px-space-md text-secondary font-bold">
                      {row.maxTemp}
                    </td>
                    <td className="py-space-sm px-space-md font-mono">{row.bulkDensity}</td>
                    <td className="py-space-sm px-space-md">{row.application}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
