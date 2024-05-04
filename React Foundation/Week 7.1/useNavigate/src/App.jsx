import React, { lazy, Suspense, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
const Shop = lazy(()=>import("./components/Shop"));
const Home = lazy(()=>import("./components/Home"));
import {Default} from "./components/Default";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <BrowserRouter>
      <Appbar/>
        <Routes>
          <Route path="/Home" element={<Suspense fallback={"loading..."}><Home /></Suspense>} />
          <Route path="/Shop" element={<Suspense fallback={"loading..."}><Shop /></Suspense>} />
          <Route path="/" element={<Default />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


function Appbar(){
  const navigate=useNavigate();
  return(
    <>
    <div>
        <button
          onClick={() => {
            navigate('/Home')
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            navigate("/Shop");
          }}
        >
          Shop
        </button>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Default
        </button>
      </div>
    </>
  )
}
export default App;
