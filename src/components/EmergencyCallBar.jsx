import React from 'react';
import { companyData } from '../data/websiteData';

export default function EmergencyCallBar() {
  return (
    <div className="fixed bottom-3 right-3 z-40 sm:bottom-6 sm:right-6">
      <a
        className="flex items-center gap-2 bg-primary text-on-primary px-space-md py-space-sm rounded-full shadow-2xl hover:bg-secondary-container transition-all border border-secondary-container/30 animate-thermal-pulse"
        href={`tel:${companyData.phoneRaw}`}
        title="24/7 Emergency Breakdown Hotline"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-secondary-container animate-status-blink" />
        <span className="material-symbols-outlined text-secondary-container text-[20px]">
          phone_in_talk
        </span>
        <span className="font-label-md text-label-md uppercase font-bold tracking-wider">
          24/7 Breakdown Hotline
        </span>
      </a>
    </div>
  );
}
