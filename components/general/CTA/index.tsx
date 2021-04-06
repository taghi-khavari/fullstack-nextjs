import { Grid } from "@material-ui/core";
import useStyle from "./CTA.style";

export default function CTA({ icon, title, actions }) {
  const cs = useStyle();

  return (
    <Grid container className={`container ${cs.root}`}>
      <Grid item xs={8} sm={6} container alignItems="center" wrap="nowrap">
        <div className={cs.icon}>{icon}</div>
        <div className={cs.title}>{title}</div>
      </Grid>
      <Grid item xs={4} sm={6} container justify="flex-end" alignItems="center">
        {actions}
      </Grid>
    </Grid>
  );
}
