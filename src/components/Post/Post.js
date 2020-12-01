import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom'
import { deletePost } from '../../redux/actions'

const Post = () => {

  const [post, setPost] = useState({ title: "", body: ""});
  const { id } = useParams();
  let history = useHistory();
  let dispatch = useDispatch();

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(url)
      .then(response => {
        if(response.ok) {
          return response.json();
        }
      })
      .then(response => setPost(response))
      .catch(() => history.push("/"));
  }, []);

  const removePost = () => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

    Axios.delete(url).then((response) => {
      console.log('delete post', response)
      dispatch(deletePost(id))
      history.push('/')
    }).catch(error => {
      console.log(error)
    })
  };

  return(
    <>
      <div className="jumbotron p-5 m-5">
        <h1 className="display-4"> { post.title } </h1>
        <p className="lead"> { post.body } </p>
        <hr className="my-4" />
        <a className="btn btn-primary btn-lg" href="/" role="button">Back</a>
        <button type="button" className="btn btn-danger btn-lg" onClick={removePost}>
          Delete
        </button>
      </div>
    </>
  );

}

export default Post;
