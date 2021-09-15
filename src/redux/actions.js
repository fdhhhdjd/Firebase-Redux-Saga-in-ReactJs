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
export const deleteContactsStart = () => ({
  type: types.DELETE_CONTACTS_START,
});
export const deleteContactsSuccess = (id) => ({
  type: types.DELETE_CONTACTS_SUCCESS,
  payload: id,
});
export const deleteContactsFail = (error) => ({
  type: types.DELETE_CONTACTS_FAIL,
  payload: error,
});
