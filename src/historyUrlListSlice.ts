import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UrlListItemType } from "./components/UrlListItem";

export interface ListState {
  list: UrlListItemType[] | [];
}

const initialState: ListState = {
  list: [],
};

export const historyUrlSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addLink: (state, { payload }: PayloadAction<UrlListItemType>) => {
      const isAlreadyExist = !!state.list.find((i) => i.id === payload.id);
      if (isAlreadyExist) {
        return;
      }
      state.list = [...state.list, payload];
    },
  },
});

export const { addLink } = historyUrlSlice.actions;

export default historyUrlSlice.reducer;
