import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Post = ({ item }) => {

    // const { id } = useParams();

    return (
        <article className='post'>
            <Link to={`postpage/${item.id}`}>
                <h3>{item.title}</h3>

                <p>{item?.post}</p>
            </Link>

            {/* Post {id}</div> */}

        </article>
    )
}

export default Post