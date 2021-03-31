import { Grid } from "@material-ui/core";
import CancelIcon from "../../../svg/CancelIcon";
import useStyle from "../People.style";

export default function ViewProfile({ person, handleClose }) {
  const { name, img, title, description } = person;
  const cs = useStyle();
  return (
    <Grid container className={cs.profileRoot}>
      <Grid container item xs={5}>
        <img src={img} alt={name || title} className={cs.profileImg} />
      </Grid>
      <Grid container item xs={7} direction="column" className={cs.description}>
        {name && <div className={cs.name}>{name}</div>}
        {title && <div className={cs.title}>{title}</div>}
        {description && <p className={cs.details}>{description}</p>}
      </Grid>
      {!!handleClose && (
        <CancelIcon
          width={12}
          height={12}
          onClick={handleClose}
          className={cs.profileCloseBtn}
        />
      )}
    </Grid>
  );
}
