import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ search, setSearch }) => {
    return (
        <div className='Nav'>
            <nav>
                <ul>
                    <li ><Link to="/">Home</Link></li>
                    <li ><Link to="/about">About</Link></li>

                    <li><Link to="/postpage">Post Page</Link></li>
                </ul>
            </nav>

            <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
                <label className='searchForm label' htmlFor='search'>Search</label>
                <input
                    className='searchForm input'
                    id='search'
                    placeholder='Enter to search'
                    type='text'
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value)


                        console.log(e.target.value)
                    }
                    }


                />
                <button>Search</button>
            </form>


        </div>
    )
}

export default Nav