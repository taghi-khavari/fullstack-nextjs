import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "100%",
    marginTop: "3rem",
    padding: "3rem",
    height: 300,
    background: theme.palette.primary.main,
    overflow: "hidden",
    boxSizing: "border-box",
    "& *": {
      color: theme.palette.common.white,
      textAlign: "left",
    },
    "& div": {
      zIndex: 10,
    },
    "& p": {
      color: theme.palette.common.custom.text.grayLight,
    },
    "& .MuiGrid-spacing-xs-3": {
      margin: "0 auto",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
      height: "unset",
    },
  },
  footerImgRight: {
    position: "absolute",
    right: -230,
  },
  footerImgLeft: {
    position: "absolute",
    left: 0,
    bottom: 0,
  },
  logoWrapper: {
    alignSelf: "center",
    "& img": {
      maxWidth: 75,
      marginRight: "1rem",
    },
    "& div": {
      fontSize: "1.5rem",
    },
  },
}));

export default useStyle;
