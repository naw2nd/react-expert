import { describe, it, expect } from 'vitest';
import threadDetailReducer from './reducer';

/**
* test scenario for threadDeailReducer
*
* - threadDetailReducers function
*  - should return the initial state when given by unknown action
*  - should return the threadDeail when given by RECEIVE_THREADS action
*
*/

describe('threadDetailReducers function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };
    // action
    const nextState = threadDetailReducer(initialState, action);
    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the threadDetail when given by RECEIVE_THREAD_DETAIL action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREAD_DETAIL',
      payload: {
        threadDetail: {
          id: 'thread-1',
          text: 'Thread Test 1',
          user: 'user-1',
          replyTo: '',
          likes: [],
          createdAt: '2022-09-22T10:06:55.588Z',
        },
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threadDetail);
  });
});