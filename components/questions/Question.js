import styles from "./Question.module.scss";

function Question(props) {
  return (
    <li className={styles.item}>
      <p>{props.date}</p>
      <p className={styles.question}>{props.questionBody}</p>
    </li>
  );
}

export default Question;
