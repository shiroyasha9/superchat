import React from 'react';

export default function Form() {
  return (
    <form className='input-form'>
      <input placeholder='say something nice' className='input' />

      <button type='submit' className='submit-button'>
        Send
      </button>
    </form>
  );
}
