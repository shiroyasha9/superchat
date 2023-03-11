import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import ChatRoom from '../components/ChatRoom';
import Form from '../components/Form';
import { auth } from '../firebase';

export default function Home() {
  const [signOut] = useSignOut(auth);
  const [user] = useAuthState(auth);
  return (
    <div className='main'>
      <div className='header'>
        <p className='text-xl font-semibold'>
          Be polite,{' '}
          <span className='text-lemon font-bold'>{user.displayName}!</span> 🥰
        </p>
        <button onClick={() => signOut()} className='primary-button'>
          Sign out
        </button>
      </div>
      <ChatRoom />
      <Form />
    </div>
  );
}
