import styles from "./ThanksModal.module.scss";

function ThanksModal(props) {
  function cancelHandler() {
    props.onCancel();
  }

  return (
    <div className={styles.modal}>
      <p>
        Thanks friends for submitting your question! We will be sure to answer
        it next time we stream!
      </p>
      <button className="btn btn-outline-light" onClick={cancelHandler}>
        KK thanks friends!
      </button>
    </div>
  );
}
export default ThanksModal;
