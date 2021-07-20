import styles from "./Question.module.scss";

function Question(props) {
  return (
    <li className={styles.item}>
      <p>{props.questionBody}</p>
    </li>
  );
}

export default Question;
