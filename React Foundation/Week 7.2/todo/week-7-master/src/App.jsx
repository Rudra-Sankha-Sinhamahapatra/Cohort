import React, { useState } from "react";
import { RecoilRoot } from "recoil";
import Todo from "./Todo";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Todo />
      </RecoilRoot>
    </div>
  );
}

export default App;
