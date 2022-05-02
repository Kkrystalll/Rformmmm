import { Controller } from "stimulus";
import e from "turbolinks";

export default class extends Controller {
  static targets = ["question", "question_select", "answer", "question_item"];

  connect() {}

  question_select(e) {
    switch (this.question_selectTarget.value) {
      case "問答":
        this.answerTarget.classList.add("hidden");
        break;
    }
  }

  add_question(e) {
    e.preventDefault();

    fetch("/api/v1/surveys/add_question")
      .then((resp) => {
        return resp.text();
      })
      .then((questions) => {
        this.element.insertAdjacentHTML("beforeend", questions);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  remove_question(e) {
    e.preventDefault();
    const parent = this.question_itemTarget.parentElement;
    if (parent.children.length > 3) {
      e.target.parentElement.remove();
    }
  }

  change_value(e) {
    console.log(e.target.value);
  }
}
