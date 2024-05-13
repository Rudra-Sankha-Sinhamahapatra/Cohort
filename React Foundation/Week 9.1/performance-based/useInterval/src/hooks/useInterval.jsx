import { useEffect, useState } from "react";

export function useInterval(fn,timeout){
 
    useEffect(()=>{
    const val=setInterval(()=>{
    fn()
    },timeout)
  return()=>clearInterval(val)
    },[])
   }
   