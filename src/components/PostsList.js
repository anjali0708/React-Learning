import Post from './Post';
import React, { useState } from 'react';
import classes from './PostsList.module.css';
import NewPost from './NewPost';
import Modal from './Modal';

const PostsList = ({ isModalVisible, onHideModal }) => {
  const [ posts, setPosts ] = useState([]);

  const addPostHandler = (postData) => {
    setPosts([postData, ...posts]);
  }
  return (
    <>
    { isModalVisible && <Modal hideModal={onHideModal}>
      <NewPost onHideModal={onHideModal} onAddPost={addPostHandler}/>
    </Modal>}
    { posts.length && <ul className={classes.posts}>
        { posts.map(post => <Post key={post.text} text={post.text} author={post.author}/>)}
      </ul>}
    { posts.length <= 0 && <div><h2>No Post available to show.</h2></div>}
      
    </>
  )
}

export default PostsList
