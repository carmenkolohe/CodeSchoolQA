import NewQuestionForm from '../components/questions/NewQuestionForm';
import QuestionList from '../components/questions/QuestionList';
import { getAllQuestions } from '../helpers/ApiUtil';
import styles from '../styles/Home.module.scss';
import { useRouter } from 'next/router';

function HomePage(props) {
  const { questions } = props;

  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };

  //please add your firebase db url here ending with /questions.json (it is the same one you put in the ApiUtil.js) and delete Template from the file name (file should be called index.js)
  function handleAddQuestion(questionData) {
    fetch('', {
      method: 'POST',
      body: JSON.stringify(questionData),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      refreshData();
    });
  }

  return (
    <div className={styles.container}>
      <h1>Hi Friends!</h1>
      <hr />
      <h4>
        Please submit any questions you may have related to code school,
        learning how to program, getting a job in tech! We will answer your
        question live on stream Wednesday nights, tune in then!
      </h4>
      <NewQuestionForm onAddQuestion={handleAddQuestion} />
      <QuestionList questions={questions} />
    </div>
  );
}
export async function getServerSideProps() {
  const questions = await getAllQuestions();
  return {
    props: {
      questions: questions,
    },
  };
}
export default HomePage;
