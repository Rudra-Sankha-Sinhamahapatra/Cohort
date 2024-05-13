import { useEffect, useState } from "react";

export function useMousePointer(){
  const [position,setPosition]=useState({x:0,y:0});

  const handleMouseMove=(e)=>{
    setPosition({x:e.clientX,y:e.clientY});
  };

  useEffect(()=>{
   window.addEventListener('mousemove',handleMouseMove);
   return()=>{
    window.removeEventListener('mousemove',handleMouseMove);
   }
  },[])
   return position;
   }
   