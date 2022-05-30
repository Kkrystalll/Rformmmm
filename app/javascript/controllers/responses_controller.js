import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["question", "survey_title"];

  connect() {
    this.questionTarget.classList.remove("hidden");
    this.survey_titleTarget.classList.remove("hidden");
    this.skip_question_id = "";
    // TODO del
    console.log(this.skip_question_id == "");
  }

  checked(e) {
    if (e.target.checked) {
      //找到他的dataset，是要跳過去的問題id
      // this.skip_question_id = e.target.dataset.skip_question_id;
      this.skip_question_id = 514;
      // TODO del
      console.log(e.target.dataset.skip_question_id);

      // 把全部題目便利找出符合skip_question_id的id;
      // this.questionTargets.forEach((element) => {
      //   if (element.dataset.question_id == this.skip_question_id) {
      //     // TODO del
      //     console.log(element);
      //   }
      // });

      // 若有數字在按下一題的時候找跳題id＝問題上放的question_id，然後remove hidden
      // 5.若為undifine在按下一題的時候，下一個question_field remove hidden
    }
  }

  next(e) {
    e.preventDefault();
    // TODO del
    console.log(this.skip_question_id);
    this.survey_titleTarget.classList.add("hidden");
    const question = e.target.closest(".question_field");
    question.classList.add("hidden");
    const skip_question = this.element.querySelector(
      `div [data-question_id='${this.skip_question_id}']`
    );

    if (this.skip_question_id) {
      skip_question.classList.remove("hidden");
      // TODO del
      console.log(skip_question);
    } else {
      question.nextElementSibling.classList.remove("hidden");
      // TODO del
      console.log("不成禮");
    }
  }

  last(e) {
    e.preventDefault();
    const question = e.target.closest(".question_field");
    if (question.previousElementSibling.nodeName == "DIV") {
      question.classList.add("hidden");
      question.previousElementSibling.classList.remove("hidden");
    }
  }
}
