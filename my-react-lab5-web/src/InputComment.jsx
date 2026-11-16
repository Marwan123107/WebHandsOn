import {useState} from 'react'

function InputComment(props){

    const comments=props.comments
    const setComments=props.setComments
    const [input,setInput]=useState("")

    function addMessage(){
        setComments([...comments,{name:"You",message:input,likes:2}])
    }

    function saveInputText(){
        setInput(event.target.value)

    }

    return<>
    <input placeholder='Write a comment'  onInput={saveInputText}/>
    <button onClick={addMessage}>post</button>
    </>
}

export default InputComment
