import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/actions';

const NewPost = props => {

  let history = useHistory();
  let dispatch = useDispatch();
  const[title, setTitle] = useState("");
  const[body, setBody] = useState("");

  const onSubmit = event => {
    event.preventDefault();
    const url = "https://jsonplaceholder.typicode.com/posts";
    axios.post(url, {title, body, userId: 1})
      .then(({data}) => {
        console.log({ newPost: data })
        dispatch(addPost(
          {
            title: data.title,
            body: data.body,
            id: data.id,
            userId: data.userId
          }
        ));
        history.push('/')
      })
      .catch(error => {
        console.log(error)
      })
  }
  return(
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-12 col-lg-6 offset-lg-3">
          <h1 className="font-weight-normal mb-5">
            Create Post
          </h1>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="postTitle">Title</label>
              <input
                type="text"
                value={title}
                name="title"
                id="postTitle"
                className="form-control"
                required
                onChange={e => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="postBody">Body</label>
              <textarea
              className="form-control"
              value={body}
              id="postBody"
              name="body"
              rows="5"
              required
              onChange={e => setBody(e.target.value)}
            />
            </div>

            <button type="submit" className="btn custom-button mt-3">
              Create Post
            </button>
            <Link to="/" className="btn btn-link mt-3">
              Back to posts
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewPost;
