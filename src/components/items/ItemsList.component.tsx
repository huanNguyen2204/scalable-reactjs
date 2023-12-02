/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { ItemInterface } from "@/models/items/Item.interface";
import { ItemComponent } from "./children/Item.component";

type Props = {
  items: ItemInterface[];
  onItemSelected: (item: ItemInterface) => void;
};

const ItemsListComponent: React.FC<Props> = (props) => {
  const handleItemClick = (item: ItemInterface) => {
    props.onItemSelected(item);
  };

  return (
    <div>
      <h3>Items: </h3>
      <ul>
        {props.items.map((item, index) => (
          <ItemComponent testid={`item-${ item.id }`} key={index} model={item} onItemSelected={() => handleItemClick(item)}></ItemComponent>
        ))}
      </ul>
    </div>
  );
};

export default ItemsListComponent;
