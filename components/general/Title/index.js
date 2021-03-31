import useStyle from "./Title.style";

export default function Title({ text }) {
  const cs = useStyle();
  return <div className={cs.root}>{text}</div>;
}
