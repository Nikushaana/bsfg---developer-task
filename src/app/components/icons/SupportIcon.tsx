interface IconProps {
  className?: string;
}

export default function SupportIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_18_1389)">
        <path
          d="M7 11H7.009M10.991 11H11M14.991 11H15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 12.5997 1.37562 14.1116 2.04346 15.4525C2.22094 15.8088 2.28001 16.2161 2.17712 16.6006L1.58151 18.8267C1.32295 19.793 2.20701 20.677 3.17335 20.4185L5.39939 19.8229C5.78393 19.72 6.19121 19.7791 6.54753 19.9565C7.88837 20.6244 9.4003 21 11 21Z"
          stroke="currentColor"
          strokeWidth="1.3"
        />
      </g>
      <defs>
        <clipPath id="clip0_18_1389">
          <rect width="22" height="22" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
