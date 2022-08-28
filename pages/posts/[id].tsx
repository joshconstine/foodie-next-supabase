import { useRouter } from "next/router";
import { comment } from "postcss";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { supabase } from "../../utils/api";
import AddComment from "../../components/AddComment";

export type Post = {
  id: number;
  title: string;
  user_displayName: string;
  user_email?: string;
  user_id: string;
  content: string;
  inserted_at: string;
};

export default function Post(props: any) {
  const { post } = props;
  const [AddCommentForm, setAddCommentForm] = useState(false);
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const commentForm = () => {
    if (AddCommentForm) {
      return <AddComment setter={setAddCommentForm} parent={post.id} />;
    } else {
      return <></>;
    }
  };

  return (
    <div>
      <h1 className="text-5xl mt-4 font-semibold tracking-wide">
        {post.title}
      </h1>
      <p className="text-sm font-light my-4">by {post.user_displayName}</p>
      <div className="mt-8">
        <ReactMarkdown className="prose">{post.content}</ReactMarkdown>
      </div>
      <button onClick={() => setAddCommentForm(!AddCommentForm)}>
        add comment
      </button>
      {commentForm()}
    </div>
  );
}

export async function getStaticPaths() {
  const { data, error } = await supabase.from("posts").select("id");
  const paths = data?.map((post) => ({
    params: { id: post.id },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }: any) {
  const { id } = params;
  const { data } = await supabase
    .from("posts")
    .select("*, comment(*)")
    .eq("id", id);

  return {
    props: {
      post: data ? data[0] : {},
    },
  };
}
