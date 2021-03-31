import {
  Button,
  Dialog,
  Grid,
  Paper,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import classNames from "classnames";
import { useState } from "react";
import CTA from "../../../components/general/CTA";
import CancelIcon from "../../svg/CancelIcon";
import GarbageIcon from "../../svg/GarbageIcon";
import HappyFaceIcon from "../../svg/HappyFaceIcon";
import { Peoples } from "../../../fakeData";
import AddPeople from "./AddPeople";
import useStyle from "./People.style";
import PeopleCard from "./PeopleCard";

export default function People(props) {
  const [editOn, setEditOn] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [persons, setPersons] = useState(Peoples);
  const [selectedPersons, setSelectedPersons] = useState([]);
  const [editPerson, setEditPerson] = useState();

  const cs = useStyle();
  const theme = useTheme();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleCancel = () => {
    setEditOn(false);
  };

  const handleEdit = () => {
    setEditOn(true);
  };

  const handleSingleEdit = (person) => {
    setDialogOpen(true);
    setEditPerson(person);
  };

  const handleDelete = () => {
    setPersons((oldPersons) =>
      oldPersons?.filter((person) => !selectedPersons.includes(person.id))
    );
  };

  const handleSelect = (id) => {
    if (selectedPersons.includes(id)) {
      setSelectedPersons((oldValues) =>
        oldValues?.filter((value) => value !== id)
      );
    } else {
      setSelectedPersons((oldValues) => [...oldValues, id]);
    }
  };

  const handleAddPerson = (person) => {
    if (!!editPerson) {
      // first: remove the edited person from the list
      setPersons((oldPersons) =>
        oldPersons.filter((people) => people.id !== editPerson.id)
      );
    }

    setPersons((oldPersons) => [
      ...oldPersons,
      {
        ...person,
        id: oldPersons.length + 1,
      },
    ]);

    setEditPerson(null);
    setDialogOpen(false);
  };

  const handleCloseDialog = () => setDialogOpen(false);
  const handleOpenDialog = () => setDialogOpen(true);

  const actions = editOn ? (
    <>
      <Button
        variant="text"
        onClick={handleCancel}
        size="small"
        className={cs.cancelBtn}
      >
        Cancel
      </Button>
      <div className={cs.garbageWrapper} onClick={handleDelete}>
        <GarbageIcon
          color={theme.palette.common.custom.red.dark}
          width={isMobile ? 15 : 20}
          height={isMobile ? 15 : 20}
        />
      </div>
    </>
  ) : (
    <>
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classNames(cs.mainEdit, cs.actionBtn)}
        onClick={handleEdit}
      >
        Edit
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classNames(cs.mainAdd, cs.actionBtn)}
        onClick={handleOpenDialog}
      >
        Add
      </Button>
    </>
  );

  const icon = (
    <div className={cs.iconWrapper}>
      <HappyFaceIcon
        color="white"
        width={isMobile ? 15 : 24}
        height={isMobile ? 15 : 24}
      />
    </div>
  );

  return (
    <div>
      <CTA
        icon={icon}
        title={"Our important people is listed here"}
        actions={actions}
      />
      <div className={classNames(cs.cardsWrapper, "container")}>
        {persons?.map((person) => (
          <PeopleCard
            key={person.id}
            person={person}
            selected={selectedPersons.includes(person.id)}
            activateSelect={editOn}
            handleSelect={handleSelect}
            handleEdit={handleSingleEdit}
          />
        ))}
      </div>
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <Paper className={cs.dialogPaper}>
          <Grid container justify="space-between">
            <span>Add people</span>
            <CancelIcon onClick={handleCloseDialog} width={15} height={15} />
          </Grid>
          <AddPeople
            onClose={handleCloseDialog}
            onAddPerson={handleAddPerson}
            isEdited={!!editPerson}
            person={editPerson}
          />
        </Paper>
      </Dialog>
    </div>
  );
}
