import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { testRedux } from "./middlewares/test";
import { thunk } from "redux-thunk";

//middlewares
const middleWares = [testRedux, thunk];
//create store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleWares))
);

export default store;
