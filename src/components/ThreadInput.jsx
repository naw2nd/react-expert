import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ThreadInput({ addThread }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function addthread() {
    if (title.trim() && body.trim()) {
      addThread(title, body);
      setTitle('');
      setBody('');
    }
  }

  function handleTitleChange({ target }) {
    setTitle(target.value);
  }
  function handleBodyChange({ target }) {
    setBody(target.value);
  }

  return (
    <div className="thread-input">
      <input type="text" placeholder="Title" value={title} onChange={handleTitleChange} />
      <textarea type="text" placeholder="Body" value={body} onChange={handleBodyChange} />
      <button type="submit" onClick={addthread}>Thread</button>
    </div>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
