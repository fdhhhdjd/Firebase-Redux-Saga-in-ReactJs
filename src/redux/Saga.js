import {
  call,
  put,
  takeEvery,
  takeLatest,
  fork,
  all,
} from "redux-saga/effects";
import * as types from "./actionTypes";
import firebaseDb from "../firebase";
import {
  getContactsStart,
  getContactsSuccess,
  getContactsFail,
  deleteContactsSuccess,
  AddContactsSuccess,
  EditContactsSuccess,
  EditContactsFail,
} from "./actions";
function* onLoadContactAsync() {
  try {
    const contacts = yield new Promise((resolve) =>
      firebaseDb.child("contacts").on("value", resolve)
    );
    if (contacts.val() !== null) {
      yield put(getContactsSuccess(contacts.val()));
    } else {
      yield put(getContactsSuccess({}));
    }
  } catch (error) {
    yield put(getContactsFail());
  }
}
export function* onLoadContact() {
  yield takeLatest(types.GET_CONTACTS_START, onLoadContactAsync);
}
//!Delete Firebase
function* OnDeleteContactAsync({ payload: id }) {
  try {
    yield firebaseDb.child(`contacts/${id}`).remove();
    yield put(deleteContactsSuccess());
  } catch (error) {
    yield put(getContactsFail());
  }
}
export function* onDeleteContact() {
  yield takeLatest(types.DELETE_CONTACTS_START, OnDeleteContactAsync);
}
//!Add firebase
function* onAddContactAsync({ payload: contacts }) {
  try {
    yield firebaseDb.child("contacts").push(contacts);
    yield put(AddContactsSuccess());
  } catch (error) {
    yield put(getContactsFail());
  }
}
export function* onAddContact() {
  yield takeLatest(types.ADD_CONTACTS_STARTS, onAddContactAsync);
}
//!Edit firebase
function* onEditContactAsync({ payload: { id, initialState: edit } }) {
  try {
    yield firebaseDb.child(`contacts/${id}`).set(edit);
    yield put(EditContactsSuccess());
  } catch (error) {
    yield put(EditContactsFail());
  }
}
export function* onEditContact() {
  yield takeLatest(types.EDIT_CONTACTS_STARTS, onEditContactAsync);
}
// !run saga
const contactsSaga = [
  fork(onLoadContact),
  fork(onDeleteContact),
  fork(onAddContact),
  fork(onEditContact),
];
export default function* rootSaga() {
  yield all([...contactsSaga]);
}
