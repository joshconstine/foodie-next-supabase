import test from "node:test";
import React, { useState } from "react";
const AddComment = (props: any) => {
  const { setter } = props;
  const [text, setText] = useState<string>("");

  const handleSubmit = (e) => {
    console.log("Submit add post route here", text);

    setter(false);
    setText("");
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="bg-red-50 p-10">
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={handleChange}></input>
        <button type="submit">+</button>
      </form>
    </div>
  );
};
export default AddComment;
