export const initComments = [];

export const commentsReducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case "ADD_COMMENT":
            if (action.payload.parentId == null) {
                return [...state, action.payload.text]
            } else {
                addReply(state, action.payload.parentId, action.payload.text)
            }
    }
}

const addReply = (comments, parentId, newComment) => {
    return comments.map(ele => {
        if (ele.id === parentId) {
            return {
                ...ele, replies: [...ele.replies, newComment]
            }
        } else {
            return {
                ...ele, replies: addReply(ele.replies, parentId, newComment)
            }
        }
    })
}