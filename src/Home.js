import React from 'react'
import Post from './Post'
import Feed from './Feed'
const Home = ({ posts }) => {
    console.log(posts)
    return (
        <div className='Home'><h2>Home</h2>
            {

                // <h2>Posts available here</h2>

                posts ? (



                    <Feed
                        items={posts}
                    />

                ) : <p>No Posts to display</p>
            }

        </div>
    )
}

export default Home