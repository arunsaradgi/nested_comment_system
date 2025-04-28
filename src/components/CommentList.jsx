import React from 'react'
import Comment from './Comment'

const CommentList = ({ comments }) => {
    return (
        <div>
            {
                comments.map((ele, i) =>
                    <Comment key={i} comment={ele} />
                )
            }
        </div>
    )
}

export default CommentList
