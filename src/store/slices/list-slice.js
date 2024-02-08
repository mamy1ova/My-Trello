import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: [],
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addList: (state, { payload }) => {
      state.lists.push(payload);
    },
    addCard: (state, { payload }) => {
      const parentList = state.lists.find(
        (item) => item.id === payload.parentId
      );

      if (parentList) {
        if (parentList.children) {
          parentList.children.push(payload);
        } else {
          parentList.children = [payload];
        }
      }
    },
    deleteChildList: (state, { payload }) => {
      const { id, parentId } = payload;
      const parentList = state.lists.find((item) => item.id === parentId);

      if (parentList) {
        parentList.children = parentList.children.filter(
          (item) => item.id !== id
        );
      }
    },
    deletelist: (state, { payload }) => {
      const { id } = payload;
      state.lists = state.lists.filter((list) => list.id !== id);
    },
    editList: (state, { payload }) => {
      const { id } = payload;
      state.lists = state.lists.map((list) =>
        list.id === id ? { ...list, title: payload.title } : list
      );
    },
    editChildList: (state, { payload }) => {
      const { id, title } = payload;

      state.lists.forEach((parentList) => {
        parentList.children?.forEach((child) => {
          if (child.id === id) {
            child.title = title;
          }
        });
      });
    },
    updateOrder: (state, { payload }) => {
      state.lists = payload;
    },
  },
});

export const {
  addList,
  addCard,
  deleteChildList,
  deletelist,
  editList,
  editChildList,
  updateOrder,
} = listSlice.actions;
export const list = (state) => state.list.lists;
