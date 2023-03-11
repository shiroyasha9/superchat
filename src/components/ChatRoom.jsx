import React from 'react';
import ChatMessage from './ChatMessage';

export default function ChatRoom() {
  return (
    <div className='chat-room'>
      <ChatMessage
        text={
          'Hi  dsfjasdfkljsdajfkjakldsjfkjadklsfjlkajsdklfjlkadsjlkfjalksjdlfkjalksdjflkjlkdfdafslksdjfjdasjfjasdkjfkjsdkfkjdksjfkjdkasjfkjadksjfkjasdkjfkjaskdjfkjdsafjlsd;jfkjsd;akfjkjasdkfjkjsdkfjsjdafkadsj'
        }
        uid={'8A0gaQKLUMPPG6kHsPPA2tcuM6G2'}
        photoURL={
          'https://lh3.googleusercontent.com/a/AGNmyxaF3eWvgrvE2cYSIoAKoBSuKDawdXk7iBdKjSNJ=s96-c'
        }
      />
      <ChatMessage
        text={'Meow'}
        uid={'8A0gaQKLUMPPdG6kHsPPA2tcuM6G2'}
        photoURL={
          'https://lh3.googleusercontent.com/a/AGNmyxaF3eWvgrvE2cYSIoAKoBSuKDawdXk7iBdKjSNJ=s96-c'
        }
      />
    </div>
  );
}
