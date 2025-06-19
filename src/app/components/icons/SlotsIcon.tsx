interface IconProps {
  className?: string;
}

export default function SlotsIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 1.76923V10.6923H5C5 9.07692 6.35 7.69231 8 7.69231H11.75L9.65 10.3077C7.1 13.4615 5.225 17.0769 4.25 21H14C14 16.6154 15.125 12.3077 17.375 8.53846L20 3.92308L17.75 1L16.85 1.46154C14.525 2.61538 11.9 2.84615 9.425 2.15385C8.45 1.84615 7.55 1.76923 6.575 1.76923H2Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
