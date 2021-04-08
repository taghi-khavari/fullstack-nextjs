import { Card, Dialog, Grid, useTheme } from "@material-ui/core";
import { useState } from "react";
import { IPerson } from "../../../../types/model";
import AvatarIcon from "../../../svg/AvatarIcon";
import CheckedIcon from "../../../svg/CheckedIcon";
import PenIcon from "../../../svg/PenIcon";
import useStyle from "../People.style";
import ViewProfile from "../ViewProfile";

interface IProps {
  person: IPerson;
  selected: boolean;
  activateSelect: boolean;
  handleSelect: (id: string) => void;
  handleEdit: (person: IPerson) => void;
}

export default function PeopleCard({
  person,
  selected,
  activateSelect,
  handleSelect,
  handleEdit,
}: IProps) {
  const [openView, setOpenView] = useState(false);
  const { img, name, title, id } = person;
  const cs = useStyle({ selected, activateSelect, img });
  const theme = useTheme();

  const handleSingleSelect = (id) => (e) => {
    e.stopPropagation();
    handleSelect(id);
  };

  const onEdit = (e) => {
    e.stopPropagation();
    handleEdit(person);
  };

  const handleShowProfile = () => setOpenView(true);
  const handleCloseProfile = (e) => {
    e.stopPropagation();
    setOpenView(false);
  };

  return (
    <>
      <Card className={cs.cardRoot} elevation={5} onClick={handleShowProfile}>
        <div className={cs.editBtn} onClick={onEdit}>
          <PenIcon
            color={theme.palette.custom.blue.dark}
            width={10}
            height={10}
          />
        </div>
        <div className={cs.selectBtn} onClick={handleSingleSelect(id)}>
          {selected && (
            <CheckedIcon
              color={theme.palette.common.white}
              width={10}
              height={10}
            />
          )}
        </div>
        <Grid>
          <div className={cs.cardAvatarWrapper}>
            <AvatarIcon
              src={img}
              height="100%"
              width="100%"
              color={theme.palette.custom.blue.dark}
            />
          </div>
          <div className={cs.description}>
            {name && <div className={cs.name}>{name}</div>}
            {title && <div className={cs.title}>{title}</div>}
          </div>
        </Grid>
      </Card>
      <Dialog open={openView} onClose={handleCloseProfile}>
        <ViewProfile person={person} handleClose={handleCloseProfile} />
      </Dialog>
    </>
  );
}
