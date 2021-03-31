import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    minHeight: 500,
    position: "relative",
    "& header": {
      boxShadow: `0px 2px 4px -1px rgb(255 255 255 / 20%), 0px 4px 5px 0px rgb(255 255 255 / 14%), 0px 1px 10px 0px rgb(255 255 255 / 12%)`,
    },
  },
  bannerImgLeft: {
    position: "absolute",
    bottom: 0,
    left: -50,
    width: 380,
    [theme.breakpoints.down("sm")]: {
      width: 300,
    },
  },
  bannerImgRight: {
    position: "absolute",
    bottom: "10%",
    right: 0,
    width: 135,
  },
  bannerImgMiddle: {
    position: "absolute",
    bottom: -50,
    right: "15%",
    width: "50%",
    animation: "$upAndDown 1s ease-in-out infinite",
    animationDirection: "alternate",
    maxWidth: 360,
  },
  "@keyframes upAndDown": {
    "0%": {
      bottom: -55,
    },
    "100%": {
      bottom: -45,
    },
  },
  intro: {
    position: "relative",
    top: 50,
    zIndex: 9,
    textAlign: "left",
    color: theme.palette.common.white,
    "& h1 span": {
      display: "block",
      fontSize: "3rem",
      fontWeight: 800,
      [theme.breakpoints.down("md")]: {
        fontSize: "2rem",
      },
    },
    "& *": {
      maxWidth: 450,
    },
  },
}));

export default useStyle;
