import React from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const PostPage = ({ posts, handleDelete }) => {

    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id.toString())
    return (
        <div className='PostPage'>
            <h3>{post.title}</h3>
            <p>{post.post}</p>


        </div>
    )
}

export default PostPage