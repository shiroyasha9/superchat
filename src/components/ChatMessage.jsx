import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

export default function ChatMessage({ text, uid, photoURL }) {
  const [user] = useAuthState(auth);

  return (
    <div className={`message ${uid === user.uid ? 'sent' : 'received'}`}>
      <img
        alt='profile pic'
        className='profile-pic'
        src={
          photoURL ||
          'https://i.pinimg.com/236x/4c/21/d0/4c21d08d5cc583a01d59c33f0ddf2436.jpg'
        }
      />
      <p className='message-text'>{text}</p>
    </div>
  );
}
