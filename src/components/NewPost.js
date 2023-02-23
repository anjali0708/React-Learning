import classes from './NewPost.module.css';
import React, { useState } from 'react';

function NewPost({ onHideModal, onAddPost }) {
  const [ enteredText, setEnteredText ] = useState('');
  const [ enteredAuthor, setEnteredAuthor ] = useState('');
  
  const onTextChange = (event) => {
    setEnteredText(event.target.value)
  };
  const onAuthorChange = (event) => {
    setEnteredAuthor(event.target.value);
  }
  const submitHandler = (event) => {
    event.preventDefault();
    const formData = {
      text: enteredText,
      author: enteredAuthor
    }
    onAddPost(formData);
    onHideModal();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onTextChange}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={onAuthorChange} />
      </p>
      <p className={classes.actions}>
      <button type="button" onClick={onHideModal}>Cancel</button>
      <button className={classes.actions}>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;