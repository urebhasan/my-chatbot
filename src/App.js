import React, { Component } from 'react';
import Answer from './components/answer'
import Display from './components/display'
import './App.css';

class App extends Component {
  state = {
    answer: '',
    ansArry: [],
    temp: [
      {
        Text: "Do you like programming",
        Options: [
            {option: "Hello"},
            {option: "Amazing"},
            {option: "Epic"}
          ],
        Type: "radio",
        Options: [
            {option: "I love programming!"},
            {option: "Maybe"},
            {option: "I hate it!!!"},
            {option: "Don't ask"}
        ]
      },
      {
        Text: "Are you Pakistani?",
        Options: [
            {option: "Yes"},
            {option: "No"}
          ],
        Type: "radio",
        Options: [
            {option: "Yes"},
            {option: "No"}
        ]
      },
      {
        Text: "In which city do you live?",
        Type: "text",
      },
      {
        Text: "How old are you?",
        Type: "slider",
      },
      {
        Text: "What is your gender?",
        Type: "radio",
        Options: [
          {option: "Male"},
          {option: "Female"}
        ]
      },
      {
        Text: "Hey! What is your name?",
        Type: "text",
      }
    ]
  }

  questions =[]

  updateNoteText(answer){
    this.setState({
      answer: answer.target.value
    })
  }

  handleKeyPress(event){
    if (event.key === "Enter"){
      this.setState({
        answer: event.target.value
      })
    }
  }

  addNote(){
    if (this.state.answer === '') {return}
    // let ansArray = this.state.ansArry;
    // ansArray.push(this.state.answer)
    // this.setState({ answer:'' })
    //
    var x = this.state.temp.pop()
    var temp = [{
      Text : this.state.answer,
      Type : "answer"
    },x]
    this.pushArrayObj(temp);
    console.log(this.state.ansArry)
    // this.pushArrayObj(this.temp.pop());
    this.textInput.focus();
  }
  componentDidMount(){
    var x = this.state.temp.pop()
    this.pushArrayObj([x])

  }
  pushArrayObj(obj){
    this.setState({
      ansArry: this.state.ansArry.concat(obj)
    })
  }

  renderInputField(type, text, options) {
    // if(type === "radio"){
      return (
        <Display question_type={type} question_text={text} question_options={options}/>
      )
    // }
  }

  // googleTranslateElementInit() {
  //   let google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  // }

  render() {
    // let answers = this.state.ansArry.map((val, key) => {
    //   return <Answer key={key} text={val}/>
    // })
    // let disp = this.questions.map((val, i) => {
    //   return <div>{val.text}</div>
    // })
    return (
      <div className="App">
        <div className="header">
          <div className="row">
            <div className="col-md-9">
              Demo Application
            </div>
            <div className="col-md-3">
              <div className="row translate">
                Tranlsate: &nbsp; &nbsp; <div id="google_translate_element"></div>
              </div>
              </div>
          </div>
        </div>
        {
        //   this.state.temp.map((value, i) =>
        //     <div>
        //       {
        //         (typeof(value.Text) === "object") ?
        //           <div>
        //             {
        //               value.Text.map((ques, j) => <div>{ques.Question}</div>)
        //             }
        //           </div> : ""
        //       }
        //     </div>
        // )
        }
        {/* {answers} */}
        {
        //   <div>
        //   {
        //       this.state.temp.map((value, i) => <div>
        //         {
        //           (typeof(value.Options) === "object") ?
        //             <div>
        //               {
        //                 value.Options.map((choice, j) => <div key={j}>{choice.option}</div>)
        //               }
        //             </div> : ""
        //           // value.Options.map((choice, j) => <div>{choice.option1}</div>)
        //         }
        //       </div>)
        //   }
        // </div>
        }
        {/* {disp} */}
        <Display q_type="" age={this.state.temp.Text}/>
        <div className="container-fluid chatContainer">
        {
          this.state.ansArry.map((data, type, options, i) =>
          <div className="chat-box-padding-top">
          <div className="row">
            <div className={"col-md-6 " + (data.Type === "answer"?"offset-md-5 answer ": "offset-md-1 question")}>
                <div key={i}>
                  {data.Text}
                  {
                    data.Type === "radio" ?
                      <div>
                        {
                          data.Options.map(value => <div>{value.option}</div>)
                        }
                      </div>
                    :""
                  }
                  {/* {
                    this.state.temp.map((value, i) =>
                      <div>
                        {
                          (typeof(value.Text) === "object") ?
                            <div>
                              {
                                value.Text.map((ques, j) => <div>{ques.Question}</div>)
                              }
                            </div> : ""
                        }
                      </div>
                  )
                  } */}
                  {/* {this.renderInputField(data.Type, data.Text, data.Options)} */}
                  {
                    // <div>
                    //   {
                    //       this.state.temp.map((value, i) => <div>
                    //         {
                    //           (typeof(value.Options) === "object") ?
                    //             <div key={i}>
                    //               { value.Type === "radio" ?
                    //                 value.Options.map((choice, j) => <div>{choice.option}</div>):""
                    //               }
                    //             </div> : ""
                    //           // value.Options.map((choice, j) => <div>{choice.option1}</div>)
                    //         }
                    //       </div>)
                    //   }
                    // </div>
                    ///THIS ENDS HERE !!!!!
                    // data.Type === "gender" ?
                    //     <div>
                    //       <input type="radio" name="gender" defaultChecked value="male" onClick={this.genderValue}/>Male<br/>
                    //       <input type="radio" name="gender" value="female" onClick={this.genderValue}/>Female
                    //     </div> :
                    // data.Type === "slider" ?
                    //     <div>
                    //       <form>
                    //         <div class="form-group">
                    //           <input type="range" class="form-control-range" id="formControlRange"/>
                    //           </div>
                    //         </form>
                    //     </div> :
                    // data.Type === "radio" ?
                    //   <div>
                    //     <input type="radio" name="gender" value="yes"/>Yes<br/>
                    //     <input type="radio" name="gender" value="no"/>No
                    //   </div> : ""
                  }
                </div>
            </div>
          </div>
        </div>
        )
      }</div>
        <div className="btn" onClick={this.addNote.bind(this)}>+</div>

        <input type="text" ref={((input) => {this.textInput = input})}
          className="textInput" value={this.state.answer}
          onChange={answer => this.updateNoteText(answer)}
          onKeyPress={this.handleKeyPress.bind(this)}
        />
      </div>
    );
  }
}

export default App;
