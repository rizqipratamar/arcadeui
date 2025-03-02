import React from 'react';

export interface ChatBubbleProps {
  /** The message content to display */
  message: string;
  /** Whether the message was sent by the current user */
  isSent?: boolean;
  /** Optional timestamp to display */
  timestamp?: string;
  /** Additional CSS classes */
  className?: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  message,
  isSent = false,
  timestamp,
  className,
}) => {
  return (
    <div
      className={`flex ${isSent ? 'justify-end' : 'justify-start'} ${className || ''}`}
    >
      <div
        className={`max-w-[70%] p-3 rounded-lg font-retro text-sm relative border-2 border-pixel-darkGray after:content-[""] after:absolute after:border-8 after:border-transparent ${isSent ? 'bg-pixel-blue text-white ml-4 after:-right-4 after:border-l-pixel-blue after:border-l-[16px]' : 'bg-pixel-white text-pixel-black mr-4 after:-left-4 after:border-r-pixel-white after:border-r-[16px]'}`}
      >
        <p className="break-words">{message}</p>
        {timestamp && (
          <span
            className={`text-xs mt-1 block ${isSent ? 'text-blue-100' : 'text-pixel-gray'}`}
          >
            {timestamp}
          </span>
        )}
      </div>
    </div>
  );
};

export default ChatBubble;