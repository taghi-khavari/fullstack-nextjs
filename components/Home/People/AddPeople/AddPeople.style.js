import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  addPeopleRoot: {
    "& form": {
      display: "flex",
      flexDirection: "column",
      "& .MuiFormControl-root": {
        marginBottom: "1rem",
        [theme.breakpoints.down("sm")]: {
          marginBottom: 10,
        },
      },
      "& label": {
        margin: "5px 0",
      },
      "& button": {
        marginLeft: 10,
      },
    },
  },
  avatarWrapper: {
    position: "relative",
    padding: "1rem",
    [theme.breakpoints.down("sm")]: {
      padding: 8,
    },
  },
  avatarBg: {
    width: 100,
    height: 100,
    background: theme.palette.custom.blue.light,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      width: 75,
      height: 75,
    },
  },
  editIcon: {
    width: 25,
    height: 25,
    background: theme.palette.custom.blue.light,
    boxShadow: theme.shadows[9],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    position: "absolute",
    bottom: 5,
    right: 5,
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      right: -5,
    },
  },
  dropzone: {
    minWidth: 320,
    "& .MuiDropzonePreviewList-removeButton": {
      top: 32,
      right: -50,
    },
    "& .MuiDropzonePreviewList-image": {
      minWidth: 200,
      maxWidth: 320,
      height: "auto",
    },
  },
  avatarPreview: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
  },
  garbageWrapper: {
    width: 25,
    height: 25,
    borderRadius: "50%",
    background: theme.palette.custom.red.light,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    marginRight: 10,
  },
  removeAvatar: {
    marginTop: 5,
    cursor: "pointer",
    "& span": {
      fontSize: "0.8rem",
      color: theme.palette.custom.red.dark,
    },
  },
}));

export default useStyle;
