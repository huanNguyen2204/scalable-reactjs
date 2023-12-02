/* eslint-disable @typescript-eslint/no-explicit-any */
import "./App.scss";
import { ItemInterface } from "./models/items/Item.interface";
import ItemsListComponent from "./components/items/ItemsList.component";
import { useState } from "react";

function App() {
  const [items, setItems] = useState<ItemInterface[]>([
    {
      id: 1,
      name: "Item 1",
      selected: false
    },
    {
      id: 2,
      name: "Item 2",
      selected: false
    },
    {
      id: 3,
      name: "Item 3",
      selected: false
    },
  ])

  const onItemSelected = (item: ItemInterface) => {
    const updateItems = [...items]
    const found = updateItems.find(o => o.id === item.id) as ItemInterface;
    found.selected = !item.selected;
    setItems(updateItems);
    console.log("App.tsx: onItemSelected ", found.id, found.selected, updateItems)
  }

  return (
    <div className="App">
      <ItemsListComponent 
        items={items}
        onItemSelected={onItemSelected}
      />
    </div>
  )
}

export default App;