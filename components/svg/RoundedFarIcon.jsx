import SVG from "./SVG";

export default function RoundedFarIcon(props) {
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
        x="139.513"
        y="65"
        width="371"
        height="320"
        rx="60"
        transform="rotate(20.3942 139.513 65)"
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
          <stop stopColor="#2459C0" />
          <stop offset="1" stopColor="#5353A5" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="325.013"
          y1="65"
          x2="325.013"
          y2="385"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#121265" />
          <stop offset="1" stopColor="#252584" />
        </linearGradient>
      </defs>
    </SVG>
  );
}

RoundedFarIcon.defaultProps = {
  width: "637",
  height: "560",
  viewBox: "0 0 637 560",
  fill: "none",
};
