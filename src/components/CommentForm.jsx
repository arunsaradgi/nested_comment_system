import React, { useState } from 'react';

// Simple input form for new comment/reply
export default function CommentForm({ onSubmit }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(text);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: 10 }}>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write a comment..."
                style={{ width: '300px', marginRight: 10 }}
            />
            <button type="submit">Post</button>
        </form>
    );
}
