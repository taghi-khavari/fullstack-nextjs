import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {},
  iconWrapper: {
    background: "#c300ff",
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
  cardsWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  cardRoot: {
    position: "relative",
    cursor: "pointer",
    width: 200,
    margin: "1rem",
    "& img": {
      maxHeight: 200,
      width: "100%",
    },
    "&:hover": {
      "& $editBtn": {
        display: "flex",
      },
    },
  },
  description: {
    padding: "1rem",
  },
  name: {
    fontWeight: 700,
  },
  title: {
    color: theme.palette.custom.text.grayLight,
    fontSize: "0.7rem",
    marginTop: 5,
  },
  details: {
    color: theme.palette.custom.text.grayLight,
    fontSize: "0.7rem",
    marginTop: 20,
  },
  actionBtn: {
    width: 70,
    height: 35,
    margin: "0 10px",
    boxShadow: "unset",
    [theme.breakpoints.down("sm")]: {
      width: 35,
      height: 25,
      margin: 5,
      marginRight: 0,
      minWidth: "unset",
      fontSize: "0.65rem",
    },
  },
  mainAdd: {
    background: theme.palette.custom.purple.light,
    color: theme.palette.custom.purple.dark,
    "&:hover": {
      background: theme.palette.custom.purple.dark,
      color: theme.palette.custom.purple.light,
    },
  },
  mainEdit: {
    background: theme.palette.custom.yellow.light,
    color: theme.palette.custom.yellow.dark,
    "&:hover": {
      background: theme.palette.custom.yellow.dark,
      color: theme.palette.custom.yellow.light,
    },
  },
  editBtn: {
    position: "absolute",
    width: 20,
    height: 20,
    right: 20,
    top: 20,
    cursor: "pointer",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    display: "none",
    background: theme.palette.custom.blue.light,
  },
  selectBtn: {
    position: "absolute",
    width: 20,
    height: 20,
    left: 20,
    top: 20,
    border: `1px solid ${theme.palette.custom.text.grayLight}`,
    cursor: "pointer",
    borderRadius: "50%",
    background: ({ selected }) =>
      selected ? theme.palette.primary.main : theme.palette.common.white,
    display: ({ activateSelect }) => (activateSelect ? "flex" : "none"),
    alignItems: "center",
    justifyContent: "center",
  },
  cancelBtn: {
    [theme.breakpoints.down("sm")]: {
      width: 55,
      height: 25,
      margin: 5,
      marginRight: 0,
      minWidth: "unset",
      fontSize: "0.65rem",
    },
  },
  garbageWrapper: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    background: theme.palette.custom.red.light,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    marginLeft: 10,
    [theme.breakpoints.down("sm")]: {
      width: 30,
      height: 30,
      marginLeft: 5,
    },
  },
  dialogPaper: {
    padding: "1rem",
    maxWidth: "100%",
    width: 304,
    boxSizing: "border-box",
    "& > div > svg": {
      cursor: "pointer",
    },
  },
  profileImg: {
    width: "100%",
  },
  profileRoot: {
    position: "relative",
  },
  profileCloseBtn: {
    position: "absolute",
    right: "1rem",
    top: "1.3rem",
    cursor: "pointer",
  },
  cardAvatarWrapper: {
    width: "100%",
    height: "100%",
    background: ({ img }) =>
      !!img ? theme.palette.common.white : theme.palette.custom.blue.light,
  },
}));

export default useStyle;
