import React from 'react'
import Post from './Post'

const Feed = ({ items }) => {
    console.log(items)
    return (
        <article>
            {
                // items ? (<p>There are posts</p>) : <p>No posts to display</p>
                items ? (items.map(item => (

                    <Post
                        key={item.id}
                        item={item}
                    />



                ))) : <p>No Posts to display!</p>
            }
        </article>
    )
}

export default Feed;