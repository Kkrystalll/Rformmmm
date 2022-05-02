import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["answer_item"];

  connect() {}

  add_answer(e) {
    e.preventDefault();

    fetch("/api/v1/surveys/add_answer")
      .then((resp) => {
        return resp.text();
      })
      .then((answers) => {
        this.element.insertAdjacentHTML("beforeend", answers);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  remove_answer(e) {
    e.preventDefault();
    const parent = this.answer_itemTarget.parentElement;
    if (parent.children.length > 5) {
      e.target.parentElement.remove();
    }
  }

  change_value(e) {
    console.log(e.target.value);
  }
}
