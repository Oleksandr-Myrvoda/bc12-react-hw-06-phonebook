import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
// import { createSlice } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContactAction,
  filterContactAction,
} from "./actions";

//========== TOOLKIT createReducer builder ==================================================

const initialState = {
  contacts: JSON.parse(localStorage.getItem("contacts")) || [],
};

const contactsItemsReducer = createReducer(initialState.contacts, (builder) => {
  builder
    .addCase(addContact, (state, { payload }) => {
      const updateContacts = [...state, payload];
      localStorage.setItem("contacts", JSON.stringify(updateContacts));
      return updateContacts;
    })
    .addCase(deleteContactAction, (state, { payload }) => {
      const afterDeleteData = state.filter((contact) => contact.id !== payload);
      localStorage.setItem("contacts", JSON.stringify(afterDeleteData));
      return afterDeleteData;
    });
});

const filterContactReducer = createReducer("", (builder) => {
  builder.addCase(filterContactAction, (_, { payload }) => payload);
});

const contactsReducer = combineReducers({
  items: contactsItemsReducer,
  filter: filterContactReducer,
});
export default contactsReducer;

//========== TOOLKIT createSlice =============================================================

// const initialState = {
//   contacts: JSON.parse(localStorage.getItem("contacts")) || [],
// };

// const contactsItemsSlice = createSlice({
//   name: "items",
//   initialState,
//   reducers: {
//     addContact: (state, { payload }) => {
//       const updateContacts = [...state, payload];
//       localStorage.setItem("contacts", JSON.stringify(updateContacts));
//       return updateContacts;
//     },
//     deleteContactAction: (state, { payload }) => {
//       const afterDeleteData = state.filter((contact) => contact.id !== payload);
//       localStorage.setItem("contacts", JSON.stringify(afterDeleteData));
//       return afterDeleteData;
//     },
//   },
// });

// const filterContactSlice = createSlice({
//   name: "filter",
//   initialState: "",
//   reducers: {
//     filterContactAction: (_, { payload }) => payload,
//   },
// });

// export const { addContact, deleteContactAction } = contactsItemsSlice.actions;
// export const { filterContactAction } = filterContactSlice.actions;

// const contactsReducer = combineReducers({
//   [contactsItemsSlice.name]: contactsItemsSlice.reducer,
//   [filterContactSlice.name]: filterContactSlice.reducer,
// });
// export default contactsReducer;

// //========== TOOLKIT createReducer ========================================================

// const initialState = {
//   contacts: JSON.parse(localStorage.getItem("contacts")) || [],
// };

// const contactsItemsReducer = createReducer(initialState.contacts, {
//   [addContact]: (state, { payload }) => {
//     const updateContacts = [...state, payload];
//     localStorage.setItem("contacts", JSON.stringify(updateContacts));
//     return updateContacts;
//   },

//   [deleteContactAction]: (state, { payload }) => {
//     const afterDeleteData = state.filter((contact) => contact.id !== payload);
//     localStorage.setItem("contacts", JSON.stringify(afterDeleteData));
//     return afterDeleteData;
//   },
// });

// const filterContactReducer = createReducer("", {
//   [filterContactAction]: (_, { payload }) => payload,
// });

// const contactsReducer = combineReducers({
//   items: contactsItemsReducer,
//   filter: filterContactReducer,
// });
// export default contactsReducer;

// ========= REDUX =============================================================================

// import { combineReducers } from "redux";
// import { ADD_CONTACTS, DELETE_CONTACTS, FILTER_CONTACTS } from "./constants";
// // { type, payload } = action // reducer принимает (state, action)
// const contactsItems = (
//   state = JSON.parse(localStorage.getItem("contacts")) || [],
//   { type, payload }
// ) => {
//   switch (type) {
//     case ADD_CONTACTS:
//       const savedData = [...state, payload];
//       localStorage.setItem("contacts", JSON.stringify(savedData));
//       return savedData;
// case DELETE_CONTACTS:
//   const afterDeleteData = state.filter((contact) => contact.id !== payload);
//   localStorage.setItem("contacts", JSON.stringify(afterDeleteData));
//   return afterDeleteData;

//     default:
//       return state;
//   }
// };

// const filterContact = (state = "", { type, payload }) => {
//   switch (type) {
//     case FILTER_CONTACTS:
//       return payload;
//     default:
//       return state;
//   }
// };

// const contactsReducer = combineReducers({
//   items: contactsItems,
//   filter: filterContact,
// });

// export default contactsReducer;
