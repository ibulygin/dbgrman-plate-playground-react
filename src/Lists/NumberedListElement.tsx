import { PlatePluginComponent } from "@udecode/plate-core";

const NumberedListElement: PlatePluginComponent = ({
  attributes,
  children
}) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <ol {...attributes}>{children}</ol>
);

export default NumberedListElement;
