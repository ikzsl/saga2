import { Provider } from "react-redux"
import { applyMiddleware, createStore } from "redux"
// import thunk from "redux-thunk"
import createSagaMiddleware from "redux-saga"
import { composeWithDevTools } from "redux-devtools-extension"
import logger from "redux-logger"

import { reducer } from "./reducers"
import { Connected } from "./components/Connected"
import { watchLoadData } from "./sagas"

const App = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
  )
  sagaMiddleware.run(watchLoadData)

  return (
    <Provider store={store}>
      <Connected />
    </Provider>
  )
}

export default App
