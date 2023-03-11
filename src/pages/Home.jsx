import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import ChatRoom from '../components/ChatRoom';
import { auth } from '../firebase';

export default function Home() {
  const [signOut] = useSignOut(auth);
  const [user] = useAuthState(auth);
  return (
    <div className='main'>
      <div className='header'>
        <p className='text-xl font-semibold'>
          Remember to be polite,{' '}
          <span className='text-lemon font-bold'>{user.displayName}!</span> 🥰
        </p>
        <button onClick={() => signOut()} className='primary-button'>
          Sign out
        </button>
      </div>
      <ChatRoom />
    </div>
  );
}
