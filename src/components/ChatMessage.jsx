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
          photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'
        }
      />
      <p className='message-text'>{text}</p>
    </div>
  );
}
