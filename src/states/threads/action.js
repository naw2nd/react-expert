import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  ADD_COMMENT: 'ADD_COMMENT',
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    },
  };
}

function addCommentActionCreator({ content, threadId }) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      content,
      threadId,
    },
  };
}


function asyncAddThread({ title, body }) {
  return async (dispatch) => {
    try {

      console.log({ title, body });
      const thread = await api.createThread({ title, body });
      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncAddComment({ content, threadId }) {
  return async (dispatch) => {
    dispatch(addCommentActionCreator({ content, threadId }));
    try {
      await api.createComment(content, threadId);
    } catch (error) {
      alert(error.message);
      dispatch(addCommentActionCreator({ content, threadId }));
    }
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  addCommentActionCreator,
  asyncAddThread,
  asyncAddComment,
};