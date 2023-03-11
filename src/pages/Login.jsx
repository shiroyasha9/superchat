import React from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router';
import { auth } from '../firebase';

export default function Login() {
  const [signInWithGoogle, loading, error] = useSignInWithGoogle(auth);

  const [user] = useAuthState(auth);

  if (error) {
    console.error(error);
  }

  if (user) {
    return <Navigate to='/' />;
  }

  return (
    <div className='main'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1 className='title'>
            Welcome to <span className='text-lemon'>Converse</span> 👋
          </h1>
          <p className='mb-2'>Want to get started?</p>
          <button onClick={() => signInWithGoogle()} className='primary-button'>
            Sign in with
            <img src='/google.svg' alt='Google' className='google-icon' />
          </button>
        </>
      )}
    </div>
  );
}
