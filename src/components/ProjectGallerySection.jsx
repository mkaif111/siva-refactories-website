import React from 'react';
import { projectShowcase } from '../data/websiteData';

export default function ProjectGallerySection() {
  return (
    <section className="w-full py-8 sm:py-space-xl px-4 sm:px-6 lg:px-margin-desktop bg-surface" id="projects-section">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-space-lg">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div>
            <span className="font-label-code text-label-code text-secondary font-bold uppercase tracking-widest block mb-space-xs">
              Execution Evidence
            </span>
            <h2 className="text-2xl sm:text-headline-xl text-headline-xl text-on-surface uppercase tracking-tight">
              On-Site Project Showcase
            </h2>
          </div>
          <div className="flex items-center gap-space-xs">
            <span className="font-label-md text-label-md text-on-surface-variant">
              Ludhiana • Mandi Gobindgarh • Pan-Punjab Operations
            </span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectShowcase.map((project, index) => {
            if (project.isWide) {
              return (
                <div
                  key={index}
                  className="sm:col-span-2 lg:col-span-2 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg border border-transparent hover:border-secondary-container/40 transition-all duration-300 flex flex-col md:flex-row group"
                >
                  <div className="relative md:w-1/2 h-48 sm:h-52 md:h-auto bg-surface-container overflow-hidden">
                    <img
                      className="w-full max-w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      alt={project.title}
                      src={project.imageUrl}
                    />
                    <span className="absolute top-3 left-3 bg-primary-container text-on-primary font-label-code text-label-code px-2 py-1 rounded uppercase shadow-sm">
                      {project.badge}
                    </span>
                  </div>
                  <div className="p-space-md sm:p-space-lg md:w-1/2 flex flex-col justify-between space-y-space-sm">
                    <div className="space-y-space-xs">
                      <span className="font-label-code text-label-code text-secondary font-bold uppercase">
                        {project.tagline}
                      </span>
                      <h4 className="font-headline-md text-headline-md text-on-surface">
                        {project.title}
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {project.description}
                      </p>
                    </div>
                    <div className="pt-2 flex items-center gap-space-sm text-label-code font-label-code text-outline-variant">
                      <span>{project.specs}</span>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={index}
                className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg border border-transparent hover:border-secondary-container/40 transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-48 sm:h-52 w-full bg-surface-container overflow-hidden">
                  <img
                    className="w-full max-w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    alt={project.title}
                    src={project.imageUrl}
                  />
                  <span
                    className={`absolute top-3 left-3 font-label-code text-label-code px-2 py-1 rounded uppercase shadow-sm ${project.badgeColor}`}
                  >
                    {project.badge}
                  </span>
                </div>
                <div className="p-space-md flex-1 flex flex-col justify-between">
                  <h4 className="font-headline-sm text-headline-sm text-on-surface">
                    {project.title}
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant pt-1">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
