import Post from "./Post";
function Feed({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </>
  );
}

export default Feed;
