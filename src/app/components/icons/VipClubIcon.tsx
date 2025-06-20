interface IconProps {
  className?: string;
}

export default function VipClubIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.9154 16.8178H7.08203C6.73203 16.8178 6.34037 16.5428 6.2237 16.2094L2.7737 6.55944C2.28203 5.17611 2.85703 4.75111 4.04037 5.60111L7.29037 7.92611C7.83203 8.30111 8.4487 8.10944 8.68203 7.50111L10.1487 3.59277C10.6154 2.34277 11.3904 2.34277 11.857 3.59277L13.3237 7.50111C13.557 8.10944 14.1737 8.30111 14.707 7.92611L17.757 5.75111C19.057 4.81777 19.682 5.29277 19.1487 6.80111L15.782 16.2261C15.657 16.5428 15.2654 16.8178 14.9154 16.8178Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.41699 19.3311H15.5837"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.91699 12.6689H13.0837"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
