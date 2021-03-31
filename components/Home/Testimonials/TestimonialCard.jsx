import { Card, Grid } from "@material-ui/core";
import useStyle from "./Testimonials.style";

export default function TestimonialCard({ item }) {
  const cs = useStyle();

  return (
    <Card raised={true} className={cs.cardRoot}>
      <Grid container direction="column">
        <Grid item container direction="row" wrap="nowrap">
          {item.img && (
            <img
              src={item.img}
              alt="testimonial commenter"
              className={cs.testimonialImg}
            />
          )}
          <Grid item container direction="column" justify="center">
            <div className={cs.name}>{item.name}</div>
            <div className={cs.title}>{item.title}</div>
          </Grid>
        </Grid>
        <Grid item>
          {item.comment && (
            <div className={cs.comment}>
              &ldquo; <span>{item.comment}</span>
            </div>
          )}
        </Grid>
      </Grid>
    </Card>
  );
}
