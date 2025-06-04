import React from 'react';
import PropTypes from 'prop-types';
import { postedAt } from '../utils';

function CommentItem({
  content, createdAt, owner,
}) {

  return (
    <div className="thread-item">
      <div className="thread-item__user-photo">
        <img src={owner.avatar} alt={owner} />
      </div>
      <div className="thread-item__detail">
        <header>
          <div className="thread-item__user-info">
            <p className="thread-item__user-name">{owner.name}</p>
          </div>
          <p className="thread-item__created-at">{postedAt(createdAt)}</p>
        </header>
        <article>
          <p className="thread-item__text">{content}</p>
        </article>
      </div>
    </div>
  );
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const commentItemShape = {
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
};

CommentItem.propTypes = {
  ...commentItemShape,
};

export { commentItemShape };

export default CommentItem;