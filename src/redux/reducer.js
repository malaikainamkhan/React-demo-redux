import { ADD_POST, DELETE_POST, SET_POSTS } from './actions';
import { initialState } from './states'

export let reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return { ...state, posts: action.payload };
    case ADD_POST:
      const posts = state.posts.concat(action.payload)
      return {...state, posts };
    case DELETE_POST:
      const newPosts = state.posts.filter(post => post.id != action.payload)
      return { ...state, posts: newPosts };
    default:
      return state;
  }
}
