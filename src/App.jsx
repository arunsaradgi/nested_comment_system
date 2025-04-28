import { useState } from 'react'



function App() {
  const [comments, setComments] = useState([])

  const [text, setText] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // console.log(Date.now())
    setComments([...comments, { comment: text, id: Date.now() }])
    setText('')
  }
  
  
  const handleDelete = (comment) => {
    const new_comments = comments?.filter(ele =>{
      return ele.id !== comment.id
    } )
    setComments(new_comments)
  }

  return (
    <>
      <h1>Nested Comment System</h1>
      <form onSubmit={handleFormSubmit}>
        <textarea value={text} required placeholder='Write a comment...' onChange={(e) => setText(e.target.value)}></textarea>
        <input type="submit" />
      </form>

      {
        comments.map((ele, i) => (<div key={i}>
          <h1>{ele.comment}</h1>
          <button onClick={()=>handleDelete(ele)}>Delete</button>
        </div>
        ))
      }
    </>
  )
}

export default App
