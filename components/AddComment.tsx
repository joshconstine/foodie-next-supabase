import test from "node:test";
import React, { useState } from "react";
import { supabase } from "../utils/api";
import { v4 as uuid } from "uuid";

const initialState = { content: "" };

const AddComment = (props: any) => {
  const { setter, parent } = props;
  const [comment, setComment] = useState<any>(initialState);
  const { content } = comment;
  // const handleSubmit = (e) => {

  //   setter(false);
  //   setText("");
  // };
  // const handleChange = (e) => {
  //   setText(e.target.value);
  // };
  const handleChange = (e) => {
    setComment(() => ({ ...comment, [e.target.name]: e.target.value }));
  };
  const createNewPost = async (e) => {
    e.preventDefault();
    if (!comment.content) return;
    const user = supabase.auth.user();
    const id = uuid();
    try {
      const { data } = await supabase
        .from("comment")
        // .insert([{ title, content, user_id: user?.id, user_email: user?.email }])
        .insert([
          { id: id, content: content, user_id: user?.id, parent_id: parent },
        ])
        .single();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="bg-red-50 p-10">
      <form onSubmit={createNewPost}>
        <input
          value={comment.content}
          onChange={handleChange}
          name="content"
          placeholder="..."
        ></input>
        <button type="submit">+</button>
      </form>
    </div>
  );
};
export default AddComment;
