import { useState } from 'react'

function Comment(props){
    const name = props.name
    const message = props.message
    const likes = props.likes
    const [likesup, setLike] = useState(likes)

    function addLike(){
        setLike(likesup + 1)
    }

    return (
        <div>
            <h3>{name}</h3>
            <p>{message}</p>
            <button onClick={addLike}>{likesup} Likes</button>
        </div>
    )
}

export default Comment