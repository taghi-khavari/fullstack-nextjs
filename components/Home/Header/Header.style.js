import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: "1rem 0",
    zIndex: 5,
  },
  searchInput: {
    animation: "$openSearch 1s ease",
    position: "relative",
    left: 0,
    width: "calc(100% - 24px)",
    "& .MuiOutlinedInput-root": {
      color: theme.palette.common.white,
      "& fieldset": {
        borderColor: theme.palette.common.white,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.common.white,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.common.white,
      },
    },
    "& .MuiInputLabel-outlined": {
      color: theme.palette.common.white,
    },
  },
  "@keyframes openSearch": {
    "0%": {
      width: 0,
    },
    "100%": {
      width: "calc(100% - 24px)",
      display: "block",
    },
  },
  searchContainer: {
    position: "relative",
  },
  cursor: {
    cursor: "pointer",
  },
  searchClose: {
    width: 12,
  },
  logo: {
    width: 80,
  },
  mobileLogo: {
    width: 60,
  },
  drawer: {
    "& .MuiDrawer-paper": {
      background: theme.palette.primary.main,
      padding: "2rem",
      "& svg": {
        cursor: "pointer",
      },
      overflow: "hidden",
      boxSizing: "border-box",
      maxWidth: 290,
    },
  },
  bannerImgLeft: {
    position: "absolute",
    bottom: "-10%",
    left: "-50%",
  },
}));

export default useStyle;
