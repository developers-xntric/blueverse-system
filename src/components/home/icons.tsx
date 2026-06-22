import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function BaseIcon(props: IconProps) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      {...props}
    />
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </BaseIcon>
  );
}

export function WavesIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M3 8c1.4 1.2 2.6 1.2 4 0s2.6-1.2 4 0 2.6 1.2 4 0 2.6-1.2 4 0" />
      <path d="M3 12c1.4 1.2 2.6 1.2 4 0s2.6-1.2 4 0 2.6 1.2 4 0 2.6-1.2 4 0" />
      <path d="M3 16c1.4 1.2 2.6 1.2 4 0s2.6-1.2 4 0 2.6 1.2 4 0 2.6-1.2 4 0" />
    </BaseIcon>
  );
}

export function CarIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 16h14l-1.5-5a2 2 0 0 0-1.9-1.4H8.4A2 2 0 0 0 6.5 11L5 16Z" />
      <path d="M7 16v2" />
      <path d="M17 16v2" />
      <circle cx="8.5" cy="16.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="16.5" r="1" fill="currentColor" stroke="none" />
    </BaseIcon>
  );
}

export function ChartIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 19h16" />
      <path d="M6 15l3-3 3 2 6-7" />
    </BaseIcon>
  );
}

export function LightbulbIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M8.6 14.4A6 6 0 1 1 15.4 14.4C14.5 15.1 14 16 14 17h-4c0-1-.5-1.9-1.4-2.6Z" />
    </BaseIcon>
  );
}

export function LeafIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M6 13c0-5 4.5-8 12-8 0 7.5-3 12-8 12-2.2 0-4-1.8-4-4Z" />
      <path d="M8 15c2-3 4.7-5.7 8-8" />
    </BaseIcon>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 3c2 .9 4.1 1.4 6.3 1.5v6.1c0 4.1-2.5 7.8-6.3 9.4-3.8-1.6-6.3-5.3-6.3-9.4V4.5C7.9 4.4 10 3.9 12 3Z" />
    </BaseIcon>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M16 19a4 4 0 0 0-8 0" />
      <circle cx="12" cy="10" r="3" />
      <path d="M20 18a3.5 3.5 0 0 0-3-3.5" />
      <path d="M7 14.5A3.5 3.5 0 0 0 4 18" />
    </BaseIcon>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14.8 14.8 0 0 1 0 18" />
      <path d="M12 3a14.8 14.8 0 0 0 0 18" />
    </BaseIcon>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 21s6-5.4 6-11a6 6 0 0 0-12 0c0 5.6 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </BaseIcon>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M8 10v6" />
      <path d="M8 7.5h.01" />
      <path d="M12 16v-3.2c0-1.7 1-2.8 2.5-2.8S17 11.1 17 12.8V16" />
      <path d="M12 10v6" />
    </BaseIcon>
  );
}

export function TwitterIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M18 7.5a3.4 3.4 0 0 1-1.2.4 2.2 2.2 0 0 0 1-1.2 4.1 4.1 0 0 1-1.4.6 2.2 2.2 0 0 0-3.8 1.5c0 .2 0 .4.1.6A6.2 6.2 0 0 1 8 7.2a2.2 2.2 0 0 0 .7 3 2 2 0 0 1-1-.3v.1a2.2 2.2 0 0 0 1.8 2.2 2.5 2.5 0 0 1-1 .1 2.2 2.2 0 0 0 2 1.6A4.5 4.5 0 0 1 7 15.1a6.4 6.4 0 0 0 3.5 1c4.2 0 6.5-3.6 6.5-6.7v-.3A4.7 4.7 0 0 0 18 7.5Z" />
    </BaseIcon>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M14.5 8H16V5.5h-1.9c-2.2 0-3.6 1.5-3.6 3.8V11H8v2.5h2.5V19H13v-5.5h2.4L15.8 11H13V9.6c0-1 .5-1.6 1.5-1.6Z" />
    </BaseIcon>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="4.5" y="4.5" width="15" height="15" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="16.3" cy="7.7" r=".8" fill="currentColor" stroke="none" />
    </BaseIcon>
  );
}

export function WaterScarcityIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 5c2.5 2.6 4 4.7 4 6.7A4 4 0 0 1 8 11.7C8 9.7 9.5 7.6 12 5Z" />
      <path d="M4 14c.4 1.5 1.3 2.8 2.5 3.8" />
      <path d="M20 14c-.4 1.5-1.3 2.8-2.5 3.8" />
      <path d="M7 11 5 9" />
      <path d="M17 11l2-2" />
    </BaseIcon>
  );
}

export function FactoryIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M3 19h18" />
      <path d="M5 19v-8h5v3l4-3v8" />
      <path d="M14 19v-5l5-3v8" />
      <path d="M7 9V6h3v3" />
    </BaseIcon>
  );
}

export function BadgeIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="7" />
      <path d="m9.5 12 1.5 1.5 3.5-3.5" />
      <path d="M12 5V3" />
      <path d="M12 21v-2" />
      <path d="M19 12h2" />
      <path d="M3 12h2" />
    </BaseIcon>
  );
}

export function NetworkIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="M7.6 7.6 10.4 10.4" />
      <path d="M16.4 7.6 13.6 10.4" />
      <path d="M10.4 13.6 7.6 16.4" />
      <path d="M13.6 13.6 16.4 16.4" />
    </BaseIcon>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.2 2.2 4.8-4.8" />
    </BaseIcon>
  );
}
