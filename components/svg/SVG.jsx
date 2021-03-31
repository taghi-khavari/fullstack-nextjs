export default function SVG(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}>
      {props.children}
    </svg>
  );
}
