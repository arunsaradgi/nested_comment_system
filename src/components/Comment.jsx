import React, { useState } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

export default function Comment({ comment, addComment, deleteComment }) {
    const [reply, setReply] = useState(false)


    console.log(comment)
    return (
        <div style={{ marginTop: 10 }}>
            <div>
                <strong>{comment.text}</strong>
            </div>

            <div style={{ marginTop: 5 }}>
                <button onClick={() => setReply(!reply)}>Reply</button>
                <button onClick={() => deleteComment(comment.id)}>Delete</button>

            </div>

            {reply && (
                <CommentForm
                    onSubmit={(text) => {
                        addComment(text, comment.id);
                        setReply(false);
                    }}
                />
            )}
            <div style={{ marginLeft: '10px' }}>

                {comment?.replies?.length > 0 && (
                    <CommentList
                        comments={comment.replies}
                        addComment={addComment}
                        deleteComment={deleteComment}
                    />
                )}
            </div>
        </div>
    );
}
