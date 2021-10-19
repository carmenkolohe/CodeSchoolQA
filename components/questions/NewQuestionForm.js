import ThanksModal from "../ui/ThanksModal";
import styles from "./NewQuestionForm.module.scss";
import { useRef } from "react";
import { useState } from "react";

function NewQuestionForm(props) {
  const questionInputRef = useRef();
  const [showThanks, setShowThanks] = useState(false);

  function handleThanks() {
    setShowThanks(true);
  }

  function handleCloseThanks() {
    setShowThanks(false);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const inputtedQuestion = questionInputRef.current.value;

    const currentDate = new Date();
    const dateFormat =
      currentDate.getMonth() +
      1 +
      "/" +
      currentDate.getDate() +
      "/" +
      currentDate.getFullYear();

    const questionData = {
      questionBody: inputtedQuestion,
      date: dateFormat,
    };

    props.onAddQuestion(questionData);
    props.date(questionData.date);
    handleThanks();
  }

  return (
    <div className="container">
      {showThanks ? <ThanksModal onCancel={handleCloseThanks} /> : null}
      <hr />
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className="form-floating">
          <textarea
            className="form-control"
            id={styles.question}
            required
            placeholder="Ask question"
            ref={questionInputRef}
          ></textarea>
          <label htmlFor="question">Ask us questions!</label>
        </div>
        <hr />
        <button className="btn btn-primary" id={styles.button}>
          Ask us!
        </button>
      </form>
    </div>
  );
}

export default NewQuestionForm;
