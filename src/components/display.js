import React, { Component } from 'react';
import App from '../App'

class Display extends Component {
  render() {
    return (
      <div className="display">
        {/* {this.props.question_type}
        {this.props.question_text}
        {this.props.question_options} */}
        {
          this.props.question_type === "gender" ? <div>
            <input type="radio" name="gender" value="male"/>Male<br/>
            <input type="radio" name="gender" value="male"/>Female
          </div>
          : this.props.question_type === "slider" ?
             <input type="range" min="10" max="95" value="50" class="slider" id="myRange"/> : ""
        }
      </div>
    );
  }
}

export default Display;
