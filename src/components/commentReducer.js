import { v4 as uuidv4 } from 'uuid';

export const initComments = [];

export const commentsReducer = (state, action) => {
    // console.log(action)
    switch (action.type) {
        case "ADD_COMMENT":
            const newComment = {
                id: uuidv4(),
                text: action.payload.text,
                replies: []
            };
            if (action.payload.parentId == null) {
                return [...state, newComment]
            }
            return addReply(state, action.payload.parentId, newComment)


        case 'DELETE_COMMENT':
            return deleteComment(state, action.payload.id);

        default:
            state
    }
}

function addReply(comments, parentId, newComment) {
    return comments.map(comment => {
        if (comment.id === parentId) {
            return { ...comment, replies: [...comment.replies, newComment] };
        }
        return { ...comment, replies: addReply(comment.replies, parentId, newComment) };
    });
}

function deleteComment(comments, id) {
    return comments
        .filter(comment => comment.id !== id)
        .map(comment => ({
            ...comment,
            replies: deleteComment(comment.replies, id)
        }));
}