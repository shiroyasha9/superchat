import React, { useState } from 'react';

export default function Form() {
  const [message, setMessage] = useState('');

  const sendMessageHandler = async e => {
    e.preventDefault();
    console.log(message);
  };

  return (
    <form className='input-form' onSubmit={sendMessageHandler}>
      <input
        autoFocus
        placeholder='say something nice'
        className='input'
        value={message}
        onChange={e => setMessage(e.target.value)}
      />

      <button
        type='submit'
        className='submit-button'
        disabled={message.length === 0}
      >
        Send
      </button>
    </form>
  );
}
