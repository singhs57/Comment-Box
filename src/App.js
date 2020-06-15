import React, { Component } from 'react';
import CommentBox from './CommentBox';
import Comments from './Comments';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    }
    this.handleAddComment = this.handleAddComment.bind(this);
  }

  componentDidMount() {
    /*global Ably*/
    const channel = Ably.channels.get('comments');
  
    channel.attach();
      channel.once('attached', () => {
        channel.history((err, page) => {
          // create a new array with comments only in an reversed order (i.e old to new)
          const comments = Array.from(page.items, item => item.data)
  
          this.setState({ comments });
  
          channel.subscribe((msg) => {
            const commentObject = msg.data;
            this.handleAddComment(commentObject);
          })
        });
      });
    }

  handleAddComment(comment) {
    this.setState(prevState => {
      return {
        comments: prevState.comments.concat(comment)
      };
    });
  }
  render() {
      
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
                
            <CommentBox handleAddComment={this.handleAddComment} />
              <Comments comments={this.state.comments} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;