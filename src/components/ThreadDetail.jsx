import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { postedAt } from '../utils';

function ThreadDetail({
  id, title, body, createdAt, owner,
}) {
  return (
    <section className="thread-detail">
      <header>
        <img src={owner.avatar} alt={owner} />
        <div className="thread-detail__user-info">
          <p className="thread-detail__user-name">{owner.name}</p>
          <p className="thread-detail__header">{title}</p>
        </div>
      </header>
      <article>
        <p className="thread-detail__text">{body}</p>
      </article>
      <footer>
        {/* <div className="thread-detail__like">
          <button type="button" aria-label="like" onClick={() => likeThread(id)}>
            { isThreadLiked ? <FaHeart style={{ color: 'red' }} /> : <FaRegHeart />}
          </button>
          <span>
            {likes.length}
            {' '}
            Likes
          </span>
        </div> */}
        <p className="thread-detail__created-at">{postedAt(createdAt)}</p>
      </footer>
    </section>
  );
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
};

export default ThreadDetail;
