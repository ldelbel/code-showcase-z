type IconProps = {
  className?: string;
  size?: number;
};

const ParsAmorisIcon = ({ size = 20, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z"
      fill="#E6BE69"
    />
    <path
      d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10Z"
      fill="#242424"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.0001 16L9.00009 2.00003L10.7366 1.00775L18.7366 15.0078L17.0001 16Z"
      fill="#E6BE69"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.99991 16L10.9999 2.00003L9.26343 1.00775L1.26343 15.0078L2.99991 16Z"
      fill="#E6BE69"
    />
  </svg>
);

export default ParsAmorisIcon;
