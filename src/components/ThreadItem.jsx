import React from 'react';
import PropTypes from 'prop-types';
import { FaComment } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { postedAt } from '../utils';
import CommentCountContainer from './styled/CommentCountContainer';

function ThreadItem({
  id, title, createdAt, totalComments, user,
}) {
  const navigate = useNavigate();

  const onThreadClick = () => {
    navigate(`/threads/${id}`);
  };

  const onThreadPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate(`/threads/${id}`);
    }
  };

  return (
    <div role="button" tabIndex={0} className="thread-item" onClick={onThreadClick} onKeyDown={onThreadPress}>
      <div className="thread-item__user-photo">
        <img src={user.avatar} alt={user} />
      </div>
      <div className="thread-item__detail">
        <header>
          <div className="thread-item__user-info">
            <p className="thread-item__user-name">{user.name}</p>
          </div>
          <p className="thread-item__created-at">{postedAt(createdAt)}</p>
        </header>
        <article>
          <p className="thread-item__text">{title}</p>
        </article>
        <div className="thread-item__likes">
          <CommentCountContainer>
            {totalComments}<FaComment />
          </CommentCountContainer>
        </div>
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  user: PropTypes.shape(userShape).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
};

export { threadItemShape };

export default ThreadItem;
