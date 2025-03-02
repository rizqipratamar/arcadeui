import React from 'react';
import { ChatBubble, Card } from '../components';

const ChatBubblePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pixel-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-pixel text-pixel-black">Chat Bubble</h1>
          <p className="font-retro text-pixel-gray">
            Pixel-styled chat bubble component for displaying messages in a chat interface.
          </p>
        </div>

        {/* Preview */}
        <Card className="mb-8">
          <div className="flex flex-col gap-4 items-center justify-center p-8 bg-[url('/grid.png')] bg-center border-b border-pixel-darkGray">
            <ChatBubble
              message="Hello! This is a received message."
              timestamp="10:30 AM"
            />
            <ChatBubble
              message="Hi there! This is a sent message."
              isSent
              timestamp="10:31 AM"
            />
          </div>
          <div className="p-4 bg-pixel-black/5">
            <pre className="font-retro text-sm overflow-x-auto p-4">
              <code className="text-pixel-black">{`<ChatBubble
  message="Hello! This is a received message."
  timestamp="10:30 AM"
/>

<ChatBubble
  message="Hi there! This is a sent message."
  isSent
  timestamp="10:31 AM"
/>`}</code>
            </pre>
          </div>
        </Card>

        {/* Message Types */}
        <section className="space-y-4">
          <h2 className="text-2xl font-pixel text-pixel-black">Message Types</h2>
          <Card>
            <div className="space-y-6 p-6">
              <div className="space-y-4">
                <ChatBubble message="A received message without timestamp" />
                <ChatBubble
                  message="A sent message without timestamp"
                  isSent
                />
              </div>
              <pre className="font-retro text-sm bg-pixel-black/5 p-4 rounded">
                <code>{`<ChatBubble message="A received message without timestamp" />

<ChatBubble
  message="A sent message without timestamp"
  isSent
/>`}</code>
              </pre>
            </div>
          </Card>
        </section>

        {/* With Timestamp */}
        <section className="space-y-4">
          <h2 className="text-2xl font-pixel text-pixel-black">With Timestamp</h2>
          <Card>
            <div className="space-y-6 p-6">
              <div className="space-y-4">
                <ChatBubble
                  message="Message with timestamp"
                  timestamp="11:45 AM"
                />
              </div>
              <pre className="font-retro text-sm bg-pixel-black/5 p-4 rounded">
                <code>{`<ChatBubble
  message="Message with timestamp"
  timestamp="11:45 AM"
/>`}</code>
              </pre>
            </div>
          </Card>
        </section>

        {/* API Reference */}
        <section className="space-y-4">
          <h2 className="text-2xl font-pixel text-pixel-black">API Reference</h2>
          <Card>
            <div className="p-6">
              <table className="w-full font-retro text-sm">
                <thead>
                  <tr className="border-b-2 border-pixel-darkGray">
                    <th className="text-left py-2">Prop</th>
                    <th className="text-left py-2">Type</th>
                    <th className="text-left py-2">Default</th>
                    <th className="text-left py-2">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-pixel-darkGray/20">
                  <tr>
                    <td className="py-3 text-pixel-blue">message</td>
                    <td>string</td>
                    <td>-</td>
                    <td>The message content to display</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">isSent</td>
                    <td>boolean</td>
                    <td>false</td>
                    <td>Whether the message was sent by the current user</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">timestamp</td>
                    <td>string</td>
                    <td>undefined</td>
                    <td>Optional timestamp to display</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">className</td>
                    <td>string</td>
                    <td>''</td>
                    <td>Additional CSS classes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default ChatBubblePage;