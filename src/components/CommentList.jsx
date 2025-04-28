import React from 'react'
import Comment from './Comment'

const CommentList = ({ comments, addComment, deleteComment }) => {
    return (
        <div>
            {
                comments.map((ele, i) =>
                    <Comment key={i}
                        comment={ele}
                        addComment={addComment}
                        deleteComment={deleteComment} />
                )
            }
        </div>
    )
}

export default CommentList
