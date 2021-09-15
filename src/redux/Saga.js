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
//
const contactsSaga = [fork(onLoadContact)];
export default function* rootSaga() {
  yield all([...contactsSaga]);
}
