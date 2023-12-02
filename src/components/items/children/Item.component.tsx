import React from "react";
import { ItemInterface } from "@/models/items/Item.interface";

type Props = {
  testid: string;
  model: ItemInterface;
  onItemSelected: (item: ItemInterface) => void;
};

export const ItemComponent: React.FC<Props> = (props) => {
  const { model } = props;
  const testid = props.testid || "not-set";

  const cssClass = (): string => {
    let css = "item";
    if (props.model?.selected) {
      css += " selected";
    }
    return css.trim();
  };

  const handleItemClick = (item: ItemInterface) => {
    props.onItemSelected(item);
  };

  return (
    <>
      <li
        data-testid={testid}
        className={cssClass()}
        onClick={() => handleItemClick(model)}
      >
        <div className="selected-indicator">*</div>
        <div className="name">{model.name}</div>
      </li>
    </>
  );
};