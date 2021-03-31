import { Grid } from "@material-ui/core";
import useStyle from "./Footer.style";

export default function Footer() {
  const cs = useStyle();
  return (
    <div className={cs.root}>
      <img
        src="/assets/banner/banner-rounded-001.svg"
        className={cs.footerImgLeft}
        alt="banner content"
      />
      <img
        src="/assets/banner/banner-rounded-002.svg"
        className={cs.footerImgRight}
        alt="banner content"
      />
      <Grid container className="container" spacing={3}>
        <Grid
          container
          item
          xs={12}
          sm={4}
          alignItems="center"
          className={cs.logoWrapper}
        >
          <img src="/assets/header/logo.png" alt="Finology Logo" />
          <div>Easy Work</div>
        </Grid>
        <Grid container item xs={12} sm={4}>
          <div>Address</div>
          <p>
            52-1, Jalan Awan Hijau, Taman Overseas Union, 58200 Kuala Lumpur,
            Wilayah Persekutuan Kuala Lumpour
          </p>
        </Grid>
        <Grid container item xs={12} sm={4} direction="column">
          <div>
            <div>Contact</div>
            <p>03-7451 5283</p>
          </div>
          <div>
            <div>Fax</div>
            <p>03-7451 5283</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
