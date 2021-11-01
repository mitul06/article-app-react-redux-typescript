import { applyMiddleware, createStore, Store, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

const store: Store<ArticleState, ArticleAction> & {
  dispatch: DispatchType;
} = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);


export default store;