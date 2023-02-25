import React from "react";

import { Header } from "./components/Header";
import { Note } from "./components/Note";

export const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Note />
      </div>
    </div>
  );
};
