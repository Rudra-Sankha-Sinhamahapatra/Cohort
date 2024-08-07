import { useEffect, useRef, useState } from "react"


export default function Sender(){

    const [socket,setSocket]=useState<WebSocket|null>(null);
    const videoRef=useRef<HTMLVideoElement>(null);
    useEffect(()=>{
        const socket=new WebSocket('ws://localhost:8080');
        socket.onopen=()=>{
            socket.send(JSON.stringify({type:'sender'}));
        }
        
        setSocket(socket);
    },[])

   async function startSendingVideo(){
    console.log("inside startSendingVideo function");
    if(!socket) return;
        //create an offer
        const pc=new RTCPeerConnection();
        pc.onnegotiationneeded=async()=>{
            console.log("onnegotiation Needed");
            const offer=await pc.createOffer(); //sdp
            await pc.setLocalDescription(offer);
            socket?.send(JSON.stringify({type:'createOffer',sdp:pc.localDescription}));
      }
       
      //video/audio
        pc.onicecandidate=(event)=>{
            console.log(event);
            if(event.candidate){
                socket?.send(JSON.stringify({type:'iceCandidate',candidate:event.candidate}));
            }
        }

        
         socket.onmessage=(event)=>{
        const data=JSON.parse(event.data);
        if(data.type==='createAnswer'){
            pc.setRemoteDescription(data.sdp);
        } else if(data.type==='iceCandidate'){
           pc.addIceCandidate(data.candidate);
        }
         }

         const screen=await navigator.mediaDevices.getDisplayMedia({video:true,audio:true});
         //send a track
         const stream=await navigator.mediaDevices.getUserMedia({video:true,audio:false});
         pc.addTrack(stream.getVideoTracks()[0]);
         if(videoRef.current){
            videoRef.current.srcObject=screen;
            videoRef.current.play();
            console.log("Video Playing on sender")
        }
    }

    return(
        <>
        <div>
            Sender
            <button onClick={startSendingVideo}>Send video</button>
            <video ref={videoRef} autoPlay/>
        </div>
        </>
    )
}