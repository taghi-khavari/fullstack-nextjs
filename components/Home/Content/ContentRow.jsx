import { Grid } from "@material-ui/core";
import useStyle from "./Content.style";

export default function ContentRow({
  imageFirst,
  src,
  alt,
  title,
  description,
}) {
  const cs = useStyle();

  return (
    <Grid container direction={imageFirst ? "row" : "row-reverse"}>
      <Grid
        item
        xs={12}
        sm={7}
        className={cs.contentImage}
        container
        alignItems="center"
        justify="center"
      >
        {!!src && <img src={src} alt={alt || "content"} />}
      </Grid>
      <Grid
        item
        xs={12}
        sm={5}
        container
        direction="column"
        justify="center"
        className={cs.contentText}
      >
        <h3>{title}</h3>
        <p>{description}</p>
      </Grid>
    </Grid>
  );
}
