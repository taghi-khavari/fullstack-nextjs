import SVG from "./SVG";

export default function RoundedCloseIcon(props) {
  return (
    <SVG {...props}>
      <rect
        x="111.513"
        width="371"
        height="320"
        rx="60"
        transform="rotate(20.3942 111.513 0)"
        fill="url(#paint0_linear)"
      />
      <rect
        x="288.513"
        y="130"
        width="371"
        height="320"
        rx="60"
        transform="rotate(20.3942 288.513 130)"
        fill="url(#paint1_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="297.013"
          y1="0"
          x2="297.013"
          y2="320"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#252584" />
          <stop offset="1" stopColor="#5353A5" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="474.013"
          y1="130"
          x2="474.013"
          y2="450"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#252584" />
          <stop offset="1" stopColor="#5353A5" />
        </linearGradient>
      </defs>
    </SVG>
  );
}

RoundedCloseIcon.defaultProps = {
  width: "637",
  height: "560",
  viewBox: "0 0 637 560",
  fill: "none",
};
