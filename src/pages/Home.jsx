import React, { useRef } from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import ChatRoom from '../components/ChatRoom';
import Form from '../components/Form';
import { auth } from '../firebase';

export default function Home() {
  const [signOut] = useSignOut(auth);
  const [user] = useAuthState(auth);
  const spanRef = useRef();
  const navigate = useNavigate();

  function scrollToBottomHandler() {
    spanRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  function navigateToAccountHandler() {
    navigate('/account');
  }

  return (
    <div className='main'>
      <div className='header'>
        <p className='text-xl font-semibold'>
          Be polite,{' '}
          <span className='text-lemon font-semibold'>{user.displayName}!</span>
          🥰
        </p>
        <div className='flex gap-x-3'>
          <button
            onClick={navigateToAccountHandler}
            className='secondary-button'
          >
            Account
          </button>
          <button onClick={() => signOut()} className='primary-button'>
            Sign out
          </button>
        </div>
      </div>
      <ChatRoom spanRef={spanRef} />
      <Form scrollToBottomHandler={scrollToBottomHandler} />
    </div>
  );
}
