import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import ChatRoom from '../components/ChatRoom';
import { auth } from '../firebase';

export default function Home() {
  const [signOut] = useSignOut(auth);
  const [user] = useAuthState(auth);
  return (
    <div className='main'>
      <h1>Hello, {user.displayName}</h1>
      <button onClick={() => signOut()} className='primary-button'>
        Sign out
      </button>
      <ChatRoom />
    </div>
  );
}
