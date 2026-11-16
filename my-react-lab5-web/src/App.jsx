import { useState } from 'react'
import CommentsNumber from './CommentNumber.jsx'
import InputComment from './InputComment.jsx'
import Comments from './Comments.jsx'
import Comment from './Comment.jsx'
function App() {
  const [comments, setComments] = useState([
    {
      name: "sara",
      message: "Great explination of components!",
      likes: 5
    },
    {
      name: "omar",
      message: "Props finally make sense to me",
      likes: 2
    },
    {
      name: "Ali",
      message: "Can we do a lab on useState next week?",
      likes: 7
    },
    {
      name: "You",
      message: "Thanks for the lab, this was fun!",
      likes: 0
    }
  ]);

  return (
    <div>
      <CommentsNumber commentsNumber={comments.length} />
      <InputComment comments={comments} setComments={setComments} />
      <Comments comments={comments} />
    </div>
  )
}

export default App