import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
           <img src="https://png.pngtree.com/png-clipart/20190906/original/pngtree-cartoon-short-hair-boy-free-button-png-image_4578681.jpg" alt="Avatar" />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{this.props.comment.name}</strong>
              <br />
              {this.props.comment.comment}
            </p>
          </div>
        </div>
      </article>
    );
  }
}

export default Comment;