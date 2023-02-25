import React from "react";

import { Header } from "./components/Header";
import { Note } from "./components/Note";

export const App = () => {
  return (
    <div>
      <Header />

      <Note />
      <div className="copyright">
        <p>Copyright @ 2022</p>
      </div>
    </div>
  );
};
