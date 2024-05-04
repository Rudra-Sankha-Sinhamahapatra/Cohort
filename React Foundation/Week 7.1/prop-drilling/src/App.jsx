import { useContext, useState } from "react";
import { Context } from "./Context";

function App() {
  const [count, setCount] = useState(0);

  //wrap anyone that wants to use the teleported value inside a provider
  return (
    <>
      <div>
        <Context.Provider value={{count,setCount}}>
          <Count/>
        </Context.Provider>
      </div>
    </>
  );
}

function Count() {
  return (
    <>
      <div>
        <CountRenderer />
        <Buttons />
      </div>
    </>
  );
}

function CountRenderer() {
  const {count}=useContext(Context)
  return (
    <>
      <div>{count}</div>
    </>
  );
}

function Buttons() {
  const {count,setCount}=useContext(Context)
  return (
    <>
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increase Count
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrease Count
        </button>
      </div>
    </>
  );
}

export default App;
