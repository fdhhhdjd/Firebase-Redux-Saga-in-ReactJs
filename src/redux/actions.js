import * as types from "./actionTypes";
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
