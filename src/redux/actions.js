import * as types from "./actionTypes";
//! Get from Firebase
export const getContactsStart = () => ({
  type: types.GET_CONTACTS_START,
});
export const getContactsSuccess = (contacts) => ({
  type: types.GET_CONTACTS_SUCCESS,
  payload: contacts,
});
export const getContactsFail = (error) => ({
  type: types.GET_CONTACTS_FAIL,
  payload: error,
});
//! Delete From Firebase
export const deleteContactsStart = (id) => ({
  type: types.DELETE_CONTACTS_START,
  payload: id,
});
export const deleteContactsSuccess = () => ({
  type: types.DELETE_CONTACTS_SUCCESS,
});
export const deleteContactsFail = (error) => ({
  type: types.DELETE_CONTACTS_FAIL,
  payload: error,
});
//! Add From Firebase
export const AddContactsStart = (contact) => ({
  type: types.ADD_CONTACTS_STARTS,
  payload: contact,
});
export const AddContactsSuccess = () => ({
  type: types.ADD_CONTACTS_SUCCESS,
});
export const AddContactsFail = (error) => ({
  type: types.ADD_CONTACTS_FAIL,
  payload: error,
});
//! Edit From Firebase
export const EditContactsStart = (edit) => ({
  type: types.EDIT_CONTACTS_STARTS,
  payload: edit,
});
export const EditContactsSuccess = () => ({
  type: types.EDIT_CONTACTS_SUCCESS,
});
export const EditContactsFail = (error) => ({
  type: types.EDIT_CONTACTS_FAIL,
  payload: error,
});
