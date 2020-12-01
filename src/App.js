import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Posts from "./components/Post/Posts"
import Post from "./components/Post/Post"
import Comments from "./components/Comment/Comments"
import NewPost from "./components/Post/NewPost"
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Posts />
          </Route>
          <Route path="/posts/:id" exact>
            <Post />
          </Route>
          <Route path="/posts/:postId/comments" exact>
            <Comments />
          </Route>
          <Route path="/post">
            <NewPost />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
