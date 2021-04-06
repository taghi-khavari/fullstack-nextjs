import { Button, Grid, TextField, useTheme } from "@material-ui/core";
import { DropzoneDialog } from "material-ui-dropzone";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import GarbageIcon from "../../../svg/GarbageIcon";
import PenIcon from "../../../svg/PenIcon";
import UserIcon from "../../../svg/UserIcon";
import useStyle from "./AddPeople.style";

export default function AddPeople({ onClose, onAddPerson, isEdited, person }) {
  const [avatar, setAvatar] = useState();
  const [avatarSrc, setAvatarSrc] = useState();
  const [openDialog, setOpenDialog] = useState();
  const { register, handleSubmit, setValue } = useForm();
  const cs = useStyle();
  const theme = useTheme();

  const handleAvatar = (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    console.log("files are: ", files);
    console.log("formData are: ", formData);
    setAvatar(formData);
    const reader = new FileReader();
    reader.onload = function (e) {
      console.log("reader event is: ", e);
      setAvatarSrc(e.target.result);
    };
    reader.readAsDataURL(files[0]);
    setOpenDialog(false);
  };

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  const onSubmit = (data) => {
    // do something with it
    console.log("form data is: ", data);
    console.log("avatar is: ", avatar);
    onAddPerson({
      ...data,
      img: avatarSrc,
    });
  };

  const handleDeleteAvatar = () => {
    setAvatarSrc(null);
  };

  useEffect(() => {
    if (isEdited) {
      setValue("name", person?.name);
      setValue("title", person?.title);
      setValue("description", person?.description);
      setAvatarSrc(person?.img);
    }
  }, [isEdited]);

  return (
    <div className={cs.addPeopleRoot}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DropzoneDialog
          acceptedFiles={["image/*"]}
          cancelButtonText={"cancel"}
          submitButtonText={"submit"}
          maxFileSize={5000000}
          open={openDialog}
          onClose={handleCloseDialog}
          onSave={handleAvatar}
          showPreviews={true}
          showFileNamesInPreview={true}
        />
        <Grid
          container
          direction="column"
          alignItems="center"
          className={cs.avatarWrapper}
        >
          <div className={cs.avatarBg}>
            {!!avatarSrc ? (
              <img
                src={avatarSrc}
                alt="your avatar"
                className={cs.avatarPreview}
              />
            ) : (
              <UserIcon
                color={theme.palette.custom.blue.dark}
                width={50}
                height={50}
              />
            )}
            <div onClick={handleOpenDialog} className={cs.editIcon}>
              <PenIcon
                width={12}
                height={12}
                color={theme.palette.custom.blue.dark}
              />
            </div>
          </div>
          {isEdited && !!avatarSrc && (
            <Grid
              container
              justify="center"
              alignItems="center"
              className={cs.removeAvatar}
              onClick={handleDeleteAvatar}
            >
              <div className={cs.garbageWrapper}>
                <GarbageIcon
                  color={theme.palette.custom.red.dark}
                  width={12}
                  height={12}
                />
              </div>
              <span>Delete Picture</span>
            </Grid>
          )}
        </Grid>
        <label htmlFor="name">Name</label>
        <TextField
          size="small"
          variant="outlined"
          placeholder="Member Name"
          inputRef={register}
          name="name"
          id="name"
        />
        <label htmlFor="position">Position</label>
        <TextField
          size="small"
          variant="outlined"
          placeholder="Member Position"
          inputRef={register}
          name="title"
          id="position"
        />
        <label htmlFor="description">Description</label>
        <TextField
          size="small"
          multiline
          rows={4}
          variant="outlined"
          placeholder="Member Description"
          inputRef={register}
          name="description"
          id="description"
        />
        <Grid container justify="flex-end">
          <Button onClick={onClose}>Cancel</Button>
          <Button variant="contained" color="primary" type="submit">
            Save
          </Button>
        </Grid>
      </form>
    </div>
  );
}
