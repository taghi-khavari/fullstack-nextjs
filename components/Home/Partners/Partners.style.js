import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    margin: "3rem auto",
    "& img": {
      maxWidth: "10%",
      margin: 5,
      [theme.breakpoints.down("sm")]: {
        flexBasis: "20%",
        maxWidth: "unset",
      },
    },
  },
}));

export default useStyle;
