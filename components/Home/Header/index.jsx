import {
  Grid,
  InputAdornment,
  TextField,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import classNames from "classnames";
import { useState } from "react";
import CancelIcon from "../../svg/CancelIcon";
import SearchIcon from "../../svg/SearchIcon";
import useStyle from "./Header.style";
import Appbar from "./Appbar";
import MainMenu from "../../general/routes/router";

export default function Header() {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const cs = useStyle();
  const theme = useTheme();

  const handleToggleSearch = (e) => {
    setOpen((v) => !v);
  };

  return (
    <>
      {isMobile ? (
        <Appbar />
      ) : (
        <Grid container className={classNames(cs.root, "container")}>
          <Grid container item xs={3} alignItems="center">
            <img
              src="/assets/header/logo.png"
              alt="Finology Logo"
              className={cs.logo}
            />
          </Grid>
          <Grid
            container
            item
            xs={6}
            alignItems="center"
            justify="space-evenly"
          >
            <MainMenu />
          </Grid>
          <Grid
            container
            item
            xs={3}
            alignItems="center"
            justify="flex-end"
            className={cs.searchContainer}
          >
            {!open && (
              <SearchIcon
                onClick={handleToggleSearch}
                className={cs.cursor}
                color={theme.palette.common.white}
              />
            )}
            {open && (
              <TextField
                className={cs.searchInput}
                variant="outlined"
                size="small"
                label="search"
                color={theme.palette.common.white}
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <CancelIcon
                        onClick={handleToggleSearch}
                        className={classNames(cs.cursor, cs.searchClose)}
                        color={theme.palette.common.white}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          </Grid>
        </Grid>
      )}
    </>
  );
}
