import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: "3rem",
  },
  contentRoot: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: "3rem",
    },
  },
  contentText: {
    textAlign: "justify",
    padding: "2.5rem",
    [theme.breakpoints.down("sm")]: {
      padding: "1rem",
    },
    "& h3": {
      color: theme.palette.primary.main,
    },
  },
  contentImage: {
    "& img": {
      maxWidth: "100%",
    },
  },
}));

export default useStyle;
