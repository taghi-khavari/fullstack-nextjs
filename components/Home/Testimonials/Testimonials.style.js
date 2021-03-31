import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    marginBottom: "3rem",
    "& .slick-dots li button:before": {
      fontSize: 14,
      marginTop: 10,
    },
  },
  testimonialImg: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    marginRight: 15,
  },
  cardRoot: {
    width: 300,
    margin: "1rem auto",
    padding: "1rem",
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      width: 230,
    },
  },
  name: {
    fontWeight: 800,
    fontSize: "1.1rem",
  },
  title: {
    color: theme.palette.common.custom.text.grayLight,
    fontSize: "0.8rem",
    marginTop: 5,
  },
  comment: {
    color: theme.palette.common.custom.text.grayDark,
    fontSize: "0.9rem",
    marginTop: "1rem",
  },
  iconWrapper: {
    background: "red",
    width: 50,
    height: 50,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: 30,
      height: 30,
    },
  },
  purpleBg: {
    background: theme.palette.common.custom.purple.light,
  },
}));

export default useStyle;
