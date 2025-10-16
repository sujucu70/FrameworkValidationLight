
import React from 'react';
import type { IconName } from '../types';

interface IconProps {
  name: IconName | string;
  className?: string;
}

// FIX: Added `as const` to ensure TypeScript infers literal types for SVG properties.
// This resolves the error where the string "round" was not assignable to the
// specific string literal type expected by React's SVG props.
const iconProps = {
  "xmlns": "http://www.w3.org/2000/svg",
  "width": "24",
  "height": "24",
  "viewBox": "0 0 24 24",
  "fill": "none",
  "stroke": "currentColor",
  "strokeWidth": "2",
  "strokeLinecap": "round",
  "strokeLinejoin": "round"
} as const;

const Users = (props: {className?: string}) => (
    <svg {...iconProps} className={props.className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
const TrendingUp = (props: {className?: string}) => (
    <svg {...iconProps} className={props.className}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
);
const Zap = (props: {className?: string}) => (
    <svg {...iconProps} className={props.className}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);
const DollarSign = (props: {className?: string}) => (
    <svg {...iconProps} className={props.className}><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
);
const Target = (props: {className?: string}) => (
    <svg {...iconProps} className={props.className}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);
const CheckCircle = (props: {className?: string}) => (
    <svg {...iconProps} className={props.className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);
export const Check = (props: {className?: string}) => (
    <svg {...iconProps} className={props.className}><polyline points="20 6 9 17 4 12"/></svg>
);
export const AlertTriangle = (props: {className?: string}) => (
    <svg {...iconProps} className={props.className}><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>
);
export const X = (props: {className?: string}) => (
    <svg {...iconProps} className={props.className}><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
);
export const Clock = (props: {className?: string}) => (
    <svg {...iconProps} className={props.className}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);
export const BarChart = (props: {className?: string}) => (
    <svg {...iconProps} className={props.className}><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>
);
export const ChevronDown = (props: {className?: string}) => (
    <svg {...iconProps} className={props.className}><path d="m6 9 6 6 6-6"/></svg>
);

export const Icon: React.FC<IconProps> = ({ name, className = 'w-6 h-6' }) => {
  switch (name) {
    case 'Users': return <Users className={className} />;
    case 'TrendingUp': return <TrendingUp className={className} />;
    case 'Zap': return <Zap className={className} />;
    case 'DollarSign': return <DollarSign className={className} />;
    case 'Target': return <Target className={className} />;
    case 'CheckCircle': return <CheckCircle className={className} />;
    default: return <BarChart className={className} />;
  }
};
