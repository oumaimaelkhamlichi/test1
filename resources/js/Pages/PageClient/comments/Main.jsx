import React, { useState } from "react";
import Comment from "./Comment";
import CommentBox from "./CommentBox";

const Main = () => {
  const [comments, setComments] = useState([]);

  const addComment = (comment) => {
    setComments([...comments, { ...comment, id: Date.now() }]);
  };

  const deleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  const updateComment = (id, updatedComment) => {
    setComments(
      comments.map((comment) =>
        comment.id === id ? { ...comment, ...updatedComment } : comment
      )
    );
  };

  return (
    <div className="main">
      <h1>Comments</h1>
      <CommentBox onAddComment={addComment} />
      <ul className="comment-list">
        {comments.map((comment) => (
          <li key={comment.id}>
            <Comment comment={comment} onDeleteComment={deleteComment} onUpdateComment={updateComment} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;