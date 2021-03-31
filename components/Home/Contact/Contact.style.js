import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
    },
    marginTop: "3rem",
    "& img": {
      maxWidth: "100%",
      height: "100%",
      maxHeight: "100%",
    },
    "& form": {
      display: "flex",
      flexDirection: "column",
      textAlign: "left",
      "& > label": {
        margin: "10px 0",
      },
      "& button": {
        marginTop: "1rem",
      },
      "& > div": {
        marginBottom: "1rem",
      },
    },
  },
  contactRoot: {
    margin: "5rem auto",
  },
  card: {
    padding: "2rem",
    maxHeight: 630,
    textAlign: "right",
  },
  imageWrapper: {
    maxHeight: 630,
    padding: "3rem 0",
    boxSizing: "border-box",
    textAlign: "left",
    "& iframe": {
      width: "100%",
      height: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      maxWidth: "100%",
      overflow: "hidden",
      "& iframe": {
        height: 350,
      },
    },
  },
}));

export default useStyle;
