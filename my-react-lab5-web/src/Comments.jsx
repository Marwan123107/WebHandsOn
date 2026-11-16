import Comment from "./Comment"

function Comments(props){
    const comments = props.comments

    const commentsComponent = comments.map((comment, index) => (
        <Comment 
            key={index} 
            name={comment.name} 
            message={comment.message} 
            likes={comment.likes}
        />
    ))

    return (<>{commentsComponent}</>)
}

export default Comments