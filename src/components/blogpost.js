import { useState } from "react";
import Blogs from "./blog";

const BLOG_DATA = [
  {
    id: 1,
    title: "My reaction to React",
    body: "I may come to love this utility in the near future, but so far it has been overwhelming...useful but a bit much",
  },

  {
    id: 2,
    title: "My love for Python",
    body: "This feel like the most simple language we have learend so far... python may be picky and a bit petty when it comes to syntax but it is easy to understand",
  },

  {
    id: 3,
    title: "The tales of javacript",
    body: "I am still at war with war",
  },

  {
    id: 4,
    title: "Django unchained and unhinged",
    body: "Why are there so many steps just to set everything up?",
  },
];

//useState to take in blog data to state
//sets the key to the id of each blog post, and maps througgh them on the click of a button, the returns the blog post selected
//sets the h2 elemnt to return the blog titles
function BlogPost() {
  const [blogs] = useState(BLOG_DATA);
  const [postBlog, setPostBlog] = useState();

  const blogTitlesHTML = blogs.map((blog) => (
    <button
      key={blog.id}
      className="btn btn-link"
      type="button"
      onClick={() => setPostBlog(blog)}
    >
      <h2>{blog.title}</h2>
    </button>
  ));
  //returns and aside elemnts of the blogs, as well as the html fromthe App component
  return (
    <div className="row">
      <aside className="col-md-4">{blogTitlesHTML}</aside>
      {postBlog && <Blogs postBlog={postBlog} />}
    </div>
  );
}

export default BlogPost;
