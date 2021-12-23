import { ADD_CONTACTS, DELETE_CONTACTS, FILTER_CONTACTS } from "./constants";
// import { v4 as uuidv4 } from "uuid";
import { createAction, nanoid } from "@reduxjs/toolkit";

//========== TOOLKIT ========

const addContact = createAction(ADD_CONTACTS, (contact) => ({
  payload: {
    ...contact,
    id: nanoid(),
  },
}));
const deleteContactAction = createAction(DELETE_CONTACTS);
const filterContactAction = createAction(FILTER_CONTACTS);

export { addContact, deleteContactAction, filterContactAction };

// ========= REDUX ==========

// const addContact = ({ name, number }) => ({
//   type: ADD_CONTACTS,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });

// const deleteContactAction = (id) => ({
//   type: DELETE_CONTACTS,
//   payload: id,
// });

// const filterContactAction = (value) => ({
//   type: FILTER_CONTACTS,
//   payload: value,
// });

// export { addContact, deleteContactAction, filterContactAction };
