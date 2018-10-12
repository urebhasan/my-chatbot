import React, { Component } from 'react';

class Answer extends Component {

  render() {
    return (
      <div className="answer">
        {this.props.text}
      </div>
    );
  }
}

export default Answer;
