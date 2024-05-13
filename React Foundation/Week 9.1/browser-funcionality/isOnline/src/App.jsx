import { useEffect, useState } from "react";
import { useIsOnline } from "./hooks/useIsOnline";

function App() {
const isOnline=useIsOnline();
  return (
    <>
   {isOnline?<div>You are online</div>:<div>You are offline,check your network</div>}
    </>
  );
}


export default App;
