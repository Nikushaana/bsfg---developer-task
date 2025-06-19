interface IconProps {
  className?: string;
}

export default function SearchIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.0833 5.5C12.6146 5.5 14.6667 7.55203 14.6667 10.0833M15.2706 15.267L19.25 19.25M17.4167 10.0833C17.4167 14.1334 14.1334 17.4167 10.0833 17.4167C6.03324 17.4167 2.75 14.1334 2.75 10.0833C2.75 6.03324 6.03324 2.75 10.0833 2.75C14.1334 2.75 17.4167 6.03324 17.4167 10.0833Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
