import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ThreadInput from '../components/ThreadInput';
import ThreadList from '../components/ThreadList';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import { asyncAddThread } from '../states/threads/action';

function HomePage() {
  const {
    threads = [],
    users = [],
  } = useSelector((states)=>states);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('HomePage useEffect');
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onAddThread = (title, body) => {
    dispatch(asyncAddThread({ title, body }));
  };


  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
  }));

  return (
    <section className="home-page">
      <ThreadInput addThread={onAddThread} />
      <ThreadList threads={threadList} />
    </section>
  );
}

export default HomePage;
