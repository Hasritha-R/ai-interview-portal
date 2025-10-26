// ✅ Fetch questions from mock API
const loadQuestions = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    const data = await response.json();

    // ✅ Display first question title
    questionBox.innerText = data[0].title;
  } catch (error) {
    console.error("Failed to load questions:", error);
  }
};

loadQuestions();
