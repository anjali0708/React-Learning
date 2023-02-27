import Post from './Post';
import classes from './PostsList.module.css';
import { useLoaderData } from 'react-router-dom';

const PostsList = () => {
  const posts = useLoaderData();

  return (
    <>
      {posts.length && <ul className={classes.posts}>
        {posts.map(post => <Post key={post.id} id={post.id} text={post.text} author={post.author} />)}
      </ul>}
      {posts.length <= 0 && <div><h2>No Post available to show.</h2></div>}

    </>
  )
}

export default PostsList
