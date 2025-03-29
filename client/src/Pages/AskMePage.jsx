import React, { useState, useEffect } from "react";
import StarryBackground from "../Features/StarryBackground";
import { MdSend } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "YOUR_API_KEY" }); // Initialize once

function AskMePage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]); // Stores user & AI messages
  const [loading, setLoading] = useState(false); // AI processing state

  // Function to send a message and get AI response
  const handleSend = async () => {
    if (!message.trim()) return;

    // Add user message
    const newMessages = [...messages, { sender: "user", text: message }];
    setMessages(newMessages);
    setMessage("");
    setLoading(true);

    try {
      // AI response
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: [{ role: "user", parts: [{ text: message }] }],
      });

      const aiReply = response?.text || "Sorry, I couldn't understand that. 🤖";

      // Add AI response to messages
      setMessages([...newMessages, { sender: "ai", text: aiReply }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages([...newMessages, { sender: "ai", text: "Error getting response." }]);
    }

    setLoading(false);
  };

  return (
    <div className="relative bg-[#121212] text-[#D4D4D4] font-mono min-h-screen flex flex-col items-center justify-center p-5">
      <StarryBackground />
      <Link to="/">
        <span className="absolute top-5 left-5 p-2 cursor-pointer shadow-lg shadow-blue-500">
          <IoHomeOutline size={24} />
        </span>
      </Link>

      <div className="bg-[#1E1E1E] shadow-2xl rounded-lg p-6 w-[90%] md:w-[60%] lg:w-[40%] flex flex-col items-center relative">
        <h2 className="text-2xl font-bold text-white border-b-2 border-gray-600 pb-2 w-full text-center">
          Ask Me Anything
        </h2>

        {/* Chat Messages Container */}
        <div className="w-full max-h-[300px] overflow-y-auto mt-4 p-3 bg-[#2A2A2A] rounded-md border border-gray-600">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 my-2 rounded-lg max-w-[80%] ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white self-end ml-auto"
                  : "bg-gray-700 text-white self-start"
              }`}
            >
              {msg.text}
            </div>
          ))}
          {loading && <p className="text-gray-400 text-sm">Thinking...</p>}
        </div>

        {/* Input Box */}
        <div className="relative w-full mt-4">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message here..."
            className="w-full min-h-[80px] p-3 rounded-md border border-gray-600 bg-[#2A2A2A] text-white focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"
          ></textarea>

          {message.trim() !== "" && (
            <button
              onClick={handleSend}
              className="absolute bottom-5 right-3 text-blue-400 hover:text-blue-500"
            >
              <MdSend size={24} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default AskMePage;
