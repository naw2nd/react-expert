import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ThreadInput({ addThread }) {
  const [text, setText] = useState('');

  function addthread() {
    if (text.trim()) {
      addThread(text);
      setText('');
    }
  }

  function handleTextChange({ target }) {
    if (target.value.length <= 320) {
      setText(target.value);
    }
  }

  return (
    <div className="thread-input">
      <textarea type="text" placeholder="What are you thinking?" value={text} onChange={handleTextChange} />
      <p className="thread-input__char-left">
        <strong>{text.length}</strong>
        /320
      </p>
      <button type="submit" onClick={addthread}>Thread</button>
    </div>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
