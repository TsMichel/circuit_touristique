import React from "react";

export default function MessageThread({ messages }) {
  return (
    <div className="p-4 bg-gray-100 rounded">
      <h3 className="text-lg font-bold mb-2">Messages</h3>
      {messages.map((msg, index) => (
        <div key={index} className="mb-2">
          <p><strong>{msg.sender}:</strong> {msg.content}</p>
        </div>
      ))}
    </div>
  );
}