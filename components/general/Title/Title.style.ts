import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
    fontSize: "1.4rem",
    textAlign: "center",
    fontWeight: 800,
  },
}));

export default useStyle;
