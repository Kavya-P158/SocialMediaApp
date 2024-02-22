import React from 'react'

const NewPost = ({ title, setTitle, body, setBody, handleSubmit }) => {


    return (
        <div className='NewPost'><h2>Newpost</h2>

            <form onSubmit={handleSubmit}>

                <label htmlFor='title'>Title</label>
                <input
                    type='text'
                    id='title'
                    value={title}
                    required
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor='body'>Post</label>
                <textarea
                    type='text'
                    id='body'
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default NewPost