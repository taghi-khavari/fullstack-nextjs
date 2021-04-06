import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    marginBottom: "2rem",
  },
  title: {
    textAlign: "left",
    fontSize: "1rem",
    color: theme.palette.primary.main,
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
  icon: {
    marginRight: "1rem",
  },
}));

export default useStyle;
