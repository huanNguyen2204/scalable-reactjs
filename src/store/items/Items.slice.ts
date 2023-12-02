/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import ItemsStateInterface from "./models/ItemState.interface";
import { ItemInterface } from "@/models/items/Item.interface";

const initialItemsState: ItemsStateInterface = {
  loading: false,
  items: []
}

export const itemsStoreSlice = createSlice({
  name: "itemsStoreSlice",
  initialState: initialItemsState,
  reducers: {
    setLoading: (state: any, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },

    setItems: (state: any, action: PayloadAction<ItemInterface[]>) => {
      state.items = action.payload || []
      state.loading = false
    },

    setItemSelected: (state: any, action: PayloadAction<ItemInterface>) => {
      const item = action.payload
      const found = state.item.find((o: any) => o.id === item.id) as ItemInterface
      found.selected = !found.selected
    }
  }
})