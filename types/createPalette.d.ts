import {
  Palette,
  PaletteOptions,
} from "@material-ui/core/styles/createPalette";

interface ICustomPalette {
  text: {
    primary: string;
    grayLight: string;
    grayDark: string;
  };
  purple: {
    light: string;
    dark: string;
  };
  yellow: {
    light: string;
    dark: string;
  };
  red: {
    light: string;
    dark: string;
    main: string;
  };
  blue: {
    light: string;
    dark: string;
  };
  pink: {
    main: string;
  };
}

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    custom: ICustomPalette;
  }
  interface PaletteOptions {
    custom: ICustomPalette;
  }
}
