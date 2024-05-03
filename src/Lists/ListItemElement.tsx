import { PlatePluginComponent } from "@udecode/plate-core";

const ListItemElement: PlatePluginComponent = ({ attributes, children }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <li {...attributes}>{children}</li>
);

export default ListItemElement;
