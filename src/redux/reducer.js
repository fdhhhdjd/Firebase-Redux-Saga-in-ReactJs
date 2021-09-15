import * as types from "./actionTypes";
const initialState = {
  contacts: [],
  error: null,
  loading: false,
};
const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CONTACTS_START:
      return {
        ...state,
        loading: true,
      };
    case types.GET_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: action.payload,
        loading: false,
      };
    case types.GET_CONTACTS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
export default contactsReducer;
