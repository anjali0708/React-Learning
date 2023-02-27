import React from 'react';
import './Posts.css';
import PostsList from '../components/PostsList';
import { Outlet } from 'react-router-dom';

const Posts =() => {

  return (
    <>
    <Outlet />
    <main>
      <PostsList />
    </main>
    </>
  );
}

export default Posts;

export const loader = async() => {
  const responseData = await fetch('http://localhost:5000/posts').then(response => response.json()).then(responseData => responseData);
  return responseData;
}
