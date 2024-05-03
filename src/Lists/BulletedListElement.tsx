import { PlatePluginComponent } from "@udecode/plate-core";

const BulletedListElement: PlatePluginComponent = ({
  attributes,
  children
}) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <ul {...attributes}>{children}</ul>
);

export default BulletedListElement;
