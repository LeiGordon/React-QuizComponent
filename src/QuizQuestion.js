import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";
//let quizData = require("./quiz_data.json");

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = { quiz_position: 1 };
    this.state = { incorrectAnswer: false };
  }

  handleClick(buttonText) {
    if (this.props.quiz_question.answer === buttonText) {
      this.props.showNextQuestionHandler();
    }
    this.setState((state) => {
      return { incorrectAnswer: !state.incorrectAnswer };
    });
  }

  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map(
              (answer_option, index) => {
                return (
                  <QuizQuestionButton
                    clickHandler={this.handleClick.bind(this)}
                    key={index}
                    button_text={answer_option}
                  />
                );
              }
            )}
          </ul>
        </section>
        {this.state.incorrectAnswer ? (
          <p className="error">Sorry, that's not right</p>
        ) : null}
      </main>
    );
  }
}

export default QuizQuestion;
