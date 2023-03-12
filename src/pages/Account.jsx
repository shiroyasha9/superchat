import { collection, query, where } from 'firebase/firestore';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth, db } from '../firebase';
import { formatDateTime, getRandomEmoji } from '../utils/functions';

export default function Account() {
  const [user] = useAuthState(auth);
  const messagesRef = collection(db, 'messages');

  const q = query(messagesRef, where('uid', '==', user.uid));
  const [messages, loading] = useCollectionData(q, { idField: 'id' });

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='bg-black/30 main'>
      <h2 className='account-header'>Account Dashboard</h2>
      <div className='account-info'>
        <div>
          <img
            src={user.photoURL}
            alt={user.displayName}
            referrerPolicy='no-referrer'
          />
        </div>
        <div className='account-info-text'>
          <h3>{user.displayName}</h3>
          <p>{user.email}</p>
          <p>Number of messages sent: {messages.length}</p>
        </div>
      </div>
      <div className='account-messages'>
        <h2>Last few messages</h2>
        <div className='mt-4'>
          <ul>
            {messages &&
              messages.slice(0, 21).map(msg => (
                <li key={msg.id}>
                  <div className='emoji-text'>{getRandomEmoji()}</div>
                  <div className='message-info'>
                    <div className='flex-1 px-4 py-2 text-sm truncate'>
                      <p className='message-info-text'>{msg.text}</p>
                      <p className='text-gray-500'>
                        {formatDateTime(msg.createdAt.toDate())}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
