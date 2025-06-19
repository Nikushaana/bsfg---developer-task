interface IconProps {
  className?: string;
}

export default function SliderArrowIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.125 11.75L0.875 6.5L6.125 1.25"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
