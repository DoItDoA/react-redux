import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    {/* store.js에 있는 것과 react(App)를 연결시켜준다 */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
