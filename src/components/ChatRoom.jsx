import { collection, limit, orderBy, query } from 'firebase/firestore';
import React from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import ChatMessage from './ChatMessage';

export default function ChatRoom({ spanRef }) {
  const messagesRef = collection(db, 'messages');
  const q = query(messagesRef, orderBy('createdAt', 'desc'), limit(25));
  const [messages, loading] = useCollectionData(q, { idField: 'id' });

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='chat-room'>
      {messages &&
        messages
          .reverse()
          .map(msg => (
            <ChatMessage
              key={msg.id}
              text={msg.text}
              uid={msg.uid}
              photoURL={msg.photoURL}
            />
          ))}
      <span ref={spanRef}></span>
    </div>
  );
}
