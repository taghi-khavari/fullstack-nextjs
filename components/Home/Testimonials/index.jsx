import TestimonialCard from "./TestimonialCard";
import useStyle from "./Testimonials.style";
import CTA from "../../../components/general/CTA";
import HeartIcon from "../../svg/HeartIcon";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { testimonials } from "../../../fakeData";
import { useMediaQuery, useTheme } from "@material-ui/core";
import classNames from "classnames";
import ArrowRightIcon from "../../svg/ArrowRightIcon";

export default function Testimonials() {
  const cs = useStyle();
  const theme = useTheme();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const icon = (
    <div className={cs.iconWrapper}>
      <HeartIcon
        color="white"
        width={isMobile ? 15 : 24}
        height={isMobile ? 15 : 24}
      />
    </div>
  );
  const actions = (
    <div className={classNames(cs.iconWrapper, cs.purpleBg)}>
      <ArrowRightIcon
        color={theme.palette.custom.purple.dark}
        width={isMobile ? 15 : 24}
        height={isMobile ? 15 : 24}
      />
    </div>
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
          dots: true,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 724,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className={cs.root}>
      <CTA
        icon={icon}
        title={"What other people say about our services"}
        actions={actions}
      />
      <Slider {...sliderSettings}>
        {testimonials?.map((item) => (
          <TestimonialCard key={item.id} item={item} />
        ))}
      </Slider>
    </div>
  );
}
