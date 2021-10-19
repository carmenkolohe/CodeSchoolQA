import Question from "./Question";
import styles from "./QuestionList.module.scss";

function QuestionList(props) {
  const { questions } = props;
  return (
    <ul className={styles.list}>
      {questions.map(({id, questionBody, date}) => (
        <Question
          key={question.id}
          questionBody={question.questionBody}
          date={question.date}
        />
      ))}
    </ul>
  );
}

export default QuestionList;
