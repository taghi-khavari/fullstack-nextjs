import {
  AppBar,
  Drawer,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import CancelIcon from "../../../svg/CancelIcon";
import MainMenu from "../../../general/routes/router";
import useStyle from "../Header.style";

export default function Appbar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const cs = useStyle();
  const theme = useTheme();

  const handleCloseDrawer = () => setOpenDrawer(false);
  const handleOpenDrawer = () => setOpenDrawer(true);
  return (
    <>
      <AppBar position="static">
        <Toolbar disableGutters>
          <Grid container className="container">
            <Grid item xs={5} container alignItems="center">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleOpenDrawer}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">Menu</Typography>
            </Grid>
            <Grid item xs={7} container justify="flex-end">
              <img
                src="/assets/header/logo.png"
                alt="Finology Logo"
                className={cs.mobileLogo}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        open={openDrawer}
        anchor="left"
        onClose={handleCloseDrawer}
        className={cs.drawer}
      >
        <Grid container justify="space-between">
          <img
            src="/assets/banner/banner-rounded-001.svg"
            className={cs.bannerImgLeft}
            alt="banner content"
          />
          <img
            src="/assets/header/logo.png"
            alt="Finology Logo"
            className={cs.mobileLogo}
          />
          <CancelIcon
            color={theme.palette.common.white}
            width={20}
            height={20}
            onClick={handleCloseDrawer}
          />
        </Grid>
        <MainMenu isMobile />
      </Drawer>
    </>
  );
}
