import React from 'react';

export default class NewPost extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="newPost well well-sm">
        <textarea 
          className="form-control" 
          id="newPost" 
          placeholder="Enter a status" 
          rows="3">
        </textarea>
        <button 
          type="submit" 
          className="btn btn-primary"
          onClick={this.props.handlePost}
        >
          Post
        </button>
      </div>
    );
  }
}
