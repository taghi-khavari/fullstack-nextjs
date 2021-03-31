import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  listRoot: {
    display: "flex",
    flexDirection: (props) => (props?.isMobile ? "column" : "row"),
    minWidth: 300,
  },
  menuItem: {
    color: theme.palette.common.white,
    width: "auto",
    paddingLeft: 0,
    "& *": {
      fontWeight: 800,
    },
  },
  activeMenu: {
    color: theme.palette.secondary.main,
  },
}));

export default useStyle;
