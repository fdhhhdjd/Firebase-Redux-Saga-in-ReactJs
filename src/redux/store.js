import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootSaga from "./Saga";
import rootReducer from "./root-reducer";
import createSagaMiddleware from "@redux-saga/core";
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}
// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(...middleware))
// );
const store = createStore(rootReducer, applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga); //!saga
export default store;
