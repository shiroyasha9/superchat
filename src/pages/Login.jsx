import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

export default function Login() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <div className='main'>
      <h1 className='title'>
        Welcome to <span className='text-lemon'>Converse</span> 👋
      </h1>
      <p className='mb-2'>Want to get started?</p>
      <button onClick={() => signInWithGoogle()} className='primary-button'>
        Sign in with Google
      </button>
    </div>
  );
}
