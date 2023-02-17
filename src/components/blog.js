function Blogs({ postBlog }) {
  return (
    <div className="col-md-8">
      <h2>{postBlog.title}</h2>
      <p>{postBlog.body}</p>
    </div>
  );
}

export default Blogs;
