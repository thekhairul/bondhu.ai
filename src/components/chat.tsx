'use client';

import { useChat } from "@ai-sdk/react";

export default function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat();
    return (
        <div className="flex flex-col w-full max-w-md py-24 mx-auto">
            {messages.map(m => (
                <div key={m.id} className="whitespace-pre-wrap">
                    {m.role === 'user' ? 'You: ' : 'AI: '}
                    {m.content}
                </div>
            ))}

            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={input} placeholder="Ask something..." onChange={handleInputChange} className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 text-gray-700 rounded shadow-xl"/>
            </form>
        </div>
    )
}