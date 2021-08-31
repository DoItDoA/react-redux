import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/:id" component={Detail} />
    </BrowserRouter>
  );
}

export default App;
