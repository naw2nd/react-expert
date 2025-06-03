import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  ADD_COMMENT: 'ADD_COMMENT',
};

function receiveThreadsActionCreator(thread) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      thread,
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


function asyncAddThread({ title, body, category }) {
  return async (dispatch) => {
    try {
      const thread = await api.createThread({  title, body, category });
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