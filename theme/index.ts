import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    custom: {
      text: {
        primary: "#b7b7ce",
        grayLight: "#aaa",
        grayDark: "#5b5b5b",
      },
      purple: {
        light: "#eedeff",
        dark: "#8251bc",
      },
      yellow: {
        light: "#fffede",
        dark: "#ffc120",
      },
      red: {
        light: "#ffeeee",
        dark: "#ff5959",
        main: "#fe0302",
      },
      blue: {
        light: "#c6def6",
        dark: "#2b61b4",
      },
      pink: {
        main: "#ff00b8",
      },
    },
    primary: {
      main: "#252584",
    },
    secondary: {
      main: "#00d7ff",
    },
  },
});

export default theme;
