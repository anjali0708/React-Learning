import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.Post}>
      <p className={classes.Author}>{props.text}</p>
      <p className={classes.Text}>{props.author}</p>
    </div>
  )
}

export default Post
