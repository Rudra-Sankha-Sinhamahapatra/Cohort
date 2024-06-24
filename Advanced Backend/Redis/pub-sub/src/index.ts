import { PubSubManager } from "./PubSubManager";

setInterval(()=>{
PubSubManager.getInstance().userSubscribe(Math.random().toString(),"applestock");
},5000);