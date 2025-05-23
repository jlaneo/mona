
import React from 'react';
import { IconProps } from '../../types';

export const EggIcon: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="14" rx="6" ry="8" />
    <path d="M12 2C12 2 10 4 10 6S12 10 12 10S14 8 14 6S12 2 12 2Z" />
  </svg>
);

export const CreamIcon: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.69l.473.236A12 12 0 0120 12.5V19a2 2 0 01-2 2H6a2 2 0 01-2-2v-6.5A12 12 0 0111.527 2.926L12 2.69zM12 12.5c-1.333 1.333-2.667 2.667-4 4M12 12.5c1.333 1.333 2.667 2.667 4 4"/>
    <path d="M5 19.5A1.5 1.5 0 016.5 18H17.5a1.5 1.5 0 011.5 1.5"/>
  </svg>
);

export const CheeseIcon: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.24 12.24a6 6 0 00-8.49-8.49L5 10.5V19h8.5z"/>
    <path d="M14.76 10.01L21 3.76M12 22v-8M16 18H8"/>
    <circle cx="10" cy="14" r="1" />
    <circle cx="14" cy="14" r="1" />
    <circle cx="12" cy="10" r="1" />
  </svg>
);

export const WhiskIcon: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 18l1.69-1.69a3 3 0 014.24 0L16 18"/>
    <path d="M12 12v6"/>
    <path d="M12 3a3.5 3.5 0 00-3.5 3.5C8.5 9.23 10 12 12 12s3.5-2.77 3.5-5.5A3.5 3.5 0 0012 3z"/>
    <path d="M12 3c-.46 0-.9.04-1.32.12"/>
    <path d="M12 3c.46 0 .9.04 1.32.12"/>
    <path d="M5.93 8.5A5.57 5.57 0 018.5 6.73"/>
    <path d="M18.07 8.5A5.57 5.57 0 0015.5 6.73"/>
  </svg>
);

export const OvenIcon: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
    <path d="M6 11h1M10 11h1"/>
    <path d="M2 11h20"/>
    <path d="M17 11a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 011-1z"/>
    <path d="M6 7V3a1 1 0 011-1h10a1 1 0 011 1v4"/>
  </svg>
);

export const ThermometerIcon: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 4h-4a1 1 0 00-1 1v11.5a4.5 4.5 0 109 0V5a1 1 0 00-1-1z"/>
    <path d="M12 13V5"/>
    <path d="M12 20a2.5 2.5 0 002.5-2.5"/>
    <line x1="15" y1="8" x2="9" y2="8"/>
    <line x1="15" y1="11" x2="9" y2="11"/>
  </svg>
);

export const DeliveryIcon: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"/>
    <path d="M14 9h4l4 4v7c0 .6-.4 1-1 1h-9c-.6 0-1-.4-1-1v-3"/>
    <circle cx="7.5" cy="18.5" r="2.5"/>
    <circle cx="17.5" cy="18.5" r="2.5"/>
    <path d="M14 9V6H3"/>
  </svg>
);

export const TastingIcon: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.5 11.5C20.5 6.25 16.75 2 12 2S3.5 6.25 3.5 11.5c0 4.37 2.65 8.11 6.5 9.4V22h4v-1.1c3.85-1.29 6.5-5.03 6.5-9.4z"/>
    <path d="M7 11c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"/>
    <path d="M15 11c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"/>
    <path d="M9 16s1 1 3 1 3-1 3-1"/>
  </svg>
);
