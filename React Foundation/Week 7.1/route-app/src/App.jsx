import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Shop } from "./components/Shop";
import { Home } from "./components/Home";
import { Default } from "./components/Default";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            window.location.href = "/Home";
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            window.location.href = "/Shop";
          }}
        >
          Shop
        </button>
        <button
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Default
        </button>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/" element={<Default />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
