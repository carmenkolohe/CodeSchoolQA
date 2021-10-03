// this is the template to make an API call to your database to get all the questions stored
// You will paste your firebase database URL and paste it in fetch('')
// IMPORTANT please add /questions.json to your db URL (it's a firebase thing)
//delete Template from file name (file should be called ApiUtil.js)

export async function getAllQuestions() {
  const response = await fetch(
    "https://dumpster-fire-8df53-default-rtdb.firebaseio.com/questions.json"
  );
  const data = await response.json();

  const questions = [];
  for (const key in data) {
    questions.push({
      id: key,
      ...data[key],
    });
  }
  return questions;
}
