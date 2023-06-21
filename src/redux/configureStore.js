import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducers";
// Add a 3rd party library for make state immutable
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initalState) {
  // Add support for Redux Dev Tools
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // First comes the rootReducer,
  // Then, the initalState of my app,
  // Then, apply the immutable state to applyMiddleware, since it's a middleware
  return createStore(
    rootReducer,
    initalState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
  );
}
