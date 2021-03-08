import {
    combineReducers,
    createStore,
    applyMiddleware,
    compose,
  } from "redux";
  import ReduxThunk from "redux-thunk";
  import { userReducer } from "../pages/User/userReducer";
  import { appReducer } from "./appReducer";

  const reducers = combineReducers({
    user: userReducer,
    app: appReducer,
  });
  
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  export const store = createStore(
    reducers,
    composeEnhancer(applyMiddleware(ReduxThunk))
  );