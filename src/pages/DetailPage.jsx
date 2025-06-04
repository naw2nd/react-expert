import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ThreadDetail from '../components/ThreadDetail';
import ThreadItem from '../components/ThreadItem';
import ThreadCommentInput from '../components/ThreadCommentInput';
import { useDispatch, useSelector } from 'react-redux';
import { asyncAddComment, asyncReceiveThreadDetail } from '../states/threadDetail/action';
import CommentsList from '../components/CommentList';

function DetailPage() {
  const { id } = useParams();
  const {
    threadDetail = null,
    authUser,
  } = useSelector((states)=>states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onCommentThread = (content) => {
    console.log(content, id);
    dispatch(asyncAddComment({ content, threadId: id }));
  };

  if (!threadDetail) {
    return null;
  }

  return (
    <section className="detail-page">
      {
        threadDetail.parent && (
          <div className="detail-page__parent">
            <h3>Commenting To</h3>
            <ThreadItem {...threadDetail.parent} authUser={authUser.id} />
          </div>
        )
      }
      <ThreadDetail {...threadDetail} authUser={authUser.id} />
      <CommentsList comments={threadDetail.comments} />
      <ThreadCommentInput onCommentThread={onCommentThread} />
    </section>
  );
}

export default DetailPage;
