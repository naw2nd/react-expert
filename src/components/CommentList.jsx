import React from 'react';
import PropTypes from 'prop-types';
import CommentItem, { commentItemShape } from './CommentItem';

function CommentsList({ comments }) {

  return (
    <div className="threads-list">
      {
        comments.map((comment) => (
          <CommentItem key={comment.id} {...comment} />
        ))
      }
    </div>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentItemShape)).isRequired,
};

export default CommentsList;
