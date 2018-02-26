import React from 'react'

//stateless functional 

const Comment = props =>
    <p className='well'>
    <b>{props.comment.user.name}</b> escreveu:<br/>
    {props.comment.comment} 
    </p>

export default Comment