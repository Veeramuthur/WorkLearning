import { useState } from 'react';

interface Message {
  text: string;
  user: string;
}

function CT_ChatApplication() {
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Hello!', user: 'Alice' },
    { text: 'Hi, how are you?', user: 'Bob' },
  ]);
  const [newMessage, setNewMessage] = useState<string>('');
  const [username, setUsername] = useState<string>('User');

  // Function to add a new message
  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, user: username }]);
      setNewMessage('');
    }
  };

  return (
    <div style={{ width: '300px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Chat Application</h2>
      <div
        style={{
          border: '1px solid #ccc',
          height: '300px',
          overflowY: 'scroll',
          padding: '10px',
          marginBottom: '10px',
        }}
      >
        {messages.map((message, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <strong>{message.user}:</strong> {message.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        style={{ marginBottom: '10px', width: '100%' }}
      />
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message..."
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default CT_ChatApplication;
