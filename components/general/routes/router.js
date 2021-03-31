import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import router from "next/router";
import routes from ".";
import useStyle from "./router.style";

export default function MainMenu(props) {
  const cs = useStyle(props);

  return (
    <List className={cs.listRoot}>
      {routes.map(({ id, route, text }) => (
        <ListItem
          button
          key={id}
          onClick={() => router.push(route)}
          className={cs.menuItem}
        >
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );
}
