export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
export const SET_POSTS = "SET_POSTS";

export function setPosts(posts) {
  return {
    type: SET_POSTS,
    payload: posts,
  }
}

export function addPost(post) {
  return {
    type: ADD_POST,
    payload: post
  }
}

export function deletePost(postId) {
  return {
    type: DELETE_POST,
    payload: postId,
  }
}
