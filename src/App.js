import React from "react";
import { Form } from "./components/Form";

import { Header } from "./components/Header";
import { Note } from "./components/Note";

export const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Form />
        <Note />
      </div>
    </div>
  );
};
