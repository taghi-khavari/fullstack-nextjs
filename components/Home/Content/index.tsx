import classNames from "classnames";
import useStyle from "./Content.style";
import ContentRow from "./ContentRow";

export default function Content() {
  const cs = useStyle();
  const description = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius vel incidunt unde cumque dolorem! Ullam at cumque culpa temporibus facilis aspernatur voluptate fuga enim modi dicta quos, commodi, est facere!
      Qui nesciunt eaque, corrupti libero soluta nihil recusandae odio iste at eius dolor expedita magnam illum minus! Ipsum!`;
  return (
    <div className={classNames(cs.contentRoot, "container")}>
      <ContentRow
        imageFirst={true}
        src="/assets/content/content-001.png"
        title={"We can give you our best user experience to your system"}
        description={description}
      />
      <ContentRow
        src="/assets/content/content-002.png"
        title={"Easy access, Whenever, Wherever you want"}
        description={description}
      />
    </div>
  );
}
