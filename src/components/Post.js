import React from 'react';
import classes from './Post.module.css';
import { Link } from 'react-router-dom';

const Post = (props) => {
  return (
    <div className={classes.Post}>
      <Link to={props.id}>
        <p className={classes.Author}>{props.text}</p>
        <p className={classes.Text}>{props.author}</p>
      </Link>
    </div>
  )
}

export default Post
