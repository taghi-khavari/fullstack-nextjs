import {
  Button,
  Card,
  Grid,
  MenuItem,
  Select,
  TextField,
  useMediaQuery,
} from "@material-ui/core";
import classNames from "classnames";
import { useForm, Controller } from "react-hook-form";
import Title from "../../../components/general/Title";
import useStyle from "./Contact.style";

export default function Contact() {
  const cs = useStyle();
  const { register, handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log("form data is: ", data);
  const downSM = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <>
      <div className={classNames(cs.contactRoot, "container")}>
        <Title text="Contact Us" />
        <div className={cs.root}>
          <Card raised={true} className={cs.card}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="name">Name</label>
              <TextField
                variant="outlined"
                placeholder="Enter your name"
                inputRef={register}
                name="name"
                id="name"
              />
              <label htmlFor="email">Email</label>
              <TextField
                variant="outlined"
                placeholder="Enter your email"
                inputRef={register}
                name="email"
                id="email"
              />
              <label htmlFor="subject">Subject</label>
              <Controller
                name="subject"
                as={
                  <Select variant="outlined" native id="subject">
                    <option value="none" disabled>
                      Please select your subject
                    </option>
                    <option value="Support">Support</option>
                    <option value="Offer">Offer</option>
                    <option value="New Project">New Project</option>
                  </Select>
                }
                defaultValue={"none"}
                control={control}
              />
              <label htmlFor="Message">Subject</label>
              <TextField
                variant="outlined"
                multiline
                rows={4}
                id={"Message"}
                name="message"
                placeholder="Write your message here"
                inputRef={register}
              />
              <Grid container justify="flex-end">
                <Button
                  variant="contained"
                  type="submit"
                  size="large"
                  color="primary"
                >
                  Send
                </Button>
              </Grid>
            </form>
          </Card>

          {!downSM && (
            <div className={cs.imageWrapper}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0557166160347!2d101.66804131456077!3d3.0798015544343866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4a50e490c275%3A0x5d821a1855b8a0ad!2s52%2C%20Jalan%20Awan%20Hijau%2C%20Taman%20Overseas%20Union%2C%2058200%20Kuala%20Lumpur%2C%20Wilayah%20Persekutuan%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2s!4v1615978974213!5m2!1sen!2s"
                width="600"
                height="450"
                loading="lazy"
              ></iframe>
            </div>
          )}
        </div>
      </div>
      {downSM && (
        <div className={cs.imageWrapper}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0557166160347!2d101.66804131456077!3d3.0798015544343866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4a50e490c275%3A0x5d821a1855b8a0ad!2s52%2C%20Jalan%20Awan%20Hijau%2C%20Taman%20Overseas%20Union%2C%2058200%20Kuala%20Lumpur%2C%20Wilayah%20Persekutuan%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2s!4v1615978974213!5m2!1sen!2s"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      )}
    </>
  );
}
