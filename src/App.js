import React from 'react';
import './App.css';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import ChatRoom from './components/ChatRoom/ChatRoom';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';

// Initializing Firebase
firebase.initializeApp({
  // Enter your firebase data here
});

const auth = firebase.auth();
const firestore = firebase.firestore();

// App Component Begins Here
function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut auth={auth} />
      </header>

      <section>
        {user ? (
          <ChatRoom firebase={firebase} auth={auth} firestore={firestore} />
        ) : (
          <SignIn firebase={firebase} auth={auth} />
        )}
      </section>
    </div>
  );
}

export default App;
