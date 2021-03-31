import SVG from "./SVG";

export default function CheckedIcon(props) {
  return (
    <SVG {...props}>
      <path
        d="M0.276923 12.9231C0.0923077 12.7385 0 12.4616 0 12.277C0 12.0924 0.0923077 11.8154 0.276923 11.6308L1.56923 10.3385C1.93846 9.96929 2.49231 9.96929 2.86154 10.3385L2.95385 10.4308L8.03077 15.877C8.21538 16.0616 8.49231 16.0616 8.67692 15.877L21.0462 3.04621H21.1385V3.04621C21.5077 2.67698 22.0615 2.67698 22.4308 3.04621L23.7231 4.33852C24.0923 4.70775 24.0923 5.26159 23.7231 5.63083L8.95385 20.9539C8.76923 21.1385 8.58462 21.2308 8.30769 21.2308C8.03077 21.2308 7.84615 21.1385 7.66154 20.9539L0.461538 13.2001L0.276923 12.9231V12.9231Z"
        fill={props.color}
      />
    </SVG>
  );
}

CheckedIcon.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  color: "black",
};
