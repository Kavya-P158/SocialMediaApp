
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import Footer from './Footer';
import { Link, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Post from './Post';
import PostLayout from './PostLayout';
import { useEffect, useState } from 'react';
import { format } from "date-fns";
function App() {

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([])
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("")
  const [posts, setPost] = useState([
    {
      id: 1,
      title: "All about Java",
      datetime: "16th Feb 2024",
      post: "Java is an object oriented language"

    },
    {
      id: 2,
      title: "Python Language",
      datetime: "20th Feb 2024",
      post: "Python is an easy to learn,beginner friendly language"

    },
    {
      id: 3,
      title: "Javascript",
      datetime: "16th Feb 2024",
      post: "Javascript is a easy language"

    }
  ])
  const handleSubmit = (e) => {
    e.preventDefault();
    const newid = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const newdate = format(new Date(), 'MMMM dd, yyyy pp');
    const newpost = { id: newid, title, datetime: newdate, post: body }
    const newarr = [...posts, newpost];
    setPost(newarr)
    setTitle('')
    setBody('')
    // console.log(newarr)

  }
  const handleDelete = () => {

  }
  useEffect(
    () => {
      const filteredResult = posts.filter((item) => {
        return ((item.post).toLowerCase()).includes(search.toLowerCase()) || ((item.title).toLowerCase()).includes(search.toLowerCase())


      })
      setSearchResults(filteredResult.reverse())
    }, [posts, search]
  )


  return (
    <div className='App'>
      <Header />

      <Nav
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        <Route
          path='/'
          element={<Home
            posts={searchResults}

          />} />
        <Route
          path='postpage'>
          <Route index
            element={
              <NewPost
                title={title}
                setTitle={setTitle}
                body={body}
                setBody={setBody}
                handleSubmit={handleSubmit}

              />} />
          <Route
            path=':id'
            element={<PostPage
              posts={posts}
              handleDelete={handleDelete}
            />}


          />

        </Route>
        <Route
          path='about'
          element={<About />}
        />
        <Route
          path="*"
          element={<Missing />}
        />
      </Routes>









    </div>
  );
}

export default App;
