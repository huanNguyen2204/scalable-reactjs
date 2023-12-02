import { ItemInterface } from "@/models/items/Item.interface";

interface ItemsStateInterface {
  loading: boolean
  items: ItemInterface[]
}

export default ItemsStateInterface 