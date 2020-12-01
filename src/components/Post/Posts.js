import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setPosts } from '../../redux/actions';

const Posts = props => {
  let posts = useSelector(state => state.posts)
  let history = useHistory();
  const dispatch = useDispatch();
  useEffect(() =>{
    if (posts.length) return;

    const url = "https://jsonplaceholder.typicode.com/posts"
    axios.get(url)
      .then(response => {
        if(response.status === 200) {
          return response
        }
      })
      .then(response => {
        dispatch(setPosts(response.data));
        console.log('posts', response.data)
      })
      .catch(() => history.push("/"));
  }, []);

  const renderPosts = posts => {
    return posts.map( post => {
        return (
          <tr key={ post.id } post= {post}>
              <td> { post.id } </td>
              <td> { post.title } </td>
              <td> { post.body } </td>
              <td> <Link to={`/posts/${post.id}`} className="btn btn-primary">Show</Link> </td>
              <td> <Link to={`/posts/${post.id}/comments`} className="btn btn-primary">Comments</Link> </td>
            </tr>
        );
    })
  }

  return(
    <div className="p-5 m-5">
      <h1 className="text-center pb-3"> POSTS </h1>
      <Link to={`/post`} className="btn btn-primary">Create Post</Link>
      <table className="table table-light">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
          </tr>
        </thead>
        <tbody>
          {renderPosts(posts)}
        </tbody>
      </table>
    </div>
  );
}

export default Posts;
