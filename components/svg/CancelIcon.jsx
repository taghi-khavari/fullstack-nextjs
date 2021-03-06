export default function CancelIcon(props) {
  return (
    <svg {...props}>
      <g clipPath="url(#clip0)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.8526 11.9996L23.4095 3.44268C24.1972 2.655 24.1972 1.37794 23.4095 0.590379C22.6218 -0.197294 21.3449 -0.197294 20.5572 0.590379L12.0002 9.14738L3.44321 0.590266C2.65554 -0.197406 1.37859 -0.197406 0.590914 0.590266C-0.196646 1.37794 -0.196646 2.655 0.590914 3.44256L9.14792 11.9995L0.590914 20.5565C-0.196646 21.3441 -0.196646 22.6212 0.590914 23.4088C1.37859 24.1964 2.65554 24.1964 3.44321 23.4088L12.0002 14.8518L20.5572 23.4088C21.3448 24.1964 22.6218 24.1964 23.4095 23.4088C24.1972 22.6211 24.1972 21.3441 23.4095 20.5565L14.8526 11.9996Z"
          fill={props.color}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width={props.width} height={props.width} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

CancelIcon.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  color: "black",
};
