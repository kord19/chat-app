"use client"
import React,{useState,useEffect} from "react";
import {app, firestore} from "@/lib/firebase";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {doc, getDoc} from "firebase/firestore";
import { useRouter } from "next/navigation";
import User from "./components/User";
import ChatRoom from "./components/ChatRoom";

export default function Home() {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const router=useRouter();
  const [selectedChatroom,setSelectedChatroom] = useState(null); 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if(user) {
        const userRef = doc(firestore, 'users', user.uid);
        const userSnap = await getDoc(userRef);
        const userData = ({id: userSnap.id, ...userSnap.data()})
        setUser(userData);
      }else {
        setUser(null);
        router.push('/login')
      }
    });
    return () => unsubscribe();
  },[auth, router]);

  

  return (
    <div className="flex h-screen">
      {/*left*/}
      <div className="flex-shrink-0 w-3/12">
        <User userData={user} setSelectedChatroom={setSelectedChatroom}/>
      </div>

      {/*right*/}
      <div className="flex-grow w-9/12">
        {
          selectedChatroom ? (<>
          <ChatRoom user={user} selectedChatroom={selectedChatroom}/>
          </>):(<>
          <div className="flex items-center justify-center h-full">
            <div className="text-2xl text-gray-400">Select a chatroom</div>
          </div>
          </>)
        }
        
      </div>
    </div>
  );
}
