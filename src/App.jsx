import { useState } from 'react'
import { useReducer } from 'react'
import { commentsReducer, initComments } from './components/commentReducer'
import CommentList from './components/CommentList'
import CommentForm from './components/CommentForm'



function App() {
  // const [comments, setComments] = useState([])
  const [comments, dispatch] = useReducer(commentsReducer, initComments)

  const addComment = (text, parentId = null) => {
    dispatch({ type: "ADD_COMMENT", payload: { text, parentId } })
  }


  return (
    <>
      <h1>Nested Comment System</h1>
      <CommentForm onSubmit={addComment} />

      <CommentList comments={comments} addComment={addComment} />
    </>
  )
}

export default App
