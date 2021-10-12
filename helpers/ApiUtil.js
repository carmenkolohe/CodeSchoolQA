export async function getAllQuestions() {
  const response = await fetch(process.env.NEXT_PUBLIC_FIREBASE_URL);
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
