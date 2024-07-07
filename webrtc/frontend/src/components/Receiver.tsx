import { useEffect, useRef } from "react"

export default function Receiver(){
const videoRef=useRef<HTMLVideoElement>(null);

useEffect(()=>{
const socket=new WebSocket('ws://localhost:8080');
socket.onopen=()=>{
    socket.send(JSON.stringify({type:'receiver'}));
}

socket.onmessage=async (event)=>{
    const message=JSON.parse(event.data);
    let pc:RTCPeerConnection|null=null;
    if(message.type==='createOffer'){
         pc=new RTCPeerConnection();
        await pc.setRemoteDescription(message.sdp);
        pc.onicecandidate=(event)=>{
            console.log(event);
            if(event.candidate){
                socket?.send(JSON.stringify({type:'iceCandidate',candidate:event.candidate}));
            }
        }

        //receive a track
        pc.ontrack=(event)=>{
        console.log(event.track);
        if(videoRef.current){
            videoRef.current.srcObject=new MediaStream([event.track]);
            videoRef.current.play();
            console.log("Playing video on receiver");
        }
        
        // const video=document.createElement('video');
        // document.body.appendChild(video);
        // video.srcObject=new MediaStream([event.track]);
        // video.play();
        }

        const answer=await pc.createAnswer(); //sdp
        await pc.setLocalDescription(answer);
        socket.send(JSON.stringify({type:'createAnswer',sdp:pc.localDescription}));
        console.log("Answer sent to the sender:",pc.localDescription);
    }
    else if(message.type==='iceCandidate'){
        if(pc!==null){
            //@ts-ignore
        pc.addIceCandidate(message.candidate);
        }
    }
}
},[])

    return(
        <>
        <div className="maindiv">
           Receiver
          <video className="mainvid"  ref={videoRef} autoPlay/>
        </div>
        </>
    )
}