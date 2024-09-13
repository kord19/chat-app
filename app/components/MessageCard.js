"use client";
import React from 'react';
import moment from 'moment';

function MessageCard({ message, me, other }) {
  const isMessageFromMe = message.sender === me.id;

  const formatTimeAgo = (timestamp) => {
    const date = timestamp?.toDate();
    if (!date) return '';
    const momentDate = moment(date);
    return momentDate.fromNow();
  };

  return (
    <div key={message.id} className={`flex mb-4 ${isMessageFromMe ? 'justify-end' : 'justify-start'}`}>
      {/* Avatar on the left or right based on the sender */}
      <div className={`w-10 h-10 ${isMessageFromMe ? 'ml-2 mr-2' : 'mr-2'}`}>
        {isMessageFromMe && me.avatarUrl && (
          <img
            className='w-full h-full object-cover rounded-full'
            src={me.avatarUrl}
            alt='Avatar'
          />
        )}
        {!isMessageFromMe && other.avatarUrl && (
          <img
            className='w-full h-full object-cover rounded-full'
            src={other.avatarUrl}
            alt='Avatar'
          />
        )}
      </div>

      {/* Message bubble on the right or left based on the sender */}
      <div className={`text-white p-2 rounded-md ${isMessageFromMe ? 'bg-blue-500 self-end' : 'bg-[#19D39E] self-start'}`}>
        {message.image && (
          <img src={message.image} className='max-h-60 w-60 mb-4' alt='Message Attachment' />
        )}
        <p>{message.content || 'No content'}</p>
        <div className='text-xs text-gray-200'>{formatTimeAgo(message.time)}</div>
      </div>
    </div>
  );
}

export default MessageCard;
