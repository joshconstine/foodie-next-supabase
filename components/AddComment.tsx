import React from "react";
const AddComment = () => {
  const handleSubmit = () => {
    console.log("Submit");
  };
  return (
    <div className="bg-red-50 p-10">
      <form onSubmit={handleSubmit}>
        <input></input>
        <button type="submit">+</button>
      </form>
    </div>
  );
};
export default AddComment;
