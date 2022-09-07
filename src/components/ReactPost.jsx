import React from 'react';
import { useState } from 'react';
import PostLiked from './PostLiked';

let ReactPost = ({ props }) => {
  const { question, answer } = props;
  let [postLiked, setPostLiked] = useState(false);
  const [hideBtn, setHideBtn] = useState(false);

  return (
    <div className="post-container">
      <h3>Fråga: {question}</h3>
      <p>Svar: {answer}</p>
      <button
        hidden={hideBtn}
        onClick={() => {
          setPostLiked(!postLiked);
          setHideBtn(true);
        }}
      >
        Uppskatta
      </button>
      {(postLiked, hideBtn && <PostLiked />)}
    </div>
  );
};

export default ReactPost;
