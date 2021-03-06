export default function ArrowRightIcon(props) {
  return (
    <svg {...props}>
      <g clipPath="url(#clip0)">
        <path
          d="M18.3482 13.1881L8.02854 23.5074C7.37208 24.1642 6.30776 24.1642 5.65162 23.5074C4.99544 22.8512 4.99544 21.787 5.65162 21.1308L14.7829 11.9998L5.65189 2.86914C4.9957 2.21269 4.9957 1.14853 5.65189 0.492339C6.30808 -0.164113 7.37235 -0.164113 8.0288 0.492339L18.3484 10.8118C18.6765 11.14 18.8404 11.5698 18.8404 11.9998C18.8404 12.43 18.6762 12.86 18.3482 13.1881Z"
          fill={props.color}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="23.9999" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

ArrowRightIcon.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  color: "black",
};
