import React from "react";

const Comment = ({ comments }) => {
  return (
    <div className="comment">
      <p>{comments.text}</p>
      <p>Rating: {comments.rating}</p>
    </div>
  );
};

export default Comment;