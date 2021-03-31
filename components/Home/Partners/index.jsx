import { Grid } from "@material-ui/core";
import classNames from "classnames";
import Title from "../../../components/general/Title";
import { Customers } from "../../../fakeData";
import useStyle from "./Partners.style";

export default function Partners() {
  const cs = useStyle();
  return (
    <div className={classNames(cs.root, "container")}>
      <Title text="We've Worked with" />
      <Grid container justify="center" wrap="wrap">
        {Customers?.map((customer) => (
          <img key={customer.id} {...customer} />
        ))}
      </Grid>
    </div>
  );
}
