import React from 'react';
import { withRouter } from 'react-router-dom'

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments : []
    };
  }

  componentDidMount() {
    const { match: { params: { postId } }} = this.props;
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    fetch(url)
      .then(response => {
        if(response.ok) {
          return response.json();
        }
      })
      .then(response => {
        this.setState({ comments: response })
      })
      .catch(() => this.props.history.push("/"));
  }

  render() {
    const { comments } = this.state;
    const allComments = comments.map((comment, index) => (
      <div className="list-group" key={index}>
        <div classNameName="list-group-item align-items-start p-3 m-2">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1"> { comment.name } </h5>
          </div>
          <p className="mb-1"> { comment.body } </p>
          <small> { comment.email } </small>
        </div>
      </div>
    ));
    return(
      <>
        <h1 className="text-center m-5"> Comments </h1>
        { allComments }
      </>
    );
  }
}

export default withRouter(Comments);
