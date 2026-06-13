import { useState } from 'react';
import ' '
const url = import.meta.env.VITE_SERVER_URL;
const connections = {};

const peerConfigConnections={
    "iceServers":[
        {"urls": "stun:stun.l.google.com:19302"}
    ]
}

export default function VideoMeetComponenet(){
    let socketRef = useRef();
    let socketIdRef = useRef();

    let localVideoRef = useRef();
    let [videoAvailable,setVideoAvailable] = useState(true);
    let [audioAvailable,setAudioAvailable] = useState(true);
    let [video,setVideo] = useState(true);
    let [screen,setScreen] = useState();
    let [showModal,setModal] = useState();
    let [screenAvailable,setScreenAvailable] = useState();
    let [messages,setMessages] = useState([]);
    let [newMessages,setNewMessages] = useState(0);
    let [askForUsername,setAskForUsername] = useState(true);
    let [username,setUsername] = useState("");

    const VideoRef = useRef([]);
    let [videos,setVideos] = useState([]);

    // if(isChrome() === false){

    // }

    return(
        <div>
            { 
                askForUsername === true ?
                <div>

                </div>:<></>
            }
        </div>
    )
}