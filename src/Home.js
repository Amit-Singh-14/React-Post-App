import Feed from "./Feed";
function Home({ posts }) {
  return (
    <main className="Home">
      {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p style={{ marginTop: "2rem" }}>no posts to display.</p>
      )}
    </main>
  );
}

export default Home;
