import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ThreadCommentInput({ onCommentThread }) {
  const [text, setText] = useState('');

  function commentThreadHandler() {
    if (text.trim()) {
      onCommentThread(text);
      setText('');
    }
  }

  function handleTextChange({ target }) {
    setText(target.value);
  }

  return (
    <div className="thread-reply-input">
      <textarea type="text" placeholder="Add comment" value={text} onChange={handleTextChange} />
      <button type="submit" onClick={commentThreadHandler}>Comment</button>
    </div>
  );
}

ThreadCommentInput.propTypes = {
  onCommentThread: PropTypes.func.isRequired,
};

export default ThreadCommentInput;
