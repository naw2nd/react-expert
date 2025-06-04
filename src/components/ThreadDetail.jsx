import React from 'react';
import PropTypes from 'prop-types';
import { postedAt } from '../utils';

function ThreadDetail({
  title, body, createdAt, owner,
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
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
};

export default ThreadDetail;
