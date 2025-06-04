import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  ADD_COMMENT: 'ADD_COMMENT',
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(clearThreadDetailActionCreator());
    try {
      const threadDetail = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      alert(error.message);
    }
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}


function asyncAddComment({ content, threadId }) {
  return async (dispatch) => {
    try {
      console.log({ content
        ,  threadId
      });
      const comment = await api.createComment({ content, threadId });
      dispatch(addCommentActionCreator({ comment }));
    } catch (error) {
      alert(error.message);
    }
  };
}

function addCommentActionCreator({ comment }) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment
    },
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  asyncReceiveThreadDetail,
  clearThreadDetailActionCreator,
  asyncAddComment,
  addCommentActionCreator,
};