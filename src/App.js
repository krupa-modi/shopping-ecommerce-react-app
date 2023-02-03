import React from "react";
import Page from "./components/pages/Page";
import "./styles/main.scss";
import { Provider } from "react-redux";
import store from "./controller/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Page />
      </Provider>
    </>
  );
}

export default App;
