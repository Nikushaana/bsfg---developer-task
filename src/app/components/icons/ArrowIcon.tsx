interface IconProps {
  className?: string;
}

export default function ArrowIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_18_1098)">
        <path
          d="M9 6L5 2L1 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_18_1098">
          <rect
            width="10"
            height="10"
            fill="currentColor"
            transform="translate(0 10) rotate(-90)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
