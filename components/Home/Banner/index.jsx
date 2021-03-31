import classNames from "classnames";
import Header from "../Header";
import useStyle from "./Banner.style";

export default function Banner(props) {
  const cs = useStyle();

  return (
    <div className={cs.root}>
      <img
        src="/assets/banner/banner-rounded-001.svg"
        className={cs.bannerImgLeft}
        alt="banner content"
      />
      <img
        src="/assets/banner/banner-rounded-0022.png"
        className={cs.bannerImgRight}
        alt="banner content"
      />
      <img
        src="/assets/banner/banner.png"
        className={cs.bannerImgMiddle}
        alt="banner content"
      />
      <Header />
      <div className={classNames(cs.intro, "container")}>
        <h1>
          <span>Make development</span>
          <span>easy with us.</span>
        </h1>
        <p>
          Doing development can never be easy, and it takes time and resources.
        </p>
        <p>We at EasyWork have the solution</p>
      </div>
    </div>
  );
}
