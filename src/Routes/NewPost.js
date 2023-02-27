import classes from './NewPost.module.css';
import Modal from '../components/Modal';
import { Link, Form, redirect } from 'react-router-dom';

function NewPost() {

  return (
    <Modal>
      <Form className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="text" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" name="author" id="name" required />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">Cancel</Link>
          <button className={classes.actions}>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export const action = async ({ request }) => {
  const formData = await request.json();
  const postData = Object.fromEntries(formData);
  await fetch('http://localhost:5000/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return redirect('/');
}