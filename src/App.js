import Home from './components/Home';
import Blog from './components/Blog';
import * as BlogIndex from './components/BlogPosts/BlogIndex';
import {BlogPostsMetadata} from './BlogMetadata';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blog" element={<Blog />} />
            {BlogPostsMetadata.map( (singleBlogMetadata)=> {
            const BlogComponent = BlogIndex["Blog_"+singleBlogMetadata.date]
            const BlogPath = "blog/" + singleBlogMetadata.date
            console.log(BlogComponent, BlogPath)
            return <Route path={BlogPath} element={<BlogComponent/>}/>
          }) } 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
