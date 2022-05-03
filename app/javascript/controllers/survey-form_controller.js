import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [
    "title",
    "description",
    "question_title",
    "question_type",
    "add_question",
  ];

  initialize() {
    this.state = {};
  }

  connect() {}

  survey_value(e) {
    this.state.survey = {
      title: this.titleTarget.value,
      description: this.descriptionTarget.value,
      question: [
        {
          title: this.question_titleTarget.value,
          question_type: this.question_typeTarget.value,
        },
      ],
    };
    console.log(this.state);
  }

  add_question() {
    const questions = this.add_questionTarget;
    const survey_question = this.add_questionTarget.parentElement;
    // console.log(this.add_questionTarget.parentElement);
    survey_question.insertAdjacentElement("beforeend", questions);
  }
}
