import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarkes from './Components/Bookmarks/Bookmarkes'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
      <header>
      <Header></Header>
      </header>
      <main>
        <div className='md:flex'>
            <Blogs></Blogs>
            <Bookmarkes></Bookmarkes>
      </div>



      </main>
      <footer></footer>
    </>
  );
}

export default App
