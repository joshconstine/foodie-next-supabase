import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = (props: any) => {
  const { posts } = props;

  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-wide mt-6 mb-2">Posts</h1>
      {posts?.map((post: any) => (
        <Link key={post.id} href={`/posts/${post.id}`}>
          <div className="cursor-pointer border-b border-gray-300	mt-8 pb-4">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-500 mt-2">
              Author: {post.user_displayName}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const url = "http://localhost:3000/api/posts";
  let response = await fetch(url);
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
  };
}
