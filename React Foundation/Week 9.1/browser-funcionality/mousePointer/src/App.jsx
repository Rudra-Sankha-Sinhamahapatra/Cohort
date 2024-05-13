import { useMousePointer} from "./hooks/useMousePointer";

function App() {
const mousePointer=useMousePointer();
  return (
    <>
   {<div>X:{mousePointer.x},Y:{mousePointer.y}</div>}
    </>
  );
}


export default App;
